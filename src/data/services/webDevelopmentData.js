import {
  ChartColumn,
  CheckCircle,
  Code,
  Database,
  Gauge,
  Lightbulb,
  ListRestart,
  Monitor,
  Search,
  Server,
  Shield,
  Smartphone,
  Wind,
  LayoutDashboard,
} from "lucide-react";
import { FaNode, FaReact, FaPhp } from "react-icons/fa";
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiShadcnui,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiFramer,
} from "react-icons/si";

export const webDevelopmentData = {
  title: "Web Development",
  description:
    "Empowering your business with responsive, dynamic, and scalable web development solutions tailored to your unique needs.",
  features: [
    {
      title: "Responsive Design",
      description:
        "Our web development services ensure that your website looks stunning and functions seamlessly across all screen sizes, including desktops, tablets, and mobile devices.",
      icon: Smartphone,
    },
    {
      title: "Performance Optimization",
      description:
        "We leverage state-of-the-art technologies like React.js and Next.js to optimize loading times and deliver high-performance websites that engage your visitors.",
      icon: Gauge,
    },
    {
      title: "Custom Development",
      description:
        "No templates or generic solutions here. Every website we build is tailored to your specific needs, using clean, scalable code.",
      icon: Code,
    },
    {
      title: "SEO-Friendly",
      description:
        "We follow best practices for SEO to ensure your website is discoverable by search engines, improving your visibility and driving traffic to your business.",
      icon: Search,
    },
    {
      title: "Security",
      description:
        "We prioritize security by implementing industry-standard protocols, ensuring your website and user data are protected against potential threats.",
      icon: Shield,
    },
    {
      title: "Data-Driven Solutions",
      description:
        "We integrate powerful data handling and visualization techniques to help you make informed decisions.",
      icon: ChartColumn,
    },
  ],
  process: [
    {
      title: "Discovery and Planning",
      description:
        "We collaborate with you to understand your business goals, target audience, and the key functionalities your website needs.",
      icon: Lightbulb,
    },
    {
      title: "Design and Prototyping",
      description:
        "Our design team creates mockups and prototypes to bring your vision to life, ensuring the website aligns with your brand’s identity.",
      icon: Monitor,
    },
    {
      title: "Development",
      description:
        "Our experienced developers use modern frameworks like React.js, Next.js, and Tailwind CSS to build a fast, reliable, and maintainable website.",
      icon: Code,
    },
    {
      title: "Testing and Launch",
      description:
        "We rigorously test your website for performance, functionality, and cross-browser compatibility before launching it to the public.",
      icon: CheckCircle,
    },
    {
      title: "Ongoing Support",
      description:
        "We provide ongoing maintenance and updates to keep your website secure and up to date.",
      icon: Server,
    },
    {
      title: "Continuous Improvement",
      description:
        "We actively analyze and improve your website to adapt to market needs and user feedback.",
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
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Utility-first CSS framework for styling",
    },
    {
      name: "Shadcn/UI",
      icon: SiShadcnui,
      description: "UI library built on top of Tailwind CSS",
    },
    {
      name: "RESTful APIs",
      icon: Server,
      description: "APIs following REST architectural style",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      description: "Data query language for APIs",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      description: "Popular front-end framework for responsive designs",
    },
    {
      name: "MUI",
      icon: SiMui,
      description: "React UI framework with prebuilt components",
    },
    {
      name: "PHP",
      icon: FaPhp,
      description: "Server-side scripting language for web development",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      description: "Animation library for React applications",
    },
  ],
};
