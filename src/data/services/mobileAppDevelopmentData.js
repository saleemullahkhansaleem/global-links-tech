import {
  Smartphone,
  Gauge,
  Code,
  Shield,
  Search,
  Monitor,
  Lightbulb,
  Server,
  CheckCircle,
  ListRestart,
  Wind,
} from "lucide-react";
import { FaReact, FaNode, FaPhp } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiGraphql,
  SiFirebase,
  SiIos,
  SiAndroid,
} from "react-icons/si";

export const mobileAppDevelopmentData = {
  title: "Mobile App Development",
  description:
    "Building fast, reliable, and intuitive mobile applications that enhance user experiences across iOS and Android platforms.",
  features: [
    {
      title: "Cross-Platform Apps",
      description:
        "We develop apps that work seamlessly on both iOS and Android using modern technologies like React Native.",
      icon: Smartphone,
    },
    {
      title: "Optimized Performance",
      description:
        "We ensure smooth performance by utilizing state-of-the-art frameworks to minimize load times and maximize responsiveness.",
      icon: Gauge,
    },
    {
      title: "Custom UI/UX",
      description:
        "Tailored design solutions to create visually appealing and user-friendly interfaces that enhance user engagement.",
      icon: Code,
    },
    {
      title: "Security First",
      description:
        "Your app is built with top-tier security measures to safeguard user data and protect against cyber threats.",
      icon: Shield,
    },
    {
      title: "App Store Optimization",
      description:
        "Our apps are optimized for better rankings on app stores, improving visibility and driving user downloads.",
      icon: Search,
    },
    {
      title: "Real-Time Updates",
      description:
        "We integrate features like push notifications and real-time data updates to keep users engaged and informed.",
      icon: Wind,
    },
  ],
  process: [
    {
      title: "Idea & Planning",
      description:
        "We start by understanding your app’s core idea, target audience, and business objectives.",
      icon: Lightbulb,
    },
    {
      title: "UI/UX Design",
      description:
        "Our team crafts beautiful, intuitive interfaces that align with your brand and provide a seamless user experience.",
      icon: Monitor,
    },
    {
      title: "Development",
      description:
        "We use technologies like React Native and Firebase to build fast, scalable mobile applications.",
      icon: Code,
    },
    {
      title: "Testing & QA",
      description:
        "We rigorously test your app to ensure it is free of bugs and works flawlessly across different devices and platforms.",
      icon: CheckCircle,
    },
    {
      title: "Launch",
      description:
        "We help you launch your app on the App Store and Google Play, ensuring a smooth deployment.",
      icon: Server,
    },
    {
      title: "Post-Launch Support",
      description:
        "We offer continuous support and updates, ensuring your app evolves to meet user needs and market trends.",
      icon: ListRestart,
    },
  ],
  technologies: [
    {
      name: "React Native",
      icon: FaReact,
      description: "JavaScript framework for building mobile apps",
    },
    {
      name: "Node.js",
      icon: FaNode,
      description: "JavaScript runtime for backend services",
    },
    {
      name: "PHP",
      icon: FaPhp,
      description: "Backend scripting for server-side logic",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      description: "Google’s mobile app backend platform",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      description: "Data query language for real-time APIs",
    },
    {
      name: "iOS Development",
      icon: SiIos,
      description: "Building apps for Apple's iOS platform",
    },
    {
      name: "Android Development",
      icon: SiAndroid,
      description: "Building apps for Android devices",
    },
    {
      name: "MUI",
      icon: SiMui,
      description: "Material UI components for mobile apps",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Utility-first CSS framework for styling",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      description: "Powerful animation library for React Native",
    },
  ],
};
