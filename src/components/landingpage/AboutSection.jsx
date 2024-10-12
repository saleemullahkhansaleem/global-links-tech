import { motion, useInView } from "framer-motion";
import { SectionContainer } from "..";
import { features } from "@/data";
import { useRef } from "react";

export default function AboutSection() {
  return (
    <SectionContainer
      id="about-section"
      title="Our"
      titleColor="Expertise"
      description="Based in Islamabad, Pakistan, Global Links Technologies provides
            world-class software solutions that empower businesses worldwide.
            Our team expertly blends local insights with international best
            practices to deliver outstanding results."
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
      bg="bg-primary/5"
    >
      {features.map((item, index) => (
        <AboutCard item={item} index={index} key={index} />
      ))}
    </SectionContainer>
  );
}

function AboutCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="flex flex-col items-center gap-4 text-lg bg-background p-8 shadow relative overflow-hidden group"
    >
      <item.icon className="absolute -left-4 -top-4 h-2/3 w-auto text-primary/10" />
      <div className="bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110">
        <item.icon className="h-10 w-10" />
      </div>
      <div className="text-center">
        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
        <p className="text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}
