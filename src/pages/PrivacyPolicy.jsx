import { DetailsHeroSection, Heading } from "@/components";
import { SectionContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { privacyPolicyData } from "@/data";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <DetailsHeroSection
        title="Privacy Policy"
        description="How we protect your privacy and data at Global Links Technologies"
      />

      <SectionContainer
        title="Our Commitment to"
        titleColor="Your Privacy"
        description="At Global Links Technologies, we are committed to protecting your personal data and ensuring your privacy. This Privacy Policy explains how we collect, use, and safeguard your information."
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {privacyPolicyData.map((section, index) => (
          <div
            key={index}
            className="bg-primary/5 hover:bg-primary/10 p-8 shadow border border-primary/10"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-muted-foreground">{section.content}</p>
          </div>
        ))}
      </SectionContainer>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Have Any Questions About Our <Heading>Privacy Policy?</Heading>
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            If you have any queries or concerns regarding how we handle your
            data, feel free to get in touch with us.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
