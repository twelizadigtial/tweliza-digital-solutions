"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BrandLogo } from "@/components/ui/brand-logo";
import { SearchBar } from "@/components/ui/search-bar";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
          isScrolled
            ? "py-3 bg-[#f8f9fc]/90 dark:bg-[#03010b]/90 backdrop-blur-2xl border-b border-[#1d001d]/10 dark:border-[#e6e8ec]/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Prominent tweliza Brand Logo */}
            <Link href="/" className="flex items-center group py-1">
              <BrandLogo size="lg" className="transition-transform duration-400 ease-out group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 dark:bg-[#0c000e]/80 backdrop-blur-2xl border border-[#1d001d]/12 dark:border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#080912] dark:text-[#e6e8ec] hover:text-[#a832a8] dark:hover:text-[#ffffff] hover:bg-[#1d001d]/5 dark:hover:bg-white/10 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <SearchBar />
              <ThemeToggle />

              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#1d001d]/30"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#1d001d]/30"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#080912] dark:text-[#e6e8ec] hover:bg-[#1d001d]/10 dark:hover:bg-[#1d001d]/50"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-[#1d001d]/15 dark:border-[#e6e8ec]/15 bg-[#f4f5f9]/95 dark:bg-[#000000]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-lg"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-[#080912] dark:text-[#e6e8ec] hover:bg-white/80 dark:hover:bg-[#1d001d]/60"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-[#1d001d]/15 dark:border-[#e6e8ec]/15">
                {onOpenBooking ? (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] shadow-md"
                  >
                    <span>Start Your Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] shadow-md"
                  >
                    <span>Start Your Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
