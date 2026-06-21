import { ProjectCard } from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { i18nViewportAnimation } from "../../lib/i18nAnimation";

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="projects"
      className="w-full min-h-[80vh] bg-[#090611] flex flex-col justify-start items-start px-9 md:px-20"
    >
      <motion.div
        key={i18n.language + "projects-title"}
        {...i18nViewportAnimation}
        className="w-full lg:max-w-100"
      >
        <SectionTitle
          floor={2}
          title={t("projects.title")}
          description={t("projects.description")}
        />
      </motion.div>

      <div className="flex flex-wrap py-5 px-2 gap-5">
        {[
          {
            title: "LinguaPro",
            description:
              "Multi-role learning platform (admin / teacher / student) with real API integration. LinguaPro created by a team and I created Teacher panel",
            techs: ["TanStack Router", "TanStack Query", "shadcn/ui", "Tailwind", "TypeScript"],
            liveUrl: "https://linguapro.servequake.com/",
            githubUrl: "https://github.com/Nosirov-Mirjalol/lingua",
          },
        ].map((project) => (
          <motion.div
            key={i18n.language + project.title}
            {...i18nViewportAnimation}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
