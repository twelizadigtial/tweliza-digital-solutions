"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyMobileCTAProps {
  onOpenBooking: () => void;
}

export function StickyMobileCTA({ onOpenBooking }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrolledPastHero = window.scrollY > 300;
      const notNearBottom = window.innerHeight + window.scrollY < document.body.offsetHeight - 400;

      setIsVisible(isMobile && scrolledPastHero && notNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <div className="p-3 rounded-full bg-[#000000]/90 dark:bg-[#000000]/95 backdrop-blur-xl border border-[#e6e8ec]/20 shadow-2xl flex items-center justify-between gap-3 text-[#e6e8ec]">
            <div className="flex items-center gap-2.5 pl-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1d001d] via-[#03012c] to-[#e6e8ec] p-[1px] shrink-0">
                <div className="w-full h-full bg-[#000000] rounded-[5px] flex items-center justify-center">
                  <span className="text-[#e6e8ec] font-black text-[10px] lowercase">tw</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold leading-tight text-[#e6e8ec]">tweliza studio</div>
                <div className="text-[10px] text-[#e6e8ec]/70">Available for projects</div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-extrabold text-[#e6e8ec] bg-gradient-to-r from-[#1d001d] to-[#03012c] active:scale-95 transition-transform shadow-md"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
