import React from "react";

const Marquee = ({ items = [], speed = "normal", separator = "—" }) => {
  const cls = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const row = (
    <div className={`flex shrink-0 items-center gap-12 pr-12 ${cls}`}>
      {items.map((it, i) => (
        <span
          key={i}
          className="flex shrink-0 items-center gap-12 font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim"
        >
          <span>{it}</span>
          <span className="text-lava">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max">
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070e1c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070e1c] to-transparent" />
    </div>
  );
};

export default Marquee;
