"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

const sectionIds = ["hero", "about", "experience", "projects", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const hash = id === "hero" ? "" : `#${id}`;
            if (window.location.hash !== (hash || "#")) {
              window.history.replaceState(null, "", hash || window.location.pathname);
            }
            setActiveSection(id);
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl">
        <HeroPage />
        <AboutPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
      </main>
      <ScrollToTop />
    </div>
  );
}
