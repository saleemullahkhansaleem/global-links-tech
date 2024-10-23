import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { menu } from "@/data";

export default function Header({ setDarkMode, darkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <header className="px-4 lg:px-6 h-14 xl:h-20 fixed w-full bg-background z-50 transition-colors duration-300 shadow-lg">
        <div className="container mx-auto flex items-center justify-between gap-4 h-full">
          <LogoMHS lg />
          <nav className="hidden xl:flex">
            {menu.main.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium bg-primary/10 transition-colors border-b-2 border-primary py-2 px-4 flex items-center"
                    : "text-sm font-medium hover:text-primary transition-colors border-b-2 border-transparent py-2 px-4 flex items-center"
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-auto xl:ml-2"
          >
            {darkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 xl:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background pt-16 xl:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-2">
              {menu.main.map((item) => (
                <NavLink
                  key={item.name}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium text-primary transition-colors py-2"
                      : "text-lg font-medium hover:text-primary transition-colors py-2"
                  }
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function LogoMHS({ lg = false }) {
  return (
    <Link className="flex items-center" to="/">
      <img
        src="/images/logos/logo.png"
        alt="Global Links Technologies Logo"
        className={`h-8 ${lg ? "xl:h-14" : "xl:h-12"}`}
      />
      <div className="hidden lg:block">
        <h1
          className={`ml-2 ${
            lg ? "xl:text-xl" : "xl:text-lg"
          } font-semibold text-primary uppercase text-lg`}
        >
          Global Links Technologies
        </h1>
        <p className={`ml-2 text-xs text-primary uppercase text-right`}>
          Private Limited
        </p>
      </div>
    </Link>
  );
}
