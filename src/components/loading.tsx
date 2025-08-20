"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const HandwritingAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [videoFinished, setVideoFinished] = useState(false);
  const pathname = usePathname();
  console.log(videoFinished);

  useEffect(() => {
    if (!videoFinished) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(".full-stop", {
      opacity: 1,
      scale: 1,
      duration: 0,
      ease: "back.out(1.7)",
    }).to(".full-stop", {
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

    return () => {
      tl.kill();
    };
  }, [videoFinished, pathname]);

  return (
    <main
      ref={containerRef}
      className="relative w-full h-[95vh] md:h-screen bg-white overflow-hidden"
    >
      <figure className="logo-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 w-24 sm:w-32 md:w-40">
        {/* ✅ Video plays once */}
        <video
          src="/videos/logo.webm"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setVideoFinished(true);
            console.log("Video ended");
          }}
          className="w-full h-full"
        />

        {/* ✅ Full Stop */}
        <div className="full-stop absolute top-[48%] md:right-4 w-4 h-4 bg-black rounded-full opacity-0 scale-0 origin-center z-10" />
      </figure>
    </main>
  );
};

export default HandwritingAnimation;
