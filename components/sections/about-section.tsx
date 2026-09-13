"use client";

import React from "react";
import Link from "next/link";
import { CircularBrandLogo } from "@/components/ui/brand-logo";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight } from "lucide-react";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#a832a8]/15 dark:bg-[#4b36e3]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Scroll3DContainer>
        <Scroll3DItem effect="expand" depth={60} rotateXAmount={6}>
          <GlassCard className="p-8 sm:p-12 border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-2xl relative overflow-hidden bg-white/90 dark:bg-[#1d001d]/65">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Eyebrow, Headline & Short Copy */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#1d001d]/60 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25 inline-block mb-3">
                    // about tweliza
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-tight">
                    We turn ideas into <span className="text-gradient-purple">digital experiences</span>.
                  </h2>

                  <p className="text-base sm:text-lg text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-semibold">
                    <strong>tweliza Digital Solutions</strong> is a growing digital studio focused on helping businesses build a stronger presence in the digital world. From modern websites and UI/UX design to branding, social media content, and creative digital solutions, we bring design and technology together to help businesses look better, connect better, and grow online.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    data-cursor="ABOUT"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-md shadow-[#1d001d]/30 dark:shadow-[#1d001d]/50 transform hover:-translate-y-0.5"
                  >
                    <span>About tweliza</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Uploaded Circular Logo Presentation */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
                <CircularBrandLogo size={200} className="shadow-2xl border-4 border-[#a832a8]/30" />
                <div className="text-center">
                  <div className="text-xs font-extrabold text-[#080912] dark:text-[#e6e8ec] uppercase tracking-wider">
                    tweliza Digital Solutions
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-[#e6e8ec]/70 font-mono mt-0.5">
                    Web · Creative · Social · AI
                  </div>
                </div>
              </div>

            </div>
          </GlassCard>
        </Scroll3DItem>
      </Scroll3DContainer>
    </section>
  );
}
