import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Tilt — 3D card with mouse-tracking rotateX/rotateY, dynamic gold/lava sheen,
 * and an inner shine layer.  Built on framer-motion's useMotionValue + useSpring
 * for buttery smoothness.
 *
 * Props:
 *  - max: max rotation degrees (default 8)
 *  - scale: subtle scale on hover (default 1.02)
 *  - glare: enable cursor-following highlight (default true)
 *  - glow: enable bottom lava glow (default true)
 *  - depth: parallax z-offset for children with [data-tilt-layer]
 */
const springCfg = { stiffness: 220, damping: 18, mass: 0.6 };

const Tilt = ({
  children,
  className = "",
  max = 8,
  scale = 1.02,
  glare = true,
  glow = true,
  as: Tag = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
    setActive(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      animate={{ scale: active ? scale : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={`relative ${className}`}
      {...rest}
    >
      <div className="h-full" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>

      {/* Glare — follows cursor */}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-screen"
          style={{
            opacity: active ? 1 : 0,
            background:
              "radial-gradient(280px circle at var(--gx) var(--gy), rgba(255,180,120,0.18), transparent 55%)",
            transition: "opacity .25s ease",
            "--gx": glareX,
            "--gy": glareY,
          }}
        />
      )}

      {/* Lava glow on bottom edge when hovered */}
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full bg-[#ff5d2a]/30 blur-2xl"
          animate={{ opacity: active ? 0.7 : 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  );
};

export default Tilt;
