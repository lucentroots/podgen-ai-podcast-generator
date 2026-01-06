import { ChevronDown, Settings, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

interface ScriptStepProps {
  content: string;
  script: { speaker: string; text: string }[];
  onGenerateScript: (lang1: string, lang2: string) => void;
  onScriptChange?: (script: { speaker: string; text: string }[]) => void;
  onNext?: () => void;
}

export function ScriptStep({ content, script, onGenerateScript, onScriptChange, onNext }: ScriptStepProps) {
  const [language1, setLanguage1] = useState("English");
  const [language2, setLanguage2] = useState("Hindi");
  const [showLang1Dropdown, setShowLang1Dropdown] = useState(false);
  const [showLang2Dropdown, setShowLang2Dropdown] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setShowLang1Dropdown(false);
        setShowLang2Dropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = ["English", "Hindi", "Spanish", "French", "German", "Chinese", "Japanese", "Tamil", "Telugu", "Bengali"];

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      await onGenerateScript(language1, language2);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTextChange = (index: number, newText: string) => {
    if (onScriptChange) {
      const updatedScript = script.map((item, i) => 
        i === index ? { ...item, text: newText } : item
      );
      onScriptChange(updatedScript);
    }
  };

  const handleSpeakerChange = (index: number, newSpeaker: string) => {
    if (onScriptChange) {
      const updatedScript = script.map((item, i) => 
        i === index ? { ...item, speaker: newSpeaker } : item
      );
      onScriptChange(updatedScript);
    }
  };

  const handleAddLine = () => {
    if (onScriptChange) {
      const lastSpeaker = script.length > 0 ? script[script.length - 1].speaker : "P1";
      const newSpeaker = lastSpeaker === "P1" ? "P2" : "P1";
      onScriptChange([...script, { speaker: newSpeaker, text: "" }]);
      setEditingIndex(script.length);
    }
  };

  const handleDeleteLine = (index: number) => {
    if (onScriptChange && script.length > 1) {
      const updatedScript = script.filter((_, i) => i !== index);
      onScriptChange(updatedScript);
      setEditingIndex(null);
    }
  };

  return (
    <div className="flex gap-3 grow items-stretch w-full h-full min-h-0">
      {/* Left Panel - Script Settings */}
      <div className="bg-white flex flex-col flex-1 min-w-[400px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                <Settings className="size-5 text-[#666666]" />
              </div>
              <p className="font-medium text-base text-black">Script settings</p>
            </div>
            <div className="bg-black h-[1px] w-full" />
          </div>

          {/* Language dropdowns */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-base text-[#666]">Language 1</p>
              <div className="relative dropdown-container">
                <button
                  onClick={() => {
                    setShowLang1Dropdown(!showLang1Dropdown);
                    setShowLang2Dropdown(false);
                  }}
                  className="bg-[rgba(180,208,255,0.25)] w-full rounded-lg h-14 flex items-center justify-between px-4 hover:bg-[rgba(180,208,255,0.35)]"
                >
                  <span className="text-base text-[#333]">{language1}</span>
                  <ChevronDown className="size-5 text-[#666]" />
                </button>
                {showLang1Dropdown && (
                  <div className="absolute top-full left-0 w-full bg-white border border-[#e5e5e5] rounded-lg mt-1 shadow-lg z-10 max-h-48 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage1(lang);
                          setShowLang1Dropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-[rgba(180,208,255,0.25)] text-[#333]"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base text-[#666]">Language 2</p>
              <div className="relative dropdown-container">
                <button
                  onClick={() => {
                    setShowLang2Dropdown(!showLang2Dropdown);
                    setShowLang1Dropdown(false);
                  }}
                  className="bg-[rgba(180,208,255,0.25)] w-full rounded-lg h-14 flex items-center justify-between px-4 hover:bg-[rgba(180,208,255,0.35)]"
                >
                  <span className="text-base text-[#333]">{language2}</span>
                  <ChevronDown className="size-5 text-[#666]" />
                </button>
                {showLang2Dropdown && (
                  <div className="absolute top-full left-0 w-full bg-white border border-[#e5e5e5] rounded-lg mt-1 shadow-lg z-10 max-h-48 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage2(lang);
                          setShowLang2Dropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-[rgba(180,208,255,0.25)] text-[#333]"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-end pt-6">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !content}
              className={`px-6 py-3 rounded-lg text-base transition-colors ${
                isGenerating || !content
                  ? 'bg-[#9ca3af] text-white cursor-not-allowed'
                  : 'bg-[#2c2c2c] text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {isGenerating ? 'Generating...' : 'Generate script'}
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Preview Script */}
      <div className="bg-white flex flex-col flex-1 min-w-[400px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                  <Settings className="size-5 text-[#666666]" />
                </div>
                <p className="font-medium text-base text-black">Preview script</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full">👩 Priya (Female)</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">👨 Arjun (Male)</span>
              </div>
            </div>
            <div className="bg-black h-[1px] w-full" />
          </div>

          {/* Script Content */}
          <div className="flex-1 overflow-y-auto">
            {script.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <p className="text-base text-[#999]">Generated script will appear here</p>
                {onScriptChange && (
                  <button
                    onClick={handleAddLine}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-[#3b82f6] border border-[#3b82f6] rounded-lg hover:bg-[#3b82f6] hover:text-white transition-colors"
                  >
                    <Plus className="size-4" />
                    Add line manually
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {script.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-3 items-start group p-2 -mx-2 rounded-lg transition-colors ${
                      editingIndex === index ? 'bg-[rgba(180,208,255,0.15)]' : 'hover:bg-[#f9f9f9]'
                    }`}
                    onClick={() => setEditingIndex(index)}
                  >
                    {/* Speaker Label with Name */}
                    <div className={`flex items-center gap-2 shrink-0 px-3 py-1 rounded-full ${
                      item.speaker === "P1" 
                        ? "bg-pink-100 text-pink-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      <span className="text-lg">{item.speaker === "P1" ? "👩" : "👨"}</span>
                      <span className="text-sm font-medium">
                        {item.speaker === "P1" ? "Priya" : "Arjun"}
                      </span>
                    </div>
                    
                    {/* Text - Editable */}
                    {editingIndex === index ? (
                      <textarea
                        value={item.text}
                        onChange={(e) => handleTextChange(index, e.target.value)}
                        onBlur={() => setEditingIndex(null)}
                        autoFocus
                        className="flex-1 text-base text-[#333] leading-relaxed bg-white border border-[#3b82f6] rounded-lg p-2 resize-none focus:outline-none min-h-[60px]"
                        rows={2}
                      />
                    ) : (
                      <p className="flex-1 text-base text-[#333] leading-relaxed cursor-text py-1">
                        {item.text || <span className="text-[#999] italic">Click to edit...</span>}
                      </p>
                    )}
                    
                    {/* Delete Button */}
                    {script.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteLine(index);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md text-[#999] hover:text-red-500 hover:bg-red-50 transition-all"
                        title="Delete line"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    )}
                  </div>
                ))}
                
                {/* Add Line Button */}
                {onScriptChange && (
                  <button
                    onClick={handleAddLine}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-[#666] border border-dashed border-[#d9d9d9] rounded-lg hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors mt-2"
                  >
                    <Plus className="size-4" />
                    Add line
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-6">
            <button
              onClick={onNext}
              className="bg-[#2c2c2c] text-white px-6 py-3 rounded-lg text-base hover:bg-[#1a1a1a]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
