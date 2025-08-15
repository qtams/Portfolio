import { useState } from "react";
import TextType from "./TextType";
import SplitText from "./SplitText";
import "./TextEffect.css";
import ProfileCard from "./ProfileCard";
import DecryptedText from "./DecryptedText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";;

function Introduction() {
  const handleResumeDownload = () => {
    window.open("/files/TamahomeBuendia_Resume.pdf", "_blank");
  };
    useEffect(() => {
      AOS.init({
        duration: 3000,
        once: false,
        mirror: true,
      });
    }, []);

  return (
    <div className="w-full px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-64 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 2xl-gap-52">
        {/* TEXT SIDE */}
<div
  className="flex flex-col gap-6 w-full lg:w-1/2"
  data-aos="fade-right"
        data-aos-delay="2000"
        data-aos-duration="2000"
>
  <SplitText
    text="Hello, there!"
    className="font-semibold text-lg sm:text-xl"
    textAlign="left"
    splitType="chars"
    delay={40}
  />

  <TextType
    text={[
      "I'm Tamahome Buendia",
      "Aspiring Web Developer",
      "Front-End Developer",
      "From the Philippines",
    ]}
    typingSpeed={100}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="|"
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-left"
  />

  {/* Decrypted Subtitle */}
  <div className="flex flex-col text-left text-base sm:text-lg">
    <DecryptedText
      text="A motivated and quick learner in web development, passionate about building responsive interfaces,"
      speed={100}
      maxIterations={20}
      characters="ABCD1234!?"
      className="revealed text-md"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
    />
    <DecryptedText
      text="mastering modern frameworks, and delivering meaningful digital experiences."
      speed={100}
      maxIterations={20}
      characters="ABCD1234!?"
      className="revealed text-md"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
    />
  </div>
</div>

{/* PROFILE CARD SIDE */}
<div
  className="w-full lg:w-1/2 flex flex-col items-center justify-center"
  data-aos="fade-up"
        data-aos-delay="2000"
        data-aos-duration="2000"
>
  <ProfileCard
    handle="tamahome"
    status="Available"
    contactText="Download Resume"
    avatarUrl="/images/pictures/tam2.png"
    showUserInfo={true}
    enableTilt={true}
    enableMobileTilt={false}
    showName={false}
    onContactClick={handleResumeDownload}
  />
</div>

      </div>
    </div>
  );
}

export default Introduction;
