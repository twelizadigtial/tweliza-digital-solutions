"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Check, 
  ArrowUpRight, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  UserCheck 
} from "lucide-react";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

interface BentoShowcaseProps {
  onOpenBooking: () => void;
}

export function BentoShowcase({ onOpenBooking }: BentoShowcaseProps) {
  const [activeMetricTab, setActiveMetricTab] = useState<"throughput" | "latency" | "uptime">("throughput");

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={8} className="flex flex-col items-center text-center space-y-4 mb-16">
        <Badge variant="violet" dot size="md">
          Engineered for Hyper-Growth
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-3xl">
          Everything you need to ship <span className="text-gradient-purple">flawless products</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          We eliminate the friction of slow agencies and unreliable contractors by providing dedicated senior software engineering mastery.
        </p>
      </Scroll3DItem>

      {/* Bento Grid Layout with 3D Scroll Perspective */}
      <Scroll3DContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: High-Contrast Dark Architecture Card (Left Card) */}
          <div className="md:col-span-4 flex flex-col">
            <Scroll3DItem effect="tilt-3d" rotateXAmount={14} rotateYAmount={10} depth={40} className="h-full">
              <GlassCard
                glow="violet"
                className="p-6 sm:p-8 flex flex-col justify-between h-full bg-[#0d0f1e] text-white border-white/10 dark:bg-[#0c0e1d]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <Badge variant="violet" size="sm">
                      Full-Stack Architecture
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Next-Gen Software Solutions
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Zero legacy debt. We write clean, declarative, type-safe TypeScript across front-end, backend, and edge databases.
                  </p>

                  <div className="pt-2 space-y-2">
                    {["Next.js 15 & React 19 RSC", "Serverless Edge APIs (<50ms)", "PostgreSQL with strict migrations", "Real-Time WebSocket Pipelines"].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">99.8% Code Cleanliness</span>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-md shadow-violet-900/50"
                  >
                    <span>Deploy with Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </GlassCard>
            </Scroll3DItem>
          </div>

          {/* Bento Item 2: Lead Engineer & Senior Talent Pod (Middle Center Card) */}
          <div className="md:col-span-4 flex flex-col">
            <Scroll3DItem effect="tilt-3d" rotateXAmount={12} rotateYAmount={0} depth={60} className="h-full">
              <GlassCard
                glow="subtle"
                className="p-6 sm:p-8 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="emerald" dot size="sm">
                      Direct Principal Access
                    </Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-400">No junior outsourcing</span>
                  </div>

                  {/* Engineer Avatar & Profile */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-md">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                        alt="Senior Lead Software Architect"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Alex Sterling</h4>
                      <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">Principal Software Architect</p>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        <UserCheck className="w-3 h-3 text-emerald-500" />
                        <span>Ex-Stripe & YC Alum</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    You work directly with battle-tested senior engineers who understand product-market fit, conversion rates, and robust architectures.
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["System Design", "LLM RAG", "React Native", "PostgreSQL", "AWS ECS"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Sprint Availability</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Ready for Next Sprint
                  </span>
                </div>
              </GlassCard>
            </Scroll3DItem>
          </div>

          {/* Bento Item 3: Live Telemetry & Metrics (Right Card) */}
          <div className="md:col-span-4 flex flex-col">
            <Scroll3DItem effect="tilt-3d" rotateXAmount={14} rotateYAmount={-10} depth={40} className="h-full">
              <GlassCard
                glow="cyan"
                className="p-6 sm:p-8 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Live Telemetry</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Observability & Real-Time Performance
                  </h3>

                  {/* Metric Selector Tabs */}
                  <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {(["throughput", "latency", "uptime"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveMetricTab(tab)}
                        className={`py-1 text-xs font-semibold rounded-lg capitalize transition-all ${
                          activeMetricTab === tab
                            ? "bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Metric Display */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0f1222] border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                      <span>Current Metric</span>
                      <span className="text-emerald-500 font-bold flex items-center gap-0.5">
                        <TrendingUp className="w-3 h-3" /> Optimal
                      </span>
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">
                      {activeMetricTab === "throughput" && "184,200 req/s"}
                      {activeMetricTab === "latency" && "18.4 ms"}
                      {activeMetricTab === "uptime" && "99.998%"}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {activeMetricTab === "throughput" && "Edge caching enabled across 280+ POPs"}
                      {activeMetricTab === "latency" && "Sub-20ms global round-trip latency"}
                      {activeMetricTab === "uptime" && "Zero unplanned downtime over 12 months"}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">SOC2 & GDPR Compliant</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
              </GlassCard>
            </Scroll3DItem>
          </div>

          {/* Bento Item 4: 3D Visual Analytics & Conversion Engine (Bottom Wide Card with Expand Animation) */}
          <div className="md:col-span-12">
            <Scroll3DItem effect="expand" scaleRange={[0.93, 1]} depth={80} rotateXAmount={10}>
              <GlassCard
                glow="violet"
                className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#101325] to-[#17142d] text-white border-white/15 overflow-hidden relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="cyan" size="md">
                        High-Converting UX & 3D Visuals
                      </Badge>
                      <span className="text-xs text-slate-400 font-medium">Client Conversion Lift: +340%</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                      Turn visitors into high-paying enterprise clients
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                      We don't just write code — we engineer high-converting digital experiences with hypnotic 3D aesthetics, micro-interactions, and lighting-fast load times.
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-black text-cyan-300">922k+</div>
                        <div className="text-xs text-slate-400 mt-0.5">Monthly Interactions</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-black text-violet-300">&lt; 0.8s</div>
                        <div className="text-xs text-slate-400 mt-0.5">Largest Contentful Paint</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-black text-emerald-300">5.0 ★</div>
                        <div className="text-xs text-slate-400 mt-0.5">App Store Ratings</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenBooking}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 transition-opacity shadow-lg shadow-violet-900/50"
                      >
                        <span>Request Product Audit</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 3D Bento Analytics Graphic */}
                  <div className="lg:col-span-5 relative flex items-center justify-center">
                    <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                      <Image
                        src="/images/bento-3d-analytics.jpg"
                        alt="3D Glass Analytics Cubes and Glowing Bar Charts"
                        fill
                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Floating Notification Badge */}
                      <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 text-white shadow-lg flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-[11px] font-bold text-cyan-300">+14.8% Conversion</span>
                      </div>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </Scroll3DItem>
          </div>

        </div>
      </Scroll3DContainer>
    </section>
  );
}
