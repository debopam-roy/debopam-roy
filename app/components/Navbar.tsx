"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white h-16 sm:h-20 lg:h-24 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        <nav className="flex w-full h-full items-center justify-between px-5 py-3 sm:px-8 sm:py-4 max-w-7xl mx-auto">
          <a href="#hero">
            <UserLogo />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="relative font-bold text-lg pb-1 inline-block transition-transform duration-200 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop resume button */}
          <div className="hidden lg:block">
            <ResumeButton />
          </div>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} className="sm:hidden" /> : <Menu size={24} className="sm:hidden" />}
            {menuOpen ? <X size={28} className="hidden sm:block" /> : <Menu size={28} className="hidden sm:block" />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="font-bold text-2xl transition-transform duration-200 hover:scale-110 sm:text-3xl"
            >
              {label}
            </a>
          ))}
          <div className="mt-4">
            <ResumeButton />
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 px-5 flex flex-col items-center gap-1 text-xs text-gray-600 sm:bottom-8 sm:px-8 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Debopam Roy. All rights reserved.</p>
          <p>Designed &amp; built with passion and a lot of coffee.</p>
        </div>
      </div>
    </>
  );
};
