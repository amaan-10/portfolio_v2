"use client";

import React from "react";
import "./GlassButton.css";
import { ArrowUpRight } from "lucide-react";

const GlassButton = () => {
  return (
    <div className="button-wrap">
      <button
        className="glass-button"
        onClick={() => {
          window.open("/Amaan_Shaikh_Resume.pdf", "_blank");
        }}
      >
        <span className="font-gothicWide flex items-center gap-2 relative z-10">
          Download CV
          <ArrowUpRight size={22} />
        </span>
      </button>
      <div className="button-shadow"></div>

      {/* Background Pattern */}
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dottedGrid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dottedGrid)" />
      </svg>
    </div>
  );
};

export default GlassButton;
