"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { Navbar } from "@/components/navbar";
import { GlassCard } from "@/components/ui/glass-card";
import { Check, ArrowUpRight, CreditCard, MessageSquare, Calculator } from "lucide-react";
import { 
  SOCIAL_PACKAGES, 
  UGC_PACKAGES, 
  DIGITAL_PRESENCE_PACKAGES,
  MAINTENANCE_PACKAGES,
  PAYMENT_TERMS,
  PricingTier
} from "@/data/tweliza-data";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";

export default function PricingPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBookingWithService = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const renderTierGrid = (tiers: PricingTier[], title: string, subtitle?: string) => (
    <div className="space-y-6 mb-16">
      <div className="text-left space-y-1">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#080912] dark:text-[#e6e8ec]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-700 dark:text-[#e6e8ec]/80 font-medium">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tiers.map((tier) => (
          <GlassCard
            key={tier.id}
            glow={tier.popular ? "violet" : "subtle"}
            className={`p-6 flex flex-col justify-between h-full relative bg-white/90 dark:bg-[#1d001d]/65 border border-[#1d001d]/18 dark:border-[#e6e8ec]/20 ${
              tier.popular ? "border-2 border-[#a832a8]/60 dark:border-[#e6e8ec]/60 shadow-xl" : ""
            }`}
            data-cursor="PLAN"
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] text-[#ffffff] shadow-md">
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="space-y-3.5">
              <div>
                <h4 className="text-lg font-bold text-[#080912] dark:text-[#e6e8ec]">
                  {tier.name}
                </h4>
                <p className="text-xs text-slate-700 dark:text-[#e6e8ec]/75 mt-0.5 font-medium">
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#080912] dark:text-[#e6e8ec]">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-xs text-slate-500 font-semibold">/ {tier.period}</span>
                )}
              </div>

              <div className="space-y-1.5 pt-1">
                {tier.features.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-800 dark:text-[#e6e8ec]/85 font-semibold">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1d001d]/15 dark:bg-[#a832a8]/20 text-[#1d001d] dark:text-[#e6e8ec] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2 h-2 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#1d001d]/15 dark:border-[#e6e8ec]/15">
              <button
                onClick={() => handleOpenBookingWithService(tier.name)}
                className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-bold transition-all ${
                  tier.popular
                    ? "bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] text-[#ffffff] shadow-md hover:opacity-90"
                    : "bg-[#1d001d] dark:bg-[#03012c] text-[#ffffff] hover:opacity-90"
                }`}
              >
                <span>{tier.ctaText || "Select Package"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-mesh-gradient bg-tech-grid selection:bg-violet-500 selection:text-white relative">
      <Preloader />
      <CustomCursor />

      <Navbar onOpenBooking={() => handleOpenBookingWithService()} />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 border border-[#a832a8]/30 dark:border-[#e6e8ec]/25">
            Custom Project Pricing
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#080912] dark:text-[#e6e8ec] tracking-tight leading-tight">
            Tailored solutions built around <span className="text-gradient-purple">your business goals</span>.
          </h1>

          <p className="text-sm sm:text-lg text-slate-800 dark:text-[#e6e8ec]/85 font-semibold">
            TWELIZA DIGITAL SOLUTIONS · Web • Creative • Digital Growth
          </p>
        </div>

        {/* 🌟 Custom Project Consultation & Quote Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] border-2 border-[#a832a8]/50 dark:border-[#e6e8ec]/35 shadow-2xl relative overflow-hidden text-center space-y-6">
          <span className="font-mono text-[11px] sm:text-xs font-bold text-[#e6e8ec] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#a832a8]/40 border border-[#e6e8ec]/30 backdrop-blur-md">
            // Bespoke Digital Engineering
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#e6e8ec] tracking-tight max-w-3xl mx-auto leading-tight">
            Let's Talk About <span className="text-gradient-purple">Your Project</span>.
          </h2>

          <p className="text-xs sm:text-base text-[#e6e8ec]/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Instead of rigid pre-packaged templates, every web development, 3D experience, and branding project at TWELIZA is custom-crafted to your specific business requirements, scope, and budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-[#a832a8] uppercase">Custom Scope</div>
              <p className="text-xs font-medium text-[#e6e8ec]/85">Built to match your exact features and technical targets.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-[#4b36e3] uppercase">Transparent Quotes</div>
              <p className="text-xs font-medium text-[#e6e8ec]/85">Clear project proposals with zero hidden costs or surprises.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs font-bold text-[#a832a8] uppercase">Flexible Budgeting</div>
              <p className="text-xs font-medium text-[#e6e8ec]/85">Solutions structured to work with your timeline and investment.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBookingWithService("Project Discussion")}
              type="button"
              data-cursor="TALK"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 active:scale-95 transition-all shadow-xl shadow-[#1d001d]/60 transform hover:-translate-y-0.5"
            >
              <span>Let's Talk About Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#e6e8ec]" />
            </button>

            <button
              onClick={() => handleOpenBookingWithService("Custom Quotation")}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-[#e6e8ec] bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <span>Request a Custom Quote</span>
              <MessageSquare className="w-4 h-4 text-[#a832a8]" />
            </button>
          </div>
        </div>

        {/* 3. 📱 Social Media Packages — Monthly */}
        {renderTierGrid(SOCIAL_PACKAGES, "📱 Social Media Packages — Monthly", "Consistent social posts, story designs, content calendars, and reel concepts.")}

        {/* 4. 🎥 UGC & Digital Content Packages */}
        {renderTierGrid(
          UGC_PACKAGES,
          "🎥 UGC & Digital Content Packages",
          "Authentic content for brands across TikTok, Instagram, Facebook, websites, and digital campaigns including videos, reviews, photos, testimonials, and brand materials."
        )}

        {/* 5. 📈 Digital Presence Packages */}
        {renderTierGrid(
          DIGITAL_PRESENCE_PACKAGES,
          "📈 Digital Presence Packages",
          "Google Business Profile setup, WhatsApp Business, social profile optimization, and basic SEO."
        )}

        {/* 6. 🛠️ Website Maintenance — Monthly */}
        {renderTierGrid(
          MAINTENANCE_PACKAGES,
          "🛠️ Website Maintenance — Monthly",
          "Keep your website updated, secure, and fast with ongoing technical maintenance."
        )}

        {/* 7. 💳 Payment Terms */}
        <div className="p-8 rounded-3xl bg-white/90 dark:bg-[#1d001d]/65 border-2 border-[#1d001d]/18 dark:border-[#e6e8ec]/20 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#a832a8]/20 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#080912] dark:text-[#e6e8ec]">
                💳 Payment Terms & Delivery Guidelines
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#e6e8ec]/75 font-semibold">
                Simple, transparent terms for every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#f4f5f9] dark:bg-[#000000]/60 border border-[#1d001d]/12 space-y-1">
              <div className="text-xs font-bold text-[#a832a8] uppercase">Advance</div>
              <p className="text-xs font-semibold text-[#080912] dark:text-[#e6e8ec]">{PAYMENT_TERMS.advance}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f5f9] dark:bg-[#000000]/60 border border-[#1d001d]/12 space-y-1">
              <div className="text-xs font-bold text-[#4b36e3] uppercase">Final Delivery</div>
              <p className="text-xs font-semibold text-[#080912] dark:text-[#e6e8ec]">{PAYMENT_TERMS.delivery}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f5f9] dark:bg-[#000000]/60 border border-[#1d001d]/12 space-y-1">
              <div className="text-xs font-bold text-[#a832a8] uppercase">Third-Party Fees</div>
              <p className="text-xs font-semibold text-[#080912] dark:text-[#e6e8ec]">{PAYMENT_TERMS.thirdParty}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f4f5f9] dark:bg-[#000000]/60 border border-[#1d001d]/12 space-y-1">
              <div className="text-xs font-bold text-[#4b36e3] uppercase">Delivery Timeframe</div>
              <p className="text-xs font-semibold text-[#080912] dark:text-[#e6e8ec]">{PAYMENT_TERMS.timeframe}</p>
            </div>
          </div>
        </div>

        {/* 8. Custom Quotation CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#000000] via-[#1d001d] to-[#03012c] text-[#e6e8ec] border-2 border-[#a832a8]/40 dark:border-[#e6e8ec]/30 shadow-2xl relative overflow-hidden text-center space-y-4">
          <span className="font-mono text-xs font-bold text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#a832a8]/40 border border-[#e6e8ec]/30 backdrop-blur-md">
            Need a custom solution?
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#e6e8ec]">
            Get a quotation.
          </h2>

          <p className="text-xs sm:text-base text-[#e6e8ec]/85 max-w-xl mx-auto font-medium leading-relaxed">
            Every project is different. If you need something outside these packages, tell us what you're looking for and we'll create a solution around your requirements.
          </p>

          <div className="pt-3">
            <button
              onClick={() => handleOpenBookingWithService("Custom Quotation")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#ffffff] bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 transition-all shadow-xl shadow-[#1d001d]/70 transform hover:-translate-y-0.5"
            >
              <span>Get a quotation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection onOpenBooking={() => handleOpenBookingWithService()} />

      </div>

      <Footer />

      <StickyMobileCTA onOpenBooking={() => handleOpenBookingWithService()} />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledService={selectedService}
      />
    </main>
  );
}
