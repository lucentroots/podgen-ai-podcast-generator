import { ChevronDown, Pause, Play, SkipBack, SkipForward, Volume2, Download, Settings, Loader2, Save, Pencil, Check } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

// Smooth Waveform Visualizer Component
function WaveformVisualizer({ isPlaying, progress, hasAudio }: { isPlaying: boolean; progress: number; hasAudio: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const barCount = 60;
    const barWidth = 3;
    const gap = (width - barCount * barWidth) / (barCount - 1);
    
    // Update time for animation
    if (isPlaying) {
      timeRef.current += 0.15; // Speed of wave movement
    }
    
    for (let i = 0; i < barCount; i++) {
      const x = i * (barWidth + gap);
      const barProgress = i / barCount;
      const isActive = barProgress <= progress;
      
      // Create smooth wave using multiple sine waves
      let waveHeight: number;
      if (isPlaying && hasAudio) {
        // Flowing wave animation when playing
        waveHeight = 
          Math.sin(timeRef.current + i * 0.15) * 0.3 +
          Math.sin(timeRef.current * 1.3 + i * 0.1) * 0.2 +
          Math.sin(timeRef.current * 0.7 + i * 0.2) * 0.15 +
          0.35; // base height
      } else if (hasAudio) {
        // Static varied heights when paused
        waveHeight = 0.2 + Math.sin(i * 0.3) * 0.1 + Math.cos(i * 0.5) * 0.08;
      } else {
        // Minimal height when no audio
        waveHeight = 0.15;
      }
      
      const barHeight = Math.max(4, waveHeight * height * 0.8);
      const y = centerY - barHeight / 2;
      
      // Color based on progress
      ctx.fillStyle = isActive ? '#3b82f6' : '#334155';
      ctx.globalAlpha = hasAudio ? 1 : 0.3;
      
      // Draw rounded bar
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 2);
      ctx.fill();
    }
    
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(draw);
    }
  }, [isPlaying, progress, hasAudio]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2; // 2x for retina
    canvas.height = rect.height * 2;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(2, 2); // Scale for retina
    }
    
    draw();
    
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(draw);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, draw]);

  // Redraw on progress change even when paused
  useEffect(() => {
    if (!isPlaying) {
      draw();
    }
  }, [progress, isPlaying, draw]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-16 mb-4"
      style={{ imageRendering: 'crisp-edges' }}
    />
  );
}

interface AudioStepProps {
  audioVersions: AudioVersion[];
  projectName: string;
  onGenerateAudio: (p1Voice: string, p1Gender: string, p1Tone: string, p2Voice: string, p2Gender: string, p2Tone: string) => void;
  onProjectNameChange: (name: string) => void;
  onAudioNameChange: (audioId: string, name: string) => void;
  onSave: () => void;
}

interface AudioVersion {
  id: string;
  name: string;
  duration: string;
  size: string;
  audioUrl?: string;
  segments?: any[];
}

// Real Edge TTS voices with their IDs
const EDGE_TTS_VOICES = [
  // Indian English
  { id: "en-IN-NeerjaNeural", name: "Neerja", gender: "Female", language: "English (India)", flag: "🇮🇳" },
  { id: "en-IN-PrabhatNeural", name: "Prabhat", gender: "Male", language: "English (India)", flag: "🇮🇳" },
  // Hindi
  { id: "hi-IN-SwaraNeural", name: "Swara", gender: "Female", language: "Hindi", flag: "🇮🇳" },
  { id: "hi-IN-MadhurNeural", name: "Madhur", gender: "Male", language: "Hindi", flag: "🇮🇳" },
  // Tamil
  { id: "ta-IN-PallaviNeural", name: "Pallavi", gender: "Female", language: "Tamil", flag: "🇮🇳" },
  { id: "ta-IN-ValluvarNeural", name: "Valluvar", gender: "Male", language: "Tamil", flag: "🇮🇳" },
  // Telugu
  { id: "te-IN-ShrutiNeural", name: "Shruti", gender: "Female", language: "Telugu", flag: "🇮🇳" },
  { id: "te-IN-MohanNeural", name: "Mohan", gender: "Male", language: "Telugu", flag: "🇮🇳" },
  // US English
  { id: "en-US-JennyNeural", name: "Jenny", gender: "Female", language: "English (US)", flag: "🇺🇸" },
  { id: "en-US-GuyNeural", name: "Guy", gender: "Male", language: "English (US)", flag: "🇺🇸" },
];

export function AudioStep({ audioVersions, projectName, onGenerateAudio, onProjectNameChange, onAudioNameChange, onSave }: AudioStepProps) {
  // Default: Priya = Female English (India), Arjun = Male English (India)
  const [p1Voice, setP1Voice] = useState(EDGE_TTS_VOICES[0]); // Neerja
  const [p2Voice, setP2Voice] = useState(EDGE_TTS_VOICES[1]); // Prabhat
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showP1VoiceDropdown, setShowP1VoiceDropdown] = useState(false);
  const [showP2VoiceDropdown, setShowP2VoiceDropdown] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewingVoice, setPreviewingVoice] = useState<string | null>(null);
  const [playingPreview, setPlayingPreview] = useState<string | null>(null);
  const [isEditingProjectName, setIsEditingProjectName] = useState(false);
  const [isEditingAudioName, setIsEditingAudioName] = useState(false);
  const [editProjectName, setEditProjectName] = useState(projectName);
  const [editAudioName, setEditAudioName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);

  // Sync editProjectName when projectName changes
  useEffect(() => {
    setEditProjectName(projectName);
  }, [projectName]);

  // Sync editAudioName when audioVersions change
  useEffect(() => {
    if (audioVersions.length > 0 && audioVersions[0].name) {
      setEditAudioName(audioVersions[0].name);
    }
  }, [audioVersions]);

  const handleSaveProjectName = () => {
    if (editProjectName.trim()) {
      onProjectNameChange(editProjectName.trim());
    }
    setIsEditingProjectName(false);
  };

  const handleSaveAudioName = () => {
    if (editAudioName.trim() && audioVersions.length > 0) {
      onAudioNameChange(audioVersions[0].id, editAudioName.trim());
    }
    setIsEditingAudioName(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave();
    } finally {
      setTimeout(() => setIsSaving(false), 500);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setShowP1VoiceDropdown(false);
        setShowP2VoiceDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePreviewVoice = async (voiceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // If already playing this voice, stop it
    if (playingPreview === voiceId) {
      if (previewAudioRef.current) {
        previewAudioRef.current.pause();
        previewAudioRef.current.currentTime = 0;
      }
      setPlayingPreview(null);
      return;
    }
    
    setPreviewingVoice(voiceId);
    
    try {
      const response = await fetch('http://localhost:8000/api/audio/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voice_id: voiceId })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.audio_url) {
          const audioUrl = `http://localhost:8000${data.audio_url}`;
          if (previewAudioRef.current) {
            previewAudioRef.current.src = audioUrl;
            previewAudioRef.current.load();
            await previewAudioRef.current.play();
            setPlayingPreview(voiceId);
          }
        }
      }
    } catch (error) {
      console.error('Error previewing voice:', error);
    } finally {
      setPreviewingVoice(null);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newVolume = Math.max(0, Math.min(1, x / rect.width));
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const seekTime = (x / rect.width) * duration;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(Math.floor(seekTime));
    }
  };

  const handleDownload = () => {
    if (audioVersions.length > 0 && audioVersions[0].audioUrl) {
      const audioUrl = audioVersions[0].audioUrl;
      const fullUrl = audioUrl.startsWith('http') ? audioUrl : `http://localhost:8000${audioUrl}`;
      const link = document.createElement('a');
      link.href = fullUrl;
      link.download = `${audioVersions[0].name || 'podcast'}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // Pass the actual voice IDs to the backend
      await onGenerateAudio(p1Voice.id, p1Voice.gender, "Measured", p2Voice.id, p2Voice.gender, "Excited");
    } finally {
      setIsGenerating(false);
    }
  };

  // Load combined audio when available
  useEffect(() => {
    if (audioVersions.length > 0 && audioVersions[0].audioUrl) {
      const audioUrl = audioVersions[0].audioUrl;
        const fullUrl = audioUrl.startsWith('http') ? audioUrl : `http://localhost:8000${audioUrl}`;
      console.log('Loading combined audio:', { audioUrl, fullUrl });
        if (audioRef.current) {
          audioRef.current.src = fullUrl;
          audioRef.current.load();
      }
    }
  }, [audioVersions]);

  // Update time tracking and handle audio end
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(Math.floor(audio.currentTime));
    const updateDuration = () => setDuration(Math.floor(audio.duration));
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

      return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioVersions]);

  return (
    <div className="flex gap-3 grow items-stretch w-full h-full min-h-0">
      {/* Left Panel - Audio Settings */}
      <div className="bg-white flex flex-col flex-1 min-w-[400px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                <Settings className="size-5 text-[#666666]" />
                            </div>
              <p className="font-medium text-base text-black">Audio settings</p>
                          </div>
            <div className="bg-black h-[1px] w-full" />
                  </div>
                  
          {/* Hidden preview audio */}
          <audio 
            ref={previewAudioRef} 
            onEnded={() => setPlayingPreview(null)}
            style={{ display: 'none' }} 
          />

          {/* Voice Settings */}
          <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
            {/* Character Info */}
            <div className="bg-[#f0f9ff] rounded-lg p-3 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full">👩 Priya</span>
                <span className="text-[#666]">Female Host</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">👨 Arjun</span>
                <span className="text-[#666]">Male Co-host</span>
              </div>
            </div>

            {/* Priya's Voice (P1) */}
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium text-[#333]">👩 Priya's Voice</p>
              <div className="flex gap-2 items-center">
                <div className="relative dropdown-container flex-1">
                  <button
                    onClick={() => {
                      setShowP1VoiceDropdown(!showP1VoiceDropdown);
                      setShowP2VoiceDropdown(false);
                    }}
                    className="bg-[rgba(180,208,255,0.25)] w-full rounded-lg h-14 flex items-center justify-between px-4 hover:bg-[rgba(180,208,255,0.35)]"
                  >
                    <span className="text-base text-[#333]">
                      {p1Voice.flag} {p1Voice.name} - {p1Voice.gender} {p1Voice.language}
                    </span>
                    <ChevronDown className="size-5 text-[#666]" />
                  </button>
                  {showP1VoiceDropdown && (
                    <div className="absolute top-full left-0 w-full bg-white border border-[#e5e5e5] rounded-lg mt-1 shadow-lg z-10 max-h-64 overflow-y-auto">
                      {EDGE_TTS_VOICES.filter(v => v.gender === "Female").map((voice) => (
                        <button
                          key={voice.id}
                          onClick={() => {
                            setP1Voice(voice);
                            setShowP1VoiceDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-[rgba(180,208,255,0.25)] text-[#333] ${
                            p1Voice.id === voice.id ? 'bg-[rgba(180,208,255,0.35)]' : ''
                          }`}
                        >
                          {voice.flag} {voice.name} - {voice.language}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={(e) => handlePreviewVoice(p1Voice.id, e)}
                  disabled={previewingVoice === p1Voice.id}
                  className={`rounded-full size-12 flex items-center justify-center transition-colors ${
                    playingPreview === p1Voice.id
                      ? 'bg-[#3b82f6] text-white'
                      : 'bg-[rgba(180,208,255,0.25)] hover:bg-[rgba(180,208,255,0.5)] text-[#333]'
                  }`}
                  title="Preview voice"
                >
                  {previewingVoice === p1Voice.id ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : playingPreview === p1Voice.id ? (
                    <Pause className="size-5" />
                  ) : (
                    <Play className="size-5 ml-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Arjun's Voice (P2) */}
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium text-[#333]">👨 Arjun's Voice</p>
              <div className="flex gap-2 items-center">
                <div className="relative dropdown-container flex-1">
                  <button
                    onClick={() => {
                      setShowP2VoiceDropdown(!showP2VoiceDropdown);
                      setShowP1VoiceDropdown(false);
                    }}
                    className="bg-[rgba(180,208,255,0.25)] w-full rounded-lg h-14 flex items-center justify-between px-4 hover:bg-[rgba(180,208,255,0.35)]"
                  >
                    <span className="text-base text-[#333]">
                      {p2Voice.flag} {p2Voice.name} - {p2Voice.gender} {p2Voice.language}
                    </span>
                    <ChevronDown className="size-5 text-[#666]" />
                  </button>
                  {showP2VoiceDropdown && (
                    <div className="absolute top-full left-0 w-full bg-white border border-[#e5e5e5] rounded-lg mt-1 shadow-lg z-10 max-h-64 overflow-y-auto">
                      {EDGE_TTS_VOICES.filter(v => v.gender === "Male").map((voice) => (
                        <button
                          key={voice.id}
                          onClick={() => {
                            setP2Voice(voice);
                            setShowP2VoiceDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-[rgba(180,208,255,0.25)] text-[#333] ${
                            p2Voice.id === voice.id ? 'bg-[rgba(180,208,255,0.35)]' : ''
                          }`}
                        >
                          {voice.flag} {voice.name} - {voice.language}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={(e) => handlePreviewVoice(p2Voice.id, e)}
                  disabled={previewingVoice === p2Voice.id}
                  className={`rounded-full size-12 flex items-center justify-center transition-colors ${
                    playingPreview === p2Voice.id
                      ? 'bg-[#3b82f6] text-white'
                      : 'bg-[rgba(180,208,255,0.25)] hover:bg-[rgba(180,208,255,0.5)] text-[#333]'
                  }`}
                  title="Preview voice"
                >
                  {previewingVoice === p2Voice.id ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : playingPreview === p2Voice.id ? (
                    <Pause className="size-5" />
                  ) : (
                    <Play className="size-5 ml-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
                
          {/* Generate Button */}
          <div className="flex justify-end pt-6">
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
              className={`px-6 py-3 rounded-lg text-base transition-colors ${
                      isGenerating
                  ? 'bg-[#9ca3af] text-white cursor-not-allowed'
                  : 'bg-[#2c2c2c] text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {isGenerating ? 'Generating...' : 'Generate audio'}
                  </button>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Podcast Player */}
      <div className="bg-white flex flex-col flex-1 min-w-[400px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full p-4">
              {/* Header */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                <Settings className="size-5 text-[#666666]" />
                      </div>
              <p className="font-medium text-base text-black">Podcast Player</p>
                    </div>
            <div className="bg-black h-[1px] w-full" />
              </div>
              
          {/* Track Info - Editable Names */}
          <div className="mb-4 space-y-3">
            {/* Project/Folder Name */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6b7280] w-16">Project:</span>
              {isEditingProjectName ? (
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={editProjectName}
                    onChange={(e) => setEditProjectName(e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-[#3b82f6] rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveProjectName()}
                  />
                  <button
                    onClick={handleSaveProjectName}
                    className="p-1 rounded hover:bg-[#f3f4f6] text-[#3b82f6]"
                  >
                    <Check className="size-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 flex-1">
                  <span className="font-medium text-sm text-[#111827]">{projectName}</span>
                  <button
                    onClick={() => setIsEditingProjectName(true)}
                    className="p-1 rounded hover:bg-[#f3f4f6] text-[#6b7280] hover:text-[#3b82f6]"
                    title="Rename project"
                  >
                    <Pencil className="size-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Audio Name */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6b7280] w-16">Audio:</span>
              {audioVersions.length > 0 ? (
                isEditingAudioName ? (
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="text"
                      value={editAudioName}
                      onChange={(e) => setEditAudioName(e.target.value)}
                      className="flex-1 px-2 py-1 text-sm border border-[#3b82f6] rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
                      autoFocus
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveAudioName()}
                    />
                    <button
                      onClick={handleSaveAudioName}
                      className="p-1 rounded hover:bg-[#f3f4f6] text-[#3b82f6]"
                    >
                      <Check className="size-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-semibold text-sm text-[#111827]">{audioVersions[0].name}</span>
                    <button
                      onClick={() => setIsEditingAudioName(true)}
                      className="p-1 rounded hover:bg-[#f3f4f6] text-[#6b7280] hover:text-[#3b82f6]"
                      title="Rename audio"
                    >
                      <Pencil className="size-3" />
                    </button>
                  </div>
                )
              ) : (
                <span className="text-sm text-[#9ca3af]">No audio generated yet</span>
              )}
            </div>

            {/* Duration & Size */}
            <p className="text-sm text-[#6b7280] pl-[72px]">
              {audioVersions.length > 0 ? `${audioVersions[0].duration} • ${audioVersions[0].size}` : "Generate audio to play"}
            </p>
          </div>
              
          {/* Hidden Audio */}
              <audio
                ref={audioRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                style={{ display: 'none' }}
              />

          {/* Audio Controls - Modern Design */}
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-5 mb-4 shadow-lg">
            {/* Waveform Visualization - Smooth Continuous Wave */}
            <WaveformVisualizer 
              isPlaying={isPlaying} 
              progress={duration > 0 ? currentTime / duration : 0}
              hasAudio={!!audioVersions[0]?.audioUrl}
            />

            {/* Progress Bar */}
            <div className="mb-4">
              <div 
                className="relative w-full h-2 bg-[#334155] rounded-full cursor-pointer group"
                onClick={handleSeek}
              >
                <div
                  className="absolute h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full pointer-events-none transition-all"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                />
                {/* Scrubber handle */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ left: `calc(${duration > 0 ? (currentTime / duration) * 100 : 0}% - 8px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#94a3b8] mt-2 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Main Controls */}
            <div className="flex items-center justify-center gap-4">
              {/* Skip Back */}
              <button 
                onClick={handleSkipBack}
                disabled={!audioVersions[0]?.audioUrl}
                className="relative group p-2 rounded-full hover:bg-[#334155] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Skip back 10 seconds"
              >
                <SkipBack className="size-5 text-[#94a3b8] group-hover:text-white transition-colors" />
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#64748b] opacity-0 group-hover:opacity-100 transition-opacity">10s</span>
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                disabled={!audioVersions[0]?.audioUrl}
                className={`rounded-full size-14 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
                  audioVersions[0]?.audioUrl 
                    ? 'bg-gradient-to-br from-[#3b82f6] to-[#2563eb] hover:from-[#60a5fa] hover:to-[#3b82f6] cursor-pointer' 
                    : 'bg-[#475569] cursor-not-allowed'
                }`}
              >
                {isPlaying ? (
                  <Pause className="size-6 text-white fill-white" />
                ) : (
                  <Play className="size-6 text-white fill-white ml-1" />
                )}
              </button>

              {/* Skip Forward */}
              <button 
                onClick={handleSkipForward}
                disabled={!audioVersions[0]?.audioUrl}
                className="relative group p-2 rounded-full hover:bg-[#334155] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Skip forward 10 seconds"
              >
                <SkipForward className="size-5 text-[#94a3b8] group-hover:text-white transition-colors" />
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#64748b] opacity-0 group-hover:opacity-100 transition-opacity">10s</span>
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <button 
                onClick={() => {
                  const newVol = volume > 0 ? 0 : 0.7;
                  setVolume(newVol);
                  if (audioRef.current) audioRef.current.volume = newVol;
                }}
                className="p-1.5 rounded-full hover:bg-[#334155] transition-colors"
              >
                {volume === 0 ? (
                  <Volume2 className="size-4 text-[#64748b]" />
                ) : (
                  <Volume2 className="size-4 text-[#94a3b8]" />
                )}
              </button>
              <div 
                className="relative w-24 h-1.5 bg-[#334155] rounded-full cursor-pointer group"
                onClick={handleVolumeChange}
              >
                <div
                  className="absolute h-full bg-[#94a3b8] rounded-full pointer-events-none transition-all group-hover:bg-[#3b82f6]"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-[#64748b] w-8 font-mono">{Math.round(volume * 100)}%</span>
            </div>
          </div>
              
          {/* Spacer */}
          <div className="flex-1" />

          {/* Save & Download Buttons */}
          <div className="flex justify-end gap-3">
            {/* Download - Secondary CTA */}
            <button 
              onClick={handleDownload}
              disabled={!audioVersions[0]?.audioUrl}
              className={`px-5 py-3 rounded-lg text-base flex items-center gap-2 border transition-colors ${
                audioVersions[0]?.audioUrl
                  ? 'bg-white text-[#2c2c2c] border-[#e5e5e5] hover:bg-[#f9f9f9] hover:border-[#d1d1d1]'
                  : 'bg-[#f5f5f5] text-[#9ca3af] border-[#e5e5e5] cursor-not-allowed'
              }`}
            >
              <Download className="size-4" />
              Download
            </button>

            {/* Save - Primary CTA */}
            <button 
              onClick={handleSave}
              disabled={!audioVersions[0]?.audioUrl || isSaving}
              className={`px-6 py-3 rounded-lg text-base flex items-center gap-2 transition-colors ${
                audioVersions[0]?.audioUrl && !isSaving
                  ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb]'
                  : 'bg-[#9ca3af] text-white cursor-not-allowed'
              }`}
            >
              {isSaving ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="size-4" />
                  Save
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
