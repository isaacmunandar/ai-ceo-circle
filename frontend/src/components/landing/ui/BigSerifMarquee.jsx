import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";

/**
 * Scroll-velocity driven marquee — base speed + accelerates on scroll.
 * Uses framer-motion useAnimationFrame instead of CSS animation so scroll
 * velocity can be injected directly into the translation.
 * offsetWidth is cached via ResizeObserver to avoid a DOM read every frame.
 */
const ScrollMarqueeRow = ({ words, separator, fontCls, reverse = false, baseSpeed = 130 }) => {
  const rowRef = useRef(null);
  const rowWidthRef = useRef(0);
  const x = useMotionValue(0);
  const prefersReduced = useReducedMotion();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-3000, 3000], [-3, 3], { clamp: false });

  useEffect(() => {
    if (reverse && rowRef.current) {
      x.set(-rowRef.current.offsetWidth);
    }
  }, [reverse, x]);

  // Cache offsetWidth via ResizeObserver — no DOM read inside the frame loop.
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    rowWidthRef.current = el.offsetWidth;
    const ro = new ResizeObserver(() => { rowWidthRef.current = el.offsetWidth; });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (prefersReduced) return;
    const rowWidth = rowWidthRef.current;
    if (!rowWidth) return;

    const boost = Math.abs(velocityFactor.get()) * 0.8 + 1;
    const px = baseSpeed * boost * (delta / 1000);

    let newX = reverse ? x.get() + px : x.get() - px;
    if (!reverse && newX <= -rowWidth) newX += rowWidth;
    if (reverse && newX >= 0) newX -= rowWidth;

    x.set(newX);
  });

  const wordItems = words.map((w, i) => (
    <span key={i} className="flex shrink-0 items-center gap-12">
      <motion.span
        whileHover={{ scale: 1.08, color: "#ffae7a" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif-italic whitespace-nowrap ${fontCls} leading-[0.9] text-cream transition-colors cursor-default`}
      >
        {w}
      </motion.span>
      <span className="font-serif-italic text-[#ff5d2a]/70 text-6xl md:text-7xl lg:text-8xl">
        {separator}
      </span>
    </span>
  ));

  return (
    <motion.div className="flex" style={{ x }}>
      <div ref={rowRef} className="flex shrink-0 items-center gap-12 pr-12">
        {wordItems}
      </div>
      <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
        {wordItems}
      </div>
    </motion.div>
  );
};

const BigSerifMarquee = ({
  words = [],
  separator = "—",
  size = "normal",
  reverse = false,
  className = "",
  baseSpeed = 130,
}) => {
  const fontCls =
    size === "xxl"
      ? "text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
      : size === "xl"
      ? "text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw]"
      : "text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5vw]";

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <ScrollMarqueeRow
        words={words}
        separator={separator}
        fontCls={fontCls}
        reverse={reverse}
        baseSpeed={baseSpeed}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070e1c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070e1c] to-transparent" />
    </div>
  );
};

export default BigSerifMarquee;
