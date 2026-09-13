"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <Badge variant="emerald" dot size="md">
          Client Endorsements
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Trusted by founders and <span className="text-gradient-purple">tech leaders</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Hear from CTOs and venture-backed founders who partnered with Soluce Labs to launch their critical software platforms.
        </p>
      </Scroll3DItem>

      {/* Main Interactive Spotlight Testimonial with 3D Tilt */}
      <Scroll3DContainer className="max-w-4xl mx-auto mb-12">
        <Scroll3DItem effect="tilt-3d" depth={60} rotateXAmount={10} rotateYAmount={6}>
          <GlassCard
            glow="violet"
            className="p-8 sm:p-12 relative overflow-hidden border-2 border-violet-500/20 shadow-2xl"
          >
            <div className="absolute top-6 right-8 text-violet-500/10 dark:text-violet-400/10 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1.5]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 relative z-10"
              >
                {/* Rating & Highlight Pill */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 ml-2">
                      5.0 / 5.0 Rating
                    </span>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {current.highlightMetric}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-lg sm:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed italic">
                  "{current.content}"
                </p>

                {/* Author Details & Navigation Controls */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-md">
                      <Image
                        src={current.avatar}
                        alt={current.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {current.author}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {current.role}, <strong className="text-slate-800 dark:text-slate-200">{current.company}</strong>
                      </p>
                      <div className="text-[11px] text-violet-600 dark:text-violet-400 font-semibold mt-0.5">
                        Project: {current.projectCategory}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={prevTestimonial}
                      className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </GlassCard>
        </Scroll3DItem>
      </Scroll3DContainer>

      {/* Trust Badges Ribbon */}
      <Scroll3DItem effect="fall-in" depth={30} rotateXAmount={8} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">5.0 ★ Rating on Clutch</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Verified Top Software Studio</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">100% On-Time Delivery</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Guaranteed Sprint Milestones</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 shrink-0">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">99.4% Client Retention</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Long-term Product Partners</div>
          </div>
        </div>
      </Scroll3DItem>
    </section>
  );
}
