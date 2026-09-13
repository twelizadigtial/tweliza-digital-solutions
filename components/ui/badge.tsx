import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "violet" | "cyan" | "emerald" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#1d001d]/10 dark:bg-white/10 text-slate-700 dark:text-[#e6e8ec] border-[#1d001d]/15 dark:border-white/15",
    violet: "bg-[#1d001d]/40 dark:bg-[#160018] text-[#a832a8] dark:text-[#e6e8ec] border-[#a832a8]/35 dark:border-white/20 shadow-sm",
    cyan: "bg-[#4b36e3]/10 dark:bg-[#4b36e3]/25 text-[#4b36e3] dark:text-[#e6e8ec] border-[#4b36e3]/30 dark:border-[#4b36e3]/40",
    emerald: "bg-emerald-500/10 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border-emerald-500/30 dark:border-emerald-500/40",
    outline: "bg-transparent text-slate-700 dark:text-[#e6e8ec] border-[#1d001d]/20 dark:border-white/20",
  };

  const sizeStyles = {
    sm: "text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full",
    md: "text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full",
  };

  const dotColors = {
    default: "bg-slate-400",
    violet: "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]",
    cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    emerald: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border backdrop-blur-md transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
