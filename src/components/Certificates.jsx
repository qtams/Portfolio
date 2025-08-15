import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollVelocity from "./ScrollVelocity";
import AOS from "aos";
import "aos/dist/aos.css";

function Certificates() {
  const velocity = 100;
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef(null);

  const certificateImages = [
    "ChatGPT.jpg",
    "Database.jpg",
    "Excel.jpg",
    "HTML.jpg",
    "Leadership.jpg",
    "Micro.jpg",
    "Outlook.jpg",
    "PowerPoint.jpg",
    "UE.png",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

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

  const visibleCertificates = showAll
    ? certificateImages
    : isMobile
    ? certificateImages.slice(0, 4)
    : certificateImages.slice(0, 8);

  const handleToggle = () => {
    setShowAll((prev) => {
      const next = !prev;
      setTimeout(() => {
        gridRef.current?.scrollIntoView({
          behavior: "smooth",
          block: next ? "start" : "center",
        });
      }, 150);
      return next;
    });
  };

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center gap-10  py-20"
    >
      {/* Scrolling Text */}
      <div className="w-full">
        <ScrollVelocity
          texts={["Certificate", "Awards"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>

      {/* Description */}
      <p
        className="text-sm sm:text-base md:text-lg text-center max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="1000"
      >
        A collection of certifications I've earned through dedicated learning
        and professional development in various technologies and soft skills.
      </p>

      <div className="flex flex-col px-6 sm:px-10 md:px-56 xl:px-40 2xl:px-80 items-center justify-center">
        {/* Certificate Grid */}
        <div
          className={`grid gap-6 w-full mt-10 ${
            isMobile
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
          }`}
        >
          {visibleCertificates.map((img, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50} // stagger 100ms between certificates
              data-aos-duration="500" // animation duration 0.8s
              className="border p-2 rounded-lg shadow-md bg-white dark:bg-zinc-900 cursor-pointer"
              onClick={() => setSelectedImg(`/images/certificates/${img}`)}
            >
              <img
                src={`/images/certificates/${img}`}
                alt={`Certificate ${index + 1}`}
                className="w-full h-40 md:h-48 object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        {certificateImages.length > (isMobile ? 4 : 8) && (
          <div className="mt-6">
            <motion.button
              layout
              onClick={handleToggle}
              className="px-6 py-2 bg-[#242124] text-white rounded-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {showAll ? "Show Less ▲" : "Show More ▼"}
            </motion.button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImg}
                  alt="Enlarged Certificate"
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Certificates;
