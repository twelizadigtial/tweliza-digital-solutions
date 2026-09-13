"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUpRight, MessageSquare, Code, Palette, Zap } from "lucide-react";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

interface FlagshipPackagesSectionProps {
  onOpenBooking?: () => void;
}

export function FlagshipPackagesSection({ onOpenBooking }: FlagshipPackagesSectionProps) {
  return (
    <section className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-r from-[#1d001d]/20 via-[#a832a8]/15 to-[#4b36e3]/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Custom Quotation & Consultation Card */}
      <Scroll3DContainer>
        <Scroll3DItem effect="expand" depth={70} rotateXAmount={8}>
          <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-br from-[#000000] via-[#160018] to-[#03010b] text-[#e6e8ec] border-2 border-[#a832a8]/40 dark:border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.95)] relative overflow-hidden text-center space-y-6 sm:space-y-8">
            
            {/* Section Badge */}
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#e6e8ec] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-[#a832a8]/30 border border-[#e6e8ec]/30 backdrop-blur-xl shadow-sm inline-block">
                // Custom Quotation & Consultation
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#e6e8ec] tracking-tight max-w-3xl mx-auto leading-[1.15]">
              Have a project in mind? <span className="text-gradient-purple">Let’s talk.</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-base md:text-lg text-[#e6e8ec]/90 max-w-2xl mx-auto font-medium leading-relaxed">
              We discuss your exact requirements, budget, and timeline to create a transparent, custom project proposal — with no obligation.
            </p>

            {/* Quote Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto backdrop-blur-md">
              <p className="text-xs sm:text-sm font-semibold text-[#e6e8ec]/95 italic tracking-wide">
                “Your vision matters. Your budget matters. Let’s build a digital experience tailored to both.”
              </p>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
              {onOpenBooking ? (
                <>
                  <button
                    onClick={onOpenBooking}
                    type="button"
                    data-cursor="TALK"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all shadow-xl shadow-[#1d001d]/60 transform hover:-translate-y-0.5"
                  >
                    <span>Let’s Talk About Your Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#e6e8ec]" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    type="button"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#e6e8ec] bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-md transform hover:-translate-y-0.5"
                  >
                    <span>Request a Quote</span>
                    <MessageSquare className="w-4 h-4 text-[#a832a8]" />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/contact"
                    data-cursor="TALK"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all shadow-xl shadow-[#1d001d]/60 transform hover:-translate-y-0.5"
                  >
                    <span>Let’s Talk About Your Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#e6e8ec]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#e6e8ec] bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-md transform hover:-translate-y-0.5"
                  >
                    <span>Request a Quote</span>
                    <MessageSquare className="w-4 h-4 text-[#a832a8]" />
                  </Link>
                </>
              )}
            </div>

          </div>
        </Scroll3DItem>
      </Scroll3DContainer>

      {/* Supporting Custom Capabilities Grid */}
      <Scroll3DContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <Scroll3DItem effect="tilt-3d" depth={40} rotateXAmount={10} rotateYAmount={6}>
            <GlassCard
              glow="subtle"
              className="p-6 flex flex-col justify-between h-full bg-white/90 dark:bg-[#0c000e]/80 backdrop-blur-2xl border border-[#1d001d]/12 dark:border-[#e6e8ec]/15 shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d001d] to-[#a832a8] text-[#ffffff] flex items-center justify-center shadow-md">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
                  Custom Web Development
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#e6e8ec]/75 font-medium leading-relaxed">
                  Next.js speed, 3D WebGL animations, e-commerce systems, and custom web applications built to scale.
                </p>
              </div>
            </GlassCard>
          </Scroll3DItem>

          <Scroll3DItem effect="tilt-3d" depth={50} rotateXAmount={10} rotateYAmount={-6}>
            <GlassCard
              glow="violet"
              className="p-6 flex flex-col justify-between h-full bg-white/90 dark:bg-[#0c000e]/80 backdrop-blur-2xl border-2 border-[#a832a8]/50 dark:border-[#e6e8ec]/40 shadow-[0_20px_50px_rgba(168,50,168,0.25)]"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a832a8] to-[#4b36e3] text-[#ffffff] flex items-center justify-center shadow-md">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
                  UI/UX & Creative Design
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#e6e8ec]/75 font-medium leading-relaxed">
                  High-end luxury aesthetics, editorial typography, custom wireframing, and responsive UI design.
                </p>
              </div>
            </GlassCard>
          </Scroll3DItem>

          <Scroll3DItem effect="tilt-3d" depth={40} rotateXAmount={10} rotateYAmount={6}>
            <GlassCard
              glow="subtle"
              className="p-6 flex flex-col justify-between h-full bg-white/90 dark:bg-[#0c000e]/80 backdrop-blur-2xl border border-[#1d001d]/12 dark:border-[#e6e8ec]/15 shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4b36e3] to-[#1d001d] text-[#ffffff] flex items-center justify-center shadow-md">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
                  Digital Presence & Growth
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#e6e8ec]/75 font-medium leading-relaxed">
                  SEO optimization, Google Business Profile setup, social media strategy, and workflow automations.
                </p>
              </div>
            </GlassCard>
          </Scroll3DItem>
        </div>
      </Scroll3DContainer>
    </section>
  );
}
