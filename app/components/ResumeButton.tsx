import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="flex items-center gap-2 border-2 border-black px-4 py-1.5 text-sm font-bold rounded-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-none transition-all sm:px-5 sm:py-2 sm:text-base"
    >
      Resume
      <Download size={16} />
    </a>
  );
}
