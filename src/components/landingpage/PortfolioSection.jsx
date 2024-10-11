import { ProjectCard, SectionContainer } from "..";
import { projectsData } from "@/data";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
  return (
    <SectionContainer
      id="portfolio-section"
      title="Some"
      titleColor="Feature Projects"
      description="Take a look at our extensive portfolio of innovative software solutions that demonstrate our expertise in delivering impactful projects for clients worldwide."
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projectsData.slice(0, 2).map((project, index) => (
        <ProjectCard project={project} index={index} key={index} />
      ))}
      <div className="flex flex-col justify-center items-center gap-4 p-6">
        <h3 className="text-2xl font-semibold text-center">
          Discover Our Achievements
        </h3>
        <p className="text-center text-muted-foreground">
          We offer a wide range of services tailored to your business
          challenges.
          <br />
          Click below to explore more projects and learn how Global Links
          Technologies can support your growth.
        </p>
        <Button size="lg" variant="" className="mt-4" asChild>
          <Link to="/portfolio">Explore More Projects</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
