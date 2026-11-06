"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Award, MessageCircle } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFlyerModal: () => void;
  lang: "en" | "sw";
}

export default function Hero({ onOpenBooking, onOpenFlyerModal, lang }: HeroProps) {
  return (
    <section
      style={{
        paddingTop: "clamp(100px, 12vw, 136px)",
        paddingBottom: "clamp(48px, 7vw, 76px)",
        background: "#FFFFFF",
        borderBottom: "1px solid #F1F5F9",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "clamp(32px, 5vw, 60px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Heading, Value Prop & Simple CTAs */}
          <div>
            {/* Top Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                background: "#FFFBE6",
                border: "1.5px solid #FDE68A",
                color: "#B45309",
                fontSize: "0.86rem",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
                marginBottom: "18px",
              }}
            >
              <Sparkles size={16} color="#D97706" />
              <span>
                {lang === "en"
                  ? "SPARKS 360° HUB • STEAMORA CO. LTD"
                  : "SPARKS 360° HUB • STEAMORA CO. LTD"}
              </span>
            </div>

            {/* Main Headline in Fredoka */}
            <h1
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0F172A",
                lineHeight: 1.18,
                marginBottom: "18px",
              }}
            >
              {lang === "en" ? (
                <>
                  Inspiring Young Minds Through{" "}
                  <span style={{ color: "#FF6600" }}>Hands-on STEAM</span> Learning.
                </>
              ) : (
                <>
                  Kukuza Vipaji vya Watoto Kupitia Elimu ya Vitendo ya{" "}
                  <span style={{ color: "#FF6600" }}>STEAM na Roboti</span>.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.12rem)",
                color: "#475569",
                lineHeight: 1.65,
                marginBottom: "28px",
                maxWidth: "540px",
              }}
            >
              {lang === "en"
                ? "Delivering practical robotics, electric circuits, coding, AI, and 3D printing to homes, schools, and communities across Dar es Salaam. Every child builds, tests, and innovates."
                : "Kituo cha elimu ya vitendo (Roboti, Mizunguko ya Umeme, AI, Uchapishaji wa 3D na Sayansi) kinachofika nyumbani, shuleni, na kituoni kwetu mkabala na DIT Morogoro Road."}
            </p>

            {/* Simple Lego-Style CTA Row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <button
                onClick={onOpenBooking}
                className="lego-btn-orange"
                style={{ fontSize: "1rem", padding: "13px 26px" }}
              >
                <span>{lang === "en" ? "Register Your Child" : "Sajili Mtoto Wako"}</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={onOpenFlyerModal}
                className="lego-btn-outline"
                style={{ fontSize: "0.95rem", padding: "12px 22px" }}
              >
                <span>{lang === "en" ? "View Activity Photos" : "Tazama Picha za Shughuli"}</span>
              </button>

              <a
                href="https://wa.me/255749998820?text=Habari%20SparksHub%2C%20ninapenda%20kufahamu%20zaidi%20kuhusu%20mafunzo%20ya%20STEAM%20kwa%20watoto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "12px 18px",
                  borderRadius: "9999px",
                  background: "#ECFDF5",
                  color: "#065F46",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  border: "1.5px solid #A7F3D0",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} color="#059669" />
                <span>WhatsApp Admin</span>
              </a>
            </div>

            {/* Quick Trust Checklist */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                fontSize: "0.85rem",
                color: "#64748B",
                fontWeight: 600,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="#00A859" />
                <span>{lang === "en" ? "Ages 3 - 17 Years" : "Watoto Miaka 3 - 17"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} color="#006CB7" />
                <span>{lang === "en" ? "Certified Instructors" : "Wakufunzi Walioidhinishwa"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Award size={16} color="#FF6600" />
                <span>{lang === "en" ? "100% Practical STEM" : "100% Elimu ya Vitendo"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Large Real Hero Photography (Lego Education Style) */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
                border: "4px solid #FFFFFF",
              }}
            >
              <Image
                src="/images/hero-showcase.jpg"
                alt="Sparks 360 Hub STEAM Workshop with real students"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "cover" }}
                priority
              />

              {/* Floating Bottom Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  padding: "12px 18px",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>
                    {lang === "en" ? "Real Hands-on Projects" : "Miradi Halisi ya Vitendo"}
                  </div>
                  <div style={{ fontSize: "0.76rem", color: "#64748B" }}>
                    {lang === "en"
                      ? "Every student builds their own robot & circuit"
                      : "Kila mtoto anaunda roboti na saketi yake binafsi"}
                  </div>
                </div>

                <span
                  style={{
                    background: "#00A859",
                    color: "#FFFFFF",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  {lang === "en" ? "Kits Included" : "Vifaa Vimetolewa"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
