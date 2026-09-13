"use client";

import React, { useRef } from "react";
import { PROCESS_STEPS_DATA } from "@/data/tweliza-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Compass, 
  MapPin, 
  Palette, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracker for the continuous vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 85%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-5 h-5 text-[#a832a8]" />;
      case 1: return <MapPin className="w-5 h-5 text-[#4b36e3]" />;
      case 2: return <Palette className="w-5 h-5 text-[#a832a8]" />;
      case 3: return <Code2 className="w-5 h-5 text-[#4b36e3]" />;
      case 4: return <Rocket className="w-5 h-5 text-[#a832a8]" />;
      case 5: return <TrendingUp className="w-5 h-5 text-[#4b36e3]" />;
      default: return <Compass className="w-5 h-5 text-[#a832a8]" />;
    }
  };

  return (
    <section id="process" className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#1d001d]/30 via-[#a832a8]/20 to-[#4b36e3]/25 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14">
        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25 backdrop-blur-md inline-block mb-3">
          // How We Work
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-tight">
          A clear, <span className="text-gradient-purple">collaborative process</span>.
        </h2>
        <p className="text-xs sm:text-base text-slate-800 dark:text-[#e6e8ec]/85 max-w-xl mx-auto font-medium leading-relaxed">
          From first alignment to final deployment and long-term digital growth, here is how we bring your project to life.
        </p>
      </Scroll3DItem>

      {/* Continuous Vertical Timeline Container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        
        {/* Background Track Line (Center on Desktop, Left on Mobile) */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-[#1d001d]/20 dark:bg-[#e6e8ec]/15 rounded-full pointer-events-none" />

        {/* Animated Progress Line (Fades & Fills on Scroll) */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#1d001d] via-[#a832a8] to-[#4b36e3] rounded-full pointer-events-none shadow-[0_0_15px_#a832a8]"
        />

        {/* 6 Step Nodes Sequence (Tightly Spaced Vertical Sequence) */}
        <div className="space-y-4 md:space-y-6 relative">
          {PROCESS_STEPS_DATA.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.step}
                className="relative flex flex-col md:flex-row items-center"
              >
                
                {/* 1. Timeline Node Dot / Icon Badge */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white dark:bg-[#03012c] border-2 border-[#a832a8] shadow-xl flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]"
                >
                  {getStepIcon(idx)}
                </motion.div>

                {/* 2. Step Content Card (Alternating Grid Columns) */}
                <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                  
                  {/* Active Side (Text Card) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12 md:text-left"}`}
                  >
                    <GlassCard
                      glow="violet"
                      className="p-6 sm:p-8 space-y-3 bg-white/90 dark:bg-[#1d001d]/75 border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-xl group hover:border-[#a832a8] transition-all"
                    >
                      <div className={`flex items-center gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <span className="font-mono text-xs font-extrabold text-[#ffffff] px-3 py-1 rounded-full bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] shadow-sm">
                          STEP {step.step}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          Phase 0{idx + 1} of 06
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#080912] dark:text-[#e6e8ec]">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-semibold">
                        {step.description}
                      </p>

                      <div className={`pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#a832a8] ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Milestone Verified</span>
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Empty Counterpart Column for Balance on Desktop */}
                  <div className="hidden md:block" />

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
