import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastY.current && current > 60) {
        setHidden(true);
        setMenuOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.contact", href: "#contact" },
  ];

  const isUz = i18n.language === "uz";
  const toggle = () => i18n.changeLanguage(isUz ? "en" : "uz");

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 text-white"
      >
        <div className="flex justify-between items-center px-5 sm:px-10 lg:px-20 py-4 bg-white/5 backdrop-blur-md">
          {/* Logo */}
          <span className="font-bold text-xl bg-linear-to-r from-[#6b54a3] via-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent">
            Portfolio
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
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

          {/* Lang toggle + hamburger */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.92 }}
              className="relative flex items-center w-18 h-8 rounded-full border border-white/20 bg-white/5 p-0.5 overflow-hidden cursor-pointer shrink-0"
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

            {/* Hamburger — mobile only */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU — navbardan tashqarida */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: "64px" }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel */}
            <div className="relative bg-[#0f0d1a] border-b border-white/10 px-5 py-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex py-3.5 text-sm text-white/80 hover:text-[#a78bfa] transition-colors border-b border-white/5 last:border-0"
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;