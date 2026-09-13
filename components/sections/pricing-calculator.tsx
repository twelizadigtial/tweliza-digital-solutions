"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ArrowUpRight, 
  Calculator, 
  Clock 
} from "lucide-react";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

interface PricingCalculatorProps {
  onBookWithEstimate: (details: {
    projectType: string;
    features: string[];
    urgency: string;
    estimatedPrice: number;
    estimatedWeeks: string;
  }) => void;
  onSelectTier: (tierName: string, price: string) => void;
}

export function PricingCalculator({ onBookWithEstimate, onSelectTier }: PricingCalculatorProps) {
  // Calculator State
  const [projectType, setProjectType] = useState<string>("saas");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "stripe",
    "dashboard"
  ]);
  const [urgency, setUrgency] = useState<"standard" | "expedited" | "flash">("standard");

  const projectTypes = [
    { id: "saas", name: "SaaS Web App", basePrice: 4800, baseWeeks: 4 },
    { id: "mobile", name: "Mobile App (iOS/Android)", basePrice: 5800, baseWeeks: 5 },
    { id: "ai", name: "AI Agent & RAG System", basePrice: 5200, baseWeeks: 4 },
    { id: "design", name: "Design System & UI", basePrice: 3400, baseWeeks: 3 },
    { id: "cloud", name: "Cloud DevOps & Scale", basePrice: 3800, baseWeeks: 3 }
  ];

  const featureOptions = [
    { id: "auth", name: "Auth & RBAC (Clerk/Auth0)", price: 800, weeks: 0.5 },
    { id: "stripe", name: "Stripe Billing & Subscriptions", price: 1200, weeks: 0.5 },
    { id: "ai", name: "AI Agent / LLM Chat & Tools", price: 1800, weeks: 1 },
    { id: "realtime", name: "Real-Time WebSocket Sync", price: 950, weeks: 0.5 },
    { id: "visuals", name: "3D Visuals & Micro-Animations", price: 1100, weeks: 0.5 },
    { id: "dashboard", name: "Custom Admin Analytics Dashboard", price: 1400, weeks: 0.5 }
  ];

  const urgencyMultipliers = {
    standard: { price: 1.0, weeksMult: 1.0, label: "Standard (Normal Pace)" },
    expedited: { price: 1.25, weeksMult: 0.75, label: "Expedited (Dedicated Priority)" },
    flash: { price: 1.5, weeksMult: 0.5, label: "Flash Sprint (All-Hands Blitz)" }
  };

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate live estimate
  const currentProjectType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);
  const rawPrice = (currentProjectType.basePrice + featuresTotal) * urgencyMultipliers[urgency].price;
  const estimatedPrice = Math.round(rawPrice / 50) * 50;

  const extraWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);
  const totalWeeks = Math.max(2, Math.round((currentProjectType.baseWeeks + extraWeeks) * urgencyMultipliers[urgency].weeksMult));
  const estimatedWeeksString = `${totalWeeks} - ${totalWeeks + 1} Weeks`;

  const handleBookCalculated = () => {
    onBookWithEstimate({
      projectType: currentProjectType.name,
      features: selectedFeatures.map((id) => featureOptions.find((f) => f.id === id)?.name || id),
      urgency: urgencyMultipliers[urgency].label,
      estimatedPrice,
      estimatedWeeks: estimatedWeeksString
    });
  };

  // Standard Pricing Tiers
  const pricingTiers = [
    {
      id: "mvp",
      name: "Sprint MVP",
      tagline: "Ideal for validation and early pitch demo builds.",
      price: "$4,800",
      period: "fixed milestone",
      timeline: "2 - 3 Weeks",
      features: [
        "Complete Next.js Web App / MVP",
        "Core Feature Set & Clean Database",
        "User Authentication & Security",
        "100/100 Lighthouse Optimization",
        "14-Day Post-Launch Support",
        "100% Code & IP Ownership"
      ],
      popular: false
    },
    {
      id: "saas",
      name: "Full-Scale SaaS",
      tagline: "Production-grade platform ready for thousands of paying users.",
      price: "$9,800",
      period: "fixed milestone",
      timeline: "4 - 6 Weeks",
      features: [
        "End-to-End SaaS Architecture",
        "Stripe Multi-tier Billing & Metering",
        "AI Workflow or Real-time Integration",
        "Custom Admin Dashboard & Telemetry",
        "Figma Design System + Micro-Interactions",
        "30-Day Extended Warranty & Support",
        "100% Code & IP Ownership"
      ],
      popular: true
    },
    {
      id: "retainer",
      name: "Dedicated Pod",
      tagline: "Your outsourced principal software engineering team.",
      price: "$14,500",
      period: "per month",
      timeline: "Ongoing Sprints",
      features: [
        "Full-Time Principal Architect & Pod",
        "Unlimited Sprint Requests & CI/CD",
        "Direct Slack / Discord Sync (Daily)",
        "Same-Day Bug Fixes & Urgent PRs",
        "Continuous Performance & Security QA",
        "Pause or Cancel Anytime",
        "100% Code & IP Ownership"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <Scroll3DItem effect="slide-3d" rotateXAmount={6} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <Badge variant="violet" dot size="md">
          Transparent Investment
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Clear, predictable pricing with <span className="text-gradient-purple">zero surprises</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Use our interactive project cost estimator or choose a fixed milestone package. Every engagement includes a 100% IP ownership transfer.
        </p>
      </Scroll3DItem>

      {/* Interactive Project Cost Estimator with 3D Elevation */}
      <div className="mb-20">
        <Scroll3DItem effect="expand" depth={70} rotateXAmount={8} scaleRange={[0.94, 1]}>
          <GlassCard
            glow="violet"
            className="p-6 sm:p-10 border-2 border-violet-500/30 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 pb-6 mb-8 border-b border-slate-200 dark:border-white/10">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Interactive Project Scope & Cost Estimator
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Select your required stack, features, and timeline urgency to calculate instant transparent estimates.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Configuration Controls */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Step 1: Project Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
                    1. Select Primary Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {projectTypes.map((pt) => (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => setProjectType(pt.id)}
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                          projectType === pt.id
                            ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-900/30"
                            : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-violet-400"
                        }`}
                      >
                        <div className="font-bold">{pt.name}</div>
                        <div className={`text-[10px] mt-0.5 ${projectType === pt.id ? "text-violet-100" : "text-slate-500 dark:text-slate-400"}`}>
                          from ${pt.basePrice.toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Add-On Features */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
                    2. Select Features & Capabilities
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {featureOptions.map((feat) => {
                      const isSelected = selectedFeatures.includes(feat.id);
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => toggleFeature(feat.id)}
                          className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                            isSelected
                              ? "bg-violet-500/10 border-violet-500/50 text-slate-900 dark:text-white"
                              : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "bg-violet-600 border-violet-600 text-white"
                                  : "border-slate-300 dark:border-white/20"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="font-medium">{feat.name}</span>
                          </div>
                          <span className="text-[10px] font-bold text-violet-600 dark:text-violet-400">
                            +${feat.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Timeline Urgency */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
                    3. Timeline Urgency
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(["standard", "expedited", "flash"] as const).map((urg) => (
                      <button
                        key={urg}
                        type="button"
                        onClick={() => setUrgency(urg)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-semibold capitalize transition-all ${
                          urgency === urg
                            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-md"
                            : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div>{urg}</div>
                        <div className="text-[10px] opacity-75">
                          {urg === "standard" ? "1.0x" : urg === "expedited" ? "+25%" : "+50%"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: Live Calculation Output Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-[#121528] text-white border border-white/15 shadow-xl space-y-6">
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Calculated Scope Estimate
                    </div>
                    <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-1">
                      ${estimatedPrice.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Estimated Timeline: {estimatedWeeksString}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Base Stack:</span>
                      <strong className="text-white">{currentProjectType.name}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Features Selected:</span>
                      <strong className="text-white">{selectedFeatures.length} Modules</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Pace:</span>
                      <strong className="text-white capitalize">{urgency}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleBookCalculated}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-violet-900/50 transition-opacity"
                    >
                      <span>Start Project With This Scope</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-400">
                      No commitment required • Free 45-min architecture blueprint call
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </GlassCard>
        </Scroll3DItem>
      </div>

      {/* Standard Transparent Tiers with 3D Parallax Depth */}
      <Scroll3DContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <Scroll3DItem
              key={tier.id}
              effect="tilt-3d"
              depth={tier.popular ? 80 : 30}
              rotateXAmount={12}
              rotateYAmount={idx === 0 ? 8 : idx === 2 ? -8 : 0}
              scaleRange={[tier.popular ? 0.96 : 0.92, 1]}
              offsetStart={0.1 + idx * 0.05}
            >
              <GlassCard
                glow={tier.popular ? "violet" : "subtle"}
                className={`p-8 flex flex-col justify-between h-full relative ${
                  tier.popular ? "border-2 border-violet-500/60 dark:border-violet-500/60 shadow-xl" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      / {tier.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timeline: {tier.timeline}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    {tier.features.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier CTA */}
                <div className="pt-8 mt-6 border-t border-slate-200 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => onSelectTier(tier.name, tier.price)}
                    className={`w-full py-3 px-4 rounded-full text-xs font-bold transition-all ${
                      tier.popular
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md hover:from-violet-500 hover:to-indigo-500"
                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90"
                    }`}
                  >
                    Choose {tier.name}
                  </button>
                </div>
              </GlassCard>
            </Scroll3DItem>
          ))}
        </div>
      </Scroll3DContainer>
    </section>
  );
}
