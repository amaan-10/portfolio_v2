"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import Logo from "@/assets/logo";

const HandwritingAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  const runAnimation = () => {
    if (!containerRef.current || timelineRef.current?.isActive()) return;

    gsap.registerPlugin(DrawSVGPlugin);
    timelineRef.current?.kill();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(".logo-container", {
      autoAlpha: 1,
      duration: 0.3,
      ease: "sine.inOut",
    });

    if (isMobile) {
      // Sequential animation for mobile
      tl.from("svg #character-A-1 path", { drawSVG: 0, duration: 0.5 })
        .from("svg #character-A-2 path", { drawSVG: 0, duration: 0.4 })
        .from("svg #character-S-1 path", { drawSVG: 0, duration: 0.4 })
        .from("svg #character-S-2 path", { drawSVG: 0, duration: 0.4 })
        .from("svg #character-S-3 path", { drawSVG: 0, duration: 0.5 })
        .to(".full-stop", {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
    } else {
      // Original overlapping animation for desktop
      tl.from("svg #character-A-1 path", { drawSVG: 0, duration: 0.4 }, "+=0.2")
        .from("svg #character-A-2 path", { drawSVG: 0, duration: 0.3 }, "-=0.2")
        .from("svg #character-S-1 path", { drawSVG: 0, duration: 0.3 }, "+=0.1")
        .from(
          "svg #character-S-2 path",
          { drawSVG: 0, duration: 0.3 },
          "-=0.15"
        )
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
        )
        .to(".full-stop", {
          scale: 100,
          duration: 1.3,
          ease: "expo.inOut",
          onComplete: () => {
            gsap.to(".full-stop", {
              borderRadius: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
    }

    timelineRef.current = tl;
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
    };
  }, [pathname]);

  return (
    <main
      ref={containerRef}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      <figure className="logo-container will-change-transform absolute top-1/2 left-1/2 w-[150%] md:w-[90%] max-w-[960px] -translate-x-1/2 -translate-y-1/2 opacity-0">
        <Logo />
      </figure>

      <div className="full-stop will-change-transform transform-gpu absolute top-1/2 left-[64%] sm:left-[65%] md:left-[60%] lg:left-[58%] xl:left-[57%] 2xl:left-[56%] w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-black rounded-full opacity-0 scale-0 origin-center z-10" />
    </main>
  );
};

export default HandwritingAnimation;
