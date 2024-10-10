import { ProjectCard, SectionContainer } from "..";
import { projectsData } from "@/data";

export default function PortfolioSection() {
  return (
    <SectionContainer
      id="portfolio-section"
      title="Our "
      titleColor="Portfolio"
      description="Explore our diverse range of projects that reflect our expertise
              and commitment to delivering top-notch software solutions tailored
              to our clients' needs."
      btnTxt="See all Projects"
      btnUrl="/prtfolio"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projectsData.map((project, index) => (
        <ProjectCard project={project} index={index} key={index} />
      ))}
    </SectionContainer>
  );
}
