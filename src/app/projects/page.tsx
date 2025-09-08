"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer";
import BGAnimations from "@/components/bg-animations";
import ScrollProgress from "@/components/scroll-progress";
import HandwritingAnimation from "@/components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Projects | Amaan";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <HandwritingAnimation />
      ) : (
        <motion.div
          key="main"
          className="min-h-screen overflow-x text-white bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <BGAnimations blurValue={10} />
          <Header />
          <main>
            <Projects showAll />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
