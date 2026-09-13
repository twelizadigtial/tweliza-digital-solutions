"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "violet" | "cyan" | "subtle" | "none";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = "subtle",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  const glowStyles = {
    none: "",
    subtle: "hover:border-[#a832a8]/40 hover:shadow-[0_20px_50px_rgba(168,50,168,0.14)]",
    violet: "hover:border-[#a832a8]/60 hover:shadow-[0_24px_60px_rgba(168,50,168,0.22)]",
    cyan: "hover:border-[#4b36e3]/60 hover:shadow-[0_24px_60px_rgba(75,54,227,0.22)]",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl backdrop-blur-2xl transition-all duration-400 ease-out overflow-hidden",
        // Light mode
        "bg-white/90 border border-[#1d001d]/12 text-slate-900 shadow-[0_12px_40px_rgba(29,0,29,0.06)]",
        // Dark mode
        "dark:bg-[#0c000e]/80 dark:border-[#e6e8ec]/15 dark:text-[#e6e8ec] dark:shadow-[0_24px_60px_rgba(0,0,0,0.85)]",
        hoverEffect && "hover:-translate-y-1.5",
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {/* Luxury Hairline Top Lighting Edge */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
