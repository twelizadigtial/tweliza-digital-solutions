"use client";

import React, { useState } from "react";
import { WHY_TWELIZA_DATA } from "@/data/tweliza-data";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  User, 
  Layers, 
  Target, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function WhyTwelizaSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "User":
        return <User className="w-5 h-5 text-[#a832a8]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#4b36e3]" />;
      case "Target":
        return <Target className="w-5 h-5 text-[#a832a8]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#4b36e3]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#a832a8]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#4b36e3]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#a832a8]" />;
    }
  };

  return (
    <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a832a8]/15 dark:bg-[#4b36e3]/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#1d001d]/25 dark:bg-[#1d001d]/50 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-20">
        <span className="font-mono text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-[#1d001d]/30 dark:bg-[#1d001d]/80 border border-[#a832a8]/40 dark:border-[#e6e8ec]/30 backdrop-blur-xl shadow-sm inline-block">
          // Why TWELIZA
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-[1.1]">
          Built for businesses that want to <span className="text-gradient-purple">stand out</span>.
        </h2>
        <p className="text-xs sm:text-base text-slate-700 dark:text-[#e6e8ec]/85 max-w-xl mx-auto font-medium leading-relaxed">
          Six foundational studio standards that ensure every website, brand identity, and digital product delivers real business impact.
        </p>
      </Scroll3DItem>

      {/* 3D Interactive Grid of Floating Gem Cards */}
      <Scroll3DContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_TWELIZA_DATA.map((item, idx) => (
            <Scroll3DItem
              key={item.title}
              effect="tilt-3d"
              depth={50}
              rotateXAmount={12}
              rotateYAmount={idx % 2 === 0 ? 8 : -8}
              offsetStart={0.1 + idx * 0.04}
            >
              <motion.div
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                whileHover={{ y: -7, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="h-full"
              >
                <GlassCard
                  glow="violet"
                  className={`p-7 sm:p-8 h-full flex flex-col justify-between space-y-6 transition-all duration-400 ease-out bg-white/90 dark:bg-[#0c000e]/80 backdrop-blur-2xl border-2 ${
                    hoveredIdx === idx
                      ? "border-[#a832a8]/60 shadow-[0_25px_60px_rgba(168,50,168,0.2)]"
                      : "border-[#1d001d]/12 dark:border-[#e6e8ec]/15 shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#f4f5f9] dark:bg-[#160018] border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 flex items-center justify-center shrink-0 shadow-md">
                        {getIcon(item.icon)}
                      </div>
                      <span className="font-mono text-xs font-extrabold text-[#a832a8] tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-[#080912] dark:text-[#e6e8ec] leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1d001d]/12 dark:border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1d001d] dark:text-[#e6e8ec]">
                    <span>Studio Standard 0{idx + 1}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${hoveredIdx === idx ? "translate-x-0.5 -translate-y-0.5 text-[#a832a8]" : "opacity-50"}`} />
                  </div>
                </GlassCard>
              </motion.div>
            </Scroll3DItem>
          ))}
        </div>
      </Scroll3DContainer>
    </section>
  );
}
