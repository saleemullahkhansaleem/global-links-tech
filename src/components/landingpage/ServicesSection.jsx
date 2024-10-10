import { SectionContainer, ServiceCard } from "..";
import { servicesData } from "@/data";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <SectionContainer
      id="services-section"
      title="What We"
      titleColor="Provide" // Optional: adjust color if needed
      description="At Global Links Technologies, we specialize in providing innovative software solutions that empower businesses to thrive. From cutting-edge web and mobile development to customized portals and expert consultancy, our dedicated team ensures your digital transformation is seamless and scalable."
      // btnTxt="Explore All Services"
      // btnUrl="/services"
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {servicesData.slice(0, 2).map((service, index) => (
        <ServiceCard service={service} index={index} key={index} />
      ))}
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl font-semibold text-center">
          Explore Our Solutions
        </h3>
        <p className="text-center text-muted-foreground">
          We provide multiple solutions for your business needs.
          <br />
          Click below to see more offerings and how we can help you thrive!
        </p>
        <Button size="lg" variant="" className='mt-4' asChild>
          <Link to="/services">Explore More Services</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
