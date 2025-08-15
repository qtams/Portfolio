import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function GetInTouch() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,    // animate multiple times if scrolled back
      mirror: true,   // animate again on scroll up
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="socials"
      className="py-16 px-6 sm:px-10 md:px-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-down"
        >
          My Socials
        </h2>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto mb-10"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Connect with me through my social media platforms.
        </p>

        {/* Social Icons */}
        <ul className="flex justify-center text-3xl gap-8">
          {[
            { href: "https://www.facebook.com/emohamat", icon: "fab fa-facebook", color: "hover:text-blue-600", title: "Facebook" },
            { href: "https://www.instagram.com/itzme.tams/?next=%2F", icon: "fab fa-instagram", color: "hover:text-pink-500", title: "Instagram" },
            { href: "mailto:mr.tamahome.buendia@gmail.com", icon: "fas fa-envelope", color: "hover:text-red-500", title: "Email Me" },
          ].map((social, index) => (
            <li
              key={social.title}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger effect
            >
              <a
                className={`social-icon ${social.color} transition-transform transform hover:scale-125`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
              >
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
