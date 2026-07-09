import React from "react";

const LavaFlowBackdrop = ({ className = "" }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      background: [
        "radial-gradient(ellipse 80% 65% at 90% -5%, rgba(201,146,10,0.36), rgba(201,146,10,0.12) 42%, transparent 68%)",
        "radial-gradient(ellipse 70% 65% at -5% 70%, rgba(31,49,96,0.5), rgba(31,49,96,0.2) 42%, transparent 70%)",
        "radial-gradient(ellipse 55% 50% at 65% 50%, rgba(214,58,10,0.28), rgba(214,58,10,0.08) 45%, transparent 72%)",
      ].join(", "),
    }}
  />
);

export default LavaFlowBackdrop;
