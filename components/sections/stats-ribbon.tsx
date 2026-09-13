"use client";

import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Trophy, Rocket, Clock, Sparkles } from "lucide-react";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function StatsRibbon() {
  const stats = [
    {
      id: "stat-1",
      number: "240+",
      label: "Products Shipped",
      detail: "+18 this quarter",
      icon: Rocket,
      accent: "text-violet-500",
      bgAccent: "bg-violet-500/10",
      badge: "Production Ready"
    },
    {
      id: "stat-2",
      number: "$48.5M+",
      label: "Client Revenue Impact",
      detail: "Across 65+ companies",
      icon: Trophy,
      accent: "text-indigo-500",
      bgAccent: "bg-indigo-500/10",
      badge: "Verified ROI"
    },
    {
      id: "stat-3",
      number: "99.4%",
      label: "Client Satisfaction",
      detail: "5.0 ★ Clutch & Trustpilot",
      icon: Sparkles,
      accent: "text-cyan-500",
      bgAccent: "bg-cyan-500/10",
      badge: "Top Rated"
    },
    {
      id: "stat-4",
      number: "2.4 Wks",
      label: "Average MVP Sprint",
      detail: "Zero-bloat execution",
      icon: Clock,
      accent: "text-purple-500",
      bgAccent: "bg-purple-500/10",
      badge: "Rapid Delivery"
    }
  ];

  return (
    <section className="relative py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Scroll3DContainer>
        {/* 4-Stat Glass Grid with 3D Scroll Fall-In Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Scroll3DItem
                key={stat.id}
                effect="fall-in"
                depth={50 + idx * 15}
                rotateXAmount={16 - idx * 2}
                scaleRange={[0.9, 1]}
                offsetStart={0.05 + idx * 0.05}
                offsetEnd={0.7}
              >
                <GlassCard
                  glow="violet"
                  className="p-5 flex flex-col justify-between h-full border border-slate-200/80 dark:border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl ${stat.bgAccent} flex items-center justify-center ${stat.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                      {stat.badge}
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                </GlassCard>
              </Scroll3DItem>
            );
          })}
        </div>
      </Scroll3DContainer>
    </section>
  );
}
