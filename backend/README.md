# Podcast Creator Backend API

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Step 1: Content Processing

- `POST /api/content/wikipedia` - Fetch Wikipedia article
- `POST /api/content/perplexity` - Search and summarize topic
- `POST /api/content/upload` - Upload file content

### Step 2: Script Generation

- `POST /api/script/generate` - Generate conversation script

### Step 3: Audio Generation

- `POST /api/audio/generate` - Generate audio from script

## Testing

Use the FastAPI docs at `http://localhost:8000/docs` to test endpoints.
