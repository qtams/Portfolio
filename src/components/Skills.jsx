import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText from "./RotatingText";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills({ isLight }) {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);

  const skills = [
    { name: "HTML", icon: "html5/html5-original.svg" },
    { name: "CSS", icon: "css3/css3-original.svg" },
    { name: "Alpine.JS", icon: "alpinejs/alpinejs-original.svg" },
    { name: "PHP", icon: "php/php-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
    { name: "Figma", icon: "figma/figma-original.svg" },
    { name: "GitHub", icon: "/images/icons/git.png" },
    { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "java/java-original.svg" },
  ];

  const initialVisibleCount = 6;
  const visibleSkills =
    isMobile && !showMore ? skills.slice(0, initialVisibleCount) : skills;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-10 px-6 sm:px-10 md:px-56 xl:px-40 2xl:px-80 py-20"
    >
      {/* Rotating Text */}
      <div
        className="flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-down"
        data-aos-delay="0"
        data-aos-duration="1000"
      >
        <RotatingText
          texts={["Web Design", "Frameworks", "Front-End", "Back-End"]}
          mainClassName="text-3xl sm:text-4xl md:text-5xl px-4 py-2 rounded-lg font-bold text-white justify-center bg-[#242124]"
          style={{ backgroundColor: "#242124" }}
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      {/* Subtitle */}
      <p
        className="text-sm sm:text-base md:text-lg text-center max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="2000"
      >
        A collection of technologies I use to design responsive front-end
        interfaces, build powerful back-end systems, and deliver full-stack web
        applications.
      </p>

      {/* Skills Grid */}
      <div
        className={`grid gap-6 w-full mt-10 ${
          isMobile
            ? "grid-cols-2"
            : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {visibleSkills.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger 100ms between cards
            data-aos-duration="800" // each animation lasts 0.8s
            className={`flex items-center gap-4 border rounded-md p-4 hover:scale-105 transition-transform duration-300 ${
              isLight ? "border-black" : "border-white"
            }`}
          >
            <img
              src={
                skill.icon.startsWith("/")
                  ? skill.icon
                  : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`
              }
              alt={skill.name}
              className="w-5 h-5 sm:w-8 sm:h-8 object-contain"
            />
            <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      {isMobile && (
        <div className="mt-6">
          <motion.button
            layout
            onClick={() => setShowMore((prev) => !prev)}
            className="px-6 py-2 bg-[#242124] text-white rounded-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </motion.button>
        </div>
      )}
    </section>
  );
}

export default Skills;
