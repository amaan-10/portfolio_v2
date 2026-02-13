"use client";

import ColorBends from "./ColorBends";

type BlurProps = {
  blurValue?: number;
};

const BGAnimations = ({ blurValue = 0 }: BlurProps) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Background */}
      <ColorBends
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0}
        parallax={0.5}
        noise={0.15}
        transparent
        autoRotate={0}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/25" />
    </div>
  );
};

export default BGAnimations;
