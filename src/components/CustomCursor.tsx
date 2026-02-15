import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = () => setHovered(true);
    const out = () => setHovered(false);

    window.addEventListener("mousemove", move);

    const observe = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", over);
        el.addEventListener("mouseleave", out);
      });
    };

    observe();
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [visible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          width: hovered ? 12 : 8,
          height: hovered ? 12 : 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
        style={{ opacity: visible ? 1 : 0 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-primary/40 mix-blend-difference"
        animate={{
          x: pos.x - (hovered ? 28 : 20),
          y: pos.y - (hovered ? 28 : 20),
          width: hovered ? 56 : 40,
          height: hovered ? 56 : 40,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
