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
          className="text-[11.5px] font-medium text-violet-300 bg-violet-600/10 border border-violet-500/20 rounded-full px-3 py-0.5 transition-all duration-300 hover:bg-violet-600/20 hover:border-violet-500/40 cursor-default"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}