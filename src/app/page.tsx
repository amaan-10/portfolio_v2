"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/header";
// import Hero from "@/components/hero/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Tools from "@/components/tools";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AnimatedCursor from "@/components/animated-cursor";
import ContinuousAnimations from "@/components/continuous-animations";
import ScrollProgress from "@/components/scroll-progress";
import HandwritingAnimation from "@/components/loading";
import Hero from "@/components/hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <HandwritingAnimation />
      ) : (
        <motion.div
          key="main"
          className="min-h-screen bg-white text-black overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <AnimatedCursor />
          <ContinuousAnimations />
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Tools />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
