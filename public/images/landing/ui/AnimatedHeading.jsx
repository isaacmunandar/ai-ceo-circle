import React from "react";
import { m } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
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
  const colorStyle =
    gradient === "lava"
      ? { color: "#ff7a3d" }
      : gradient === "cream"
      ? { color: "#efe7d6" }
      : {};

  return (
    <span
      className={italic ? "font-serif-italic" : ""}
      style={{
        display: "inline-flex",
        verticalAlign: "baseline",
        clipPath: italic
          ? "inset(-0.06em -0.2em -0.5em -0.2em)"
          : "inset(0 -0.08em -0.4em -0.08em)",
        paddingBottom: italic ? "0.09em" : 0,
        ...colorStyle,
      }}
    >
      <m.span
        variants={child}
        style={{ display: "inline-block", transformOrigin: "bottom" }}
      >
        {word}
      </m.span>
    </span>
  );
};

const AnimatedHeading = ({ parts = [], className = "", as: Tag = "h1", once = true }) => {
  return (
    <m.div
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once, margin: "-80px" }}
      variants={container}
      className={className}
    >
      <Tag className="leading-[0.92] tracking-[-0.035em]" style={{ display: "block" }}>
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
    </m.div>
  );
};

export default AnimatedHeading;
