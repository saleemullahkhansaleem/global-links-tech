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

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TeamSection />
      <Testimonial />
    </>
  );
}
