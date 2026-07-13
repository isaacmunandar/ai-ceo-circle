import React, { useRef, useState } from "react";
import { m } from "framer-motion";

/**
 * GlowCard — magma editorial card with hairline border, faint navy glass,
 * and a soft lava radial glow that follows the cursor.
 */
const GlowCard = ({
  children,
  className = "",
  glow = "rgba(255, 93, 42, 0.20)",
  as: Tag = "div",
  interactive = true,
  ...rest
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  const onMouseMove = (e) => {
    if (!interactive) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      whileHover={interactive ? { y: -2 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border-hair border-cream-10 bg-[rgba(12,20,40,0.4)] backdrop-blur-md ${className}`}
      {...rest}
    >
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 55%)`,
          }}
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
      <div className="relative z-10">{children}</div>
    </m.div>
  );
};

export default GlowCard;
