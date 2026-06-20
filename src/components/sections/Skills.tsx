import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle";
import { TechBadges } from "../ui/TechBadges";
import { motion } from "framer-motion";

const skillGroups = [
  { titleKey: "skills.core", skills: ["React", "TypeScript", "JavaScript"] },
  { titleKey: "skills.styling", skills: ["Tailwind CSS", "Ant Design", "shadcn/ui"] },
  { titleKey: "skills.state", skills: ["Redux Toolkit", "TanStack Query", "TanStack Router"] },
  { titleKey: "skills.tools", skills: ["Git", "Vite", "Next.js", "REST API"] },
];

const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="w-full min-h-[80vh] bg-[#090611] flex flex-col justify-start items-start px-9 md:px-20 py-10"
      id="skills"
    >
      <motion.div
        key={i18n.language + "skills-title"}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:max-w-100"
      >
        <SectionTitle
          title={t("skills.title")}
          floor={3}
          description={t("skills.description")}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 w-full max-w-6xl">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.titleKey}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Card title={t(group.titleKey)} skills={group.skills} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

const Card = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="group relative z-0 overflow-hidden rounded-2xl border border-white/5 bg-white/2 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:z-10 hover:border-violet-500/30 hover:bg-white/4 hover:shadow-[0_8px_30px_rgb(139,92,246,0.12)]">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-violet-300/90">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <TechBadges techs={skills} />
        </div>
      </div>
    </div>
  );
};