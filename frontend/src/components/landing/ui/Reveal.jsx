import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({
  children,
  delay = 0,
  y = 50,
  scale = 0.96,
  className = "",
  once = true,
  duration = 1.2,
}) => {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : y, scale: prefersReduced ? 1 : scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: prefersReduced ? 0.4 : duration, delay: prefersReduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
