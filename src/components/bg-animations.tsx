"use client";

import { useEffect, useState } from "react";

type BlurProps = {
  blurValue?: number;
};

const BGAnimations = ({ blurValue = 0 }: BlurProps) => {
  const [blur, setBlur] = useState(0);
  const [videoSrc, setVideoSrc] = useState("/videos/bg.mp4");

  useEffect(() => {
    const updateVideoSrc = () => {
      if (window.innerWidth <= 810) {
        setVideoSrc("/videos/bg-md.mp4");
      } else {
        setVideoSrc("/videos/bg.mp4");
      }
    };

    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc);

    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  useEffect(() => {
    if (blurValue) {
      setBlur(blurValue);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBlur = Math.min(scrollY / 50, 10);
      setBlur(newBlur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blurValue]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover transition-all duration-300"
          style={{ filter: `blur(${blur}px)` }}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default BGAnimations;
