import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export const menu = {
  main: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact-us" },
    { name: "Career", path: "/careers" },
  ],
  services: [
    { name: "Web Development", path: "/services/web-development" },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app-development",
    },
    {
      name: "Portal Management Systems",
      path: "/services/portal-management-systems",
    },
    { name: "E-commerce Solutions", path: "/services/e-commerce-solutions" },
  ],
  social: [
    { name: "Facebook", path: "https://facebook.com", icon: FaFacebookF },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/company/global-links-tech/",
      icon: FaLinkedinIn,
    },
    { name: "YouTube", path: "https://youtube.com", icon: FaYoutube },
    { name: "Instagram", path: "https://instagram.com", icon: FaInstagram },
  ],
};
