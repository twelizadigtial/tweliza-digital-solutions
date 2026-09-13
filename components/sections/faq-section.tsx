"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/tweliza-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

export function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-8 md:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center space-y-2 mb-10 md:mb-12">
        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25 inline-block mb-3">
          Frequently asked questions
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
          Everything you need to <span className="text-gradient-purple">know</span>.
        </h2>
      </Scroll3DItem>

      {/* FAQs Accordion */}
      <div className="space-y-3">
        {FAQ_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <GlassCard
              key={faq.question}
              className="p-4 sm:p-6 bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20 cursor-pointer transition-colors"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm sm:text-lg font-bold text-[#080912] dark:text-[#e6e8ec]">
                  {faq.question}
                </h3>
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center shrink-0 text-[#1d001d] dark:text-[#e6e8ec]"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 pt-3 leading-relaxed font-semibold border-t border-[#1d001d]/10 dark:border-[#e6e8ec]/10 mt-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-600 dark:text-[#e6e8ec]/75 font-semibold">
          Have a question not listed here?{" "}
          <button
            onClick={onOpenBooking}
            className="text-[#1d001d] dark:text-[#e6e8ec] underline font-bold hover:opacity-80"
          >
            Ask us directly →
          </button>
        </p>
      </div>
    </section>
  );
}
