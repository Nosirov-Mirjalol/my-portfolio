import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import HeroImage from "../../assets/hero.svg";
import Button from "../ui/Button";
import { Download, ArrowRight } from "lucide-react";
import { i18nAnimation } from "../../lib/i18nAnimation";

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={text}
      {...i18nAnimation}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  </AnimatePresence>
);

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
      className="relative w-full h-screen flex flex-col justify-center px-8 md:px-20"
    >
      {/* overlay — content o'qilsin uchun */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-3xl">
        {/* available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/70 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
          <AnimatedText text={t("hero.badge")} />
        </motion.div>

        {/* name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-2"
        >
          Mirjalol Nosirov
        </motion.h2>

        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-[#a78bfa] mb-6"
        >
          <AnimatedText text={t("hero.title")} />
        </motion.h1>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
        >
          <AnimatedText text={t("hero.desc")} />
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="violet"
            href="#projects"
            icon={<ArrowRight size={15} />}
          >
            View Projects
          </Button>

          <div className="relative group inline-block">
            <button
              disabled
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border text-xs sm:text-sm font-medium bg-transparent border-white/30 text-white/50 cursor-not-allowed"
            >
              CV Download
              <Download size={15} />
            </button>
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Coming soon...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
