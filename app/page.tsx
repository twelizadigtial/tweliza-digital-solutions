"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ScrollMarquee } from "@/components/ui/scroll-marquee";
import { TypographyStorySection } from "@/components/sections/typography-story";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { FlagshipPackagesSection } from "@/components/sections/flagship-packages";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { ContactChoiceModal } from "@/components/ui/contact-choice-modal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedServiceForModal(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-mesh-gradient bg-tech-grid selection:bg-violet-500 selection:text-white relative">
      <Preloader />
      <CustomCursor />
      
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <HeroSection onOpenBooking={handleOpenBooking} />
      
      <ScrollMarquee
        items={["WEB", "BRANDING", "SOCIAL", "AI", "DIGITAL EXPERIENCES", "TWELIZA STUDIO"]}
        speed={28}
      />

      <TypographyStorySection />

      <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

      <ScrollMarquee
        items={["DESIGN", "BUILD", "LAUNCH", "GROW", "TWELIZA DIGITAL"]}
        direction="right"
        speed={32}
      />
      
      <ProcessSection />
      
      <PortfolioSection />
      
      <FlagshipPackagesSection onOpenBooking={handleOpenBooking} />
      
      <FAQSection onOpenBooking={handleOpenBooking} />
      
      <FinalCTASection onOpenBooking={handleOpenBooking} />
      
      <Footer />

      <StickyMobileCTA onOpenBooking={handleOpenBooking} />

      <ContactChoiceModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledService={selectedServiceForModal}
      />
    </main>
  );
}
