import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const AnimatedText = ({ text }: { text: string }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="inline-block"
    >
      {text}
    </motion.span>
  </AnimatePresence>
);

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastY.current && current > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.contact", href: "#contact" },
  ];

  const isUz = i18n.language === "uz";

  const toggle = () => {
    i18n.changeLanguage(isUz ? "en" : "uz");
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 px-20 left-0 w-full z-50 bg-white/5 backdrop-blur-md text-white p-4 flex justify-between items-center"
    >
      <span className="font-bold text-xl bg-linear-to-r from-[#6b54a3] via-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent">
        Portfolio
      </span>

      <div className="flex items-center">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="mx-4 cursor-pointer hover:text-[#a78bfa] transition-colors duration-300 text-sm"
          >
            <AnimatedText text={t(item.key)} />
          </a>
        ))}
      </div>

      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center w-18 h-8 rounded-full border border-white/20 bg-white/5 p-0.5 overflow-hidden cursor-pointer"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute w-8 h-7 rounded-full bg-linear-to-br from-[#644e9b] to-[#a78bfa]"
          style={{ left: isUz ? "2px" : "calc(100% - 34px)" }}
        />
        <span
          className={`relative z-10 w-1/2 text-center text-xs font-medium transition-colors duration-200 ${
            isUz ? "text-white" : "text-white/40"
          }`}
        >
          UZ
        </span>
        <span
          className={`relative z-10 w-1/2 text-center text-xs font-medium transition-colors duration-200 ${
            !isUz ? "text-white" : "text-white/40"
          }`}
        >
          EN
        </span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;