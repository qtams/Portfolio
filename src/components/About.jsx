import TiltedCard from "./TiltedCard";
import SpotlightCard from "./SpotlightCards";
import TextType from "./TextType";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-10 px-8 sm:px-10 md:px-56 xl:px-40 2xl:px-80 py-20"
    >
      {/* Top Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Left Side - Tilted Image */}
        {/* Left Side - Tilted Image */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          <TiltedCard
            imageSrc="/images/pictures/tam1.jpg"
            altText="About"
            captionText="Tamahome POGI"
            containerHeight="320px"
            containerWidth="320px"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>

        {/* Right Side - Text */}
        <div
          className="w-full md:w-4/5 2xl:w-[80%] text-center md:text-left space-y-4"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <TextType
            text={["About Me", "Who Am I?", "Let’s Get to Know Me!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-left"
          />

          <p className="leading-relaxed font-semibold">
            I’m Tamahome Buendia, a passionate web developer dedicated to
            creating intuitive and visually engaging web experiences. With a
            focus on front-end technologies, I love building responsive
            interfaces that bring ideas to life.
          </p>
          <p className="leading-relaxed font-semibold">
            Whether it's clean code, creative design, or performance
            optimization, I'm always pushing to improve and learn something new
            every day.
          </p>

          {/* Cards Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-10"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <SpotlightCard className="custom-spotlight-card">
              <div className="flex flex-col gap-2 text-black dark:text-white justify-center">
                <span className="font-bold">Education</span>
                <span className="text-xs xl:text-xs">BSIT</span>
                <span className="text-xs xl:text-xs">
                  University of the East
                </span>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card">
              <div className="flex flex-col gap-2 text-black dark:text-white justify-center">
                <span className="font-bold">Address</span>
                <span className="text-xs xl:text-xs">San Vicente</span>
                <span className="text-xs xl:text-xs">Santa Maria Bulacan</span>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card">
              <div className="flex flex-col gap-2 text-black dark:text-white justify-center">
                <span className="font-bold">Experties</span>
                <span className="text-xs xl:text-xs">Web Developer</span>
                <span className="text-xs xl:text-xs">Front-end Developer</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
