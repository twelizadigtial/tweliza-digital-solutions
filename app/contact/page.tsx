"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-mesh-gradient bg-tech-grid selection:bg-violet-500 selection:text-white relative">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <div className="pt-28">
        <ContactSection />
        <FAQSection onOpenBooking={() => setBookingModalOpen(true)} />
      </div>

      <Footer />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
