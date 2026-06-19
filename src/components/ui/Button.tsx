import { motion } from "framer-motion";

type Variant = "violet" | "dark";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const design: Record<Variant, string> = {
  violet: "bg-[#7c3aed] border-[#7c3aed] text-white hover:bg-[#6d28d9] hover:border-[#6d28d9]",
  dark: "bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

const Button = ({ children, variant = "violet", href, icon, onClick, className = "" }: ButtonProps) => {
   const base = `inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${design[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="text-base leading-none">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={base} {...motionProps}>
      {content}
    </motion.button>
  );
};

export default Button;