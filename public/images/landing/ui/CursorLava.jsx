import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorLava — a global lava-ember dot + soft trailing glow that follows the
 * cursor. Hides on touch devices. Sits above all content but ignores pointer
 * events. Slight delay on the glow creates a trailing feel.
 */
const CursorLava = () => {
  const [touch, setTouch] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [pointer, setPointer] = useState("default"); // default | link

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });
  const blurX = useSpring(x, { stiffness: 130, damping: 20, mass: 0.8 });
  const blurY = useSpring(y, { stiffness: 130, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setTouch(isTouch);
    if (isTouch) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      // Detect interactive element under cursor
      const t = e.target;
      const interactive =
        t.closest("a, button, [role='button'], input, textarea, label, [data-interactive]");
      setPointer(interactive ? "link" : "default");
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (touch) return null;

  return (
    <>
      {/* Outer trailing glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x: blurX, y: blurY, opacity: hidden ? 0 : 1 }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2"
          style={{
            width: 220,
            height: 220,
            transform: `scale(${pointer === "link" ? 1 : 0.636})`,
            transition: "transform .35s ease",
            background:
              "radial-gradient(circle, rgba(255,93,42,0.32), rgba(255,80,25,0.14) 40%, transparent 70%)",
            filter: "blur(8px)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Inner ember */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] mix-blend-screen"
        style={{ x: sx, y: sy, opacity: hidden ? 0 : 1 }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2"
          style={{
            width: 18,
            height: 18,
            transform: `scale(${pointer === "link" ? 1 : 0.556})`,
            transition: "transform .25s ease",
            background: "radial-gradient(circle, #ffeac4, #ff5d2a 55%, #7a2606 95%)",
            boxShadow: "0 0 18px rgba(255,93,42,0.7), 0 0 36px rgba(255,93,42,0.35)",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorLava;
