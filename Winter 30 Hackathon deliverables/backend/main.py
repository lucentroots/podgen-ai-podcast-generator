"""
Podcast Creator Backend API
Handles content processing, script generation, and audio synthesis
Using Edge TTS (Microsoft Neural Voices)

Features:
- Content from: Search, Wikipedia, URL, Upload, Paste
- Script generation with Priya (Female) & Arjun (Male) characters
- 75% English, 20% Hindi, 5% formal pauses
- Edge TTS with proper voice assignment
"""

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional, List
import os
import wikipedia
from groq import Groq
import json
import asyncio
import edge_tts
from dotenv import load_dotenv
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, unquote
import re

# Load environment variables (gracefully handle permission issues)
try:
    load_dotenv()
except (PermissionError, OSError):
    print("⚠️ Could not load .env file, using existing environment variables")

app = FastAPI(title="Podcast Creator API", version="3.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve audio files
os.makedirs("audio_output", exist_ok=True)
app.mount("/audio", StaticFiles(directory="audio_output"), name="audio")

# API Keys
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    print("Warning: GROQ_API_KEY not found")

groq_client = Groq(api_key=GROQ_API_KEY)

# Edge TTS Voice mapping
VOICE_MAP = {
    "English": {
        "Female": "en-IN-NeerjaNeural",
        "Male": "en-IN-PrabhatNeural"
    },
    "Hindi": {
        "Female": "hi-IN-SwaraNeural",
        "Male": "hi-IN-MadhurNeural"
    },
    "Tamil": {
        "Female": "ta-IN-PallaviNeural",
        "Male": "ta-IN-ValluvarNeural"
    },
    "Telugu": {
        "Female": "te-IN-ShrutiNeural",
        "Male": "te-IN-MohanNeural"
    }
}

# Gender detection from names
FEMALE_NAMES = {
    'priya', 'ananya', 'neha', 'aisha', 'riya', 'pooja', 'shreya', 'kavya',
    'meera', 'divya', 'anjali', 'sneha', 'nisha', 'deepa', 'sunita', 'rekha'
}
MALE_NAMES = {
    'arjun', 'rohan', 'vikram', 'raj', 'amit', 'suresh', 'ramesh', 'rahul',
    'karan', 'nikhil', 'sachin', 'mohit', 'rohit', 'vivek', 'gaurav', 'harsh'
}

def detect_gender(name: str) -> str:
    """Detect gender from speaker name"""
    name_lower = name.lower().strip()
    if name_lower in FEMALE_NAMES or name == "P1":
        return "Female"
    elif name_lower in MALE_NAMES or name == "P2":
        return "Male"
    elif name_lower.endswith(('a', 'i', 'ee', 'ya', 'ti', 'ni')):
        return "Female"
    return "Male"

# Request/Response Models
class WikipediaRequest(BaseModel):
    article_title: str

class SearchRequest(BaseModel):
    query: str

class URLRequest(BaseModel):
    url: str

class TextRequest(BaseModel):
    text: str
    title: Optional[str] = "Pasted Content"

class SummarizeRequest(BaseModel):
    content: str

class ScriptRequest(BaseModel):
    content: str

class AudioRequest(BaseModel):
    script: List[dict]
    p1_voice: Optional[str] = None  # Edge TTS voice ID for P1/Priya
    p2_voice: Optional[str] = None  # Edge TTS voice ID for P2/Arjun

# ============================================
# CONTENT PROCESSING ENDPOINTS
# ============================================

@app.post("/api/content/search")
async def search_online(request: SearchRequest):
    """AI-powered research on any topic"""
    try:
        prompt = f"""Provide a comprehensive, well-researched article about: {request.query}

Include:
1. Overview and introduction
2. Key concepts and explanations
3. Important facts and details
4. Real-world examples or applications
5. Current state and future trends

Write in a clear, informative style suitable for a podcast discussion.
Length: 800-1200 words."""

        response = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a knowledgeable research assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=2500
        )
        
        content = response.choices[0].message.content
        return {
            "content": content,
            "source": f"AI Research: {request.query}",
            "title": request.query
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/content/wikipedia")
async def get_wikipedia_content(request: WikipediaRequest):
    """Fetch Wikipedia article - handles both titles and URLs"""
    try:
        article_input = request.article_title
        
        # Check if input is a URL
        if article_input.startswith('http') or 'wikipedia.org' in article_input:
            parsed = urlparse(article_input)
            if '/wiki/' in parsed.path:
                article_title = unquote(parsed.path.split('/wiki/')[-1]).replace('_', ' ')
            else:
                article_title = article_input
        else:
            article_title = article_input
        
        page = wikipedia.page(article_title, auto_suggest=False)
        summary = wikipedia.summary(article_title, sentences=10, auto_suggest=False)
        
        return {
            "content": f"# {page.title}\n\n{summary}\n\n## Full Article\n\n{page.content[:3000]}...",
            "source": f"Wikipedia: {page.title}",
            "title": page.title,
            "url": page.url
        }
    except wikipedia.exceptions.DisambiguationError as e:
        raise HTTPException(status_code=400, detail=f"Multiple matches found: {e.options[:5]}")
    except wikipedia.exceptions.PageError:
        raise HTTPException(status_code=404, detail="Article not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/content/url")
async def fetch_url_content(request: URLRequest):
    """Extract content from a webpage"""
    try:
        url = request.url
        if not url.startswith('http'):
            url = 'https://' + url
        
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Remove unwanted elements
        for script in soup(["script", "style", "nav", "footer", "header", "aside"]):
            script.decompose()
        
        title = soup.title.string if soup.title else url
        
        # Extract main content
        main_content = None
        for selector in ['article', 'main', '.content', '.post-content', '#content', '#mw-content-text']:
            main_content = soup.select_one(selector)
            if main_content:
                break
        
        if main_content:
            text = main_content.get_text(separator='\n', strip=True)
        else:
            text = soup.get_text(separator='\n', strip=True)
        
        # Clean up
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        text = '\n'.join(lines)[:5000]
        
        return {
            "content": text,
            "source": f"URL: {url}",
            "title": title,
            "url": url
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch URL: {str(e)}")


@app.post("/api/content/upload")
async def upload_content(file: UploadFile = File(...)):
    """Process uploaded file content"""
    try:
        content = await file.read()
        try:
            text_content = content.decode('utf-8')
        except:
            text_content = content.decode('latin-1')
        return {
            "content": text_content,
            "source": f"Uploaded: {file.filename}",
            "title": file.filename
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/content/paste")
async def paste_content(request: TextRequest):
    """Handle pasted text content"""
    return {
        "content": request.text,
        "source": "Pasted by user",
        "title": request.title
    }


@app.post("/api/content/summarize")
async def summarize_content(request: SummarizeRequest):
    """Generate AI summary of content"""
    try:
        prompt = f"""Summarize the following content in a clear, concise way.
Highlight the main topics, key points, and interesting facts.
Keep it under 300 words.

Content:
{request.content[:4000]}

Summary:"""

        response = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a helpful summarizer."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
            max_tokens=500
        )
        return {"summary": response.choices[0].message.content}
    except Exception as e:
        # Fallback: return first 300 words
        words = request.content.split()[:300]
        return {"summary": ' '.join(words) + "..."}


# ============================================
# SCRIPT GENERATION
# ============================================

@app.post("/api/script/generate")
async def generate_script(request: ScriptRequest):
    """Generate podcast script with Priya (Female) & Arjun (Male)"""
    try:
        prompt = f"""Create a professional podcast conversation between exactly TWO hosts discussing:

{request.content[:2000]}

=== MANDATORY CHARACTER RULES ===

You MUST use exactly these TWO characters:
- PRIYA (Female) - The main host who introduces topics and asks questions
- ARJUN (Male) - The co-host who provides explanations and insights

The conversation MUST alternate between Priya and Arjun.

=== LANGUAGE MIX ===

74% ENGLISH - Main content and explanations
20% HINDI (Roman script) - Professional expressions like:
- "Bilkul sahi" (Absolutely right)
- "Bahut important hai" (Very important)
- "Yeh interesting point hai" (This is an interesting point)
3% CONVERSATIONAL FILLERS - Natural reactions that make conversation feel real:
- "Hmmm..." (thoughtful acknowledgment)
- "Acccha..." (understanding/realization)
- "Is that so?" (curiosity)
- "Ohh, I see!" (comprehension)
- "Ohh..." (realization)
3% FORMAL PAUSES - "Indeed", "Well", "Precisely", "Absolutely"

=== CONVERSATION GUIDELINES ===

1. Priya starts with a welcome and introduces the topic
2. Arjun provides explanations
3. They alternate naturally
4. Keep it professional and dignified
5. Use conversational fillers naturally: "Hmmm...", "Acccha...", "Is that so?", "Ohh, I see!", "Ohh..."
6. Fillers should come at the START of responses to show active listening
7. NO slang: avoid "Umm", "Uh", "Jai ho", "Kya baat", "Yaar"
8. End with a proper conclusion (8-10 exchanges total)

=== EXAMPLE FORMAT ===

Priya: "Welcome to our podcast. Today we're discussing [topic]."
Arjun: "Absolutely, Priya. This topic is fascinating because..."
Priya: "Hmmm... that's an excellent point. Aur ek important aspect yeh hai ki..."
Arjun: "Acccha, I see what you mean. And if we consider..."
Priya: "Ohh, I see! That makes sense. Bilkul sahi."
Arjun: "Is that so? Well, there's actually more to it..."

=== OUTPUT FORMAT ===

Return ONLY valid JSON:
{{"script": [
  {{"speaker": "P1", "text": "Welcome to our podcast..."}},
  {{"speaker": "P2", "text": "Absolutely, Priya..."}},
  {{"speaker": "P1", "text": "Hmmm... that's interesting..."}},
  {{"speaker": "P2", "text": "Acccha, I see..."}}
]}}

P1 = Priya (Female), P2 = Arjun (Male)"""

        response = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a professional podcast scriptwriter. Create conversations between Priya (female, P1) and Arjun (male, P2). They must alternate speaking. Respond with valid JSON only."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=3000,
            response_format={"type": "json_object"}
        )
        
        result = json.loads(response.choices[0].message.content)
        
        # Extract script
        if "script" in result:
            script = result["script"]
        elif isinstance(result, list):
            script = result
        else:
            script = result.get("conversation", result.get("dialog", []))
        
        # Ensure proper alternation
        fixed_script = []
        for i, line in enumerate(script):
            expected_speaker = "P1" if i % 2 == 0 else "P2"
            fixed_script.append({
                "speaker": expected_speaker,
                "text": line.get("text", "")
            })
        
        return {"script": fixed_script}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ============================================
# AUDIO GENERATION
# ============================================

async def generate_edge_tts_audio(text: str, speaker: str, index: int, p1_voice: str = None, p2_voice: str = None):
    """Generate audio using Edge TTS with proper voice assignment"""
    try:
        # Use custom voice IDs if provided, otherwise use defaults
        if speaker == "P1":
            voice = p1_voice or VOICE_MAP["English"]["Female"]  # Priya
            gender = "Female"
            name = "Priya"
        else:
            voice = p2_voice or VOICE_MAP["English"]["Male"]  # Arjun
            gender = "Male"
            name = "Arjun"
        
        audio_filename = f"audio_{index}_{name}.mp3"
        audio_path = os.path.join("audio_output", audio_filename)
        
        print(f"  Generating audio for {name} ({gender}) with voice {voice}")
        
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(audio_path)
        
        return {
            "speaker": speaker,
            "name": name,
            "gender": gender,
            "text": text,
            "audio_url": f"/audio/{audio_filename}",
            "filename": audio_filename,
            "voice": voice
        }
    except Exception as e:
        print(f"Error generating audio: {e}")
        raise HTTPException(status_code=500, detail=f"Edge TTS failed: {str(e)}")


def strip_id3_tags(mp3_data: bytes) -> bytes:
    """Strip ID3 tags from MP3 data"""
    data = mp3_data
    if data[:3] == b'ID3':
        size_bytes = data[6:10]
        size = ((size_bytes[0] & 0x7f) << 21) | ((size_bytes[1] & 0x7f) << 14) | \
               ((size_bytes[2] & 0x7f) << 7) | (size_bytes[3] & 0x7f)
        data = data[10 + size:]
    if len(data) > 128 and data[-128:-125] == b'TAG':
        data = data[:-128]
    return data


@app.post("/api/audio/generate")
async def generate_audio(request: AudioRequest):
    """Generate audio from script"""
    try:
        audio_files = []
        
        # Get voice IDs from request (or use defaults)
        p1_voice = request.p1_voice or VOICE_MAP["English"]["Female"]
        p2_voice = request.p2_voice or VOICE_MAP["English"]["Male"]
        
        print(f"\n🎙️ Generating audio for {len(request.script)} segments...")
        print(f"  👩 Priya's voice: {p1_voice}")
        print(f"  👨 Arjun's voice: {p2_voice}")
        
        for i, line in enumerate(request.script):
            speaker = line.get("speaker", "P1")
            text = line.get("text", "")
            
            if not text.strip():
                continue
            
            audio_segment = await generate_edge_tts_audio(text, speaker, i, p1_voice, p2_voice)
            audio_files.append(audio_segment)
        
        # Combine audio files
        combined_audio_url = None
        combined_size_bytes = 0
        
        if audio_files:
            try:
                combined_filename = "combined_podcast.mp3"
                combined_path = os.path.join("audio_output", combined_filename)
                
                with open(combined_path, 'wb') as outfile:
                    for audio_info in audio_files:
                        filename = audio_info.get("filename")
                        if filename:
                            file_path = os.path.join("audio_output", filename)
                            if os.path.exists(file_path):
                                with open(file_path, 'rb') as infile:
                                    mp3_data = infile.read()
                                    clean_data = strip_id3_tags(mp3_data)
                                    outfile.write(clean_data)
                
                combined_audio_url = f"/audio/{combined_filename}"
                combined_size_bytes = os.path.getsize(combined_path)
                print(f"\n✓ Combined podcast: {combined_path} ({combined_size_bytes/1024:.1f} KB)")
            except Exception as e:
                print(f"Error combining audio: {e}")
        
        return {
            "audio_segments": audio_files,
            "combined_audio_url": combined_audio_url,
            "combined_duration_seconds": combined_size_bytes / (16 * 1024),
            "combined_size_mb": round(combined_size_bytes / (1024 * 1024), 2),
            "message": "Audio generation complete"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "version": "3.0.0",
        "features": {
            "content_sources": ["search", "wikipedia", "url", "upload", "paste"],
            "characters": {"P1": "Priya (Female)", "P2": "Arjun (Male)"},
            "tts": "Edge TTS (Microsoft Neural Voices)"
        }
    }


@app.get("/api/voices")
async def list_voices():
    return {"voices": VOICE_MAP}


class VoicePreviewRequest(BaseModel):
    voice_id: str
    text: Optional[str] = None


@app.post("/api/audio/preview")
async def preview_voice(request: VoicePreviewRequest):
    """Generate a short voice preview"""
    try:
        voice_id = request.voice_id
        
        # Default preview texts based on language
        if "hi-IN" in voice_id:
            text = request.text or "Namaste, yeh meri awaaz ka sample hai. Aapko kaisa laga?"
        elif "ta-IN" in voice_id:
            text = request.text or "Vanakkam, ithu en kural maathiri."
        elif "te-IN" in voice_id:
            text = request.text or "Namaskaram, idi naa voice sample."
        else:
            text = request.text or "Hello, this is a preview of my voice. How does it sound?"
        
        audio_filename = f"preview_{voice_id.replace('-', '_')}.mp3"
        audio_path = os.path.join("audio_output", audio_filename)
        
        communicate = edge_tts.Communicate(text, voice_id)
        await communicate.save(audio_path)
        
        return {
            "audio_url": f"/audio/{audio_filename}",
            "voice": voice_id,
            "text": text
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Preview failed: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
