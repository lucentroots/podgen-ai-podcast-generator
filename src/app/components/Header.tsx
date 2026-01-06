import { Mic } from "lucide-react";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-[#c5dcff] to-[#e8f1ff] flex items-center px-6 py-3 w-full">
      <div className="flex gap-3 items-center">
        <div className="bg-white rounded-lg size-10 flex items-center justify-center shadow-sm">
          <Mic className="size-5 text-[#666666]" />
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-xl text-black leading-tight">Podgen</p>
          <p className="text-sm text-[#666666]">Generate a podcast from any text material</p>
        </div>
      </div>
    </div>
  );
}
