import { motion, useInView } from "framer-motion";
import { Heading, SectionContainer } from "..";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { features } from "@/data";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-primary/5 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -150 }}
          transition={{ duration: 1 }}
        >
          <SectionContainer
            id="services-section"
            title="Our"
            titleColor="Expertise"
            description="Based in Islamabad, Pakistan, Global Links Technologies provides
            world-class software solutions that empower businesses worldwide.
            Our team expertly blends local insights with international best
            practices to deliver outstanding results."
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className="flex flex-col items-center gap-4 text-lg bg-background p-8 group shadow"
              >
                <div className="bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                  <item.icon className="h-10 w-10" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </SectionContainer>
        </motion.div>
      </div>
    </section>
  );
}
