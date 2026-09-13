"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";

export default function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  return (
    <main className="min-h-screen bg-mesh-gradient bg-tech-grid selection:bg-violet-500 selection:text-white relative">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />
      
      <div className="pt-28">
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => {
            setSelectedService(serviceTitle);
            setBookingModalOpen(true);
          }}
        />
        <ProcessSection />
        <FinalCTASection onOpenBooking={() => setBookingModalOpen(true)} />
      </div>

      <Footer />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledService={selectedService}
      />
    </main>
  );
}
