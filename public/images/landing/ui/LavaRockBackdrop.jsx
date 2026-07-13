import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

/**
 * LavaRockBackdrop — magma rock + lava cracks + drifting ember clouds.
 * Now reactive to:
 *  - scrollY (parallax)
 *  - cursor position (depth shift on each layer)
 */
const LavaRockBackdrop = ({ className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yScroll = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  // Cursor parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const layer1X = useTransform(smx, [-0.5, 0.5], [-30, 30]);
  const layer1Y = useTransform(smy, [-0.5, 0.5], [-20, 20]);
  const layer2X = useTransform(smx, [-0.5, 0.5], [-15, 15]);
  const layer2Y = useTransform(smy, [-0.5, 0.5], [-10, 10]);
  const layer3X = useTransform(smx, [-0.5, 0.5], [-6, 6]);
  const layer3Y = useTransform(smy, [-0.5, 0.5], [-4, 4]);

  const onMouseMove = (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    mx.set(e.clientX / w - 0.5);
    my.set(e.clientY / h - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      onMouseMove={onMouseMove}
      className={`pointer-events-auto absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div style={{ y: yScroll }} className="absolute inset-0">
        {/* Base dark plate */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1224] via-[#0a1424] to-transparent" />

        {/* SVG rocks layer (deeper parallax) */}
        <motion.svg
          style={{ x: layer1X, y: layer1Y }}
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="rockNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="3" seed="4" />
              <feDisplacementMap in="SourceGraphic" scale="36" />
            </filter>
            <linearGradient id="rockShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c1408" />
              <stop offset="50%" stopColor="#0e0a04" />
              <stop offset="100%" stopColor="#050307" />
            </linearGradient>
          </defs>

          {/* Top-right rock mass */}
          <g style={{ filter: "url(#rockNoise)" }}>
            <path
              d="M 900 -40 L 1700 -40 L 1700 340 C 1500 380 1300 320 1180 280 C 1060 240 980 200 900 140 Z"
              fill="url(#rockShade)"
              opacity="0.95"
            />
            <path
              d="M 1100 100 C 1180 150 1240 190 1300 220 C 1360 250 1420 280 1500 300"
              stroke="#ff6b35"
              strokeWidth="6"
              fill="none"
              opacity="0.78"
              className="animate-ember"
            />
            <path
              d="M 950 70 C 1000 110 1050 130 1100 160"
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
        </motion.svg>

        {/* Drifting lava blobs (mid-depth) */}
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          className="absolute -top-32 right-[-10%] h-[680px] w-[680px] rounded-full animate-drift"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,93,42,0.55),_rgba(255,93,42,0.1)_45%,_transparent_70%)] blur-2xl" />
        </motion.div>
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          className="absolute bottom-[8%] left-[-10%] h-[520px] w-[520px] rounded-full animate-drift-slow"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,80,25,0.42),_rgba(255,80,25,0.08)_45%,_transparent_70%)] blur-3xl" />
        </motion.div>
        <motion.div
          style={{ x: layer3X, y: layer3Y }}
          className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full animate-drift"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,180,90,0.28),_transparent_70%)] blur-2xl" />
        </motion.div>

        {/* Editorial vertical hairline grid (subtle parallax) */}
        <motion.div
          style={{ x: layer3X }}
          className="absolute inset-0 opacity-25"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(239,231,214,0.06) 0 1px, transparent 1px 8.333%)",
            }}
          />
        </motion.div>

        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#070e1c]" />
      </motion.div>
    </motion.div>
  );
};

export default LavaRockBackdrop;
