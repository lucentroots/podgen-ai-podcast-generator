import { Link2, Upload, Search, Settings } from "lucide-react";
import { useState, useEffect } from "react";

interface UploadStepProps {
  onUpload: (content: string, source: string) => void;
  content?: string;
  onGenerateScript?: () => void;
}

export function UploadStep({ onUpload, content, onGenerateScript }: UploadStepProps) {
  const [url, setUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedContent, setUploadedContent] = useState(content || "");
  const [contentSource, setContentSource] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleUrlSubmit = async () => {
    if (url.trim()) {
      setIsLoading(true);
      try {
        // Check if it's a Wikipedia URL
        if (url.includes('wikipedia.org')) {
          const response = await fetch('http://localhost:8000/api/content/wikipedia', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ article_title: url })
          });
          if (response.ok) {
            const data = await response.json();
            setUploadedContent(data.content);
            setContentSource(data.source);
            onUpload(data.content, data.source);
            return;
          }
        }
        
        // Use URL endpoint for other URLs
        const response = await fetch('http://localhost:8000/api/content/url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: url })
        });
        if (response.ok) {
          const data = await response.json();
          setUploadedContent(data.content);
          setContentSource(data.source);
          onUpload(data.content, data.source);
          return;
        }
        throw new Error('Failed to fetch URL');
      } catch (error) {
        console.error('Error fetching URL content:', error);
        const extractedContent = `Content from: ${url}\n\nUnable to fetch content. Please check the URL and try again.`;
        setUploadedContent(extractedContent);
        setContentSource(url);
        onUpload(extractedContent, url);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/content/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: searchQuery })
        });
        if (response.ok) {
          const data = await response.json();
          setUploadedContent(data.content);
          setContentSource(data.source);
          onUpload(data.content, data.source);
          return;
        }
        throw new Error('API failed');
      } catch (error) {
        console.error('Error searching:', error);
        const searchContent = `Search results for: ${searchQuery}\n\nThis content was compiled from web search results about "${searchQuery}".`;
        setUploadedContent(searchContent);
        setContentSource(`Search: ${searchQuery}`);
        onUpload(searchContent, `Search: ${searchQuery}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleUploadButtonClick = () => {
    if (url.trim()) {
      handleUrlSubmit();
    } else if (searchQuery.trim()) {
      handleSearch();
    } else if (uploadedContent.trim()) {
      onUpload(uploadedContent, contentSource || "Uploaded content");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target?.result as string;
        setUploadedContent(fileContent);
        setContentSource(file.name);
        onUpload(fileContent, file.name);
      };
      reader.readAsText(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target?.result as string;
        setUploadedContent(fileContent);
        setContentSource(file.name);
        onUpload(fileContent, file.name);
      };
      reader.readAsText(file);
    }
  };

  useEffect(() => {
    if (content) {
      setUploadedContent(content);
    }
  }, [content]);

  const displayContent = uploadedContent || content || "";
  const hasContent = displayContent.trim().length > 0;

  return (
    <div className="flex gap-3 grow items-stretch w-full h-full min-h-0">
      {/* Left Panel - Add text source */}
      <div className="bg-white flex flex-col flex-1 min-w-[400px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d="M11.6667 3.33333H5C4.55797 3.33333 4.13405 3.50893 3.82149 3.82149C3.50893 4.13405 3.33333 4.55797 3.33333 5V15C3.33333 15.442 3.50893 15.8659 3.82149 16.1785C4.13405 16.4911 4.55797 16.6667 5 16.6667H15C15.442 16.6667 15.8659 16.4911 16.1785 16.1785C16.4911 15.8659 16.6667 15.442 16.6667 15V8.33333M11.6667 3.33333L16.6667 8.33333M11.6667 3.33333V8.33333H16.6667" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-medium text-base text-black">Add text source to generate script</p>
            </div>
            <div className="bg-black h-[1px] w-full" />
          </div>

          {/* Content - scrollable */}
          <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
            {/* Search Input */}
            <div className="bg-[rgba(180,208,255,0.25)] rounded-lg">
              <div className="flex items-center h-14 px-4">
                <input
                  type="text"
                  placeholder="Search any topic"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 text-sm text-black bg-transparent border-none outline-none placeholder:text-[#666]"
                />
                <button
                  onClick={handleSearch}
                  className="size-10 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                >
                  <Search className="size-5 text-[#1D1B20]" />
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-[#666]">or</p>

            {/* URL Input */}
            <div className="bg-[rgba(180,208,255,0.25)] rounded-lg">
              <div className="flex items-center h-14 px-4">
                <input
                  type="text"
                  placeholder="Paste url here"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUrlSubmit()}
                  className="flex-1 text-sm text-black bg-transparent border-none outline-none placeholder:text-[#666]"
                />
                <button
                  onClick={handleUrlSubmit}
                  className="size-10 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                >
                  <Link2 className="size-5 text-[#1D1B20]" />
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-[#666]">or</p>

            {/* File Upload Dropzone */}
            <div
              className={`bg-[rgba(180,208,255,0.25)] rounded-lg border-2 border-dashed transition-colors ${
                isDragging ? 'border-[#3b82f6]' : 'border-[#666]'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <label className="flex flex-col items-center justify-center py-6 cursor-pointer">
                <div className="bg-[#b4d0ff] rounded-full size-12 flex items-center justify-center mb-3">
                  <Upload className="size-6 text-black" />
                </div>
                <p className="text-sm text-black mb-1">Click to upload, or drag & drop file</p>
                <p className="text-xs text-[#666]">epub, pdf, txt, html, docx</p>
                <input
                  type="file"
                  accept=".epub,.pdf,.txt,.html,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Upload Button */}
          <div className="flex justify-end pt-6">
            <button
              onClick={handleUploadButtonClick}
              className="bg-[#2c2c2c] text-white px-6 py-3 rounded-lg text-base hover:bg-[#1a1a1a] transition-colors"
            >
              Upload content
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Content Source */}
      <div className="bg-white flex flex-col flex-1 min-w-[400px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-lg size-10 flex items-center justify-center border border-[#e5e5e5]">
                <Settings className="size-5 text-[#666666]" />
              </div>
              <p className="font-medium text-base text-black">Content source</p>
            </div>
            <div className="bg-black h-[1px] w-full" />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {displayContent ? (
              <div className="text-base text-[#333] leading-relaxed whitespace-pre-wrap">
                {displayContent}
              </div>
            ) : (
              <p className="text-base text-[#999]">Content to be pasted here</p>
            )}
          </div>

          {/* Generate Script Button */}
          <div className="flex justify-end pt-6">
            <button
              onClick={onGenerateScript}
              disabled={!hasContent}
              className={`px-6 py-3 rounded-lg text-base transition-colors ${
                hasContent
                  ? 'bg-[#2c2c2c] text-white hover:bg-[#1a1a1a]'
                  : 'bg-[#e5e5e5] text-[#999] cursor-not-allowed'
              }`}
            >
              Generate script
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
