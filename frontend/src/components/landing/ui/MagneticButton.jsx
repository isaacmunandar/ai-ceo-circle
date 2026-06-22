import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * MagneticButton — magma-style ghost/lava pill button with subtle magnetic pull.
 * variants: "primary" (lava-red), "ghost" (cream outline)
 */
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
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.18, y: y * 0.25 });
  };
  const reset = () => setOffset({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-tight transition-colors duration-300 whitespace-nowrap";

  const styles =
    variant === "primary"
      ? "bg-[#ff5d2a] text-[#0a1224] hover:bg-[#ff7a3d]"
      : "border-hair border-cream-15 text-cream hover:text-cream hover:border-cream-20 bg-cream/[0.02] hover:bg-cream/[0.05]";

  const Tag = href ? "a" : "button";

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="inline-block"
    >
      <Tag href={href} onClick={onClick} className={`${base} ${styles} ${className}`} data-testid={rest["data-testid"]}>
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
    </motion.span>
  );
};

export default MagneticButton;
