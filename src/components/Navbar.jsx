// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TextPressure from "./TextPressure";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar({ isLight, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBgClass = isLight ? "bg-white" : "bg-black";
  const textColorClass = isLight ? "text-black" : "text-white";

  const navLinks = ["about", "skills", "certificates", "projects", "socials"];

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: true,     // only animate once
    });
  }, []);

  return (
    <nav
      className={`${navBgClass} ${textColorClass} shadow-md py-6 px-6 sm:px-10 fixed top-0 left-0 right-0 z-50 transition-colors duration-500 w-full`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with AOS */}
        <a
          href="#"
          data-aos="fade-down"
          className="font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Tamahome Buendia
        </a>

        {/* Hamburger - Only on small screens */}
        <button
          className={`md:hidden z-20 ${textColorClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Nav links - desktop */}
        <ul
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 font-semibold ${textColorClass}`}
        >
          {navLinks.map((section, i) => (
            <li
              key={section}
              data-aos="fade-down"
              data-aos-delay={i * 150} // stagger animation
              className="group transition-transform duration-200 hover:scale-105 flex items-center justify-center"
            >
              <a
                href={`#${section}`}
                className={`capitalize px-4 py-2 rounded-md transition-all duration-300 nav-link w-24 text-center font-bold ${textColorClass}`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="z-20">
          <button
            onClick={toggleTheme}
            className={`transition-transform duration-200 hover:scale-110 ${textColorClass}`}
            aria-label="Toggle theme"
          >
            {isLight ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden mt-4 px-4 flex flex-col gap-4 items-center ${textColorClass}`}
        >
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMenuOpen(false)}
              className="capitalize text-lg font-semibold"
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
