import { motion, useInView } from "framer-motion";
import { Heading } from "..";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const whyChooseUs = [
  {
    title: "Global Expertise",
    description:
      "With a global reach, we bring international expertise while understanding local challenges, ensuring our solutions meet the highest global standards.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We leverage the latest technology to provide cutting-edge software solutions, tailored specifically to your business needs and objectives.",
  },
  {
    title: "Cost-Effective Services",
    description:
      "Our pricing model is designed to deliver top-notch solutions at competitive rates, ensuring the best value for your investment.",
  },
  {
    title: "Client-Driven Approach",
    description:
      "We prioritize collaboration and transparency, ensuring our solutions align with your vision through every step of the process.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6 bg-secondary/10 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why <Heading>Global Links Technologies</Heading>?
            </h2>
            <ul className="grid gap-8 space-y-2 pt-4">
              {whyChooseUs.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start gap-4 text-lg group"
                >
                  <div className="transition-colors group-hover:scale-110 text-5xl font-bold text-primary">
                    {"0" + (index + 1) + "."}
                  </div>
                  <div>
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="pt-4">
              <Button size="lg" variant="" asChild>
                <Link to="/contact-us">Get in touch</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-12 lg:justify-start"
          >
            <div className="relative w-full max-w-xl aspect-square">
              <img
                src="/images/2.png"
                alt="Global Links Technologies"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
