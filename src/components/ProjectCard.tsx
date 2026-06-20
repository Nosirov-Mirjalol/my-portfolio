// src/components/ProjectCard.tsx

import { ExternalLink, CodeXml } from "lucide-react";
import { TechBadges } from "./ui/TechBadges";
import Button from "./ui/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  previewLabel?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  techs,
  previewLabel,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-violet-500/15 bg-[#0e0c1a] overflow-hidden max-w-sm w-full transition-all duration-300 hover:border-violet-500/35 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] group">
      
      {/* Rasm yoki Preview oynasi - Portfoliodagi mavhum pufakchalar uslubida */}
      <div className="h-44 flex items-center justify-center relative bg-linear-to-br from-[#140f29] via-[#1b113a] to-[#0a0815] border-b border-violet-500/10 overflow-hidden">
        
        {/* Rasmdagi kabi orqa fondagi xiralashgan binafsha pufakchalar (Neon blobs) */}
        <div className="absolute top-[-20%] left-[-20%] w-36 h-36 rounded-full bg-violet-600/10 blur-2xl group-hover:bg-violet-600/20 transition-all duration-500" />
        <div className="absolute bottom-[-30%] right-[-10%] w-48 h-48 rounded-full bg-violet-700/10 blur-3xl group-hover:scale-110 transition-all duration-500" />
        
        {/* Rasmdagi markaziy ingichka doira chizig'i effekti */}
        <div className="absolute w-32 h-32 rounded-full border border-violet-500/5 pointer-events-none" />

        {/* Matndagi neon porlash effekti */}
        <span className="relative text-3xl font-bold text-violet-100 tracking-tight drop-shadow-[0_0_25px_rgba(139,92,246,0.45)] group-hover:scale-105 transition-transform duration-300">
          {previewLabel ?? title}
        </span>
      </div>

      {/* Kontent qismi */}
      <div className="p-5">
        <h3 className="text-[15.5px] font-semibold text-violet-100 mb-1.5 group-hover:text-violet-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[13px] text-violet-300/60 leading-relaxed mb-4 h-10 overflow-hidden line-clamp-2">
          {description}
        </p>

        {/* Texnologiya belgilari */}
        <div className="mb-4">
          <TechBadges techs={techs} />
        </div>

        {/* Amallar / Tugmalar */}
        <div className="flex gap-2.5 pt-1">
          {liveUrl && (
            <Button
              href={liveUrl}
              variant="violet"
              className="shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              href={githubUrl}
              variant="dark"
            >
              <CodeXml size={14} />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}