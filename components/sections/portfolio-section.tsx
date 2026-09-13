"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS_DATA, PortfolioProject } from "@/data/tweliza-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function PortfolioSection() {
  const [activeModalItem, setActiveModalItem] = useState<PortfolioProject | null>(null);

  // Top 3 featured projects for the landing page reflecting latest portfolio order
  const featuredProjects = PORTFOLIO_PROJECTS_DATA.slice(0, 3);
  const mainHeroProject = featuredProjects[0];
  const sideProjects = featuredProjects.slice(1);

  return (
    <section id="portfolio" className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-[#1d001d]/30 dark:bg-[#1d001d]/80 border border-[#a832a8]/40 dark:border-[#e6e8ec]/30 backdrop-blur-xl shadow-sm inline-block">
            // Selected Work
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-[1.1]">
            Projects that <span className="text-gradient-purple">speak for themselves</span>.
          </h2>
          <p className="text-xs sm:text-base text-slate-700 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
            From business websites to e-commerce platforms and custom digital systems, we create digital experiences designed around real business needs.
          </p>
        </div>

        <div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-xl shadow-[#1d001d]/40 transform hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Scroll3DItem>

      {/* Touch-Native Editorial Portfolio Showcase */}
      <Scroll3DContainer>
        <div className="space-y-8">
          
          {/* 1. Featured Main Project */}
          {mainHeroProject && (
            <Scroll3DItem effect="expand" depth={70} rotateXAmount={8}>
              <GlassCard
                glow="violet"
                className="p-6 sm:p-10 border-2 border-[#1d001d]/12 dark:border-[#e6e8ec]/15 shadow-[0_24px_60px_rgba(0,0,0,0.85)] group cursor-pointer relative overflow-hidden active:scale-[0.99] transition-transform bg-white/90 dark:bg-[#0c000e]/80 backdrop-blur-2xl"
                onClick={() => setActiveModalItem(mainHeroProject)}
                data-cursor="VIEW"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <Badge variant="violet" size="sm" className="uppercase tracking-wider text-[10px]">
                      Featured Project · {mainHeroProject.category}
                    </Badge>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight group-hover:text-[#a832a8] dark:group-hover:text-[#ffffff] transition-colors">
                      {mainHeroProject.title}
                    </h3>
                    <p className="text-xs sm:text-base text-slate-700 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                      {mainHeroProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {mainHeroProject.technology.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-white/90 dark:bg-[#160018] text-[#080912] dark:text-[#e6e8ec] border border-[#1d001d]/12 dark:border-[#e6e8ec]/15 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1d001d] dark:text-[#e6e8ec]">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#a832a8]" />
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#1d001d]/12 dark:border-[#e6e8ec]/15 shadow-2xl bg-[#000000]">
                    <Image
                      src={mainHeroProject.image}
                      alt={`${mainHeroProject.title} - ${mainHeroProject.category} by TWELIZA Digital Solutions`}
                      fill
                      className="object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </GlassCard>
            </Scroll3DItem>
          )}

          {/* 2. Side-by-Side Projects (KIDS Institute & LEW Tech) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideProjects.map((item, idx) => (
              <Scroll3DItem
                key={item.id}
                effect="tilt-3d"
                depth={50}
                rotateXAmount={10}
                rotateYAmount={idx % 2 === 0 ? 6 : -6}
                offsetStart={0.1 + idx * 0.05}
              >
                <GlassCard
                  glow="violet"
                  className="p-5 flex flex-col justify-between h-full group overflow-hidden cursor-pointer active:scale-[0.99] transition-transform bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20"
                  onClick={() => setActiveModalItem(item)}
                  data-cursor="VIEW"
                >
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#000000] border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 shadow-sm">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.category} by TWELIZA Digital Solutions`}
                      fill
                      className="object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1d001d]/90 text-[#e6e8ec] backdrop-blur-md border border-[#a832a8]/40 shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#080912] dark:text-[#e6e8ec] group-hover:text-[#a832a8] dark:group-hover:text-[#ffffff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-800 dark:text-[#e6e8ec]/85 line-clamp-2 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.technology.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#f4f5f9] dark:bg-[#03012c] text-[#080912] dark:text-[#e6e8ec] font-bold border border-[#1d001d]/15 dark:border-[#e6e8ec]/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1d001d]/15 dark:border-[#e6e8ec]/15 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] flex items-center gap-1">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#a832a8]" />
                    </span>
                  </div>
                </GlassCard>
              </Scroll3DItem>
            ))}
          </div>

        </div>
      </Scroll3DContainer>

      {/* Section End CTA */}
      <div className="mt-10 text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-xl shadow-[#1d001d]/40"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Case Study Modal */}
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
                    Domain: {activeModalItem.clientType}
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
                  Built With
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

              <div className="pt-3 border-t border-[#1d001d]/15 dark:border-[#e6e8ec]/15 flex justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-90 active:scale-95 transition-all shadow-md"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
