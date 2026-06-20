import { ProjectCard } from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="w-full min-h-[80vh] bg-[#090611] flex flex-col justify-start items-start px-9 md:px-20"
    >
      <div>
        <SectionTitle
          floor={2}
          title={t("projects.title")}
          description={t("projects.description")}
        />  
      </div>
      <div className="flex flex-wrap py-5 px-2 gap-5">
        <ProjectCard
          title="LinguaPro"
          description="Multi-role learning platform (admin / teacher / student) with real API integration. LinguaPro created by a team and I created Teacher panel "
          techs={[
            "TanStack Router",
            "TanStack Query",
            "shadcn/ui",
            "Tailwind",
            "TypeScript",
          ]}
          liveUrl="https://linguapro.servequake.com/"
          githubUrl="https://github.com/Nosirov-Mirjalol/lingua"
        />
      </div>
    </section>
  );
};

export default Projects;
