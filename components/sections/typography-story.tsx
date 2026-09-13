"use client";

import React from "react";
import { Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function TypographyStorySection() {
  return (
    <section className="py-6 md:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center space-y-3">
        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25">
          // studio vision
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-tight max-w-4xl mx-auto">
          We don't just build websites. We craft <span className="text-gradient-purple">digital stories</span> that connect.
        </h2>
      </Scroll3DItem>
    </section>
  );
}
