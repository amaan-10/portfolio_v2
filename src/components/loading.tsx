"use client";

import { useEffect, useState } from "react";

const HandwritingAnimation = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  console.log(videoFinished);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const maxDim = Math.max(window.innerWidth, window.innerHeight);
    const circleSize = 16; // match your `.full-stop` initial size
    setScale((maxDim * 2) / circleSize);
  }, []);

  return (
    <main
      className="relative w-full h-[95vh] md:h-screen bg-white overflow-hidden"
    >
      <figure className="logo-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 w-24 sm:w-32 md:w-40">
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

        <div
          className={`${videoFinished ? "full-stop expanded" : ""}`}
          style={{ "--scale": scale } as React.CSSProperties}
        />
      </figure>
      <style jsx>{`
        .full-stop {
          position: fixed;
          top: 48%;
          right: 16px;
          width: 16px;
          height: 16px;
          background: black;
          border-radius: 50%;
          transform: scale(1);
          transition: transform 1.3s ease-in-out;
        }

        .full-stop.expanded {
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(var(--scale));
        }
      `}</style>
    </main>
  );
};

export default HandwritingAnimation;
