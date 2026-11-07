"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgrammesSection from "@/components/ProgrammesSection";
import BootcampsSection from "@/components/BootcampsSection";
import ActivityGallerySection from "@/components/ActivityGallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SchoolPartnersSection from "@/components/SchoolPartnersSection";
import ImpactSection from "@/components/ImpactSection";
import ChildRegistrationSection from "@/components/ChildRegistrationSection";
import LocationAndContact from "@/components/LocationAndContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import PhotoGalleryModal from "@/components/PhotoGalleryModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryInitialIdx, setGalleryInitialIdx] = useState(0);
  const [selectedProgramme, setSelectedProgramme] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<"en" | "sw">("en"); // Default to English, switchable to Swahili

  const handleOpenBooking = (programme?: string) => {
    setSelectedProgramme(programme);
    setIsBookingOpen(true);
  };

  const handleOpenGallery = (initialIndex: number = 0) => {
    setGalleryInitialIdx(initialIndex);
    setIsGalleryModalOpen(true);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        setLang={setLang}
      />

      {/* 2. Hero Section with Joyful Lego Education Typography */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onOpenFlyerModal={() => handleOpenGallery(0)}
        lang={lang}
      />

      {/* 3. Programu Zetu (Our Core STEAM Programmes with Real Photos) */}
      <ProgrammesSection
        onSelectProgramme={(progName) => handleOpenBooking(progName)}
        lang={lang}
      />

      {/* 4. Bootcamps & Saturday STEAM Club */}
      <BootcampsSection
        onOpenBooking={(bTitle) => handleOpenBooking(bTitle)}
        lang={lang}
      />

      {/* 5. Picha za Shughuli (Activity Photo Showcase with Lightbox) */}
      <ActivityGallerySection
        onOpenFullGallery={handleOpenGallery}
        lang={lang}
      />

      {/* 6. Maoni ya Wazazi (Parent Reviews & Testimonials) */}
      <TestimonialsSection
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 7. Ushirikiano na Shule (The 9 Partner Schools & Communities) */}
      <SchoolPartnersSection
        onOpenBooking={() => handleOpenBooking("Ushirikiano wa Shule (School Partnership)")}
        lang={lang}
      />

      {/* 8. Safari Yetu kwa Namba / Our Journey in Numbers (Impact Section) */}
      <ImpactSection
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 9. Usajili wa Watoto (Online Enrollment Form) */}
      <ChildRegistrationSection
        lang={lang}
      />

      {/* 9. Location, Contacts & Directions */}
      <LocationAndContact
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 10. Comprehensive Lego-Style Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 12. Student Registration Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgramme={selectedProgramme}
        lang={lang}
      />

      {/* 13. Interactive Activity Photo Gallery Lightbox */}
      <PhotoGalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        initialIndex={galleryInitialIdx}
        lang={lang}
      />
    </main>
  );
}
