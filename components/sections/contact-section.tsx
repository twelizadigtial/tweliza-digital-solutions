"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Clock, 
  Mail, 
  MapPin, 
  Send
} from "lucide-react";
import { TWELIZA_CONFIG } from "@/data/tweliza-data";
import { Scroll3DContainer, Scroll3DItem } from "@/components/ui/scroll-animation-wrapper";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "Website",
    budget: "",
    timeline: "2-4 Weeks",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#1d001d", "#03012c", "#e6e8ec"]
          });
        } catch (err) {}
      } else {
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please try again or contact us directly on WhatsApp (+94 74 226 9976).");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Decor using #1d001d */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#1d001d]/25 dark:bg-[#03012c]/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Scroll3DContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <Scroll3DItem effect="slide-3d" rotateXAmount={8}>
              <span className="font-mono text-xs font-semibold text-[#1d001d] dark:text-[#e6e8ec] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#1d001d]/10 border border-[#03012c]/20 dark:border-[#e6e8ec]/20 inline-block mb-3">
                // contact tweliza
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] dark:text-[#e6e8ec] tracking-tight leading-tight">
                Let's turn your idea into <span className="text-gradient-purple">something real</span>.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-[#e6e8ec]/80 leading-relaxed mt-4">
                Tell us a little about what you're building. We'll review your project requirements and get back to you with clear recommendations and next steps.
              </p>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1d001d]/40 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#e6e8ec]/10 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-[#e6e8ec]/60">Direct Studio Email</div>
                    <a href={`mailto:${TWELIZA_CONFIG.email}`} className="text-sm font-bold text-[#000000] dark:text-[#e6e8ec] hover:opacity-80 transition-opacity">
                      {TWELIZA_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1d001d]/40 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#03012c]/10 dark:bg-[#e6e8ec]/10 flex items-center justify-center text-[#03012c] dark:text-[#e6e8ec] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-[#e6e8ec]/60">Studio Location</div>
                    <div className="text-sm font-bold text-[#000000] dark:text-[#e6e8ec]">
                      {TWELIZA_CONFIG.location}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1d001d]/40 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1d001d]/10 dark:bg-[#e6e8ec]/10 flex items-center justify-center text-[#1d001d] dark:text-[#e6e8ec] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-[#e6e8ec]/60">Availability</div>
                    <div className="text-sm font-bold text-[#000000] dark:text-[#e6e8ec] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#e6e8ec] animate-pulse" />
                      {TWELIZA_CONFIG.status}
                    </div>
                  </div>
                </div>
              </div>
            </Scroll3DItem>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <Scroll3DItem effect="expand" depth={70} rotateXAmount={10} rotateYAmount={-6}>
              <GlassCard glow="violet" className="p-6 sm:p-10 border-2 border-[#1d001d]/30 dark:border-[#e6e8ec]/20 shadow-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="pb-2 border-b border-[#03012c]/15 dark:border-[#e6e8ec]/15">
                      <h3 className="text-xl font-bold text-[#000000] dark:text-[#e6e8ec]">
                        Project Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-[#e6e8ec]/70 mt-1">
                        Tell us a little about what you're building. We'll review your project and get back to you with the next steps.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                          Business / Brand
                        </label>
                        <input
                          type="text"
                          placeholder="Your Brand or Studio Name"
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="kasun@brand.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+94 77 123 4567"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                          Service Required
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#03012c] border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] transition-colors"
                        >
                          <option value="Website">Website</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Branding">Branding</option>
                          <option value="UI/UX">UI/UX</option>
                          <option value="Social Media">Social Media</option>
                          <option value="UGC / Short-form Content">UGC / Short-form Content</option>
                          <option value="AI & Automation">AI & Automation</option>
                          <option value="Website Maintenance">Website Maintenance</option>
                          <option value="Custom Project">Custom Project</option>
                          <option value="Other">OTHER</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                          Your Budget
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your budget (e.g. LKR 50,000 or $500)"
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#000000] dark:text-[#e6e8ec] uppercase tracking-wider mb-1">
                        Project Description
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us a little about what you're building, key features, or design expectations..."
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="w-full p-4 rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] resize-none transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <p className="text-[11px] text-slate-500 dark:text-[#e6e8ec]/60">
                        Direct response from tweliza studio
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-[#e6e8ec] bg-gradient-to-r from-[#1d001d] via-[#03012c] to-[#1d001d] hover:opacity-90 transition-all shadow-md disabled:opacity-50 min-h-[44px]"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Send project inquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#1d001d]/20 text-[#1d001d] dark:text-[#e6e8ec] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#000000] dark:text-[#e6e8ec]">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#e6e8ec]/80 max-w-md mx-auto">
                      Thank you, <strong>{form.name}</strong>. The tweliza team will review your <strong>{form.service}</strong> requirements and reply to <strong>{form.email}</strong> shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2 rounded-full text-xs font-bold text-[#e6e8ec] bg-[#000000] dark:bg-[#03012c] hover:opacity-90 transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </GlassCard>
            </Scroll3DItem>
          </div>

        </div>
      </Scroll3DContainer>
    </section>
  );
}
