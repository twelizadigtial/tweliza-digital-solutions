"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function ScrollMarquee({ items, direction = "left", speed = 25, className = "" }: MarqueeProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap flex select-none py-4 border-y border-slate-200/60 dark:border-white/10 ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex items-center gap-8 shrink-0"
      >
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
            <span>{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
