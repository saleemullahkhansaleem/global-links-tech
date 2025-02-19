import { Button } from "@/components/ui/button";
import {
  DetailsHeroSection,
  Heading,
  PortfolioSection,
  ServiceCard,
  Testimonial,
} from "@/components";
import { servicesData } from "@/data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Global Links Technologies</title>
        <meta
          name="description"
          content="Global Links Technologies provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <DetailsHeroSection
        title="Our Services"
        description="Empowering your business with cutting-edge solutions."
      />

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We <Heading>Offer</Heading>
        </h2>
        <p className="mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
          At Global Links Technologies, we deliver innovative software solutions
          to help businesses thrive. From web and mobile development to custom
          portals and consultancy, our expert team ensures your digital
          transformation is seamless and scalable.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
