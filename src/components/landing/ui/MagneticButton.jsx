import React, { useRef } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
  href,
  ...rest
}) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.6 });

  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left - r.width / 2) * 0.18);
    rawY.set((e.clientY - r.top - r.height / 2) * 0.25);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-tight transition-colors duration-300 whitespace-nowrap";

  const styles =
    variant === "primary"
      ? "bg-[#ff5d2a] text-[#0a1224] hover:bg-[#ff7a3d]"
      : "border-hair border-cream-15 text-cream hover:text-cream hover:border-cream-20 bg-cream/[0.02] hover:bg-cream/[0.05]";

  const Tag = href ? "a" : "button";

  return (
    <m.span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      style={{ x, y, display: "inline-block" }}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`${base} ${styles} ${className}`}
        data-testid={rest["data-testid"]}
      >
        {variant === "primary" && (
          <span
            className="pointer-events-none absolute -inset-2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
            style={{ background: "radial-gradient(circle, rgba(255,93,42,0.7), transparent 70%)" }}
          />
        )}
        <span className="relative">{children}</span>
        {Icon && (
          <Icon className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </Tag>
    </m.span>
  );
};

export default MagneticButton;
