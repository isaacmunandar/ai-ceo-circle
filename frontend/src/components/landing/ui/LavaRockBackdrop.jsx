import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * LavaRockBackdrop — a CSS+SVG rendering of volcanic rock and glowing lava,
 * inspired by magma.build's hero imagery. Pure CSS, no external images.
 *
 * Layers (top → bottom):
 *  1. SVG noise (rock texture)
 *  2. Cooled-rock dark shapes
 *  3. Glowing lava cracks (animated)
 *  4. Drifting orange glow blobs
 *  5. Vignette / bottom fade into navy
 */
const LavaRockBackdrop = ({ className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Base dark plate */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1224] via-[#0a1424] to-transparent" />

        {/* Cooled rock SVG silhouettes */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="rockNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="3" seed="4" />
              <feDisplacementMap in="SourceGraphic" scale="36" />
            </filter>
            <radialGradient id="lavaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffce8a" stopOpacity="1" />
              <stop offset="35%" stopColor="#ff5d2a" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#9a2b08" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3a1102" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rockShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c1408" />
              <stop offset="50%" stopColor="#0e0a04" />
              <stop offset="100%" stopColor="#050307" />
            </linearGradient>
          </defs>

          {/* Top-right rock mass */}
          <g style={{ filter: "url(#rockNoise)" }}>
            <path
              d="M 900 -40 L 1700 -40 L 1700 320 C 1500 360 1300 300 1180 260 C 1060 220 980 180 900 120 Z"
              fill="url(#rockShade)"
              opacity="0.95"
            />
            {/* Lava cracks under top rock */}
            <path
              d="M 1100 80 C 1180 130 1240 170 1300 200 C 1360 230 1420 260 1500 280"
              stroke="#ff6b35"
              strokeWidth="6"
              fill="none"
              opacity="0.75"
              className="animate-ember"
            />
            <path
              d="M 950 50 C 1000 90 1050 110 1100 140"
              stroke="#ffae7a"
              strokeWidth="3"
              fill="none"
              opacity="0.8"
            />
          </g>

          {/* Left rock outcrop */}
          <g style={{ filter: "url(#rockNoise)" }}>
            <path
              d="M -40 540 L 480 580 C 420 660 320 720 220 760 C 140 790 60 800 -40 800 Z"
              fill="url(#rockShade)"
              opacity="0.9"
            />
            <path
              d="M 80 600 C 160 640 240 660 320 680"
              stroke="#ff5d2a"
              strokeWidth="4"
              fill="none"
              opacity="0.65"
            />
          </g>
        </svg>

        {/* Drifting lava glow blobs */}
        <div className="absolute -top-32 right-[-10%] h-[640px] w-[640px] rounded-full animate-drift">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,93,42,0.55),_rgba(255,93,42,0.1)_45%,_transparent_70%)] blur-2xl" />
        </div>
        <div className="absolute bottom-[10%] left-[-10%] h-[480px] w-[480px] rounded-full animate-drift-slow">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,80,25,0.42),_rgba(255,80,25,0.08)_45%,_transparent_70%)] blur-3xl" />
        </div>
        <div className="absolute top-1/3 right-1/4 h-[280px] w-[280px] rounded-full animate-drift">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,180,90,0.25),_transparent_70%)] blur-2xl" />
        </div>

        {/* Vertical hairline columns (editorial grid) */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(239,231,214,0.06) 0 1px, transparent 1px 8.333%)",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#070e1c]" />
      </motion.div>
    </motion.div>
  );
};

export default LavaRockBackdrop;
