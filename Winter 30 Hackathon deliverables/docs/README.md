# 🎙️ Podcast Creator Application

A full-stack application that creates natural, conversational podcasts from Wikipedia articles, web searches, or uploaded content. Features Hinglish (Hindi-English) and Tamil-English conversations with natural interruptions and code-switching.

## 🚀 Quick Start

### Option 1: One-Click Start (Recommended)

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

**Windows:**
```bash
start.bat
```

This will automatically:
- Install all dependencies
- Start the backend server (port 8000)
- Start the frontend server (port 5173)

### Option 2: Manual Start

#### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

#### Frontend Setup
```bash
npm install
npm run dev
```

## 📍 Access Points

Once started, access the application at:

- **Frontend UI**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🎯 Features

### Step 1: Content Ingestion
- **Wikipedia**: Fetch and summarize articles
- **Perplexity Search**: Search topics using Groq API
- **File Upload**: Upload text files (txt, pdf, docx, etc.)
- **Live Preview**: See content preview in real-time

### Step 2: Script Generation
- **Natural Conversations**: 2-minute scripts with code-switching
- **Language Pairs**: English + Hindi or English + Tamil
- **Conversational Elements**: Includes "umm", "hmm", "achcha", "haan", etc.
- **Script Preview**: View generated script with speaker labels

### Step 3: Audio Generation
- **Svara TTS**: Best quality for Indian languages (Hindi, Tamil, Telugu, Bengali)
- **Google TTS**: Free fallback for all languages
- **pyttsx3**: Offline fallback option
- **Podcast Player**: Play generated audio with controls

## 🛠️ Technology Stack

### Frontend
- React + TypeScript
- Tailwind CSS
- Vite

### Backend
- FastAPI (Python)
- Groq API (LLM for script generation)
- Svara TTS (Indian languages)
- Google TTS (gTTS) - Free
- pyttsx3 (Offline TTS)

## 📁 Project Structure

```
Podcast Generator 2 App/
├── src/                          # React frontend
│   └── app/
│       ├── App.tsx              # Main app component
│       └── components/          # UI components
│           ├── UploadStep.tsx   # Step 1: Content upload
│           ├── ScriptStep.tsx   # Step 2: Script generation
│           └── AudioStep.tsx   # Step 3: Audio generation
├── backend/                      # Python backend
│   ├── main.py                  # FastAPI server
│   └── requirements.txt        # Python dependencies
├── Podcast_Creator_Colab.ipynb  # Google Colab notebook
├── start.sh                     # Startup script (Mac/Linux)
├── start.bat                    # Startup script (Windows)
└── README.md                    # This file
```

## 🔧 API Endpoints

### Content Processing
- `POST /api/content/wikipedia` - Get Wikipedia article
- `POST /api/content/perplexity` - Search Perplexity
- `POST /api/content/upload` - Upload file

### Script Generation
- `POST /api/script/generate` - Generate conversation script

### Audio Generation
- `POST /api/audio/generate` - Generate audio from script

## 📖 Usage Guide

1. **Step 1 - Content**: 
   - Choose Wikipedia, Perplexity search, or file upload
   - Click "Upload content from source"
   - Preview appears in the right panel

2. **Step 2 - Script**:
   - Select languages (e.g., English + Hindi)
   - Click "Generate script"
   - Review the generated conversation script
   - Click "Next" to proceed

3. **Step 3 - Audio**:
   - Select voices for P1 and P2
   - Choose gender for each speaker
   - Click "Generate audio"
   - Play and save the podcast

## 🎨 Google Colab Alternative

For standalone use without frontend, use the Google Colab notebook:
- Open `Podcast_Creator_Colab.ipynb` in Google Colab
- Run all cells sequentially
- All functions work independently

## 🔑 API Keys

The application includes API keys for:
- **Groq API**: Free tier available
- **OpenAI API**: Used only if quota available (falls back to free TTS)

**Note**: For production, move API keys to environment variables.

## 🐛 Troubleshooting

### Backend won't start
- Ensure Python 3.8+ is installed
- Check if port 8000 is available
- Install dependencies: `pip install -r backend/requirements.txt`

### Frontend won't start
- Ensure Node.js 16+ is installed
- Check if port 5173 is available
- Install dependencies: `npm install`

### TTS not working
- Svara TTS may be unavailable (uses free fallback)
- Check internet connection for Google TTS
- pyttsx3 works offline but has limited language support

## 📝 Notes

- Script generation uses Groq API (free tier)
- Audio generation uses free TTS services (no quotas)
- All generated content is saved locally
- Project names are editable and auto-saved

## 🤝 Contributing

Feel free to submit issues or pull requests!

## 📄 License

This project is open source and available for personal and commercial use.

---

**Made with ❤️ for creating amazing podcasts!**
