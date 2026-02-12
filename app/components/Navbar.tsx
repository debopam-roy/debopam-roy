"use client";

import { useState, useEffect } from "react";
import UserLogo from "./UserLogo";
import ResumeButton from "./ResumeButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  // { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 bg-white h-24 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <nav className="flex w-full h-full items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <a href="#hero">
          <UserLogo />
        </a>

        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="relative font-bold text-lg pb-1 inline-block transition-transform duration-200 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ResumeButton />
      </nav>
    </header>
  );
};
