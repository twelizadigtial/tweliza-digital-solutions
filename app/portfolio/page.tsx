"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, ShieldCheck, X, Sparkles, Filter } from "lucide-react";
import { PORTFOLIO_PROJECTS_DATA, PortfolioProject } from "@/data/tweliza-data";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioProject | null>(null);

  const categories = ["All", "Next.js", "Java", "Creative", "E-Commerce", "Systems"];

  const filteredProjects = PORTFOLIO_PROJECTS_DATA.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Next.js") return project.technology.includes("Next.js");
    if (selectedFilter === "Java") return project.technology.includes("Java");
    if (selectedFilter === "Creative") return project.category.toLowerCase().includes("photography") || project.category.toLowerCase().includes("creative") || project.category.toLowerCase().includes("brand");
    if (selectedFilter === "E-Commerce") return project.category.toLowerCase().includes("e-commerce") || project.category.toLowerCase().includes("sales") || project.category.toLowerCase().includes("footwear");
    if (selectedFilter === "Systems") return project.category.toLowerCase().includes("system") || project.category.toLowerCase().includes("infrastructure");
    return true;
  });

  return (
    <main className="min-h-screen bg-mesh-gradient bg-tech-grid selection:bg-violet-500 selection:text-white relative">
      <Preloader />
      <CustomCursor />

      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25 inline-block mb-3">
            // Selected Work & Case Studies
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-tight">
            Crafted for <span className="text-gradient-purple">real businesses</span> across industries.
          </h1>

          <p className="text-sm sm:text-base text-slate-800 dark:text-[#e6e8ec]/85 max-w-2xl mx-auto leading-relaxed font-semibold">
            From business websites to e-commerce platforms and custom digital systems, we create digital experiences designed around real business needs.
          </p>
        </div>

        {/* Agency Trust Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#1d001d]/65 border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#a832a8] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#a832a8]" />
            <span>Proven Track Record</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/90 font-medium leading-relaxed">
            We have delivered solutions for photographers, educational institutes, automotive engineers, fitness clubs, clothing brands, hosting providers, and multi-role business management operations.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">Photography</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">Education</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">Automotive</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">Fitness</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">E-Commerce</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">Hosting</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec]">Business Systems</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? "bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] text-[#ffffff] shadow-md"
                  : "bg-white dark:bg-[#1d001d]/60 text-[#080912] dark:text-[#e6e8ec] border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              glow="violet"
              className="p-5 flex flex-col justify-between h-full group overflow-hidden cursor-pointer active:scale-[0.99] transition-all duration-300 bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20"
              onClick={() => setActiveModalItem(project)}
              data-cursor="VIEW"
            >
              <div>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#000000] border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 shadow-md">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} project by TWELIZA Digital Solutions`}
                    fill
                    className="object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1d001d]/90 text-[#e6e8ec] backdrop-blur-md border border-[#a832a8]/40 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#080912] dark:text-[#e6e8ec] group-hover:text-[#a832a8] dark:group-hover:text-[#ffffff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-800 dark:text-[#e6e8ec]/85 line-clamp-3 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1d001d]/15 dark:border-[#e6e8ec]/15 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#f4f5f9] dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec] font-bold border border-[#1d001d]/15 dark:border-[#e6e8ec]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#a832a8]" />
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Inquiry CTA Banner */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] border-2 border-[#a832a8]/40 dark:border-[#e6e8ec]/30 shadow-2xl relative overflow-hidden text-center space-y-4">
          <span className="font-mono text-xs font-bold text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#a832a8]/40 border border-[#e6e8ec]/30 backdrop-blur-md">
            Ready for your next project?
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#e6e8ec]">
            Let's build something exceptional together.
          </h2>

          <p className="text-xs sm:text-base text-[#e6e8ec]/85 max-w-xl mx-auto font-medium leading-relaxed">
            Tell us about your business goals and requirements. We'll craft a modern digital experience designed around your brand.
          </p>

          <div className="pt-3">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-xl shadow-[#1d001d]/70 transform hover:-translate-y-0.5"
            >
              <span>Work With TWELIZA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="absolute inset-0 bg-[#000000]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#1d001d] border border-[#1d001d]/20 dark:border-[#e6e8ec]/30 p-5 sm:p-8 shadow-2xl z-10 space-y-4 my-auto text-[#080912] dark:text-[#e6e8ec]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="violet" size="sm" className="mb-1.5">
                    {activeModalItem.category}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#080912] dark:text-[#e6e8ec]">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#e6e8ec]/75 font-medium mt-0.5">
                    Client Industry: {activeModalItem.clientType}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-xl text-slate-500 hover:bg-[#1d001d]/10 dark:hover:bg-[#e6e8ec]/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#1d001d]/15 bg-[#000000]">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                {activeModalItem.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#080912] dark:text-[#e6e8ec] uppercase tracking-wider mb-1.5">
                  Technologies & Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalItem.technology.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-lg bg-[#f4f5f9] dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec] font-bold border border-[#1d001d]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1d001d]/15 dark:border-[#e6e8ec]/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    setBookingModalOpen(true);
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Build Similar Solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-[#080912] dark:text-[#e6e8ec] bg-slate-100 dark:bg-white/10 hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />

      <StickyMobileCTA onOpenBooking={() => setBookingModalOpen(true)} />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
