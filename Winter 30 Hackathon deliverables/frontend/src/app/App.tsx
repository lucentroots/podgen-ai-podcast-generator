import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { StepIndicator } from "./components/StepIndicator";
import { UploadStep } from "./components/UploadStep";
import { ScriptStep } from "./components/ScriptStep";
import { AudioStep } from "./components/AudioStep";

interface AudioVersion {
  id: string;
  name: string;
  duration: string;
  size: string;
  audioUrl?: string;
  segments?: any[];
}

interface Project {
  id: string;
  name: string;
  content?: string;
  script?: { speaker: string; text: string }[];
  audioVersions?: AudioVersion[];
  lastSaved?: Date;
  expanded?: boolean;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [projects, setProjects] = useState<Project[]>(() => {
    // Load from localStorage on init
    const saved = localStorage.getItem('podgen_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((p: Project) => ({
          ...p,
          lastSaved: p.lastSaved ? new Date(p.lastSaved) : undefined
        }));
      } catch { return [{ id: "project-1", name: "Untitled", lastSaved: new Date() }]; }
    }
    return [{ id: "project-1", name: "Untitled", lastSaved: new Date() }];
  });
  const [currentProject, setCurrentProject] = useState<string>(() => {
    // Load current project from localStorage or use first project
    const saved = localStorage.getItem('podgen_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const lastProject = localStorage.getItem('podgen_current_project');
        if (lastProject && parsed.some((p: Project) => p.id === lastProject)) {
          return lastProject;
        }
        return parsed[0]?.id || "project-1";
      } catch { return "project-1"; }
    }
    return "project-1";
  });
  const [sourceContent, setSourceContent] = useState("");
  const [script, setScript] = useState<{ speaker: string; text: string }[]>([]);
  const [audioVersions, setAudioVersions] = useState<AudioVersion[]>([]);
  const [lastSaved, setLastSaved] = useState<Date | null>(new Date());

  // Save projects to localStorage
  const saveToStorage = useCallback((projectsData?: Project[]) => {
    const dataToSave = projectsData || projects;
    const projectsToSave = dataToSave.map(p => ({
      ...p,
      // Update current project with latest data
      ...(p.id === currentProject ? {
        content: sourceContent,
        script: script,
        audioVersions: audioVersions,
        lastSaved: new Date()
      } : {})
    }));
    localStorage.setItem('podgen_projects', JSON.stringify(projectsToSave));
    setLastSaved(new Date());
  }, [projects, currentProject, sourceContent, script, audioVersions]);

  // Auto-save every 5 minutes
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      saveToStorage();
      console.log('Auto-saved at', new Date().toLocaleTimeString());
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(autoSaveInterval);
  }, [saveToStorage]);

  // Save when important changes happen
  useEffect(() => {
    // Debounce save on content changes
    const debounceTimer = setTimeout(() => {
      if (sourceContent || script.length > 0) {
        saveToStorage();
      }
    }, 3000); // Save 3 seconds after changes stop

    return () => clearTimeout(debounceTimer);
  }, [sourceContent, script, saveToStorage]);

  // Save projects whenever they change
  useEffect(() => {
    localStorage.setItem('podgen_projects', JSON.stringify(projects));
  }, [projects]);

  // Load project data when switching projects
  useEffect(() => {
    const project = projects.find(p => p.id === currentProject);
    if (project) {
      setSourceContent(project.content || "");
      setScript(project.script || []);
      setAudioVersions(project.audioVersions || []);
      setLastSaved(project.lastSaved || null);
    }
    // Save current project ID
    localStorage.setItem('podgen_current_project', currentProject);
  }, [currentProject]);

  const handleProjectNameChange = (newName: string) => {
    if (!currentProject) return;
    
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.id === currentProject 
          ? { ...project, name: newName, lastSaved: new Date() } 
          : project
      );
      // Save immediately with the new data
      localStorage.setItem('podgen_projects', JSON.stringify(updatedProjects));
      setLastSaved(new Date());
      return updatedProjects;
    });
  };

  const handleNewProject = () => {
    const newId = `project-${Date.now()}`;
    const newProject: Project = {
      id: newId,
      name: "Untitled",
      lastSaved: new Date()
    };
    setProjects(prev => [...prev, newProject]);
    setCurrentProject(newId);
    setSourceContent("");
    setScript([]);
    setAudioVersions([]);
    setCurrentStep(1);
    setTimeout(() => saveToStorage(), 100);
  };

  const handleDeleteProject = (projectId: string) => {
    if (projects.length <= 1) {
      alert("Cannot delete the last project");
      return;
    }
    setProjects(prev => prev.filter(p => p.id !== projectId));
    if (currentProject === projectId) {
      const remaining = projects.filter(p => p.id !== projectId);
      setCurrentProject(remaining[0]?.id || "");
    }
    setTimeout(() => saveToStorage(), 100);
  };

  const handleDuplicateProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      const newId = `project-${Date.now()}`;
      const newProject: Project = {
        ...project,
        id: newId,
        name: `${project.name} (Copy)`,
        lastSaved: new Date()
      };
      setProjects(prev => [...prev, newProject]);
      setCurrentProject(newId);
      setTimeout(() => saveToStorage(), 100);
    }
  };

  const currentProjectData = projects.find((p) => p.id === currentProject);
  const currentProjectName = currentProjectData?.name || "Untitled";

  // Extract 1-2 key words from content for auto-naming
  const extractProjectName = (content: string): string => {
    // Remove common words and get first meaningful words
    const stopWords = ['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 
      'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may',
      'might', 'must', 'shall', 'can', 'need', 'dare', 'ought', 'used', 'to', 'of', 'in',
      'for', 'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during', 'before',
      'after', 'above', 'below', 'between', 'under', 'again', 'further', 'then', 'once',
      'here', 'there', 'when', 'where', 'why', 'how', 'all', 'each', 'few', 'more', 'most',
      'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than',
      'too', 'very', 's', 't', 'just', 'don', 'now', 'and', 'but', 'or', 'because', 'until',
      'while', 'this', 'that', 'these', 'those', 'am', 'it', 'its', 'itself', 'they', 'them',
      'their', 'what', 'which', 'who', 'whom', 'about', 'also', 'we', 'you', 'he', 'she'];
    
    // Get first 200 chars, extract words
    const text = content.slice(0, 500).toLowerCase();
    const words = text
      .replace(/[^a-zA-Z\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.includes(word));
    
    if (words.length === 0) return "Untitled";
    
    // Capitalize first letter of each word
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
    
    // Return 1-2 words
    if (words.length === 1) {
      return capitalize(words[0]);
    }
    return `${capitalize(words[0])} ${capitalize(words[1])}`;
  };

  const handleUpload = (content: string, source: string) => {
    setSourceContent(content);
    
    // Auto-generate project name from content
    const autoName = extractProjectName(content);
    if (autoName !== "Untitled") {
      handleProjectNameChange(autoName);
    }
  };

  const handleGenerateScriptFromUpload = () => {
    if (!sourceContent.trim()) {
      alert('Please upload content first');
      return;
    }
    setCurrentStep(2);
  };

  const handleGenerateScript = async (lang1: string, lang2: string) => {
    if (!sourceContent.trim()) {
      alert('Please upload content first');
      return;
    }

    try {
      setScript([{ speaker: 'Loading', text: 'Generating script with Priya & Arjun...' }]);
      
      const response = await fetch('http://localhost:8000/api/script/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: sourceContent
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.script && Array.isArray(data.script)) {
          setScript(data.script);
          return;
        }
      }
      throw new Error('API failed');
    } catch (error) {
      console.log('Using fallback script (backend not available)');
      // Fallback with Priya & Arjun characters
      const mockScript = [
        { speaker: "P1", text: "Welcome to our podcast. Today we're discussing a fascinating topic. Arjun, would you like to introduce it?" },
        { speaker: "P2", text: "Absolutely, Priya. This topic is quite significant because it affects how we understand the world around us." },
        { speaker: "P1", text: "That's an excellent point. Aur ek important aspect yeh hai ki this has real-world applications." },
        { speaker: "P2", text: "Bilkul sahi, Priya. And if we look at the broader implications, we can see tremendous potential." },
        { speaker: "P1", text: "Indeed. The research in this area has been groundbreaking." },
        { speaker: "P2", text: "Precisely. And bahut important hai that we understand both the benefits and challenges." },
        { speaker: "P1", text: "Well, that covers the key points. Thank you for that insightful discussion, Arjun." },
        { speaker: "P2", text: "Thank you, Priya. It was a pleasure discussing this with you." },
      ];
      setScript(mockScript);
    }
  };

  const handleNextFromScript = () => {
    setCurrentStep(3);
  };

  const handleAudioNameChange = (audioId: string, newName: string) => {
    setAudioVersions(prev => prev.map(audio => 
      audio.id === audioId ? { ...audio, name: newName } : audio
    ));
  };

  const handleManualSave = () => {
    saveToStorage();
    console.log('Manually saved at', new Date().toLocaleTimeString());
  };

  // Get next version number
  const getNextVersion = () => {
    const existingVersions = audioVersions.filter(a => a.id.startsWith('v'));
    return existingVersions.length + 1;
  };

  const handleGenerateAudio = async (
    p1Voice: string,
    p1Gender: string,
    p1Tone: string,
    p2Voice: string,
    p2Gender: string,
    p2Tone: string
  ) => {
    if (script.length === 0) {
      alert('Please generate script first');
      return;
    }

    try {
      setAudioVersions([{
        id: 'loading',
        name: 'Generating audio with Priya & Arjun voices...',
        duration: '0:00',
        size: '0 MB'
      }]);

      // Pass voice IDs to backend for audio generation
      // p1Voice = Priya's voice ID, p2Voice = Arjun's voice ID
      const response = await fetch('http://localhost:8000/api/audio/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          script: script,
          p1_voice: p1Voice,  // Edge TTS voice ID for Priya
          p2_voice: p2Voice   // Edge TTS voice ID for Arjun
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Audio generation response:', data);
        if (data.audio_segments && Array.isArray(data.audio_segments)) {
          const audioUrl = data.combined_audio_url || data.audio_segments[0]?.audio_url || '';
          console.log('Using audio URL:', audioUrl);
          
          let durationStr = "0:00";
          if (data.combined_duration_seconds) {
            const totalSeconds = Math.floor(data.combined_duration_seconds);
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;
            durationStr = `${mins}:${String(secs).padStart(2, '0')}`;
          }
          
          const sizeStr = data.combined_size_mb ? `${data.combined_size_mb} MB` : `${(data.audio_segments.length * 0.5).toFixed(1)} MB`;
          
          const versionNum = getNextVersion();
          const newVersions: AudioVersion[] = [
            {
              id: `v${versionNum}`,
              name: `${currentProjectName}_v${versionNum}`,
              duration: durationStr,
              size: sizeStr,
              audioUrl: audioUrl,
              segments: data.audio_segments
            }
          ];
          setAudioVersions(newVersions);
          return;
        }
      }
      throw new Error('API failed');
    } catch (error) {
      console.log('Using fallback audio (backend not available)');
      const versionNum = getNextVersion();
      const newVersions: AudioVersion[] = [
        {
          id: `v${versionNum}`,
          name: `${currentProjectName}_v${versionNum}`,
          duration: "2:30",
          size: "4.5 MB",
        }
      ];
      setAudioVersions(newVersions);
    }
  };

  return (
    <div className="bg-white flex flex-col w-full min-h-screen h-screen overflow-hidden">
      <Header />
      <div className="bg-[#f9f9f9] flex gap-3 flex-1 p-6 min-h-0">
        <Sidebar
          projects={projects}
          currentProject={currentProject}
          onProjectSelect={setCurrentProject}
          onNewProject={handleNewProject}
          onDeleteProject={handleDeleteProject}
          onDuplicateProject={handleDuplicateProject}
        />
        <div className="flex flex-col gap-3 flex-1 min-w-0 min-h-0">
          <StepIndicator
            currentStep={currentStep}
            projectName={currentProjectName}
            onStepChange={setCurrentStep}
            onProjectNameChange={handleProjectNameChange}
            lastSaved={lastSaved}
          />
          <div className="flex flex-1 min-h-0">
            {currentStep === 1 && (
              <UploadStep 
                onUpload={handleUpload} 
                content={sourceContent}
                onGenerateScript={handleGenerateScriptFromUpload}
              />
            )}
            {currentStep === 2 && (
              <ScriptStep
                content={sourceContent}
                script={script}
                onGenerateScript={handleGenerateScript}
                onScriptChange={setScript}
                onNext={handleNextFromScript}
              />
            )}
            {currentStep === 3 && (
              <AudioStep
                audioVersions={audioVersions}
                projectName={currentProjectName}
                onGenerateAudio={handleGenerateAudio}
                onProjectNameChange={handleProjectNameChange}
                onAudioNameChange={handleAudioNameChange}
                onSave={handleManualSave}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
