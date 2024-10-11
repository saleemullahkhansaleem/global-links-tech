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
      className="group relative overflow-hidden mx-auto bg-primary/10"
    >
      <div className="relative border-t-4 border-primary">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[3/4] object-cover object-center"
        />
        <div className="absolute inset-0 max-h-0 group-hover:max-h-[600px] bg-gradient-to-b from-primary/80 to-primary/20 transition-all duration-700 ease-in-out overflow-hidden flex items-center justify-center">
          <div className="flex space-x-4 z-10 text-white">
            {member.linkedin && (
              <Link
                to={member.linkedin}
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary bg-black/50 p-2"
              >
                <FaLinkedinIn size={28} />
              </Link>
            )}
            {member.twitter && (
              <Link
                to={member.twitter}
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary bg-black/50 p-2"
              >
                <FaTwitter size={28} />
              </Link>
            )}
            {member.github && (
              <Link
                to={member.github}
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary bg-black/50 p-2"
              >
                <FaGithub size={28} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-primary text-lg">{member.position}</p>
      </div>
    </motion.div>
  );
}
