"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Eye, Sparkles, ArrowRight, Grid, Filter, ShieldCheck } from "lucide-react";

interface ActivityGallerySectionProps {
  onOpenFullGallery: (initialIndex?: number) => void;
  lang: "en" | "sw";
}

interface GalleryPhoto {
  id: number;
  src: string;
  category: string;
  titleEn: string;
  titleSw: string;
  descEn: string;
  descSw: string;
}

export default function ActivityGallerySection({
  onOpenFullGallery,
  lang,
}: ActivityGallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Curated showcase photos from the real collection
  const showcasePhotos: GalleryPhoto[] = [
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
      id: 11,
      src: "/images/gallery/sparkshub_photo_011.jpg",
      category: "circuits",
      titleEn: "Electronic Circuits & Breadboard Prototyping",
      titleSw: "Mizunguko ya Umeme na Bodi za Breadboard",
      descEn: "Hands-on safe electrical wiring with switches, LEDs, and logic resistors.",
      descSw: "Kujifunza kuunganisha swichi, taa za LED na saketi za umeme salama.",
    },
    {
      id: 12,
      src: "/images/gallery/sparkshub_photo_012.jpg",
      category: "coding",
      titleEn: "Creative Coding & Algorithmic Thinking",
      titleSw: "Mafunzo ya Coding na Mantiki ya Kompyuta",
      descEn: "Children writing interactive Scratch block programs and game mechanics.",
      descSw: "Wanafunzi wakitengeneza programu za kompyuta na michezo ya video.",
    },
    {
      id: 13,
      src: "/images/gallery/sparkshub_photo_013.jpg",
      category: "making",
      titleEn: "3D Design & Prototyping in Action",
      titleSw: "Ubunifu wa 3D na Uchapishaji wa Vifaa",
      descEn: "Transforming digital 3D models into physical prototypes on the 3D printer.",
      descSw: "Kubadilisha michoro ya kompyuta kuwa vifaa halisi vilivyochapishwa.",
    },
    {
      id: 14,
      src: "/images/gallery/sparkshub_photo_014.jpg",
      category: "science",
      titleEn: "Exciting Hands-on Science Lab",
      titleSw: "Majaribio ya Sayansi ya Vitendo",
      descEn: "Safe chemistry, density experiments, and physics discovery.",
      descSw: "Ugunduzi wa kanuni za sayansi, kemia na fizikia kwa majaribio salama.",
    },
    {
      id: 15,
      src: "/images/gallery/sparkshub_photo_015.jpg",
      category: "bootcamp",
      titleEn: "Holiday Bootcamp Team Collaboration",
      titleSw: "Kazi za Pamoja Kwenye Kambi ya Likizo",
      descEn: "Students problem-solving and testing smart machine prototypes in teams.",
      descSw: "Wanafunzi wakishirikiana kujenga na kujaribu mifumo ya kiubunifu.",
    },
    {
      id: 16,
      src: "/images/gallery/sparkshub_photo_016.jpg",
      category: "robotics",
      titleEn: "Smart Sensor Calibration & Wiring",
      titleSw: "Kupima Vitambuzi na Waya za Roboti",
      descEn: "Wiring ultrasonic distance sensors to automated microcontrollers.",
      descSw: "Kuunganisha vitambuzi vya umbali kwenye mifumo ya kompyuta ya roboti.",
    },
    {
      id: 17,
      src: "/images/gallery/sparkshub_photo_017.jpg",
      category: "bootcamp",
      titleEn: "Saturday STEAM Club Innovation Studio",
      titleSw: "Studio ya Ubunifu ya Klabu ya Jumamosi",
      descEn: "Active, smiling minds building practical inventions every weekend.",
      descSw: "Watoto wakijenga uvumbuzi halisi kila wikendi kwa furaha.",
    },
  ];

  const categories = [
    { id: "all", labelEn: "All Activities", labelSw: "Shughuli Zote" },
    { id: "robotics", labelEn: "Robotics", labelSw: "Roboti" },
    { id: "circuits", labelEn: "Electronics & Circuits", labelSw: "Mizunguko ya Umeme" },
    { id: "coding", labelEn: "Coding & AI", labelSw: "Coding & AI" },
    { id: "making", labelEn: "3D Printing & Making", labelSw: "3D Printing & Making" },
    { id: "science", labelEn: "Science Lab", labelSw: "Majaribio ya Sayansi" },
    { id: "bootcamp", labelEn: "Bootcamps", labelSw: "Bootcamps" },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? showcasePhotos
      : showcasePhotos.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="gallery"
      style={{
        paddingTop: "clamp(48px, 8vw, 84px)",
        paddingBottom: "clamp(48px, 8vw, 84px)",
        background: "#FFFFFF",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px auto" }}>
          <div
            className="lego-pill lego-pill-green"
            style={{ marginBottom: "12px", display: "inline-flex" }}
          >
            <Camera size={16} />
            <span>{lang === "en" ? "Real Workshop Moments" : "Picha Halisi za Shughuli"}</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            {lang === "en" ? (
              <>
                See Our Young Innovators <span style={{ color: "#00A859" }}>In Action</span>
              </>
            ) : (
              <>
                Tazama Watoto Wetu <span style={{ color: "#00A859" }}>Wakifanya Vitendo</span>
              </>
            )}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)",
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: "14px",
            }}
          >
            {lang === "en"
              ? "Authentic moments from our workshops, bootcamps, and mobile lab visits across schools in Dar es Salaam. Click on any photo to open the interactive gallery."
              : "Matukio halisi kutoka kwenye warsha zetu, kambi za likizo, na ziara za Mobile STEAM Lab shuleni Dar es Salaam. Bofya picha yoyote kufungua gallery kamili."}
          </p>

          {/* Privacy Note Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              padding: "4px 14px",
              borderRadius: "9999px",
              fontSize: "0.8rem",
              color: "#64748B",
            }}
          >
            <ShieldCheck size={14} color="#00A859" />
            <span>
              {lang === "en"
                ? "Child privacy protected with professional privacy blur."
                : "Faragha ya watoto inalindwa kwa weledi (face privacy blur)."}
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => {
            const isSelected = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  border: isSelected ? "2px solid #00A859" : "2px solid #F1F5F9",
                  background: isSelected ? "#00A859" : "#FFFFFF",
                  color: isSelected ? "#FFFFFF" : "#475569",
                  boxShadow: isSelected
                    ? "0 4px 0 #008746, 0 6px 14px rgba(0, 168, 89, 0.2)"
                    : "0 2px 4px rgba(0, 0, 0, 0.04)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {lang === "en" ? cat.labelEn : cat.labelSw}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => onOpenFullGallery(idx)}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                background: "#F1F5F9",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                style={{ objectFit: "cover" }}
              />

              {/* Hover overlay with title and eye icon */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px",
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: "4px",
                        lineHeight: 1.25,
                      }}
                    >
                      {lang === "en" ? photo.titleEn : photo.titleSw}
                    </h4>
                    <p style={{ fontSize: "0.78rem", color: "#CBD5E1", lineHeight: 1.3 }}>
                      {lang === "en" ? photo.descEn : photo.descSw}
                    </p>
                  </div>

                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(6px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Eye size={18} color="#FFFFFF" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => onOpenFullGallery(0)}
            className="lego-btn-green"
            style={{
              background: "#00A859",
              color: "#FFFFFF",
              boxShadow: "0 4px 0 #008746, 0 8px 16px rgba(0, 168, 89, 0.25)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.02rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Grid size={18} />
            <span>
              {lang === "en"
                ? "Fungua Gallery Kamili (150+ Activity Photos)"
                : "Fungua Gallery Kamili (Picha 150+ za Shughuli)"}
            </span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
