import React, { useRef, useState, useCallback } from "react";

/**
 * Spotlight — magma.build / Apple-style spotlight card.
 *
 * Tracks the cursor X/Y with onMouseMove and renders TWO synchronised layers:
 *  1. A soft gold radial glow that drifts behind the card surface.
 *  2. A border-only gold sheen (CSS `mask-composite` trick) that brightens the
 *     edge only where the cursor is closest — the signature magma effect.
 *
 * Props:
 *  - color: glow color (default #C9920A)
 *  - radius: glow radius in px (default 420)
 *  - borderGlow: enable border sheen (default true)
 *  - innerGlow: enable inner radial glow (default true)
 *  - lift: y-translate on hover (default 0)
 */
const Spotlight = ({
  children,
  className = "",
  rounded = "rounded-2xl",
  color = "#C9920A",
  radius = 420,
  borderGlow = true,
  innerGlow = true,
  lift = 0,
  as: Tag = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [hovering, setHovering] = useState(false);

  const onMouseMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const onEnter = useCallback(() => setHovering(true), []);
  const onLeave = useCallback(() => setHovering(false), []);

  const hexToRgba = (hex, a) => {
    const h = hex.replace("#", "");
    const bigint = parseInt(
      h.length === 3
        ? h.split("").map((c) => c + c).join("")
        : h,
      16
    );
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const innerGradient = `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${hexToRgba(color, 0.28)}, transparent 55%)`;
  const borderGradient = `radial-gradient(${Math.round(radius * 0.9)}px circle at ${pos.x}px ${pos.y}px, ${hexToRgba(color, 1.0)}, transparent 60%)`;

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ transform: hovering && lift ? `translateY(${-lift}px)` : "none", transition: "transform .55s cubic-bezier(0.16,1,0.3,1)" }}
      className={`group/spotlight relative ${rounded} ${className}`}
      {...rest}
    >
      {/* Inner spotlight glow (under surface) */}
      {innerGlow && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${rounded} transition-opacity duration-300`}
          style={{
            opacity: hovering ? 1 : 0,
            background: innerGradient,
          }}
        />
      )}

      {/* Border-only sheen — mask-composite trick */}
      {borderGlow && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${rounded} transition-opacity duration-300`}
          style={{
            opacity: hovering ? 1 : 0.0,
            background: borderGradient,
            padding: "1px",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      {/* Card content sits above the glow layers */}
      <div className={`relative ${rounded}`}>{children}</div>
    </Tag>
  );
};

export default Spotlight;
