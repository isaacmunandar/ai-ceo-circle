import React from "react";
import { m, useReducedMotion } from "framer-motion";

const BigSerifMarquee = ({
  words = [],
  separator = "—",
  size = "normal",
  reverse = false,
  className = "",
  baseSpeed = 130,
}) => {
  const prefersReduced = useReducedMotion();
  const fontCls =
    size === "xxl"
      ? "text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
      : size === "xl"
      ? "text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw]"
      : "text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5vw]";

  const duration = Math.max(words.length * 6, 12);

  const wordItems = words.map((w, i) => (
    <span key={i} className="flex shrink-0 items-center gap-12">
      <m.span
        whileHover={{ scale: 1.08, color: "#ffae7a" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif-italic whitespace-nowrap ${fontCls} leading-[0.9] text-cream cursor-default`}
      >
        {w}
      </m.span>
      <span className="font-serif-italic text-[#ff5d2a]/70 text-6xl md:text-7xl lg:text-8xl">
        {separator}
      </span>
    </span>
  ));

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={
          prefersReduced
            ? {}
            : {
                animation: `marquee ${duration}s linear infinite${reverse ? " reverse" : ""}`,
              }
        }
      >
        <div className="flex shrink-0 items-center gap-12 pr-12">{wordItems}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {wordItems}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070e1c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070e1c] to-transparent" />
    </div>
  );
};

export default BigSerifMarquee;
