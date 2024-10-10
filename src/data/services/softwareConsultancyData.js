import {
  Briefcase,
  Lightbulb,
  Layout,
  BarChart,
  Code,
  ShieldCheck,
  Users,
  Monitor,
} from "lucide-react";
import { FaReact, FaNode, FaPhp } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiExpress,
} from "react-icons/si";

export const softwareConsultancyData = {
  title: "Software Consultancy",
  description:
    "Empowering businesses with strategic software solutions to drive innovation and optimize performance. Our consultancy services help you make informed decisions that align with your business goals.",
  features: [
    {
      title: "Tailored Solutions",
      description:
        "We provide custom solutions that are designed to meet the unique needs of your business, enhancing productivity and efficiency.",
      icon: Briefcase,
    },
    {
      title: "Innovation and Strategy",
      description:
        "Our team of experts works with you to develop innovative strategies that propel your business forward in the digital age.",
      icon: Lightbulb,
    },
    {
      title: "Architecture & Design",
      description:
        "We focus on creating robust software architectures and intuitive designs to ensure scalable and maintainable solutions.",
      icon: Layout,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Our consultancy services include data analysis and insights to help you make informed decisions for better business outcomes.",
      icon: BarChart,
    },
    {
      title: "Development Expertise",
      description:
        "With expertise in a wide range of modern technologies, we help you build scalable and efficient software solutions.",
      icon: Code,
    },
    {
      title: "Security and Compliance",
      description:
        "We ensure that your software solutions are secure, compliant with industry standards, and free of vulnerabilities.",
      icon: ShieldCheck,
    },
  ],
  process: [
    {
      title: "Initial Consultation",
      description:
        "We start by understanding your business challenges and identifying areas where software solutions can bring improvement.",
      icon: Users,
    },
    {
      title: "Technical Roadmap",
      description:
        "We create a clear technical roadmap that outlines the best approach to achieving your software development goals.",
      icon: Lightbulb,
    },
    {
      title: "Design & Development",
      description:
        "Our team designs and develops your custom software solution, ensuring that it is both scalable and efficient.",
      icon: Monitor,
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "We rigorously test the solution to ensure it meets all requirements and performs reliably in different environments.",
      icon: ShieldCheck,
    },
    {
      title: "Post-Launch Support",
      description:
        "After deployment, we provide ongoing support to address any issues and continuously improve the software.",
      icon: Users,
    },
  ],
  technologies: [
    {
      name: "React.js",
      icon: FaReact,
      description: "JavaScript library for building UIs",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description: "React framework for server-side rendering",
    },
    {
      name: "Node.js",
      icon: FaNode,
      description: "JavaScript runtime for building backend services",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      description: "Web framework for Node.js applications",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "NoSQL database for flexible data storage",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      description: "Powerful open-source relational database",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      description: "Data query language for APIs",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Utility-first CSS framework for styling",
    },
    {
      name: "PHP",
      icon: FaPhp,
      description: "Server-side scripting language for web development",
    },
  ],
};
