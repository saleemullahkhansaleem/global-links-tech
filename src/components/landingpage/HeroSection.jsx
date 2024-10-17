import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { menu } from "@/data";
import { Heading } from "..";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-screen pt-20 bg-primary/5">
      <h1 className="absolute top-1/2 right-0 h-2/3 w-auto text-9xl text-left font-extrabold uppercase text-primary/10 text-nowrap">
        Global <br /> Links <br /> <span className="">Technologies</span>
      </h1>
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
        <img
          src="/images/hero-img.webp"
          alt="hero image"
          className="object-cover mx-auto md:mr-0 md:ml-auto md:order-2"
        />
        <div className="flex flex-col space-y-12 relative z-10 md:col-auto">
          <div className="space-y-8 max-w-4xl">
            <SocialBar />

            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none"
            >
              Empowering Your <Heading>Business</Heading> with{" "}
              <Heading>Innovative Technology</Heading>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-backgroundMuted md:text-2xl/relaxed"
            >
              At Global Links Technologies, we provide tailored IT solutions,
              from strategic consultancy to custom software development, helping
              businesses excel globally.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button size="lg" asChild>
              <Link to="/get-started">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex gap-4 group-social-link"
    >
      {menu.social.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          title={link.name}
          className="group/social-link hover:text-primary transition p-3 bg-primary/10 hover:bg-primary/20 border-l-2 border-primary rounded-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon size={20} className="group-hover/social-link:scale-125" />
        </Link>
      ))}
    </motion.div>
  );
}
