import { useState } from "react";
import { Folder, Plus, MoreVertical, Copy, Trash2, Eye } from "lucide-react";

interface Project {
  id: string;
  name: string;
  lastSaved?: Date;
  expanded?: boolean;
}

interface SidebarProps {
  projects: Project[];
  currentProject: string | null;
  onProjectSelect: (id: string) => void;
  onNewProject?: () => void;
  onDeleteProject?: (id: string) => void;
  onDuplicateProject?: (id: string) => void;
}

export function Sidebar({ 
  projects, 
  currentProject, 
  onProjectSelect,
  onNewProject,
  onDeleteProject,
  onDuplicateProject
}: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const formatLastSaved = (date?: Date) => {
    if (!date) return "";
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    return `${diffDay}d ago`;
  };

  return (
    <div className="flex h-full items-start rounded-2xl w-[220px] shrink-0">
      <div className="bg-[rgba(180,208,255,0.25)] h-full w-full rounded-lg p-4 flex flex-col">
        {/* Library Header */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d="M8.33333 3.33333H5C4.55797 3.33333 4.13405 3.50893 3.82149 3.82149C3.50893 4.13405 3.33333 4.55797 3.33333 5V15C3.33333 15.442 3.50893 15.8659 3.82149 16.1785C4.13405 16.4911 4.55797 16.6667 5 16.6667H15C15.442 16.6667 15.8659 16.4911 16.1785 16.1785C16.4911 15.8659 16.6667 15.442 16.6667 15V11.6667M15 2.5L9.16667 8.33333M15 2.5H11.6667M15 2.5V5.83333" stroke="#656565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-medium text-base text-[#666]">Library</p>
            </div>
            {onNewProject && (
              <button
                onClick={onNewProject}
                className="size-8 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors"
                title="New Project"
              >
                <Plus className="size-4 text-[#666]" />
              </button>
            )}
          </div>
          <div className="bg-[#666] h-[1px] w-full" />
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {projects.length === 0 ? (
            <div className="px-3 py-4">
              <p className="text-sm text-[#999] text-center">No saved projects yet</p>
            </div>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="w-full relative group">
                <div
                  className={`relative rounded-lg w-full cursor-pointer transition-colors ${
                    currentProject === project.id ? 'bg-[rgba(255,255,255,0.6)]' : 'hover:bg-[rgba(255,255,255,0.3)]'
                  }`}
                  onClick={() => onProjectSelect(project.id)}
                >
                  <div className="flex gap-2 items-center px-3 py-2.5 w-full">
                    <Folder className="size-5 text-[#666] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm truncate ${
                        currentProject === project.id ? 'text-black font-medium' : 'text-[#666]'
                      }`}>
                        {project.name}
                      </p>
                      {project.lastSaved && (
                        <p className="text-xs text-[#999]">{formatLastSaved(project.lastSaved)}</p>
                      )}
                    </div>
                    
                    {/* More menu button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(menuOpen === project.id ? null : project.id);
                      }}
                      className="size-6 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[rgba(0,0,0,0.1)] transition-all"
                    >
                      <MoreVertical className="size-4 text-[#666]" />
                    </button>
                  </div>
                </div>
                
                {/* Context Menu */}
                {menuOpen === project.id && (
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-[#e5e5e5] py-1 z-20 min-w-[140px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectSelect(project.id);
                        setMenuOpen(null);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#333] hover:bg-[#f5f5f5]"
                    >
                      <Eye className="size-4" />
                      View
                    </button>
                    {onDuplicateProject && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDuplicateProject(project.id);
                          setMenuOpen(null);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#333] hover:bg-[#f5f5f5]"
                      >
                        <Copy className="size-4" />
                        Duplicate
                      </button>
                    )}
                    {onDeleteProject && projects.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(`Delete "${project.name}"?`)) {
                            onDeleteProject(project.id);
                          }
                          setMenuOpen(null);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="size-4" />
                        Delete
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
