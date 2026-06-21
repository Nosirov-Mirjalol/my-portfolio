import { motion, AnimatePresence } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle";
import { i18nViewportAnimation } from "../../lib/i18nAnimation";

const About = () => {
  const { t, i18n } = useTranslation();

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
  ];

  return (
    <section
      className="w-full min-h-[80vh] bg-[#090611] flex flex-col justify-center items-start px-9 md:px-20 py-4 md:pt-10"
      id="about"
    >
      <motion.div
        key={i18n.language + "about-title"}
        {...i18nViewportAnimation}
        className="w-full lg:max-w-100"
      >
        <SectionTitle
          title={t("about.title")}
          floor={1}
        />
      </motion.div>
      <div
        id="about"
        className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 md:gap-5 py-5  text-white"
      >
        <div className="w-full lg:w-[50%]">
          <AnimatePresence mode="wait">
            <motion.p
              key={i18n.language + "desc"}
              {...i18nViewportAnimation}
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
            <motion.h2
              key={i18n.language + "highlights"}
              {...i18nViewportAnimation}
            >
              {t("about.highlights")}
            </motion.h2>
          </AnimatePresence>
          <ul className="flex flex-col gap-4 py-2">
            <AnimatePresence mode="wait">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={i18n.language + index}
                  {...i18nViewportAnimation}
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
