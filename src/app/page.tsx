"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeekendFlyerBanner from "@/components/WeekendFlyerBanner";
import AboutSection from "@/components/AboutSection";
import ProgrammesSection from "@/components/ProgrammesSection";
import AgeLevelsSection from "@/components/AgeLevelsSection";
import MobileLabSection from "@/components/MobileLabSection";
import LocationAndContact from "@/components/LocationAndContact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import PhotoGalleryModal from "@/components/PhotoGalleryModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<"en" | "sw">("en");

  const handleOpenBooking = (programme?: string) => {
    setSelectedProgramme(programme);
    setIsBookingOpen(true);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        setLang={setLang}
      />

      {/* 2. Hero with Three.js 3D Interactive Canvas */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
        lang={lang}
      />

      {/* 3. Saturday STEAM Workshop Flyer Spotlight */}
      <WeekendFlyerBanner
        onOpenBooking={() => handleOpenBooking("Weekend STEAM Workshop (Robotics & Circuits)")}
        onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
        lang={lang}
      />

      {/* 4. About Us & STEAMORA Vision */}
      <AboutSection
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 5. The 7 Core STEAM Programmes */}
      <ProgrammesSection
        onSelectProgramme={(progName) => handleOpenBooking(progName)}
        lang={lang}
      />

      {/* 6. Age Groups & Levels (Ages 3 - 17) */}
      <AgeLevelsSection
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 7. Mobile STEAM Lab (We Come To You) */}
      <MobileLabSection
        onOpenBooking={() => handleOpenBooking("Mobile STEAM Lab Request")}
        lang={lang}
      />

      {/* 8. Locations, Contacts & Lipa Namba */}
      <LocationAndContact
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 9. Comprehensive Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* 10. Student Registration & Payment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgramme={selectedProgramme}
        lang={lang}
      />

      {/* 11. Official Flyers & Photo Showcase Modal */}
      <PhotoGalleryModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
        lang={lang}
      />
    </main>
  );
}
