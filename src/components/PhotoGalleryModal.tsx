"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, ShieldCheck, Grid, Layers } from "lucide-react";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "sw";
  initialIndex?: number;
}

interface GalleryPhotoItem {
  id: number;
  src: string;
  category: string;
  titleEn: string;
  titleSw: string;
  descEn: string;
  descSw: string;
}

export default function PhotoGalleryModal({
  isOpen,
  onClose,
  lang,
  initialIndex = 0,
}: PhotoGalleryModalProps) {
  const [selectedIdx, setSelectedIdx] = useState(initialIndex);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    setSelectedIdx(initialIndex);
  }, [initialIndex]);

  // Comprehensive photo gallery list populated from our real processed photos
  const fullGallery: GalleryPhotoItem[] = [
    {
      id: 1,
      src: "/images/gallery/sparkshub_photo_001.jpg",
      category: "robotics",
      titleEn: "Robotics Chassis & Gear Assembly",
      titleSw: "Uunganishaji wa Bodi na Gia za Roboti",
      descEn: "Young innovators assembling motorized smart cars with obstacle sensors.",
      descSw: "Watoto wakitengeneza magari ya roboti yenye vitambuzi vya vizuizi.",
    },
    {
      id: 2,
      src: "/images/gallery/sparkshub_photo_002.jpg",
      category: "robotics",
      titleEn: "Robotics Motor Tuning & Wiring",
      titleSw: "Kuweka Waya za Mota za Roboti",
      descEn: "Wiring high-torque motors to drive controllers for autonomous navigation.",
      descSw: "Kuunganisha mota na mfumo wa kompyuta kuendesha gari la roboti.",
    },
    {
      id: 3,
      src: "/images/gallery/sparkshub_photo_003.jpg",
      category: "circuits",
      titleEn: "Breadboard Logic & Sensor Integration",
      titleSw: "Mantiki ya Bodi za Breadboard na Vitambuzi",
      descEn: "Testing light sensors (LDRs) and buzzer alarms on solder-free breadboards.",
      descSw: "Kujaribu vitambuzi vya mwanga na kengele kwenye bodi za umeme.",
    },
    {
      id: 4,
      src: "/images/gallery/sparkshub_photo_004.jpg",
      category: "coding",
      titleEn: "Scratch Block Coding Studio",
      titleSw: "Darasa la Programu za Kompyuta za Scratch",
      descEn: "Students programming character animations, physics logic, and mini-games.",
      descSw: "Wanafunzi wakitengeneza katuni zinazotembea na michezo ya video.",
    },
    {
      id: 5,
      src: "/images/gallery/sparkshub_photo_005.jpg",
      category: "making",
      titleEn: "3D Printer Filament & Extruder Setup",
      titleSw: "Printa ya 3D na Uchapishaji wa Vifaa",
      descEn: "Watching real CAD designs melt and layer into tangible plastic parts.",
      descSw: "Kushuhudia michoro ya 3D ikichapishwa kuwa vifaa halisi.",
    },
    {
      id: 6,
      src: "/images/gallery/sparkshub_photo_006.jpg",
      category: "science",
      titleEn: "Scientific Experiments & Solution Chemistry",
      titleSw: "Majaribio ya Sayansi na Kemia ya Vitendo",
      descEn: "Exploring chemical reactions, safe bubbling mixtures, and color changes.",
      descSw: "Ugunduzi wa miitikio ya kemikali salama na mabadiliko ya rangi.",
    },
    {
      id: 7,
      src: "/images/gallery/sparkshub_photo_007.jpg",
      category: "bootcamp",
      titleEn: "Weekend STEAM Club Group Brainstorming",
      titleSw: "Kazi za Pamoja Kwenye Klabu ya Wikendi",
      descEn: "Peer problem-solving and rapid prototyping in our collaborative studio.",
      descSw: "Watoto wakishirikiana kubuni njia mpya za kutatua changamoto.",
    },
    {
      id: 8,
      src: "/images/gallery/sparkshub_photo_008.jpg",
      category: "robotics",
      titleEn: "Autonomous Line Tracking Demonstration",
      titleSw: "Gari la Roboti Linalofuata Mstari",
      descEn: "Calibrating infrared optical sensors to detect black tracks on white surfaces.",
      descSw: "Kupima vitambuzi vinavyoliwezesha gari kufuata mstari bila kuteleza.",
    },
    {
      id: 9,
      src: "/images/gallery/sparkshub_photo_009.jpg",
      category: "circuits",
      titleEn: "LED Matrix & Traffic Light Circuitry",
      titleSw: "Saketi ya Taa za Barabarani za LED",
      descEn: "Kids building multi-state electrical switches and timers.",
      descSw: "Uundaji wa saketi za taa za kuongoza magari barabarani.",
    },
    {
      id: 10,
      src: "/images/gallery/sparkshub_photo_010.jpg",
      category: "making",
      titleEn: "Hands-on Mechanical Linkages & Levers",
      titleSw: "Mifumo ya Kimakanika ya Milingoti na Mota",
      descEn: "Learning kinetic physics by building robotic gripper arms and catapults.",
      descSw: "Kujifunza kanuni za fizikia kwa kuunda mikono ya roboti inayonyanyua vitu.",
    },
    {
      id: 11,
      src: "/images/gallery/sparkshub_photo_011.jpg",
      category: "circuits",
      titleEn: "Circuit Prototyping Workshop",
      titleSw: "Warsha ya Mizunguko ya Umeme",
      descEn: "Connecting safe low-voltage power units to test circuits.",
      descSw: "Kuunganisha vifaa salama vya umeme mdogo kujaribu saketi.",
    },
    {
      id: 12,
      src: "/images/gallery/sparkshub_photo_012.jpg",
      category: "coding",
      titleEn: "Interactive Coding Mentorship",
      titleSw: "Uelekezaji wa Karibu wa Coding",
      descEn: "One-on-one instructor guidance as children troubleshoot their code.",
      descSw: "Mwalimu akimwelekeza mwanafunzi kurekebisha makosa kwenye programu yake.",
    },
    {
      id: 13,
      src: "/images/gallery/sparkshub_photo_013.jpg",
      category: "making",
      titleEn: "3D Model Digital Slicing & Printing",
      titleSw: "Ubunifu wa 3D Kwenye Kompyuta na Kuchapisha",
      descEn: "Translating digital geometry into G-code layers for the 3D printer.",
      descSw: "Kuhamisha mchoro wa kompyuta kuingia kwenye printa ya 3D.",
    },
    {
      id: 14,
      src: "/images/gallery/sparkshub_photo_014.jpg",
      category: "science",
      titleEn: "Discovery & Measurement Lab",
      titleSw: "Maabara ya Vipimo na Ugunduzi",
      descEn: "Learning scientific notation and precise measurement techniques.",
      descSw: "Kujifunza kupima kwa usahihi kanuni za kimaabara.",
    },
    {
      id: 15,
      src: "/images/gallery/sparkshub_photo_015.jpg",
      category: "bootcamp",
      titleEn: "Holiday STEAM Intensive Class",
      titleSw: "Darasa la Kambi ya Likizo ya STEAM",
      descEn: "Hands-on engineering projects completed before the holiday exhibition.",
      descSw: "Miradi ya kiuhasibu ya vitendo kabla ya maonyesho ya likizo.",
    },
    {
      id: 16,
      src: "/images/gallery/sparkshub_photo_016.jpg",
      category: "robotics",
      titleEn: "Ultrasonic Distance Sensor Assembly",
      titleSw: "Kufunga Sensor ya Umbali ya Roboti",
      descEn: "Programming obstacle response using sound wave reflection sensors.",
      descSw: "Kutengeneza gari linalotambua ukuta kupitia mawimbi ya sauti.",
    },
    {
      id: 17,
      src: "/images/gallery/sparkshub_photo_017.jpg",
      category: "bootcamp",
      titleEn: "Saturday Innovation Studio Showcase",
      titleSw: "Studio ya Ubunifu ya Jumamosi",
      descEn: "Smiling students holding up their completed interactive inventions.",
      descSw: "Wanafunzi wakionyesha vifaa vyao walivyoviunda darasani.",
    },
  ];

  const categories = [
    { id: "all", labelEn: "All Photos", labelSw: "Picha Zote" },
    { id: "robotics", labelEn: "Robotics", labelSw: "Roboti" },
    { id: "circuits", labelEn: "Circuits", labelSw: "Saketi za Umeme" },
    { id: "coding", labelEn: "Coding", labelSw: "Coding & AI" },
    { id: "making", labelEn: "3D Making", labelSw: "3D Printing" },
    { id: "science", labelEn: "Science", labelSw: "Sayansi" },
    { id: "bootcamp", labelEn: "Bootcamps", labelSw: "Bootcamps" },
  ];

  const filtered =
    activeCategory === "all"
      ? fullGallery
      : fullGallery.filter((p) => p.category === activeCategory);

  const activeIdxSafe = Math.min(Math.max(0, selectedIdx), filtered.length - 1);
  const currentPhoto = filtered[activeIdxSafe] || filtered[0];

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered.length]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "rgba(10, 15, 30, 0.95)",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(12px, 3vw, 24px)",
      }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFFFFF",
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              background: "#FF6600",
              color: "#FFFFFF",
              padding: "4px 10px",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: 800,
            }}
          >
            SPARKS 360° Gallery
          </div>
          <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
            {activeIdxSafe + 1} / {filtered.length}
          </span>
        </div>

        {/* Category Pills inside Modal */}
        <div
          className="hide-on-mobile"
          style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}
        >
          {categories.map((c) => {
            const isSel = c.id === activeCategory;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  setSelectedIdx(0);
                }}
                style={{
                  background: isSel ? "#FFFFFF" : "rgba(255, 255, 255, 0.12)",
                  color: isSel ? "#0F172A" : "#CBD5E1",
                  border: "none",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? c.labelEn : c.labelSw}
              </button>
            );
          })}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          height: "clamp(300px, 60vh, 580px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "12px 0",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "12px",
            zIndex: 10,
            background: "rgba(15, 23, 42, 0.75)",
            color: "#FFFFFF",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
          }}
        >
          <ChevronLeft size={26} />
        </button>

        {/* The Current Photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {currentPhoto && (
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.titleEn}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              style={{ objectFit: "contain" }}
              priority
            />
          )}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "12px",
            zIndex: 10,
            background: "rgba(15, 23, 42, 0.75)",
            color: "#FFFFFF",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
          }}
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Caption & Privacy Footer */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          textAlign: "center",
          color: "#FFFFFF",
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {currentPhoto && (
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "4px",
              }}
            >
              {lang === "en" ? currentPhoto.titleEn : currentPhoto.titleSw}
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#CBD5E1", maxWidth: "600px", margin: "0 auto" }}>
              {lang === "en" ? currentPhoto.descEn : currentPhoto.descSw}
            </p>
          </div>
        )}

        {/* Thumbnail Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "14px",
            overflowX: "auto",
            maxWidth: "100%",
            paddingBottom: "6px",
          }}
        >
          {filtered.slice(0, 10).map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedIdx(idx)}
              style={{
                width: "48px",
                height: "36px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                border: activeIdxSafe === idx ? "2px solid #FF6600" : "1px solid rgba(255, 255, 255, 0.2)",
                opacity: activeIdxSafe === idx ? 1 : 0.6,
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <Image src={p.src} alt="" fill sizes="48px" style={{ objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
