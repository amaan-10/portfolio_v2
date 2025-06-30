"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectsInfoCard from "./ProjectsInfoCard";
import ResumeCard from "./ResumeCard";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left Column - Heading and CTA */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Hi, I&apos;m{" "}
                <motion.span
                  className="font-semibold"
                  whileHover={{
                    textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Amaan Shaikh
                </motion.span>
                .
              </motion.h2>

              <motion.p
                className="font-light text-base mt-4 italic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Bachelor in Artificial Intelligence & Data Science
              </motion.p>
            </motion.div>

            <motion.button
              onClick={scrollToContact}
              className="group flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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

          {/* Right Column - Description */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.p
              className="text-base sm:text-lg md:text-2xl leading-relaxed font-light text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              I&apos;m a{" "}
              <motion.span
                className="font-medium text-black"
                whileHover={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  padding: "2px 4px",
                  borderRadius: "4px",
                }}
                transition={{ duration: 0.2 }}
              >
                web developer
              </motion.span>{" "}
              passionate about transforming ideas into meaningful digital
              experiences. My work blends creativity with precision, ensuring
              interfaces are not only functional but also engaging and
              intuitive.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-2xl leading-relaxed font-light text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              From concept and design to development and deployment, I&apos;m
              hands-on at every stage crafting{" "}
              <motion.span
                className="font-medium text-black"
                whileHover={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  padding: "2px 4px",
                  borderRadius: "4px",
                }}
                transition={{ duration: 0.2 }}
              >
                scalable, high-quality solutions
              </motion.span>{" "}
              that deliver real impact and elevate user experience.
            </motion.p>

            {/* Additional stats or highlights */}
            <motion.div
              className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <div className="space-y-2">
                <motion.h3
                  className="text-3xl font-black"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  5+
                </motion.h3>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Projects Completed
                </p>
              </div>
              <div className="space-y-2">
                <motion.h3
                  className="text-3xl font-black"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  10+
                </motion.h3>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Technologies in Use
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 w-full mt-10 flex-wrap"
        >
          <ProjectsInfoCard />
          <ResumeCard />
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
