"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/94742269976?text=Hi%20TWELIZA%20Digital%20Solutions!%20%F0%9F%90%8B%20I%E2%80%99m%20interested%20in%20your%20digital%20services%20and%20would%20like%20to%20discuss%20a%20project.";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (hasUnread) {
      setHasUnread(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mb-4 w-[320px] sm:w-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-2xl text-white"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-950/90 via-neutral-900/90 to-neutral-950 p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-500/40 p-0.5 bg-neutral-900 shrink-0">
                  <Image
                    src="/images/logo-circular.png"
                    alt="TWELIZA Digital Solutions"
                    fill
                    className="object-cover rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-neutral-900" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white flex items-center gap-1.5">
                    TWELIZA Digital Solutions
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Content Body */}
            <div className="p-4 bg-gradient-to-b from-emerald-950/15 via-transparent to-transparent space-y-3 text-xs leading-relaxed text-neutral-200">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm space-y-2 backdrop-blur-sm">
                <p className="font-medium text-neutral-100">Hi there! 👋 Thanks for stopping by TWELIZA Digital Solutions.</p>
                <p className="text-neutral-300">
                  Looking for a website, UI/UX design, digital marketing, or other digital solutions? Tell us what you have in mind, and let’s bring your idea to life.
                </p>
                <span className="block text-[10px] text-neutral-400 text-right mt-1 font-mono">
                  Just now
                </span>
              </div>
            </div>

            {/* Footer Action Button */}
            <div className="p-4 pt-1 border-t border-white/5 bg-neutral-950/50">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Start Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button & Tooltip Wrapper */}
      <div className="relative pointer-events-auto flex items-center gap-3">
        {/* Desktop Hover Tooltip */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="hidden md:block px-3 py-1.5 rounded-lg bg-neutral-900/90 text-white text-xs font-semibold shadow-xl border border-white/10 backdrop-blur-md whitespace-nowrap"
            >
              Chat with TWELIZA
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Trigger Button */}
        <motion.button
          onClick={handleToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open WhatsApp Chat"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-colors duration-200 border border-emerald-400/40"
        >
          {/* Pulse Glow Aura */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />

          {/* Unread Badge Indicator */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white font-extrabold text-[11px] flex items-center justify-center shadow-md border-2 border-neutral-950 animate-bounce">
              1
            </span>
          )}

          {/* Icon Toggle between WhatsApp and Close */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 stroke-[2.5]" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
