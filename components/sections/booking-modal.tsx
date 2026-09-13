"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Send, 
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export function BookingModal({ isOpen, onClose, prefilledService }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
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

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
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
            colors: ["#1d001d", "#03012c", "#e6e8ec"]
          });
        } catch (err) {}
      } else {
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please try again or message us on WhatsApp (+94 74 226 9976).");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={resetAndClose}
        className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        className="relative w-full max-w-2xl bg-[#e6e8ec] dark:bg-[#1d001d] border border-[#03012c]/20 dark:border-[#e6e8ec]/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto text-[#000000] dark:text-[#e6e8ec]"
      >
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-500 hover:bg-[#000000]/10 dark:hover:bg-[#e6e8ec]/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6 space-y-1">
              <Badge variant="violet" dot size="sm">
                Project Inquiry
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-[#e6e8ec]">
                Book a project with tweliza
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#e6e8ec]/70">
                Tell us a little about what you're building. We'll review your project and get back to you with the next steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Business / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="Your Studio or Brand"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kasun@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] dark:focus:border-[#e6e8ec] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Your Budget
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your budget (e.g. LKR 50,000 or $500)"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white dark:bg-[#03012c] border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your project, goals, or current ideas..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white dark:bg-[#000000]/60 border border-[#03012c]/15 dark:border-[#e6e8ec]/15 text-sm sm:text-xs outline-none focus:border-[#1d001d] resize-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <p className="text-[11px] text-slate-500 dark:text-[#e6e8ec]/60">
                  Direct response from tweliza studio team
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-[#e6e8ec] bg-gradient-to-r from-[#1d001d] via-[#03012c] to-[#1d001d] hover:opacity-90 transition-colors shadow-md disabled:opacity-50 min-h-[44px]"
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
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#1d001d]/20 text-[#1d001d] dark:text-[#e6e8ec] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#000000] dark:text-[#e6e8ec]">
              Inquiry Sent to tweliza!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#e6e8ec]/80 max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. We've received your project inquiry for <strong>{formData.service}</strong> and will get back to you shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-[#e6e8ec] bg-[#000000] dark:bg-[#03012c] hover:opacity-90 transition-opacity"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
