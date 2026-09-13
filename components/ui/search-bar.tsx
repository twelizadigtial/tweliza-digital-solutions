"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ChevronRight, Sparkles, Folder, Tag, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS_DATA, SERVICES_DATA, FAQ_DATA } from "@/data/tweliza-data";

export interface SearchResultItem {
  id: string;
  title: string;
  category: "Services" | "Portfolio" | "Pricing" | "Sections" | "Pages";
  description: string;
  href: string;
  badge?: string;
}

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Build searchable index from tweliza studio data
  const searchIndex: SearchResultItem[] = [
    // Pages & Sections
    { id: "page-home", title: "Home Page", category: "Pages", description: "Main landing showcase with featured projects and services.", href: "/" },
    { id: "page-about", title: "About tweliza", category: "Pages", description: "Learn about our digital studio, philosophy, and approach.", href: "/about" },
    { id: "page-services", title: "Services & Capabilities", category: "Pages", description: "Explore our 6 core digital capabilities and blueprints.", href: "/services" },
    { id: "page-portfolio", title: "Selected Work Showcase", category: "Pages", description: "View all 9 client projects, screenshots, and case studies.", href: "/portfolio" },
    { id: "page-pricing", title: "Packages & Pricing", category: "Pages", description: "Transparent pricing tiers and budget consultation options.", href: "/pricing" },
    { id: "page-contact", title: "Contact Studio", category: "Pages", description: "Send project inquiries, get quotes, or book a consultation.", href: "/contact" },
    
    { id: "sec-process", title: "How We Work (Process Timeline)", category: "Sections", description: "6-step clear, collaborative process from Understand to Grow.", href: "/#process" },
    { id: "sec-why", title: "Why TWELIZA", category: "Sections", description: "6 studio standards: Personal approach, design meets tech, and long-term thinking.", href: "/#why" },
    { id: "sec-faq", title: "Frequently Asked Questions", category: "Sections", description: "Answers to common questions about timelines, payments, and deliverables.", href: "/#faq" },

    // Services
    ...SERVICES_DATA.map((s) => ({
      id: `service-${s.slug}`,
      title: s.title,
      category: "Services" as const,
      description: s.description,
      href: `/services/${s.slug}`,
      badge: s.label
    })),

    // Projects
    ...PORTFOLIO_PROJECTS_DATA.map((p) => ({
      id: `project-${p.id}`,
      title: p.title,
      category: "Portfolio" as const,
      description: p.description,
      href: `/portfolio?id=${p.id}`,
      badge: p.clientType
    })),

    // Custom Project Quote & Consultation
    {
      id: "pricing-custom-quote",
      title: "Request a Custom Quote",
      category: "Pricing" as const,
      description: "Discuss your project scope, requirements, and custom quotation.",
      href: "/pricing",
      badge: "Custom Quote"
    },
    {
      id: "pricing-project-talk",
      title: "Let's Talk About Your Project",
      category: "Pricing" as const,
      description: "Start a conversation via WhatsApp or Email to discuss your project.",
      href: "/pricing",
      badge: "Project Consultation"
    }
  ];

  // Filter items matching search query
  const filteredResults = query.trim() === "" 
    ? [] 
    : searchIndex.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.badge && item.badge.toLowerCase().includes(q))
        );
      });

  // Handle Keyboard Navigation (Cmd+K, Escape, Enter, Arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle Click Outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectResult = (item: SearchResultItem) => {
    setIsOpen(false);
    setQuery("");
    router.push(item.href);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      const target = filteredResults[selectedIndex] || filteredResults[0];
      handleSelectResult(target);
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Services":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20";
      case "Portfolio":
        return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20";
      case "Pricing":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/20";
    }
  };

  return (
    <div ref={searchContainerRef} className="relative">
      
      {/* Desktop Search Input Trigger */}
      <div className="hidden lg:flex items-center">
        <div
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => inputRef.current?.focus(), 50);
          }}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all duration-300 cursor-pointer border ${
            isOpen
              ? "bg-white dark:bg-[#1d001d] border-[#a832a8] ring-2 ring-[#a832a8]/30 shadow-md w-64"
              : "bg-white/80 dark:bg-[#1d001d]/60 border-[#1d001d]/15 dark:border-[#e6e8ec]/15 hover:border-[#a832a8]/40 w-48"
          }`}
        >
          <Search className="w-3.5 h-3.5 text-[#1d001d] dark:text-[#e6e8ec] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search studio..."
            value={query}
            onFocus={() => setIsOpen(true)}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-xs text-[#080912] dark:text-[#e6e8ec] placeholder-slate-400 outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuery("");
              }}
              className="p-0.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block font-mono text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/15">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* Mobile Search Trigger Icon */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setTimeout(() => inputRef.current?.focus(), 50);
          }}
          className="p-2 rounded-xl text-[#080912] dark:text-[#e6e8ec] hover:bg-[#1d001d]/10 dark:hover:bg-[#1d001d]/50 transition-colors"
          aria-label="Toggle search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Expanding Input Bar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-16 left-4 right-4 z-50"
          >
            <form onSubmit={handleFormSubmit} className="relative">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white dark:bg-[#1d001d] border-2 border-[#a832a8] shadow-2xl">
                <Search className="w-4 h-4 text-[#a832a8] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search services, work, pricing..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="w-full bg-transparent text-sm text-[#080912] dark:text-[#e6e8ec] outline-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && query.trim().length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 left-0 right-0 lg:left-auto lg:right-0 lg:w-[420px] z-50 mt-2 p-2 rounded-3xl bg-white/95 dark:bg-[#1d001d]/95 backdrop-blur-2xl border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-2xl max-h-[380px] overflow-y-auto"
          >
            {filteredResults.length > 0 ? (
              <div className="space-y-1">
                <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-[#1d001d]/10 dark:border-[#e6e8ec]/10">
                  <span>Results ({filteredResults.length})</span>
                  <span>Press Enter to Go</span>
                </div>

                {filteredResults.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectResult(item)}
                    className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 flex items-start justify-between gap-3 ${
                      selectedIndex === idx
                        ? "bg-[#1d001d]/10 dark:bg-[#03012c] border border-[#a832a8]/40"
                        : "hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${getCategoryBadge(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="text-xs font-bold text-[#080912] dark:text-[#e6e8ec]">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-[#e6e8ec]/70 line-clamp-1 font-medium">
                        {item.description}
                      </p>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#1d001d]/10 dark:bg-white/10 flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#080912] dark:text-[#e6e8ec]">
                  No results found for "{query}"
                </div>
                <p className="text-[11px] text-slate-500 dark:text-[#e6e8ec]/60">
                  Try searching for website, portfolio, pricing, or branding.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
