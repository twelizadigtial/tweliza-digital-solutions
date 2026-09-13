"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "VIEW";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99] hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 14),
          y: mousePosition.y - (isHovered ? 36 : 14),
          width: isHovered ? 72 : 28,
          height: isHovered ? 72 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 24,
          mass: 0.5,
        }}
        className={`rounded-full flex items-center justify-center border ${
          isHovered
            ? "bg-[#1d001d]/30 border-[#03012c] backdrop-blur-sm shadow-lg shadow-[#1d001d]/50 scale-110"
            : "border-[#03012c]/40 dark:border-[#e6e8ec]/40"
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-black text-[#e6e8ec] uppercase tracking-widest animate-pulse">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {!isHovered && (
        <motion.div
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          className="w-1.5 h-1.5 rounded-full bg-[#1d001d] dark:bg-[#e6e8ec]"
        />
      )}
    </div>
  );
}
