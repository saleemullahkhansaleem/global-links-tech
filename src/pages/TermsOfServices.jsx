import { DetailsHeroSection, Heading } from "@/components";
import { SectionContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { termsData } from "@/data";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <>
      <DetailsHeroSection
        title="Terms of Service"
        description="Your rights and responsibilities at Global Links Technologies"
      />

      <SectionContainer
        title="Welcome to"
        titleColor="Global Links Technologies"
        description="By accessing and using our services, you agree to abide by our terms and conditions. Please read them carefully to understand your rights and responsibilities."
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {termsData.map((term, index) => (
          <div
            key={index}
            className="bg-primary/5 hover:bg-primary/10 p-8 shadow border border-primary/10"
          >
            <h2 className="text-2xl font-semibold mb-4">{term.title}</h2>
            <p className="text-muted-foreground">{term.content}</p>
          </div>
        ))}
      </SectionContainer>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Have Any Questions About Our <Heading>Terms of Service?</Heading>
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            If you have any queries or concerns regarding our terms, feel free
            to get in touch with us.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
