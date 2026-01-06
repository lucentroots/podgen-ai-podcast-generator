#!/bin/bash

# Podcast Creator - Startup Script
# This script starts both the backend and frontend servers

echo "🎙️  Starting Podcast Creator Application..."
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

trap cleanup SIGINT SIGTERM

# Start Backend
echo "📦 Starting Backend Server..."
cd backend
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null

# Install backend dependencies if needed
if [ ! -f "venv/.installed" ]; then
    echo "Installing backend dependencies..."
    pip install -r requirements.txt
    touch venv/.installed
fi

# Start backend server
python main.py &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start Frontend
echo "🎨 Starting Frontend Server..."
cd "$(dirname "$0")"

# Install frontend dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

# Start frontend server
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Application started!"
echo ""
echo "📍 Frontend: http://localhost:5173"
echo "📍 Backend API: http://localhost:8000"
echo "📍 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait
