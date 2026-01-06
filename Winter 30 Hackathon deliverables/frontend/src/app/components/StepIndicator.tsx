import { ChevronRight, Mic, Cloud, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface StepIndicatorProps {
  currentStep: number;
  projectName: string;
  onStepChange: (step: number) => void;
  onProjectNameChange?: (name: string) => void;
  lastSaved?: Date | null;
}

export function StepIndicator({ currentStep, projectName, onStepChange, onProjectNameChange, lastSaved }: StepIndicatorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(projectName);
  const [saveText, setSaveText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditedName(projectName);
  }, [projectName]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // Update save text every second
  useEffect(() => {
    const updateSaveText = () => {
      if (!lastSaved) {
        setSaveText("Not saved");
        return;
      }
      const now = new Date();
      const diffMs = now.getTime() - lastSaved.getTime();
      const diffSec = Math.floor(diffMs / 1000);
      const diffMin = Math.floor(diffSec / 60);
      const diffHour = Math.floor(diffMin / 60);

      if (diffSec < 5) {
        setSaveText("Saved just now");
      } else if (diffSec < 60) {
        setSaveText(`Saved ${diffSec}s ago`);
      } else if (diffMin < 60) {
        setSaveText(`Saved ${diffMin}m ago`);
      } else {
        setSaveText(`Saved ${diffHour}h ago`);
      }
    };

    updateSaveText();
    const interval = setInterval(updateSaveText, 1000);
    return () => clearInterval(interval);
  }, [lastSaved]);

  const handleBlur = () => {
    setIsEditing(false);
    const trimmedName = editedName.trim() || "Untitled";
    setEditedName(trimmedName);
    if (onProjectNameChange && trimmedName !== projectName) {
      onProjectNameChange(trimmedName);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    } else if (e.key === "Escape") {
      setEditedName(projectName);
      setIsEditing(false);
    }
  };

  const steps = [
    { id: 1, label: "Upload source" },
    { id: 2, label: "Generate script" },
    { id: 3, label: "Generate Audio" },
  ];

  return (
    <div className="flex items-center justify-between w-full bg-white rounded-lg px-4 py-2">
      {/* Left side - Project name and save status */}
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-lg size-8 flex items-center justify-center border border-[#d9d9d9]">
          <Mic className="size-4 text-[#666666]" />
        </div>
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="font-medium text-base text-black bg-transparent border-none outline-none"
            style={{ minWidth: "120px" }}
          />
        ) : (
          <p 
            className="font-medium text-base text-black cursor-pointer hover:text-[#666]"
            onClick={() => setIsEditing(true)}
          >
            {projectName}
          </p>
        )}
        
        {/* Save status */}
        <div className="flex items-center gap-1.5 text-xs text-[#22c55e] bg-[#f0fdf4] px-2 py-1 rounded-full">
          <Cloud className="size-3" />
          <Check className="size-3" />
          <span>{saveText}</span>
        </div>
      </div>

      {/* Right side - Step indicators */}
      <div className="flex items-center gap-2">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-2">
            <button
              onClick={() => onStepChange(step.id)}
              className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                currentStep === step.id
                  ? 'bg-[#3b82f6] border-[#3b82f6] text-white font-medium'
                  : 'bg-white border-[#d9d9d9] text-[#666] hover:bg-[#f5f5f5]'
              }`}
            >
              {step.label}
            </button>
            {index < steps.length - 1 && (
              <ChevronRight className="size-5 text-[#999]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
