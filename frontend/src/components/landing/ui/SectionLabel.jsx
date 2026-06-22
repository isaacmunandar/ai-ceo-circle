import React from "react";
import { motion } from "framer-motion";

const SectionLabel = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`inline-flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.32em] text-cream-dim ${className}`}
  >
    <span className="relative inline-flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5d2a]/70" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ff5d2a]" />
    </span>
    <span>{children}</span>
  </motion.div>
);

export default SectionLabel;
