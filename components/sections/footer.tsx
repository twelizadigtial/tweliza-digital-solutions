"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { TWELIZA_CONFIG } from "@/data/tweliza-data";

export function Footer() {
  return (
    <footer className="border-t border-[#1d001d]/10 dark:border-white/10 bg-[#f8f9fc] dark:bg-[#03010b] pt-20 pb-14 relative overflow-hidden text-[#080912] dark:text-[#e6e8ec]">
      {/* Subtle hairline border highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#a832a8]/40 dark:via-[#a832a8]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#1d001d]/10 dark:border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center">
              <BrandLogo size="lg" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-[#e6e8ec]/75 leading-relaxed max-w-sm font-medium">
              tweliza Digital Solutions — designing and building modern digital experiences for businesses, brands, and ambitious ideas.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#080912] dark:text-[#e6e8ec] font-bold tracking-wider uppercase pt-1">
              <span className="w-2 h-2 rounded-full bg-[#a832a8] animate-pulse" />
              <span>Status: {TWELIZA_CONFIG.status}</span>
            </div>
          </div>

          {/* Studio Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.2em]">
              Studio
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-[#e6e8ec]/75">
              <li><Link href="/about" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.2em]">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-[#e6e8ec]/75">
              <li><Link href="/services/website" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Websites & Apps</Link></li>
              <li><Link href="/services/branding" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Branding & Identity</Link></li>
              <li><Link href="/services/social-media" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Social Media & Creative</Link></li>
              <li><Link href="/services/ai-solutions" className="hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.2em]">
              Connect
            </h4>
            <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-[#e6e8ec]/75">
              <div>Email: {TWELIZA_CONFIG.email}</div>
              <div>Location: {TWELIZA_CONFIG.location}</div>
            </div>

            <div className="flex items-center gap-4 pt-2 uppercase tracking-wider text-[11px] font-bold">
              <a href={TWELIZA_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#e6e8ec]/70 hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Instagram</a>
              <a href={TWELIZA_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#e6e8ec]/70 hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">Facebook</a>
              <a href={TWELIZA_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#e6e8ec]/70 hover:text-[#a832a8] dark:hover:text-[#ffffff] transition-colors">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-600 dark:text-[#e6e8ec]/60">
          <div>
            © {new Date().getFullYear()} tweliza Digital Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-wider uppercase">
            <span>Web • Creative • Digital Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
