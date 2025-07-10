"use client";

import Logo from "@/assets/logo";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Footer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  const runAnimation = () => {
    if (!containerRef.current) return;

    timelineRef.current?.kill();

    const enterTimeline = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    enterTimeline.to(".logo-container", {
      autoAlpha: 1,
      duration: 0.3,
      ease: "sine.inOut",
    });

    enterTimeline
      .from("svg #character-A-1 path", { drawSVG: 0, duration: 0.4 }, "+=0.2")
      .from("svg #character-A-2 path", { drawSVG: 0, duration: 0.3 }, "-=0.2")
      .from("svg #character-S-1 path", { drawSVG: 0, duration: 0.3 }, "+=0.1")
      .from("svg #character-S-2 path", { drawSVG: 0, duration: 0.3 }, "-=0.15")
      .from("svg #character-S-3 path", { drawSVG: 0, duration: 0.4 }, "-=0.1")
      .to(
        ".full-stop",
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "+=0.3"
      );

    const leaveTimeline = gsap.timeline({ paused: true });

    leaveTimeline.to(".logo-container", {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play none none none", // prevent double triggering
      onEnter: () => {
        enterTimeline.restart();
      },
      onLeave: () => {
        leaveTimeline.restart();
      },
      onEnterBack: () => {
        enterTimeline.restart();
      },
      onLeaveBack: () => {
        leaveTimeline.restart();
      },
    });

    timelineRef.current = enterTimeline;
  };

  useEffect(() => {
    let ctx: gsap.Context;

    const timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          runAnimation();
        }, containerRef);
      });
    }, 200);

    return () => {
      clearTimeout(timeout);
      ctx?.revert();
      timelineRef.current?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up triggers
    };
  }, [pathname]);

  return (
    <motion.footer
      className="py-16 px-6 bg-white border-t border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="self-start" ref={containerRef}>
            <motion.a
              href={"/"}
              className="text-2xl font-black tracking-tight mb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <figure className="logo-container will-change-transform opacity-0 w-16 md:w-20">
                <Logo />
                <div className="full-stop will-change-transform transform-gpu absolute top-1/2 -right-3 md:-right-5 w-2 h-2 md:w-3 md:h-3 bg-black rounded-full opacity-0 scale-0 origin-center z-10" />
              </figure>
            </motion.a>
            <p className="text-gray-600 font-light mt-2 md:mt-4">
              &quot;Code is poetry written in logic.&quot;
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-8">
              {[
                { name: "GitHub", href: "https://github.com/amaan-10" },
                { name: "LinkedIn", href: "https://linkedin.com/in/10-amaan" },
                { name: "Twitter", href: "https://twitter.com" },
                { name: "Email", href: "mailto:amaanshaikh.gg@gmail.com" },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase hover:text-gray-600 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-500 font-light">
            © 2025 Amaan&apos;s Portfolio. Crafted with precision.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
