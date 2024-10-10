import {
  LayoutDashboard,
  Server,
  Shield,
  Database,
  Search,
  Code,
  ListRestart,
  CheckCircle,
  Monitor,
  Lightbulb,
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

export const portalManagementSystemsData = {
  title: "Portal Management Systems",
  description:
    "Delivering scalable, secure, and user-friendly portal management systems tailored to the needs of organizations. Our solutions provide seamless interaction between businesses, employees, and customers.",
  features: [
    {
      title: "User Management",
      description:
        "We create comprehensive user management systems that allow easy access control and role-based permissions for different user types.",
      icon: LayoutDashboard,
    },
    {
      title: "Data Security",
      description:
        "Your data is safe with us. We follow strict security protocols to ensure that sensitive information is protected from unauthorized access.",
      icon: Shield,
    },
    {
      title: "Custom Workflows",
      description:
        "We design custom workflows to streamline your business operations, helping you improve efficiency and productivity.",
      icon: Code,
    },
    {
      title: "Data Storage Solutions",
      description:
        "We offer robust data storage solutions that integrate with both SQL and NoSQL databases for flexible and scalable data management.",
      icon: Database,
    },
    {
      title: "Advanced Search",
      description:
        "Our portal systems come with advanced search functionalities to help users find the data and documents they need quickly and easily.",
      icon: Search,
    },
    {
      title: "Performance Optimization",
      description:
        "Optimized portals to handle heavy traffic while maintaining fast loading times and a seamless user experience.",
      icon: Server,
    },
  ],
  process: [
    {
      title: "Discovery and Planning",
      description:
        "We work closely with your team to understand your business needs, identify key challenges, and plan an efficient system.",
      icon: Lightbulb,
    },
    {
      title: "Design and Prototyping",
      description:
        "Our team designs user-centric portals with intuitive interfaces, followed by prototyping for early feedback.",
      icon: Monitor,
    },
    {
      title: "Development",
      description:
        "We build scalable and secure portal systems using modern technologies like React.js, Node.js, and databases like PostgreSQL and MongoDB.",
      icon: Code,
    },
    {
      title: "Testing and Deployment",
      description:
        "We conduct rigorous testing to ensure the system works as expected before deploying it to your environment.",
      icon: CheckCircle,
    },
    {
      title: "Post-Launch Support",
      description:
        "Our team provides ongoing support to address any issues and ensure the portal stays up-to-date with new features and security patches.",
      icon: ListRestart,
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
