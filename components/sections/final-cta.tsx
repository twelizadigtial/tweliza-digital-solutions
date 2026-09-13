"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUpRight } from "lucide-react";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

interface FinalCTASectionProps {
  onOpenBooking?: () => void;
}

export function FinalCTASection({ onOpenBooking }: FinalCTASectionProps) {
  return (
    <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <Scroll3DContainer>
        <Scroll3DItem effect="expand" depth={80} rotateXAmount={8}>
          <div className="p-8 sm:p-20 rounded-3xl bg-gradient-to-br from-[#000000] via-[#160018] to-[#03010b] text-[#e6e8ec] border-2 border-[#a832a8]/40 dark:border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.95)] relative overflow-hidden text-center space-y-6">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#a832a8]/25 rounded-full blur-[150px] pointer-events-none -z-10" />

            <span className="font-mono text-[10px] font-bold text-[#e6e8ec] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-[#a832a8]/30 border border-[#e6e8ec]/30 backdrop-blur-xl inline-block">
              Start your project
            </span>

            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e6e8ec] max-w-3xl mx-auto leading-[1.08]">
              Ready to turn your idea into a <span className="text-gradient-purple">digital experience</span>?
            </h2>

            <p className="text-xs sm:text-lg text-[#e6e8ec]/85 max-w-xl mx-auto font-medium leading-relaxed">
              Tell us about your project, timeline, and goals. We'll respond with a clear proposal.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  type="button"
                  data-cursor="BOOK"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all duration-400 shadow-2xl shadow-[#1d001d]/80 transform hover:-translate-y-0.5"
                >
                  <span>Let's Build Together</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  data-cursor="BOOK"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all duration-400 shadow-2xl shadow-[#1d001d]/80 transform hover:-translate-y-0.5"
                >
                  <span>Let's Build Together</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              )}
            </div>
          </div>
        </Scroll3DItem>
      </Scroll3DContainer>
    </section>
  );
}
