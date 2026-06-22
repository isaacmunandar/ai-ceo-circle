import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedHeading — splits content into per-word, per-letter spans and animates
 * them with a staggered reveal. Two variants: cream (default) + serif italic
 * lava-gradient (variant="italic").
 */
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const child = {
  hidden: { y: "110%", opacity: 0, rotate: 3 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedWord = ({ word, italic, gradient }) => {
  const letters = Array.from(word);

  // Gradient on the outer word span — no overflow:hidden here so background-clip:text works.
  // overflow:hidden moved to per-letter wrappers for the curtain animation.
  // paddingBottom + negative marginBottom gives room for italic descenders (j, g, y…).
  const gradientStyle =
    gradient === "lava"
      ? {
          background: "linear-gradient(180deg, #f6dfb5 0%, #ff7a3d 55%, #d63a0a 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }
      : gradient === "cream"
      ? {
          background: "linear-gradient(180deg, #ffffff 0%, #f5e8cc 60%, #c9b890 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }
      : {};

  // clipPath instead of overflow:hidden — creates the same word-level curtain clip
  // without affecting background-clip:text on the parent (overflow:hidden would break it).
  // Bottom extension of 0.4em gives room for italic descenders (j, g, y…).
  return (
    <span
      className={italic ? "font-serif-italic" : ""}
      style={{
        display: "inline-flex",
        verticalAlign: "baseline",
        clipPath: "inset(0 -0.05em -0.4em -0.05em)",
        ...gradientStyle,
      }}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
};

const AnimatedHeading = ({ parts = [], className = "", as: Tag = "h1", once = true }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once, margin: "-80px" }}
      variants={container}
      className={className}
    >
      <Tag className={`leading-[0.92] tracking-[-0.035em]`} style={{ display: "block" }}>
        {parts.map((p, i) => (
          <span key={i} style={{ display: p.block ? "block" : "inline" }}>
            {p.text.split(" ").map((w, j) => (
              <React.Fragment key={j}>
                <AnimatedWord word={w} italic={p.italic} gradient={p.gradient} />
                {j < p.text.split(" ").length - 1 && (
                  <span style={{ display: "inline-block", width: "0.28em" }} />
                )}
              </React.Fragment>
            ))}
          </span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default AnimatedHeading;
