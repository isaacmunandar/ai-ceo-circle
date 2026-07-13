import React from "react";

// Outer element applies horizontal edge mask (hides leftmost & rightmost grid lines).
// Inner element owns the repeating grid + vertical top/bottom fade.
// Nested masking avoids mask-composite cross-browser issues.
const FixedGrid = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 z-[-1] hidden md:block"
    style={{
      maskImage:
        "linear-gradient(to right, transparent 4.5%, black 6%, black 94%, transparent 95.5%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 4.5%, black 6%, black 94%, transparent 95.5%)",
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8.3333%)",
        backgroundPosition: "calc(100vw / 24) 0",
        maskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
      }}
    />
  </div>
);

export default FixedGrid;
