import {
  ShoppingCart,
  CreditCard,
  Globe,
  Shield,
  Package,
  TrendingUp,
  Truck,
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

export const ecommerceSolutionsData = {
  title: "E-commerce Solutions",
  description:
    "From user-friendly online stores to complex e-commerce platforms, we create tailored solutions that drive sales, enhance customer experience, and streamline operations.",
  features: [
    {
      title: "Custom Storefronts",
      description:
        "We build personalized, visually stunning storefronts that are designed to convert visitors into customers.",
      icon: ShoppingCart,
    },
    {
      title: "Secure Payment Integration",
      description:
        "Seamless integration of secure payment gateways, ensuring safe transactions and boosting customer trust.",
      icon: CreditCard,
    },
    {
      title: "Global Reach",
      description:
        "Expand your business with multi-currency and multilingual support for a truly global reach.",
      icon: Globe,
    },
    {
      title: "Robust Security",
      description:
        "Our e-commerce solutions are built with security at the core, protecting sensitive data and transactions.",
      icon: Shield,
    },
    {
      title: "Inventory Management",
      description:
        "Manage your inventory efficiently with real-time tracking and automated updates.",
      icon: Package,
    },
    {
      title: "Advanced Analytics",
      description:
        "Track and analyze your store’s performance with detailed analytics and reporting tools.",
      icon: TrendingUp,
    },
  ],
  process: [
    {
      title: "Consultation & Planning",
      description:
        "We collaborate with you to understand your business needs and goals, creating a roadmap for success.",
      icon: Users,
    },
    {
      title: "Design & Development",
      description:
        "Our team designs and develops custom e-commerce solutions that are tailored to your brand and business objectives.",
      icon: Monitor,
    },
    {
      title: "Integration & Setup",
      description:
        "We integrate necessary third-party services, including payment gateways and shipping APIs, for a smooth operation.",
      icon: Truck,
    },
    {
      title: "Quality Assurance",
      description:
        "We ensure the highest quality with rigorous testing to ensure that your e-commerce platform runs seamlessly.",
      icon: Shield,
    },
    {
      title: "Launch & Support",
      description:
        "Post-launch, we provide continuous support to ensure your platform remains secure and updated.",
      icon: Package,
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
