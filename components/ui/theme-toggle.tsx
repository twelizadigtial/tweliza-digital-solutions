"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme mode"
      className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
        isDark
          ? "border-violet-500/30 bg-[#16192b] text-amber-300 hover:border-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
          : "border-slate-300 bg-white/80 text-violet-700 shadow-sm hover:border-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]"
      } ${className || ""}`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0.85,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4.5 h-4.5 stroke-[2.2] text-violet-300" />
        ) : (
          <Sun className="w-4.5 h-4.5 stroke-[2.2] text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
