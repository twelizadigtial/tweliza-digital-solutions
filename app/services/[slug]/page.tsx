"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/tweliza-data";
import { Navbar } from "@/components/navbar";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";

export default function ServiceSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  return (
    <main className="min-h-screen bg-mesh-gradient selection:bg-violet-500 selection:text-white relative">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-violet-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        <div className="space-y-6">
          <Badge variant="violet" dot size="md">
            {service.label} Service Pillar
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {service.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {service.description}
          </p>

          <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl space-y-6 backdrop-blur-md">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Capabilities Included
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.servicesList.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ready to build this for your brand?
              </p>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 transition-colors shadow-md"
              >
                <span>Work With TWELIZA</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledService={service.title}
      />
    </main>
  );
}
