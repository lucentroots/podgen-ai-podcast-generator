@echo off
REM Podcast Creator - Startup Script for Windows
REM This script starts both the backend and frontend servers

echo 🎙️  Starting Podcast Creator Application...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed. Please install Python first.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Start Backend
echo 📦 Starting Backend Server...
cd backend

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
call venv\Scripts\activate.bat

REM Install backend dependencies if needed
if not exist "venv\.installed" (
    echo Installing backend dependencies...
    pip install -r requirements.txt
    type nul > venv\.installed
)

REM Start backend server in new window
start "Podcast Creator Backend" cmd /k "python main.py"
cd ..

REM Wait a bit for backend to start
timeout /t 3 /nobreak >nul

REM Start Frontend
echo 🎨 Starting Frontend Server...
cd /d "%~dp0"

REM Install frontend dependencies if needed
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
)

REM Start frontend server in new window
start "Podcast Creator Frontend" cmd /k "npm run dev"

echo.
echo ✅ Application started!
echo.
echo 📍 Frontend: http://localhost:5173
echo 📍 Backend API: http://localhost:8000
echo 📍 API Docs: http://localhost:8000/docs
echo.
echo Both servers are running in separate windows.
echo Close those windows to stop the servers.
pause
