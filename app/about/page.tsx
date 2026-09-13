"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { Navbar } from "@/components/navbar";
import { CircularBrandLogo } from "@/components/ui/brand-logo";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Globe, 
  Palette, 
  Share2, 
  Bot, 
  ArrowUpRight, 
  Target, 
  Zap, 
  Heart,
  Users,
  Compass,
  Sliders,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";
import { WhyTwelizaSection } from "@/components/sections/why-tweliza";

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-mesh-gradient bg-tech-grid selection:bg-violet-500 selection:text-white relative">
      <Preloader />
      <CustomCursor />

      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
        
        {/* 1. Premium Editorial Hero & Brand Story Header */}
        <Scroll3DContainer>
          <div className="space-y-8 md:space-y-12">
            
            {/* Top Headline & Lead Statement */}
            <div className="max-w-4xl space-y-4">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 dark:bg-[#1d001d]/60 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25 backdrop-blur-md inline-block mb-3"
              >
                // about tweliza
              </motion.span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-[1.1]">
                We turn ideas into <span className="text-gradient-purple">digital experiences</span>.
              </h1>

              <p className="text-base sm:text-xl text-slate-800 dark:text-[#e6e8ec]/90 font-medium leading-relaxed max-w-3xl">
                tweliza Digital Solutions is a growing digital studio focused on helping businesses build a stronger presence in the digital world through thoughtful design and modern technology.
              </p>
            </div>

            {/* Editorial 2-Column Balanced Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* Left Column: Structured Brand Story Card */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <GlassCard glow="violet" className="p-6 sm:p-8 h-full bg-white/90 dark:bg-[#1d001d]/65 border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-xl space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#a832a8] uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-[#a832a8]" />
                      <span>Design & Technology Combined</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 font-semibold leading-relaxed">
                      From modern websites and UI/UX design to branding, social media content, and creative digital solutions, we bring design and technology together to help businesses look better, connect better, and grow online.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f4f5f9] dark:bg-[#03012c]/80 border border-[#1d001d]/12 dark:border-[#e6e8ec]/15 space-y-2">
                    <div className="text-xs font-bold text-[#080912] dark:text-[#e6e8ec]">
                      Our Core Belief
                    </div>
                    <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/80 leading-relaxed font-medium">
                      Great digital work isn't just about making something look good. It's about understanding the business, the people behind it, and the experience you want your customers to have.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                      Whether you're launching a new business, refreshing your brand, building a website, or exploring smarter digital solutions, tweliza works with you to turn your ideas into something meaningful, functional, and memorable.
                    </p>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => setBookingModalOpen(true)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-md shadow-[#1d001d]/30"
                      >
                        <span>Start a Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#080912] dark:text-[#e6e8ec] bg-white dark:bg-[#03012c] border border-[#1d001d]/15 dark:border-[#e6e8ec]/20 hover:bg-slate-100 transition-colors"
                      >
                        <span>View Work</span>
                      </Link>
                    </div>
                  </div>

                </GlassCard>
              </div>

              {/* Right Column: Luminous Brand Identity Badge Card */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <Scroll3DItem effect="tilt-3d" depth={50} rotateXAmount={8} rotateYAmount={-8} className="h-full">
                  <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#000000] via-[#1d001d] to-[#03012c] border-2 border-[#a832a8]/50 dark:border-[#e6e8ec]/30 shadow-2xl space-y-6 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                    
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#a832a8]/30 rounded-full blur-[80px] pointer-events-none" />

                    <CircularBrandLogo size={190} className="border-4 border-[#a832a8]/50 shadow-2xl my-2 relative z-10" />

                    <div className="space-y-1.5 text-center relative z-10">
                      <div className="text-base font-extrabold text-[#e6e8ec] uppercase tracking-wider">
                        tweliza Digital Solutions
                      </div>
                      <div className="text-xs text-[#e6e8ec]/80 font-mono">
                        Web • Creative • Digital Growth
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1 relative z-10">
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-[#e6e8ec] border border-white/15">Web</span>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-[#e6e8ec] border border-white/15">Creative</span>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-[#e6e8ec] border border-white/15">Social</span>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-[#e6e8ec] border border-white/15">AI</span>
                    </div>
                  </div>
                </Scroll3DItem>
              </div>

            </div>

          </div>
        </Scroll3DContainer>

        {/* 2. What We Believe (3 Visual Interactive Blocks) */}
        <div className="space-y-8">
          <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/20">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
              What we <span className="text-gradient-purple">believe in</span>.
            </h2>
            <p className="text-xs sm:text-base text-slate-800 dark:text-[#e6e8ec]/85 font-semibold">
              Three simple principles that guide every website, brand, and digital solution we build.
            </p>
          </Scroll3DItem>

          <Scroll3DContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Belief 1 */}
              <Scroll3DItem effect="tilt-3d" depth={40} rotateXAmount={8}>
                <GlassCard glow="violet" className="p-6 sm:p-8 space-y-4 h-full bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                    <Target className="w-6 h-6 text-[#a832a8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080912] dark:text-[#e6e8ec]">
                    Design should have a purpose
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                    A website or logo shouldn't exist just to look nice. It should communicate clearly, create trust, and help your business achieve its goals.
                  </p>
                </GlassCard>
              </Scroll3DItem>

              {/* Belief 2 */}
              <Scroll3DItem effect="tilt-3d" depth={40} rotateXAmount={8} offsetStart={0.1}>
                <GlassCard glow="violet" className="p-6 sm:p-8 space-y-4 h-full bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                    <Zap className="w-6 h-6 text-[#a832a8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080912] dark:text-[#e6e8ec]">
                    Technology should feel simple
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                    Your digital presence should be fast, easy to navigate, and reliable for your users, while remaining straightforward for you to manage.
                  </p>
                </GlassCard>
              </Scroll3DItem>

              {/* Belief 3 */}
              <Scroll3DItem effect="tilt-3d" depth={40} rotateXAmount={8} offsetStart={0.2}>
                <GlassCard glow="violet" className="p-6 sm:p-8 space-y-4 h-full bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                    <Users className="w-6 h-6 text-[#a832a8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080912] dark:text-[#e6e8ec]">
                    Collaboration leads to better work
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-[#e6e8ec]/85 leading-relaxed font-medium">
                    We work closely with clients to understand their vision, refine ideas, and build solutions that reflect their brand authentically.
                  </p>
                </GlassCard>
              </Scroll3DItem>

            </div>
          </Scroll3DContainer>
        </div>

        {/* Why TWELIZA Standards */}
        <WhyTwelizaSection />

        {/* 3. Our Approach Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/90 dark:bg-[#1d001d]/65 border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-xl space-y-8">
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <span className="font-mono text-xs font-bold text-[#a832a8] uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#080912] dark:text-[#e6e8ec]">
              Personal. Collaborative. Flexible.
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-[#e6e8ec]/80 font-medium">
              We keep our workflow straightforward so you always know what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-[#f4f5f9] dark:bg-[#03012c]/80 border border-[#1d001d]/12 space-y-2">
              <div className="font-mono text-xs font-bold text-[#a832a8]">01 · Discovery</div>
              <h4 className="text-sm font-bold text-[#080912] dark:text-[#e6e8ec]">Understand Your Business</h4>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/75 leading-relaxed font-medium">
                We start with a conversation to understand your goals, target audience, and project scope.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f4f5f9] dark:bg-[#03012c]/80 border border-[#1d001d]/12 space-y-2">
              <div className="font-mono text-xs font-bold text-[#a832a8]">02 · Direction</div>
              <h4 className="text-sm font-bold text-[#080912] dark:text-[#e6e8ec]">Define Structure & Design</h4>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/75 leading-relaxed font-medium">
                We create the layout, visual direction, and content hierarchy before building.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f4f5f9] dark:bg-[#03012c]/80 border border-[#1d001d]/12 space-y-2">
              <div className="font-mono text-xs font-bold text-[#a832a8]">03 · Execution</div>
              <h4 className="text-sm font-bold text-[#080912] dark:text-[#e6e8ec]">Build & Refine</h4>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/75 leading-relaxed font-medium">
                We develop your website or digital assets, keeping you updated at every stage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f4f5f9] dark:bg-[#03012c]/80 border border-[#1d001d]/12 space-y-2">
              <div className="font-mono text-xs font-bold text-[#a832a8]">04 · Launch</div>
              <h4 className="text-sm font-bold text-[#080912] dark:text-[#e6e8ec]">Deliver & Support</h4>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/75 leading-relaxed font-medium">
                We launch your digital presence and provide ongoing support as your business grows.
              </p>
            </div>
          </div>
        </div>

        {/* 4. What We Do — 4 Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/20">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight">
              Our core <span className="text-gradient-purple">capabilities</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <GlassCard glow="subtle" className="p-6 space-y-3 bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
              <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                <Globe className="w-5 h-5 text-[#a832a8]" />
              </div>
              <h3 className="text-lg font-bold text-[#080912] dark:text-[#e6e8ec]">WEB</h3>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/80 leading-relaxed font-medium">
                Modern, responsive websites built for speed, performance, and clear business communication.
              </p>
            </GlassCard>

            <GlassCard glow="subtle" className="p-6 space-y-3 bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
              <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                <Palette className="w-5 h-5 text-[#a832a8]" />
              </div>
              <h3 className="text-lg font-bold text-[#080912] dark:text-[#e6e8ec]">CREATIVE</h3>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/80 leading-relaxed font-medium">
                UI/UX design, visual identity, logos, and digital assets that reflect your brand.
              </p>
            </GlassCard>

            <GlassCard glow="subtle" className="p-6 space-y-3 bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
              <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                <Share2 className="w-5 h-5 text-[#a832a8]" />
              </div>
              <h3 className="text-lg font-bold text-[#080912] dark:text-[#e6e8ec]">SOCIAL</h3>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/80 leading-relaxed font-medium">
                Cohesive social media graphics, story templates, and digital content for online presence.
              </p>
            </GlassCard>

            <GlassCard glow="subtle" className="p-6 space-y-3 bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20">
              <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
                <Bot className="w-5 h-5 text-[#a832a8]" />
              </div>
              <h3 className="text-lg font-bold text-[#080912] dark:text-[#e6e8ec]">AI & GROWTH</h3>
              <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/80 leading-relaxed font-medium">
                Google Business setup, WhatsApp integration, SEO, and smart digital workflows.
              </p>
            </GlassCard>

          </div>
        </div>

        {/* 5. Final Callout Card */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] border-2 border-[#a832a8]/40 dark:border-[#e6e8ec]/30 shadow-2xl relative overflow-hidden text-center space-y-4">
          <span className="font-mono text-xs font-bold text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#a832a8]/40 border border-[#e6e8ec]/30 backdrop-blur-md">
            Let's Build Together
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#e6e8ec]">
            Have an idea for your business?
          </h2>

          <p className="text-xs sm:text-base text-[#e6e8ec]/85 max-w-xl mx-auto font-medium leading-relaxed">
            Tell us what you're working on and let's explore how tweliza can help you bring it to life online.
          </p>

          <div className="pt-3">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-xl shadow-[#1d001d]/70 transform hover:-translate-y-0.5"
            >
              <span>Talk to tweliza</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <Footer />

      <StickyMobileCTA onOpenBooking={() => setBookingModalOpen(true)} />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
