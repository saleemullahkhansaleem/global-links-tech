import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SectionContainer } from "..";
import { teamMembers } from "@/data";
import { Link } from "react-router-dom";

export default function TeamSection() {
  return (
    <SectionContainer
      id="team-section"
      title="Meet"
      titleColor="Our Team"
      description="Our talented team is committed to delivering innovative solutions
            and ensuring your project's success."
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {teamMembers.map((member, index) => (
        <TeamBox member={member} index={index} key={index} />
      ))}
    </SectionContainer>
  );
}

function TeamBox({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden max-w-72 mx-auto"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full aspect-[3/4] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-bold">{member.name}</h3>
        <p className="text-primary text-lg mb-4">{member.position}</p>
        <div className="flex space-x-4">
          {member.linkedin && (
            <Link
              to={member.linkedin}
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary"
            >
              <FaLinkedinIn size={20} />
            </Link>
          )}
          {member.twitter && (
            <Link
              to={member.twitter}
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary"
            >
              <FaTwitter size={20} />
            </Link>
          )}
          {member.github && (
            <Link
              to={member.github}
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary"
            >
              <FaGithub size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
