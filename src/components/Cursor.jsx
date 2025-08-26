import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [trail, setTrail] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    setIsMobile(window.innerWidth < 768); // width < 768px considered mobile

    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const addHoverEvents = () => {
      const hoverElems = document.querySelectorAll("button, a, .cursor-pointer");
      hoverElems.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      addHoverEvents();
    }

    return () => {
      if (!isMobile) window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null; // Don't render cursor on mobile

  return (
    <>
      {/* Trailing glow dots */}
      {trail.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 * (i + 1) }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed w-4 h-4 rounded-full bg-red-600 blur-xl z-[9998]"
          style={{
            transform: `translate3d(${t.x - 8}px, ${t.y - 8}px, 0)`,
          }}
        />
      ))}

      {/* Outer circle */}
      <motion.div
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          scale: hovered ? 2 : 1,
          opacity: hovered ? 0.9 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-red-600 z-[9999] shadow-lg"
      />

      {/* Inner dot */}
      <motion.div
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: hovered ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="pointer-events-none fixed w-3 h-3 rounded-full bg-red-600 z-[10000]"
      />
    </>
  );
}
