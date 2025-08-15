import TextType from "./TextType";

import CircularGallery from "./CircularGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects({ isLight }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center  "
    >
      {/* Title */}
      <div
        className="flex flex-col items-center justify-center gap-10"
        data-aos="fade-down"
        data-aos-delay="0"
        data-aos-duration="1000"
      >
        <TextType
          text={["Web Project", "Web-based system", "Responsive design"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={true}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-left"
        />

        {/* Subtitle */}
        <p
          className="text-sm sm:text-base md:text-lg text-center max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="2000"
        >
          Showcasing the systems and technologies behind my responsive,
          full-stack web solutions.
        </p>
      </div>

      <div style={{ height: "600px", position: "relative" }} className="w-full" data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="2000">
        <CircularGallery
          bend={0}
          textColor={isLight ? "#000000" : "#ffffff"} // Change based on theme
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}

export default Projects;
