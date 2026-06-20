import { motion, AnimatePresence } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle";

const fadeProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const About = () => {
  const { t, i18n } = useTranslation();

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
  ];

  return (
    <section id="about" className="flex flex-col items-start justify-center w-full h-auto lg:h-[70vh] gap-2 bg-[#090611]  py-8 text-center md:px-8 md:py-16 lg:px-16 lg:py-24">
      <div className="w-102">
        <SectionTitle floor={1} title={t("about.title")} />
      </div>
      <div
        id="about"
        className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 md:gap-5 px-7 py-2  text-white"
      >
        <div className="w-full lg:w-[50%]">
          <AnimatePresence mode="wait">
            <motion.p
              key={i18n.language + "desc"}
              {...fadeProps}
              className="text-lg lg:text-xl font-light leading-relaxed text-gray-300 tracking-wide text-left"
            >
              <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {t("about.intro")}
              </span>{" "}
              {t("about.desc")}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-[50%] flex justify-center flex-col items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.h2 key={i18n.language + "highlights"} {...fadeProps}>
              {t("about.highlights")}
            </motion.h2>
          </AnimatePresence>
          <ul className="flex flex-col gap-2 py-2">
            <AnimatePresence mode="wait">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={i18n.language + index}
                  {...fadeProps}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  className="text-lg font-medium text-white text-start tracking-wider"
                >
                  <CircleCheckBig className="inline-block mr-2" />
                  {highlight}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;