"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "sw";
}

export default function PhotoGalleryModal({ isOpen, onClose, lang }: PhotoGalleryModalProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!isOpen) return null;

  const galleryItems = [
    {
      src: "/images/flyer-hero.jpg",
      titleEn: "Official Sparks 360° Hub STEAM Flyer",
      titleSw: "Tangazo Rasmi la Sparks 360° Hub",
      captionEn: "Hands-on Robotics, Electric Circuits, AI Coding & Science Discovery for kids in Tanzania under STEAMORA.",
      captionSw: "Roboti, Saketi za Umeme, AI Coding na Sayansi kwa vitendo kwa watoto Tanzania chini ya STEAMORA.",
    },
    {
      src: "/images/robotics-kids.jpg",
      titleEn: "Hands-on Robotics Assembly Workshop",
      titleSw: "Mafunzo ya Vitendo ya Kuunganisha Roboti",
      captionEn: "Tanzanian students assembling smart motorized cars with breadboard circuits and sensors.",
      captionSw: "Wanafunzi wakitengeneza magari ya roboti na mizunguko ya umeme ya vitendo.",
    },
    {
      src: "/images/ai-coding.jpg",
      titleEn: "Creative Coding & AI Lab",
      titleSw: "Maabara ya Coding na Akili Mnemba (AI)",
      captionEn: "Kids learning block programming and future AI tools in an engaging, supportive environment.",
      captionSw: "Watoto wakijifunza programming na zana za kisasa za kiteknolojia.",
    },
    {
      src: "/images/science-lab.jpg",
      titleEn: "Exciting Scientific Experiments",
      titleSw: "Majaribio ya Kusisimua ya Sayansi",
      captionEn: "Safe, guided discovery through chemistry, color mixing, and physics exploration.",
      captionSw: "Ugunduzi salama wa sayansi, kemia na fizikia kwa vitendo chini ya wakufunzi.",
    },
    {
      src: "/images/flyer-activities.jpg",
      titleEn: "Practical STEAM Activities",
      titleSw: "Shughuli za Vitendo za STEAM",
      captionEn: "Robotics chassis, electronic circuits, and sensor integration.",
      captionSw: "Uundaji wa roboti, mizunguko ya umeme na vitambuzi.",
    },
    {
      src: "/images/flyer-schedule.jpg",
      titleEn: "Curriculum & Innovation Hub",
      titleSw: "Mtaala na Kituo cha Ubunifu",
      captionEn: "STEAMORA Company Limited — Delivering practical STEAM learning across Tanzania.",
      captionSw: "STEAMORA Company Limited — Kufikisha elimu ya vitendo ya STEAM kote Tanzania.",
    },
  ];

  const current = galleryItems[selectedIdx];

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 110,
        background: "rgba(10, 15, 30, 0.92)",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          color: "#FFFFFF",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.85rem", color: "#FF6600", fontWeight: 800 }}>SPARKS 360° HUB</span>
          <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
            {lang === "en"
              ? `(${selectedIdx + 1} of ${galleryItems.length})`
              : `(${selectedIdx + 1} kati ya ${galleryItems.length})`}
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "50%",
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Showcase Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "850px",
          maxHeight: "75vh",
          height: "560px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#000000",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.titleEn}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 850px) 100vw, 850px"
          priority
        />

        {/* Prev / Next Buttons */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "14px",
            transform: "translateY(-50%)",
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#FFFFFF",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "14px",
            transform: "translateY(-50%)",
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#FFFFFF",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Caption Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
            padding: "20px 24px",
            color: "#FFFFFF",
          }}
        >
          <h4 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 4px", color: "#FFFFFF" }}>
            {lang === "en" ? current.titleEn : current.titleSw}
          </h4>
          <p style={{ fontSize: "0.85rem", color: "#CBD5E1", margin: 0, lineHeight: 1.4 }}>
            {lang === "en" ? current.captionEn : current.captionSw}
          </p>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "16px",
          maxWidth: "850px",
          overflowX: "auto",
          padding: "4px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {galleryItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            style={{
              position: "relative",
              width: "60px",
              height: "60px",
              borderRadius: "10px",
              overflow: "hidden",
              border: selectedIdx === idx ? "2px solid #FF6600" : "1px solid rgba(255, 255, 255, 0.2)",
              opacity: selectedIdx === idx ? 1 : 0.6,
              flexShrink: 0,
              padding: 0,
              cursor: "pointer",
            }}
          >
            <Image src={item.src} alt={item.titleEn} fill style={{ objectFit: "cover" }} sizes="60px" />
          </button>
        ))}
      </div>
    </div>
  );
}
