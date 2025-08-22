"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectsInfoCard from "./ProjectsInfoCard";
import ResumeCard from "./ResumeCard";

// Desktop animations
const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

// Mobile animation (simplified)
const mobileFade = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={isMobile ? mobileFade.initial : slideInLeft.initial}
          whileInView={isMobile ? mobileFade.animate : slideInLeft.animate}
          transition={isMobile ? mobileFade.transition : slideInLeft.transition}
          viewport={{ once: false, amount: 0.3 }}
          className={`${isMobile ? "pl-14" : ""} space-y-12`}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="font-semibold hover:scale-[1.02] inline-block transition-transform duration-200">
                Amaan Shaikh
              </span>
              .
            </h2>
            <p className="font-light text-base mt-4 italic">
              Bachelor in Artificial Intelligence & Data Science
            </p>
          </div>

          <motion.button
            initial={isMobile ? mobileFade.initial : fadeInUp.initial}
            whileInView={isMobile ? mobileFade.animate : fadeInUp.animate}
            transition={isMobile ? mobileFade.transition : fadeInUp.transition}
            viewport={{ once: false, amount: 0.3 }}
            onClick={scrollToContact}
            className="group flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowUpRight
              size={20}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={isMobile ? mobileFade.initial : slideInRight.initial}
          whileInView={isMobile ? mobileFade.animate : slideInRight.animate}
          transition={
            isMobile ? mobileFade.transition : slideInRight.transition
          }
          viewport={{ once: false, amount: 0.3 }}
          className={`${isMobile ? "mr-[30px]" : ""}`}
        >
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-light text-gray-800">
            I&apos;m a{" "}
            <span className="font-medium text-black hover:bg-gray-100 px-1 rounded transition-colors duration-200">
              web developer
            </span>{" "}
            passionate about transforming ideas into meaningful digital
            experiences.
          </p>

          <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-light text-gray-800 pb-8">
            From concept to deployment, I craft{" "}
            <span className="font-medium text-black hover:bg-gray-100 px-1 rounded transition-colors duration-200">
              scalable, high-quality solutions
            </span>{" "}
            that deliver impact and elevate user experience.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 w-full">
            <div>
              <h3 className="text-3xl font-black hover:scale-105 transition-transform duration-200">
                7+
              </h3>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black hover:scale-105 transition-transform duration-200">
                21+
              </h3>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Technologies in Use
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <motion.div
        initial={isMobile ? mobileFade.initial : fadeInUp.initial}
        whileInView={isMobile ? mobileFade.animate : fadeInUp.animate}
        transition={{
          ...(isMobile
            ? mobileFade.transition
            : { ...fadeInUp.transition, delay: 0.1 }),
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 w-full mt-10 flex-wrap"
      >
        <ProjectsInfoCard />
        <ResumeCard />
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-24 flex justify-center"
      >
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent" />
      </motion.div>
    </section>
  );
};

export default About;
