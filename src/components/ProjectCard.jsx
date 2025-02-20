import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CgMediaLive } from "react-icons/cg";
import { Button } from "./ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  project = {
    title: "",
    description: "",
    image: "/images/placeholder.webp",
    liveUrl: "",
    codeUrl: "",
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
      className="relative overflow-hidden shadow-lg bg-primary/5 border-t-2 border-primary rounded-b group"
    >
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold flex-1 group-hover:text-primary">
          {project.title}
        </h3>
        <p className="w-full overflow-hidden transition-all duration-300 text-muted-foreground z-10">
          {project.description}
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[4/2] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 transition-all duration-300 bg-primary/50 group-hover:opacity-100 flex items-center justify-center gap-4">
          {/* <Link
            to={project.codeUrl}
            title="Code"
            className="flex items-center justify-center gap-2 bg-black/40 p-3 hover:bg-black/50 text-white  hover:text-primary"
          >
            <FaGithub size={28} />
          </Link> */}

          <Link
            to={project.liveUrl}
            title="live"
            className="flex items-center justify-center gap-2 bg-black/40 p-3 hover:bg-black/50 text-white  hover:text-primary"
          >
            <FaExternalLinkAlt size={28} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
