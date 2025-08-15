import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Threads from "./components/Threads";
import GetInTouch from "./components/GetInTouch";
import BlurText from "./components/BlurText";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLight, setIsLight] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    // Loader -> Welcome
    const loaderTimer = setTimeout(() => {
      setShowLoader(false); // fade out loader
      setShowWelcome(true); // show welcome

      // Hide welcome after 2s
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 2000);

      return () => clearTimeout(welcomeTimer);
    }, 2000);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isLight ? "bg-white text-black" : "bg-black text-white"
      } transition-colors duration-500`}
    >
      {/* LOADER */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black text-white z-50 transition-opacity duration-700 ${
          showLoader
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
          <span className="text-lg font-semibold">Loading...</span>
        </div>
      </div>

      {/* WELCOME TEXT */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black text-white z-50 transition-opacity duration-700 ${
          showWelcome
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {showWelcome && (
          <BlurText
            key={showWelcome ? "welcome-on" : "welcome-off"} // 🔑 ensures re-animation
            text="Welcome to my Portfolio!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4"
          />
        )}
      </div>

      {/* MAIN CONTENT */}
      {!showLoader && !showWelcome && (
        <>
          {/* Threads Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
              color={isLight ? [0, 0, 0] : [1, 1, 1]}
            />
          </div>

          {/* Foreground */}
          <div className="relative z-10 transition-opacity duration-700 opacity-100">
            <Navbar
              isLight={isLight}
              toggleTheme={() => setIsLight(!isLight)}
            />
            <main className="flex flex-col mt-20 2xl:gap-40">
              <section id="introduction">
                <Introduction />
              </section>
              <section id="About">
                <About />
              </section>
              <section id="Skills">
                <Skills isLight={isLight} />
              </section>
              <section id="Certificates">
                <Certificates isLight={isLight} />
              </section>
              <section id="Projects">
                <Projects isLight={isLight} />
              </section>
              <section id="GetInTouch">
                <GetInTouch isLight={isLight} />
              </section>
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
