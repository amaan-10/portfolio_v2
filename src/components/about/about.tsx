"use client";

import { motion } from "framer-motion";
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
  initial: { opacity: 0, y: 30, x: 0 },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const About = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="about"
      className="py-24 sm:px-10 md:px-16 lg:px-20 relative text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 relative z-10">
        {/* Left Column */}
        <motion.div
          initial={isMobile ? mobileFade.initial : slideInLeft.initial}
          whileInView={isMobile ? mobileFade.animate : slideInLeft.animate}
          transition={isMobile ? mobileFade.transition : slideInLeft.transition}
          viewport={{ once: false, amount: 0.3 }}
          className={`${isMobile ? "pl-5" : ""} space-y-12`}
        >
          <div>
            <h2 className="text-[44px] sm:text-5xl xl:text-6xl tracking-tight leading-tight font-gothicSpatial font-black">
              Hi, I am{"  "}
              <span className="font-black block transition-transform duration-200">
                Amaan Shaikh
              </span>
            </h2>
            <p className="text-base mt-4 italic font-gothicWide font-medium">
              Bachelor in Artificial Intelligence and Data Science
            </p>
          </div>

          {/* <motion.button
            initial={isMobile ? mobileFade.initial : fadeInUp.initial}
            whileInView={isMobile ? mobileFade.animate : fadeInUp.animate}
            transition={isMobile ? mobileFade.transition : fadeInUp.transition}
            viewport={{ once: false, amount: 0.3 }}
            onClick={scrollToContact}
            className="group flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-gothicWide font-medium tracking-wide hover:bg-gray-300 group-hover:scale-105 transition-all duration-300"
          >
            <ArrowUpRight
              size={20}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
            Get in Touch
          </motion.button> */}
          <motion.div
            initial={isMobile ? mobileFade.initial : fadeInUp.initial}
            whileInView={isMobile ? mobileFade.animate : fadeInUp.animate}
            transition={isMobile ? mobileFade.transition : fadeInUp.transition}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <ResumeCard />
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={isMobile ? mobileFade.initial : slideInRight.initial}
          whileInView={isMobile ? mobileFade.animate : slideInRight.animate}
          transition={
            isMobile ? mobileFade.transition : slideInRight.transition
          }
          viewport={{ once: false, amount: 0.3 }}
          className={`${isMobile ? "pl-5" : ""}`}
        >
          <p className="text-2xl sm:text-3xl lg:text-3xl font-gothicWide font-medium leading-relaxed text-white">
            I&apos;m a web developer passionate about transforming ideas into
            meaningful digital experiences.
            <br />
            <br />
            From concept to deployment, I craft scalable, high-quality solutions
            that deliver impact and elevate user experience.
          </p>
          <br />
          <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-gray-200 w-full">
            <div>
              <h3 className="text-3xl font-gothicWide font-black transition-transform duration-200">
                7+
              </h3>
              <p className="text-base font-gothicWide font-medium text-gray-100 uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-gothicWide font-black transition-transform duration-200">
                21+
              </h3>
              <p className="text-base font-gothicWide font-medium text-gray-100 uppercase tracking-wider">
                Technologies in Use
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      {/* <motion.div
        initial={isMobile ? mobileFade.initial : fadeInUp.initial}
        whileInView={isMobile ? mobileFade.animate : fadeInUp.animate}
        transition={{
          ...(isMobile
            ? mobileFade.transition
            : { ...fadeInUp.transition, delay: 0.1 }),
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 w-full mt-10 flex-wrap relative z-10"
      >
        <ProjectsInfoCard />
        <ResumeCard />
      </motion.div> */}

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-24 flex justify-center z-10 relative"
      >
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default About;
