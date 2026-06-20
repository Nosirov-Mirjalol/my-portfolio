// src/components/ui/TechBadges.tsx

interface TechBadgesProps {
  techs: string[];
}

export function TechBadges({ techs }: TechBadgesProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {techs.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1.5 text-[13px] font-medium rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:bg-violet-500/20 hover:text-violet-200 hover:border-violet-500/40 cursor-default select-none"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}