import { DetailsHeroSection, Heading, ServiceCard } from "@/components";
import { customSolutionsData } from "@/data";
import { Helmet } from "react-helmet-async";

export default function CustomSolutions() {
  const { title, description, features, process, technologies } =
    customSolutionsData;

  return (
    <>
      <Helmet>
        <title>{title} - Global Links Technologies</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* Hero Section */}
      <DetailsHeroSection title={title} description={description} />

      {/* Service Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">
          Comprehensive <Heading>{title}</Heading> Services
        </h2>
        <p className="mb-12 text-muted-foreground max-w-5xl text-xl">
          {description}
        </p>

        <h2 className="text-4xl font-bold mb-8 mt-12 text-center">
          What <Heading> Sets Us Apart? </Heading>
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ServiceCard service={feature} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8 mt-12 text-center">
          Our <Heading> Custom Solutions </Heading> Process
        </h2>

        {/* Process Section */}
        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-8">
          Our custom software development process ensures that we meet your
          unique business requirements effectively:
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <ServiceCard service={step} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8 mt-12 text-center">
          <Heading> Technologies </Heading> We Use
        </h2>

        {/* Technologies Section */}
        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-8">
          We utilize a variety of modern technologies to deliver scalable and
          high-performing custom solutions. Some of these include:
        </p>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <ServiceCard
              service={{
                title: tech.name,
                icon: tech.icon,
                description: tech.description,
              }}
              index={index}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
