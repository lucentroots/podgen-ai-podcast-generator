# 🎙️ PodGen - AI Podcast Generator

**Winter 30 Hackathon Submission**

Transform any text content into engaging, natural-sounding podcast conversations with AI-powered script generation and neural text-to-speech.

---

## 🌟 Features

### Content Input
- 📄 **Upload files** (PDF, TXT, DOCX)
- 🔗 **Paste URLs** (articles, Wikipedia)
- 🔍 **Search online** (AI-powered research)
- ✏️ **Copy-paste text** directly

### Script Generation
- 🎭 **Two distinct characters**: Priya (Female Host) & Arjun (Male Co-host)
- 🗣️ **Natural Hinglish dialogue**: 74% English, 20% Hindi, 3% fillers, 3% formal pauses
- 💬 **Conversational fillers**: "Hmmm...", "Acccha...", "Is that so?", "Ohh, I see!"
- ✨ **Professional tone**: No slang, dignified language

### Audio Generation
- 🔊 **Edge TTS Neural Voices**: High-quality Microsoft voices
- 🇮🇳 **Indian language support**: English, Hindi, Tamil, Telugu, Bengali, Kannada, Malayalam, Marathi, Gujarati
- 🎧 **Voice preview**: Listen before generating
- 📥 **Download MP3**: Combined podcast file

### Modern UI
- 🎨 **Beautiful player**: Canvas waveform visualization
- 📝 **Editable names**: Rename project & audio files
- 💾 **Auto-save**: Local storage persistence
- 📱 **Responsive design**: Works on all devices

---

## 📁 Deliverables Structure

```
Winter 30 Hackathon deliverables/
├── README.md                    # This file
├── Podcast_Creator_Colab.ipynb  # Google Colab notebook (standalone)
├── backend/
│   ├── main.py                  # FastAPI backend server
│   └── requirements.txt         # Python dependencies
├── frontend/
│   ├── src/                     # React + TypeScript source
│   ├── package.json             # Node.js dependencies
│   ├── vite.config.ts           # Vite configuration
│   └── index.html               # Entry HTML
├── docs/
│   ├── README.md                # Full documentation
│   ├── ATTRIBUTIONS.md          # Third-party credits
│   ├── HINGLISH_PROMPTING_EXPLANATION.md
│   ├── DELIVERABLES_SUMMARY.md
│   └── guidelines/              # Project guidelines
└── demo/                        # Demo materials
```

---

## 🚀 Quick Start

### Option 1: Google Colab (Easiest)
1. Open `Podcast_Creator_Colab.ipynb` in Google Colab
2. Run all cells in order
3. Follow the interactive prompts

### Option 2: Local Web App

**Backend:**
```bash
cd backend
pip install -r requirements.txt
export GROQ_API_KEY="your-key-here"
python main.py
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React 18, TypeScript, Tailwind CSS, Vite |
| Backend | FastAPI, Python 3.9+ |
| AI/LLM | Groq (Llama 3.1) |
| TTS | Edge TTS (Microsoft Neural Voices) |
| Audio | Pydub, HTML5 Canvas |

---

## 🎯 Key Innovations

1. **Hinglish Prompting**: Carefully crafted prompts for natural Hindi-English code-switching
2. **Character Consistency**: Fixed Priya/Arjun roles with gender-appropriate voices
3. **Smooth Waveform**: 60fps Canvas-based audio visualization
4. **Smart Naming**: Auto-extracts 1-2 keywords from content for project names

---

## 👥 Team

Built for Winter 30 Hackathon 2026

---

## 📄 License

MIT License - See full documentation for details.
