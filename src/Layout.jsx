import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";
import { useEffect, useState } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      className={`max-w-[100vw] overflow-hidden dark:text-white ${
        darkMode ? "dark" : ""
      }`}
    >
      <ScrollToTop />
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </main>
  );
}
