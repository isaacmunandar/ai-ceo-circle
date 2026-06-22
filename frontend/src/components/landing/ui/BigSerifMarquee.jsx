import React from "react";
import { motion } from "framer-motion";

/**
 * BigSerifMarquee — magma-style massive italic serif marquee band.
 * Words flow horizontally with a tilde-style separator.
 */
const BigSerifMarquee = ({
  words = [],
  separator = "—",
  speed = "normal",
  size = "normal", // normal | xl | xxl
  reverse = false,
  className = "",
}) => {
  const cls = [
    speed === "slow" ? "animate-marquee-slow" : speed === "fast" ? "animate-marquee" : "animate-marquee-slow",
    reverse ? "animate-marquee-reverse" : "",
  ].join(" ");

  const fontCls =
    size === "xxl"
      ? "text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
      : size === "xl"
      ? "text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw]"
      : "text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5vw]";

  const row = (
    <div className={`flex shrink-0 items-center gap-12 pr-12 ${cls}`}>
      {words.map((w, i) => (
        <span key={i} className="flex shrink-0 items-center gap-12">
          <span
            className={`font-serif-italic whitespace-nowrap ${fontCls} leading-[0.9] text-cream`}
          >
            {w}
          </span>
          <span className="font-serif-italic text-[#ff5d2a]/70 text-6xl md:text-7xl lg:text-8xl">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex w-max">
        {row}
        {row}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070e1c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070e1c] to-transparent" />
    </div>
  );
};

export default BigSerifMarquee;
