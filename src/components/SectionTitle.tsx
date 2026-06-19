const SectionTitle = ({
  floor,
  title,
  description,
}: {
  floor: number;
  title: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col items-end justify-center gap-3">
      <span className="text-xl font-semibold tracking-[0.2em] uppercase text-[#a78bfa]/60">
        {String(floor).padStart(2, "0")}
      </span>
      <h2 className="text-2xl sm:text-[35px] font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;