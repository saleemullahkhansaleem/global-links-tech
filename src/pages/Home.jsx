import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AboutSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  TeamSection,
  Testimonial,
  WhyChooseUs,
} from "@/components";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Global Links Technologies</title>
        <meta
          name="description"
          content="Global Links Technologies provides cutting-edge technology solutions to businesses worldwide. From software development to consultancy, we help you achieve your digital transformation goals."
        />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <PortfolioSection />
      {/* <TeamSection />
      <Testimonial /> */}
    </>
  );
}
