import { Code, Users, Shield, Cog, Monitor, ListPlus } from "lucide-react";
import { FaReact, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

export const customSolutionsData = {
  title: "Custom Solutions",
  description:
    "We specialize in creating tailor-made software solutions that fit your unique business needs, enhancing efficiency and driving growth.",
  features: [
    {
      title: "Tailored Software Development",
      description:
        "Custom software built from the ground up to meet your specific requirements and business goals.",
      icon: ListPlus,
    },
    {
      title: "User-Centric Design",
      description:
        "We prioritize user experience, ensuring that the software is intuitive and easy to use.",
      icon: Users,
    },
    {
      title: "Scalable Solutions",
      description:
        "Our solutions are designed to grow with your business, easily adapting to changing demands.",
      icon: Monitor,
    },
    {
      title: "Robust Security",
      description:
        "We implement industry-standard security practices to protect your data and systems.",
      icon: Shield,
    },
    {
      title: "Ongoing Support",
      description:
        "Post-launch support and maintenance to ensure your software runs smoothly and stays updated.",
      icon: Cog,
    },
    {
      title: "Agile Development Process",
      description:
        "Utilizing agile methodologies for flexible, iterative development that responds to feedback.",
      icon: Code,
    },
  ],
  process: [
    {
      title: "Requirements Gathering",
      description:
        "Understanding your needs and defining project specifications to create a clear roadmap.",
      icon: Users,
    },
    {
      title: "Design & Prototyping",
      description:
        "Creating wireframes and prototypes to visualize the software and gather early feedback.",
      icon: Monitor,
    },
    {
      title: "Development & Testing",
      description:
        "Building the solution using the latest technologies, with continuous testing for quality assurance.",
      icon: Code,
    },
    {
      title: "Deployment & Integration",
      description:
        "Seamlessly deploying the solution and integrating it with existing systems and workflows.",
      icon: Shield,
    },
    {
      title: "Feedback & Iteration",
      description:
        "Collecting user feedback to make necessary improvements and ensure optimal performance.",
      icon: Cog,
    },
  ],
  technologies: [
    {
      name: "React.js",
      icon: FaReact,
      description: "JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      icon: FaNode,
      description: "JavaScript runtime for building server-side applications.",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description:
        "React framework for server-side rendering and static site generation.",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      description: "Fast and minimalist web framework for Node.js.",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "NoSQL database for flexible data storage and management.",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      description:
        "Advanced open-source relational database for complex queries.",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Utility-first CSS framework for styling web applications.",
    },
  ],
};
