import React from "react";

/**
 * FixedGrid — a fixed 12-column hairline overlay that lives behind everything
 * (z-[-1]) and spans the full viewport.  Adds editorial structure to every
 * section without affecting interaction.
 */
const FixedGrid = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 z-[-1]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8.3333%)",
      maskImage:
        "linear-gradient(180deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(180deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)",
    }}
  />
);

export default FixedGrid;
