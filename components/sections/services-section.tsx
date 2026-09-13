"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/tweliza-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Layout, 
  Palette, 
  Share2, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  Check, 
  ArrowUpRight,
  ChevronRight,
  Code2,
  Layers,
  Sparkle,
  Zap,
  Star,
  Activity,
  CheckCircle2,
  Search,
  MessageSquare,
  MapPin,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeService = SERVICES_DATA[activeTab] || SERVICES_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-[#a832a8]" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-[#4b36e3]" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-[#a832a8]" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-[#4b36e3]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#a832a8]" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-[#4b36e3]" />;
      default:
        return <Globe className="w-5 h-5 text-[#a832a8]" />;
    }
  };

  // Render pure code-driven interactive luxury UI visual widgets (No images!)
  const renderVisualWidget = (idx: number) => {
    switch (idx) {
      case 0:
        // WEB: Code & Architecture Canvas
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] font-mono text-xs relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[10px] text-[#e6e8ec]/70 ml-2">tweliza-web.config.ts</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                100/100 SPEED
              </span>
            </div>

            <div className="space-y-2 py-4">
              <p className="text-[#a832a8] font-bold">// Web Architecture Blueprint</p>
              <p><span className="text-purple-400">const</span> website = <span className="text-blue-400">tweliza</span>.deploy(&#123;</p>
              <p className="pl-4 text-[#e6e8ec]/90">responsive: <span className="text-emerald-300">true</span>,</p>
              <p className="pl-4 text-[#e6e8ec]/90">seoEngine: <span className="text-amber-300">"Advanced"</span>,</p>
              <p className="pl-4 text-[#e6e8ec]/90">conversion: <span className="text-cyan-300">"High Impact"</span></p>
              <p>&#125;);</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-bold">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-[#a832a8]" />
                <span>Next.js · Tailwind · Mobile First</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">Desktop + Mobile</span>
            </div>
          </div>
        );

      case 1:
        // DESIGN: Wireframe & Prototype Canvas
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e6e8ec]">
                <Layers className="w-4 h-4 text-[#4b36e3]" />
                <span>Design System & Wireframes</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4b36e3]/30 text-[#e6e8ec] border border-[#4b36e3]/50">
                Figma Specs
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-[10px] font-mono text-purple-300 uppercase">Layout Grid</div>
                <div className="h-2 w-3/4 rounded bg-[#a832a8]/60" />
                <div className="h-2 w-1/2 rounded bg-[#4b36e3]/60" />
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-[10px] font-mono text-cyan-300 uppercase">Design Tokens</div>
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full bg-[#1d001d] border border-white/20" />
                  <span className="w-4 h-4 rounded-full bg-[#a832a8] border border-white/20" />
                  <span className="w-4 h-4 rounded-full bg-[#4b36e3] border border-white/20" />
                  <span className="w-4 h-4 rounded-full bg-[#e6e8ec] border border-white/20" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold">
              <span>Interactive User Experience</span>
              <span className="text-emerald-400 font-mono text-[11px]">✓ Tested UX</span>
            </div>
          </div>
        );

      case 2:
        // IDENTITY: Brand Specimen & Logo Canvas
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-[#a832a8] font-bold uppercase tracking-wider">
                Identity System
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
                Brand Kit
              </span>
            </div>

            <div className="space-y-3 py-2 text-center">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-[#1d001d] to-[#a832a8] border border-white/20 shadow-xl">
                <Sparkle className="w-8 h-8 text-[#e6e8ec]" />
              </div>
              <div className="space-y-0.5">
                <div className="text-base font-extrabold uppercase tracking-widest text-[#e6e8ec]">
                  Visual Identity
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Logo · Typography · Color System · Identity Assets
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-around text-[10px] font-bold text-slate-300">
              <span>Logo Design</span>
              <span>•</span>
              <span>Color Systems</span>
              <span>•</span>
              <span>Brand Guidelines</span>
            </div>
          </div>
        );

      case 3:
        // SOCIAL: Social Media Content Canvas
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Share2 className="w-4 h-4 text-[#4b36e3]" />
                <span>Digital Content & Engagement</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                HIGH REACH
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                <div className="text-[10px] font-mono text-purple-300">Posts</div>
                <div className="text-sm font-extrabold text-[#e6e8ec]">Custom</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                <div className="text-[10px] font-mono text-cyan-300">Stories</div>
                <div className="text-sm font-extrabold text-[#e6e8ec]">Templates</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                <div className="text-[10px] font-mono text-emerald-300">Reels</div>
                <div className="text-sm font-extrabold text-[#e6e8ec]">Viral</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold">
              <span>Cohesive Social Presence</span>
              <span className="text-[#a832a8] font-mono text-[11px]">Instagram · TikTok · FB</span>
            </div>
          </div>
        );

      case 4:
        // CONTENT: UGC & Photo Video Canvas
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-[#a832a8]" />
                <span>UGC & Product Content</span>
              </div>
              <div className="flex text-amber-400 text-xs">
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
              </div>
            </div>

            <div className="space-y-2 py-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono text-purple-300 uppercase">Authentic Brand Content</div>
                <p className="text-xs text-slate-300 font-medium">"UGC videos, product photos, reviews & testimonials that build instant buyer trust."</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-bold text-slate-300">
              <span>Video Reviews</span>
              <span>•</span>
              <span>Product Photography</span>
              <span>•</span>
              <span>Testimonials</span>
            </div>
          </div>
        );

      case 5:
        // GROWTH: AI & Ecosystem Canvas
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Cpu className="w-4 h-4 text-[#4b36e3]" />
                <span>Digital Growth & Automation</span>
              </div>
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                ACTIVE AI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-bold">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Google Business</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-bold">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Bot</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-bold">
                <Search className="w-4 h-4 text-amber-400" />
                <span>SEO Visibility</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-bold">
                <Activity className="w-4 h-4 text-[#a832a8]" />
                <span>Smart Workflows</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold">
              <span>Customer Discovery & Conversion</span>
              <span className="text-emerald-400 font-mono text-[11px]">Online Growth</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[300px] sm:h-[400px] rounded-full blur-[140px] pointer-events-none -z-10 bg-[#a832a8]/20 dark:bg-[#4b36e3]/30 transition-all duration-700" />

      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono text-[10px] font-bold text-[#a832a8] dark:text-[#e6e8ec] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full bg-[#1d001d]/30 dark:bg-[#1d001d]/80 border border-[#a832a8]/40 dark:border-[#e6e8ec]/30 backdrop-blur-xl shadow-sm inline-block">
            // 01 · CORE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-[1.1]">
            Everything you need to build your <span className="text-gradient-purple">digital presence</span>.
          </h2>
          <p className="text-xs sm:text-base text-slate-700 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
            From your first idea to a finished digital experience, tweliza brings design, development, and creative services together.
          </p>
        </div>

        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-xl shadow-[#1d001d]/40 transform hover:-translate-y-0.5"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ffffff]" />
          </Link>
        </div>
      </Scroll3DItem>

      {/* Service Selector Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {SERVICES_DATA.map((service, idx) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => setActiveTab(idx)}
            data-cursor="SELECT"
            className={`px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-400 ease-out flex items-center gap-2 shrink-0 touch-manipulation active:scale-95 ${
              activeTab === idx
                ? "bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] text-[#ffffff] shadow-xl scale-[1.02] border border-[#e6e8ec]/30"
                : "bg-white/85 dark:bg-[#0c000e]/80 text-[#080912] dark:text-[#e6e8ec] border border-[#1d001d]/12 dark:border-white/15 shadow-sm hover:bg-slate-100 dark:hover:bg-white/10"
            }`}
          >
            <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
            <span>{service.title}</span>
          </button>
        ))}
      </div>

      {/* Active Service Showcase Card */}
      <Scroll3DContainer>
        <Scroll3DItem effect="expand" depth={60} rotateXAmount={8}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard
                glow="violet"
                className="p-6 sm:p-10 border-2 border-[#1d001d]/15 dark:border-[#e6e8ec]/20 shadow-[0_24px_60px_rgba(0,0,0,0.85)] space-y-6 bg-white/90 dark:bg-[#0c000e]/85 backdrop-blur-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Left Column: Visual Details & Deliverables */}
                  <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#f4f5f9] dark:bg-[#160018] border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 flex items-center justify-center shrink-0 shadow-md">
                          {getIcon(activeService.iconName)}
                        </div>
                        <div>
                          <Badge variant="violet" size="sm" className="mb-0.5 tracking-wider uppercase text-[10px]">
                            Pillar 0{activeTab + 1} · {activeService.label}
                          </Badge>
                          <h3 className="text-xl sm:text-3xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
                            {activeService.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-base text-slate-700 dark:text-[#e6e8ec]/90 leading-relaxed font-medium">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold text-[#080912] dark:text-[#e6e8ec] uppercase tracking-[0.2em]">
                        Capabilities & Deliverables
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeService.servicesList.slice(0, 6).map((item) => (
                          <div
                            key={item}
                            className="p-3 rounded-xl bg-white/90 dark:bg-[#120014]/90 border border-[#1d001d]/12 dark:border-white/10 flex items-center gap-2.5 text-xs font-bold text-[#080912] dark:text-[#e6e8ec] shadow-sm hover:border-[#a832a8]/50 transition-colors"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#1d001d]/10 dark:bg-[#a832a8]/30 text-[#1d001d] dark:text-[#e6e8ec] flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1d001d]/12 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <Link
                        href={`/services/${activeService.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1d001d] dark:text-[#e6e8ec] hover:text-[#a832a8] transition-colors py-1.5"
                      >
                        <span>Full Service Blueprint</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => {
                          if (onSelectServiceForBooking) onSelectServiceForBooking(activeService.title);
                        }}
                        data-cursor="BOOK"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all shadow-xl shadow-[#1d001d]/30 transform hover:-translate-y-0.5"
                      >
                        <span>Inquire Service</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Code & Interactive Tech Canvas Widget (No Images!) */}
                  <div className="lg:col-span-5 aspect-square lg:aspect-auto rounded-3xl overflow-hidden border-2 border-[#1d001d]/15 dark:border-white/15 shadow-2xl relative">
                    {renderVisualWidget(activeTab)}
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </Scroll3DItem>
      </Scroll3DContainer>
    </section>
  );
}
