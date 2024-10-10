import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function ProjectCard({
  project = {
    title: "",
    description: "",
    image: "/images/placeholder.webp",
    url: "#",
  },
  index = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden shadow-lg group"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-0 w-full h-0 overflow-hidden group-hover:h-16 transition-all duration-300 flex bg-accent/80 z-10">
        <h3 className="text-xl font-bold p-4 flex-1">{project.title}</h3>
        <Link
          to={project.url}
          className="w-16 h-16 flex items-center justify-center bg-primary transition-colors"
        >
          <MoveRight />
        </Link>
      </div>
      <p className="absolute bottom-0 w-full max-h-0 h-auto overflow-hidden group-hover:max-h-80 transition-all duration-300 bg-accent/80 group-hover:p-4 z-10">
        {project.description}
      </p>
      <div className="absolute inset-0 opacity-0 transition-all duration-300 bg-black/50 group-hover:opacity-100"></div>
    </motion.div>
  );
}
