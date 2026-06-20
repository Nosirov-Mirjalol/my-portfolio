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
    <div className="w-full flex flex-col gap-2">
      {/* Raqam o'ng tarafda va sarlavhaning tepasida */}
      <div className="w-full text-right">
        <span className="text-xl font-semibold tracking-[0.2em] uppercase text-[#a78bfa]">
          {String(floor).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Rasmdagidek Glitch (RGB siljish) effektli sarlavha */}
        <h2
          className="text-4xl sm:text-[45px] font-black text-white leading-tight tracking-wide"
          style={{
            textShadow:
              "-3px 0px 0px rgba(0, 255, 255, 0.8), 3px 0px 0px rgba(255, 0, 0, 0.8)",
          }}
        >
          {title}
        </h2>
        
        {description && (
          <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;