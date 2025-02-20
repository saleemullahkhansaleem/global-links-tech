import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BackToTopButton, MrCard } from ".";
import { LogoMHS } from "./Header";
import { menu, servicesData } from "@/data";
import { MoveRight } from "lucide-react";
import { SocialBar } from "./landingpage/HeroSection";

const contactInfo = [
  {
    icon: FaEnvelope,
    text: "info@globallinkstechnologies.com",
    path: "mailto:info@globallinkstechnologies.com",
  },
  { icon: FaPhone, text: "+9251 8739 888", path: "tel:+92518739888" },
  {
    icon: FaMapMarkerAlt,
    text: "Third Floor, Al-Malik Centre, 70-West, Jinnah Avenue, Blue Area, Islamabad.",
  },
];

export default function Footer() {
  return (
    <footer className="w-full transition-colors duration-300 relative bg-primary/10 border-t border-primary">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 md:py-16 px-4 md:px-6">
        <div>
          <div className="mb-4">
            <LogoMHS />
          </div>
          <p className="p-4">
            Global Links Technologies provides cutting-edge technology solutions
            to businesses worldwide. From software development to consultancy,
            we help you achieve your digital transformation goals.
          </p>
          <form className="flex p-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-primary/50 focus:outline-none bg-background text-foreground"
            />
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 hover:bg-primary-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Services and Company Links */}
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesData.map(({ title, url }) => (
                <li key={title}>
                  <Link to={url} className="group/link flex items-center gap-2">
                    <MoveRight size={16} className="text-primary" />
                    <span className="group-hover/link:translate-x-2 transition-transform">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {menu.main.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group/link flex items-center gap-2"
                  >
                    <MoveRight size={16} className="text-primary" />
                    <span className="group-hover/link:translate-x-2 transition-transform">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info and Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, text, path }) =>
              path ? (
                <Link
                  to={path}
                  key={text}
                  className="flex items-center space-x-4"
                >
                  <Icon className="mt-1 text-primary" size={20} />
                  <span>{text}</span>
                </Link>
              ) : (
                <div key={text} className="flex items-center space-x-4">
                  <Icon className="mt-1 text-primary" size={20} />
                  <span>{text}</span>
                </div>
              )
            )}
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <SocialBar />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary/20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
          <p className="text-sm mb-4 sm:mb-0">
            Developed in{" "}
            <Link
              target="_blank"
              className="text-primary hover:underline"
              to={"https://mhstechventures.com/"}
            >
              MHS Tech Ventures
            </Link>{" "}
            | © 2024 Global Links Technologies. All rights reserved.
          </p>
          <MrCard />
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            {[
              { name: "Terms of Service", link: "/terms-of-services" },
              { name: "Privacy Policy", link: "/privacy-policy" },
            ].map((item) => (
              <Link
                key={item.name}
                className="text-sm hover:text-primary transition-colors"
                to={item.link}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
}
