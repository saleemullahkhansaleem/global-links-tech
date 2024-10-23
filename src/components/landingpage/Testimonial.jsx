import { motion, useInView } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { SectionContainer } from "..";
import { testimonialsData } from "@/data";
import { useRef } from "react";

export default function TestimonialSection() {
  return (
    <SectionContainer
      id="testimonials-section"
      title="What Our"
      titleColor="Clients Say"
      description="Hear from our clients about the innovative solutions and exceptional service they experienced with Global Links Technologies."
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      bg="bg-primary/5"
    >
      {testimonialsData.map((testimonial, index) => (
        <TestimonialBox testimonial={testimonial} index={index} key={index} />
      ))}
    </SectionContainer>
  );
}

function TestimonialBox({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-background flex flex-col space-y-4 p-8 relative overflow-hidden"
    >
      <FaQuoteLeft className="absolute -right-4 -top-4 h-2/3 w-auto text-primary/10" />
      <FaQuoteLeft className="text-primary text-2xl" />
      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
      <div className="flex items-center space-x-4">
        <img
          src={testimonial.profile}
          className="rounded-full bg-muted w-12 object-cover aspect-square"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
