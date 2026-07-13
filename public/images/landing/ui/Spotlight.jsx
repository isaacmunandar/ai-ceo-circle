import React, { useRef, useState, useCallback, useMemo } from "react";

const hexToRgba = (hex, a) => {
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `rgba(${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}, ${a})`;
};

/**
 * Spotlight — magma.build / Apple-style spotlight card.
 * Cursor position updates drive the glow via direct DOM mutation (no React re-renders
 * on mousemove). Only enter/leave state (2 renders per interaction) goes through React.
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
  const innerGlowRef = useRef(null);
  const borderGlowRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const innerColor = useMemo(() => hexToRgba(color, 0.28), [color]);
  const borderColor = useMemo(() => hexToRgba(color, 1.0), [color]);
  const borderRadius = useMemo(() => Math.round(radius * 0.9), [radius]);

  const onMouseMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (innerGlowRef.current) {
      innerGlowRef.current.style.background = `radial-gradient(${radius}px circle at ${x}px ${y}px, ${innerColor}, transparent 55%)`;
    }
    if (borderGlowRef.current) {
      borderGlowRef.current.style.background = `radial-gradient(${borderRadius}px circle at ${x}px ${y}px, ${borderColor}, transparent 60%)`;
    }
  }, [radius, borderRadius, innerColor, borderColor]);

  const onEnter = useCallback(() => setHovering(true), []);
  const onLeave = useCallback(() => setHovering(false), []);

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        transform: hovering && lift ? `translateY(${-lift}px)` : "none",
        transition: "transform .55s cubic-bezier(0.16,1,0.3,1)",
      }}
      className={`group/spotlight relative ${rounded} ${className}`}
      {...rest}
    >
      {innerGlow && (
        <div
          ref={innerGlowRef}
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${rounded} transition-opacity duration-300`}
          style={{ opacity: hovering ? 1 : 0 }}
        />
      )}

      {borderGlow && (
        <div
          ref={borderGlowRef}
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${rounded} transition-opacity duration-300`}
          style={{
            opacity: hovering ? 1 : 0,
            padding: "1px",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      <div className={`relative ${rounded}`}>{children}</div>
    </Tag>
  );
};

export default Spotlight;
