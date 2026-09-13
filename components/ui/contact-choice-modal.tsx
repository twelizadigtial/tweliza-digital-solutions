"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, ArrowRight, ArrowLeft, Sparkles, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export function ContactChoiceModal({
  isOpen,
  onClose,
  prefilledService
}: ContactChoiceModalProps) {
  const [view, setView] = useState<"choice" | "email">("choice");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: prefilledService || "Website",
    budget: "",
    timeline: "2-4 Weeks",
    description: ""
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (!isOpen) {
      // Reset view step when modal is closed
      setView("choice");
      setIsSuccess(false);
      setErrorMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappMessage = prefilledService
    ? `Hi TWELIZA, I'd like to discuss a project for ${prefilledService}.`
    : "Hi TWELIZA, I'd like to discuss a project.";

  const whatsappUrl = `https://wa.me/94742269976?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#1d001d", "#03012c", "#e6e8ec", "#a832a8"]
          });
        } catch (err) {}
      } else {
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please try again or message us directly on WhatsApp (+94 74 226 9976).");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative w-full ${
            view === "email" ? "max-w-2xl" : "max-w-lg"
          } bg-[#070913] dark:bg-[#000000] border-2 border-[#1d001d] dark:border-[#e6e8ec]/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 text-slate-100 transition-all duration-300`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#a832a8]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#4b36e3]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#1d001d]/60 hover:bg-[#a832a8] text-[#e6e8ec] hover:text-white transition-colors border border-white/10 z-20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* STEP 1: CHOICE SELECTION VIEW */}
          {view === "choice" && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="space-y-2 pr-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest text-[#a832a8] bg-[#1d001d] border border-[#a832a8]/30">
                  <Sparkles className="w-3 h-3 text-[#a832a8]" />
                  Start Your Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#e6e8ec] tracking-tight">
                  How would you like to connect?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                  Select your preferred contact method to discuss your project with TWELIZA Digital Solutions.
                </p>
              </div>

              {/* Contact Method Options */}
              <div className="space-y-4">
                {/* Option 1: WhatsApp (Recommended) */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full group text-left p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-[#1d001d]/80 to-[#070913] border-2 border-emerald-500/40 hover:border-emerald-400 transition-all duration-300 shadow-xl relative overflow-hidden active:scale-[0.99]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                      <MessageCircle className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                          WhatsApp Chat
                        </span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-wider">
                          Fastest Response
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        Start a direct chat with TWELIZA on WhatsApp for instant project discussions.
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform self-center shrink-0" />
                  </div>
                </button>

                {/* Option 2: Email Form Modal Step */}
                <button
                  onClick={() => setView("email")}
                  className="w-full group text-left p-4 sm:p-5 rounded-2xl bg-[#1d001d]/50 hover:bg-[#1d001d]/90 border border-[#e6e8ec]/20 hover:border-[#a832a8] transition-all duration-300 shadow-lg active:scale-[0.99]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#a832a8]/20 text-[#a832a8] border border-[#a832a8]/30 group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                      <Mail className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#a832a8] transition-colors">
                          Email Project Form
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        Fill out our project inquiry form directly here without leaving this page.
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform self-center shrink-0" />
                  </div>
                </button>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-[11px] text-slate-400 font-medium">
                  Direct Contact: <span className="text-slate-200 font-bold">twelizadigital@gmail.com</span> • <span className="text-slate-200 font-bold">+94 74 226 9976</span>
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 2: IN-MODAL EMAIL INQUIRY FORM */}
          {view === "email" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-5"
            >
              {/* Back to Choice Button & Header */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() => setView("choice")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Choose Contact Method</span>
                </button>
              </div>

              {isSuccess ? (
                /* Success State inside Modal */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting TWELIZA Digital Solutions. We’ve received your project inquiry and will get back to you shortly at <span className="text-emerald-400 font-bold">{formData.email}</span>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields inside Modal */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Fill in your details below and we will send a tailored proposal directly to your email.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+94 77 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Requested Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1d001d] border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Branding & Identity">Branding & Identity</option>
                        <option value="Social Media">Social Media</option>
                        <option value="UGC Content">UGC Content</option>
                        <option value="AI & Automation">AI & Automation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your Budget
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your budget (e.g. LKR 50,000 or $500)"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe your project goals, features needed, or design requirements..."
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 focus:border-[#a832a8] text-xs font-medium text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setView("choice")}
                      className="px-4 py-2.5 rounded-full text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] hover:opacity-95 disabled:opacity-50 transition-all shadow-lg active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
