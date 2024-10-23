import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DetailsHeroSection,
  Heading,
  ProjectCard,
} from "@/components";
import { projectsData } from "@/data";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <DetailsHeroSection
        title="Our Portfolio"
        description="Discover the projects we've proudly delivered."
      />

      {/* Portfolio Grid Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured <Heading> Projects</Heading>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-12">
          Explore our diverse range of projects that reflect our expertise and
          commitment to delivering top-notch software solutions tailored to our
          clients' needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Work With Us?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Let's create something amazing together. Contact us to discuss your
            next project.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
