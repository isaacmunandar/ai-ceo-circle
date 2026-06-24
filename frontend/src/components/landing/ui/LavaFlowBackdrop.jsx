import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const LavaFlowBackdrop = ({ className = "" }) => {
  const prefersReduced = useReducedMotion();

  const base = `pointer-events-none absolute inset-0 overflow-hidden ${className}`;

  if (prefersReduced) {
    return (
      <div aria-hidden className={base}>
        <div
          className="absolute -top-32 right-[-15%] h-[820px] w-[820px] rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, rgba(201,146,10,0.45), rgba(138,102,8,0.28) 35%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[760px] w-[760px] rounded-full"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(31,49,96,0.6), rgba(13,23,41,0.38) 40%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/3 h-[520px] w-[520px] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(214,58,10,0.35), rgba(255,93,42,0.15) 40%, transparent 75%)",
            filter: "blur(70px)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#070e1c]" />
      </div>
    );
  }

  return (
    <div aria-hidden className={base}>
      {/* DARK GOLD orb — top right */}
      <motion.div
        animate={{ rotate: [0, 90, 180, 90, 0], scale: [1, 1.25, 1.05, 1.2, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 right-[-15%] h-[820px] w-[820px] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(201,146,10,0.55), rgba(138,102,8,0.35) 35%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />

      {/* DEEP NAVY orb — left/mid */}
      <motion.div
        animate={{ rotate: [0, -120, -60, -180, 0], scale: [1, 1.3, 1.1, 1.25, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 h-[760px] w-[760px] rounded-full"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(31,49,96,0.7), rgba(13,23,41,0.45) 40%, transparent 75%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />

      {/* MAGMA RED accent orb — center-right */}
      <motion.div
        animate={{ rotate: [0, 60, -30, 90, 0], scale: [1, 1.15, 0.92, 1.18, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/3 h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(214,58,10,0.42), rgba(255,93,42,0.18) 40%, transparent 75%)",
          filter: "blur(70px)",
          willChange: "transform",
        }}
      />

      {/* Subtle ember — small pulse */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[12%] h-[180px] w-[180px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,180,90,0.45), transparent 70%)",
          filter: "blur(50px)",
          willChange: "transform",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#070e1c]" />
    </div>
  );
};

export default LavaFlowBackdrop;
