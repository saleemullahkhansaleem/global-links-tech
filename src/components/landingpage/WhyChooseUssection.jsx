import { motion, useInView } from "framer-motion";
import { SectionContainer } from "..";
import { useRef } from "react";

import {
  FaGlobe,
  FaLightbulb,
  FaDollarSign,
  FaHandshake,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

const whyChooseUs = [
  {
    title: "Global Expertise",
    description:
      "With a global reach, we bring international expertise while understanding local challenges, ensuring our solutions meet the highest global standards.",
    icon: FaGlobe,
  },
  {
    title: "Innovative Solutions",
    description:
      "We leverage the latest technology to provide cutting-edge software solutions, tailored specifically to your business needs and objectives.",
    icon: FaLightbulb,
  },
  {
    title: "Cost-Effective Services",
    description:
      "Our pricing model is designed to deliver top-notch solutions at competitive rates, ensuring the best value for your investment.",
    icon: FaDollarSign,
  },
  {
    title: "Client-Driven Approach",
    description:
      "We prioritize collaboration and transparency, ensuring our solutions align with your vision through every step of the process.",
    icon: FaHandshake,
  },
  {
    title: "24/7 Availability",
    description:
      "Our team is available around the clock to provide continuous support and ensure smooth operations for your business.",
    icon: FaClock,
  },
  {
    title: "Proven Track Record",
    description:
      "Our portfolio showcases successful projects across multiple industries, demonstrating our ability to consistently deliver results.",
    icon: FaTrophy,
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
        <SectionContainer
          id="why-section"
          title="Our"
          titleColor="Strengths"
          description="At Global Links Technologies, we combine global expertise with local insight to deliver innovative, cost-effective solutions that are tailored to our clients’ specific needs. Here are some reasons why clients choose Global Links Technologies."
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start gap-6 text-lg p-4 relative overflow-hidden bg-primary/5 group"
            >
              <item.icon className="absolute -right-8 -top-8 h-2/3 w-auto text-primary/10" />
              <div className="transition-colors group-hover:scale-110 text-5xl font-bold text-primary p-4 bg-primary/5">
                {"0" + (index + 1)}
              </div>
              <div>
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </SectionContainer>
  );
}
