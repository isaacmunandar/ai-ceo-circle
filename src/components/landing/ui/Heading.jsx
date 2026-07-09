import React from "react";

/**
 * Heading — large display headline with optional italic serif accent.
 * Pass parts as an array of { text, italic?: boolean, gradient?: "gold"|"white" }
 */
const Heading = ({ parts = [], className = "", as: Tag = "h2" }) => (
  <Tag
    className={`text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl ${className}`}
  >
    {parts.map((p, i) => {
      const cls = [
        p.italic ? "font-serif-italic text-white/95" : "",
        p.gradient === "gold" ? "text-gradient-gold" : "",
        p.gradient === "white" ? "text-gradient-white" : "",
      ].join(" ");
      return (
        <span key={i} className={cls}>
          {p.text}
          {i < parts.length - 1 ? " " : ""}
        </span>
      );
    })}
  </Tag>
);

export default Heading;
