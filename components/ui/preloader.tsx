"use client";

import React, { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check session storage to avoid repeating preloader in same session
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("tweliza_preloader_shown");
      if (hasLoaded) {
        setIsLoading(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tweliza_preloader_shown", "true");
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] text-white"
        >
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <BrandLogo width={240} height={56} />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-1 rounded-full bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
