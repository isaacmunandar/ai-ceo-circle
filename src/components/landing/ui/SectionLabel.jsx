import React from "react";
import { m } from "framer-motion";

const SectionLabel = ({ children, className = "" }) => (
  <m.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={`inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.38em] text-cream-dim ${className}`}
  >
    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#C9920A]" />
    <span>{children}</span>
  </m.div>
);

export default SectionLabel;
