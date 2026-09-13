"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Hero3DCanvas } from "@/components/ui/hero-3d-canvas";
import { PowerShellTerminal } from "@/components/ui/powershell-terminal";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Scroll3DContainer } from "@/components/ui/scroll-animation-wrapper";
import { TWELIZA_CONFIG } from "@/data/tweliza-data";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001
  });

  const hero3DRotateX = useTransform(smoothProgress, [0, 1], [0, 15]);
  const hero3DRotateY = useTransform(smoothProgress, [0, 1], [0, -10]);
  const hero3DScale = useTransform(smoothProgress, [0, 0.7, 1], [1, 1.04, 1.08]);

  return (
    <section ref={heroRef} className="relative min-h-[80vh] pt-20 pb-6 sm:pt-24 sm:pb-8 flex items-center justify-center overflow-hidden">
      {/* 3D Interactive Canvas Scene */}
      <Hero3DCanvas />

      {/* Ambient Mesh Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-[#a832a8]/20 via-[#4b36e3]/20 to-[#1d001d]/15 dark:from-[#1d001d]/40 dark:via-[#a832a8]/20 dark:to-[#4b36e3]/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Scroll3DContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Focused Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4 sm:space-y-6">
            
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-[#1d001d]/30 dark:bg-[#1d001d]/80 border border-[#a832a8]/40 dark:border-[#e6e8ec]/30 backdrop-blur-xl shadow-lg inline-block mb-3"
            >
              // tweliza digital solutions
            </motion.span>

            {/* Impact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#080912] dark:text-[#e6e8ec] leading-[1.08]"
            >
              We turn ideas into{" "}
              <span className="text-gradient-purple inline-block">
                modern digital
              </span>{" "}
              experiences.
            </motion.h1>

            {/* Visual Service Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {TWELIZA_CONFIG.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#0c000e]/80 border border-[#1d001d]/12 dark:border-[#e6e8ec]/15 text-[#080912] dark:text-[#e6e8ec] shadow-sm backdrop-blur-xl"
                >
                  {pillar}
                </span>
              ))}
            </motion.div>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-5 w-full sm:w-auto"
            >
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  type="button"
                  data-cursor="BOOK"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all duration-400 shadow-xl shadow-[#1d001d]/40 dark:shadow-[#1d001d]/80 transform hover:-translate-y-0.5"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  data-cursor="BOOK"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all duration-400 shadow-xl shadow-[#1d001d]/40 dark:shadow-[#1d001d]/80 transform hover:-translate-y-0.5"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              )}

              <Link
                href="/portfolio"
                data-cursor="WORK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#080912] dark:text-[#e6e8ec] bg-white/80 dark:bg-[#0c000e]/80 border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 hover:bg-slate-100 dark:hover:bg-[#1d001d]/80 transition-all backdrop-blur-2xl shadow-sm transform hover:-translate-y-0.5"
              >
                <span>View our work</span>
                <ArrowRight className="w-4 h-4 text-[#1d001d] dark:text-[#e6e8ec]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated PowerShell Command Interface */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full">
            <motion.div
              animate={{
                x: mouseOffset.x * -0.5,
                y: mouseOffset.y * -0.5,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      rotateX: hero3DRotateX,
                      rotateY: hero3DRotateY,
                      scale: hero3DScale,
                      transformStyle: "preserve-3d",
                    }
              }
              className="w-full relative"
              data-cursor="CLI"
            >
              <PowerShellTerminal />
            </motion.div>
          </div>

        </div>
      </Scroll3DContainer>
    </section>
  );
}
