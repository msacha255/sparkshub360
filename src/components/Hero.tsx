"use client";

import React, { useState } from "react";
import Image from "next/image";
import ThreeCanvas from "./ThreeCanvas";
import { ArrowRight, ShieldCheck, Award, Users, CheckCircle2, PhoneCall, Zap } from "lucide-react";
import {
  RobotVector,
  LightbulbVector,
  CodingVector,
  CommunityKidsVector,
  DocumentFlyerVector,
  CircuitVector,
  SparksFlameVector,
} from "./KidVectors";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFlyerModal: () => void;
  lang: "en" | "sw";
}

export default function Hero({ onOpenBooking, onOpenFlyerModal, lang }: HeroProps) {
  const [interactMessage, setInteractMessage] = useState<string | null>(null);

  const handleInteraction = (msg: string) => {
    const prefix = lang === "en" ? "Viewing: " : "Unatazama: ";
    setInteractMessage(`${prefix}${msg}`);
    setTimeout(() => setInteractMessage(null), 3500);
  };

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: "clamp(95px, 14vw, 130px)",
        paddingBottom: "clamp(48px, 8vw, 80px)",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 80% 20%, rgba(255, 102, 0, 0.08) 0%, rgba(0, 112, 243, 0.05) 40%, rgba(250, 251, 254, 1) 75%)",
      }}
    >
      {/* Decorative background glow rings */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 102, 0, 0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(28px, 5vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Hero Text & Value Proposition */}
          <div>
            {/* Brand Slogan */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                color: "#EA580C",
                fontSize: "clamp(0.82rem, 2.2vw, 0.95rem)",
                fontWeight: 800,
                letterSpacing: "0.02em",
              }}
            >
              <SparksFlameVector size={20} animate={true} />
              <span>
                {lang === "en"
                  ? "“Innovation Starts Here” • STEAMORA CO. LTD"
                  : "“Ubunifu Unaanzia Hapa” • STEAMORA CO. LTD"}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(1.95rem, 4.2vw, 3.6rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0F172A",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              {lang === "en" ? (
                <>
                  Inspiring Young Minds Through{" "}
                  <span className="gradient-text">Practical STEAM</span> Learning.
                </>
              ) : (
                <>
                  Kukuza Vipaji vya Watoto Kupitia Elimu ya Vitendo ya{" "}
                  <span className="gradient-text">STEAM na Teknolojia</span>.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                color: "#475569",
                marginBottom: "24px",
                lineHeight: 1.6,
                maxWidth: "540px",
              }}
            >
              {lang === "en"
                ? "SPARKS 360° HUB is a mobile innovation hub delivering practical robotics, circuits, AI coding, 3D printing & science experiments to homes, schools, and communities across Tanzania."
                : "SPARKS 360° HUB ni kituo bunifu cha elimu ya vitendo (Roboti, Mizunguko ya Umeme, AI, Uchapishaji wa 3D na Sayansi) kinachofika nyumbani, shuleni, na katika jamii kote Dar es Salaam na Tanzania."}
            </p>

            {/* 4 Pillars Mini-Row */}
            <div
              className="hero-pillars-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                marginBottom: "28px",
                maxWidth: "520px",
              }}
            >
              <div
                className="kid-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div className="kid-icon-box" style={{ background: "#FFE4D6", padding: "6px", borderRadius: "10px" }}>
                  <RobotVector size={28} animate={true} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E293B" }}>
                    {lang === "en" ? "Hands-on Learning" : "Kujifunza kwa Vitendo"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Real robot assembly" : "Kuunda roboti halisi"}
                  </div>
                </div>
              </div>

              <div
                className="kid-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div className="kid-icon-box" style={{ background: "#FEF3C7", padding: "6px", borderRadius: "10px" }}>
                  <LightbulbVector size={28} animate={true} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E293B" }}>
                    {lang === "en" ? "Creativity & Mindset" : "Ubunifu & Fikra"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Critical thinking" : "Kufikiri kwa kina"}
                  </div>
                </div>
              </div>

              <div
                className="kid-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div className="kid-icon-box" style={{ background: "#DCFCE7", padding: "6px", borderRadius: "10px" }}>
                  <CodingVector size={28} animate={true} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E293B" }}>
                    {lang === "en" ? "Tech & AI Skills" : "Teknolojia & AI"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Coding & circuits" : "Coding & saketi za umeme"}
                  </div>
                </div>
              </div>

              <div
                className="kid-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div className="kid-icon-box" style={{ background: "#E0F2FE", padding: "6px", borderRadius: "10px" }}>
                  <CommunityKidsVector size={28} animate={true} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E293B" }}>
                    {lang === "en" ? "Community Impact" : "Mchango wa Kijamii"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Homes, schools & orgs" : "Majumbani, shuleni & jamii"}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-cta-buttons"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <button
                onClick={onOpenBooking}
                className="hero-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 26px",
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: 800,
                  boxShadow: "0 10px 24px rgba(255, 102, 0, 0.35)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
              >
                <span>{lang === "en" ? "Book A Session" : "Jiunge Nasi Sasa"}</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={onOpenFlyerModal}
                className="hero-btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 22px",
                  borderRadius: "30px",
                  background: "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  border: "1px solid #CBD5E1",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.05)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F8FAFC";
                  e.currentTarget.style.borderColor = "#94A3B8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#CBD5E1";
                }}
              >
                <DocumentFlyerVector size={18} />
                <span>{lang === "en" ? "View Official Flyers" : "Tazama Tangazo Rasmi"}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px 18px",
                fontSize: "0.82rem",
                color: "#64748B",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={15} color="#10B981" />
                <span>{lang === "en" ? "Ages 3 - 17 Years Welcome" : "Watoto Miaka 3 - 17"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={15} color="#0070F3" />
                <span>{lang === "en" ? "Certified Instructors" : "Wakufunzi Walioidhinishwa"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Award size={15} color="#FF6600" />
                <span>{lang === "en" ? "STEAMORA Certified" : "Imethibitishwa na STEAMORA"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three.js Interactive 3D Lab */}
          <div style={{ position: "relative" }}>
            {/* Interactive Feedback message if triggered */}
            {interactMessage && (
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 20,
                  background: "#FF6600",
                  color: "#FFFFFF",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  boxShadow: "0 6px 20px rgba(255, 102, 0, 0.4)",
                  animation: "float 2s infinite ease-in-out",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CircuitVector size={16} animate={true} />
                  <span>{interactMessage}</span>
                </div>
              </div>
            )}

            {/* The 3D Canvas Canvas Component */}
            <ThreeCanvas onInteract={handleInteraction} lang={lang} />

            {/* Card beneath Canvas explaining hands-on kit */}
            <div
              style={{
                marginTop: "14px",
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "14px 18px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0, flex: "1 1 240px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "rgba(0, 112, 243, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0070F3",
                    flexShrink: 0,
                  }}
                >
                  <Zap size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                    {lang === "en" ? "Physical Kits for Every Learner" : "Vifaa Halisi vya Kila Mwanafunzi"}
                  </h4>
                  <p style={{ fontSize: "0.75rem", color: "#64748B", margin: 0 }}>
                    {lang === "en"
                      ? "Arduino, motors, 3D printers, circuits & chemistry lab apparatus."
                      : "Arduino, mota, printa za 3D, saketi za umeme na vifaa vya maabara."}
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                style={{
                  background: "#0F172A",
                  color: "#FFFFFF",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  padding: "8px 16px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? "Join Now" : "Jiunge"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 580px) {
          .hero-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
          }
          .hero-pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 380px) {
          .hero-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
