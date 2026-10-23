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
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
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
                gap: "10px",
                marginBottom: "20px",
                color: "#EA580C",
                fontSize: "0.95rem",
                fontWeight: 800,
                letterSpacing: "0.02em",
              }}
            >
              <SparksFlameVector size={22} animate={true} />
              <span>
                {lang === "en"
                  ? "“Innovation Starts Here” • STEAMORA CO. LTD"
                  : "“Ubunifu Unaanzia Hapa” • STEAMORA CO. LTD"}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0F172A",
                lineHeight: 1.15,
                marginBottom: "20px",
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
                fontSize: "1.1rem",
                color: "#475569",
                marginBottom: "32px",
                lineHeight: 1.65,
                maxWidth: "540px",
              }}
            >
              {lang === "en"
                ? "SPARKS 360° HUB is a mobile innovation hub delivering practical robotics, circuits, AI coding, 3D printing & science experiments to homes, schools, and communities across Tanzania."
                : "SPARKS 360° HUB ni kituo bunifu cha elimu ya vitendo (Roboti, Mizunguko ya Umeme, AI, Uchapishaji wa 3D na Sayansi) kinachofika nyumbani, shuleni, na katika jamii kote Dar es Salaam na Tanzania."}
            </p>

            {/* 4 Pillars Mini-Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                marginBottom: "32px",
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
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
              <button
                onClick={onOpenBooking}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  boxShadow: "0 12px 28px rgba(255, 102, 0, 0.35)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
              >
                <span>{lang === "en" ? "Book A Session" : "Jiunge Nasi Sasa"}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenFlyerModal}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  borderRadius: "30px",
                  background: "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "0.95rem",
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
                <DocumentFlyerVector size={20} />
                <span>{lang === "en" ? "View Official Flyers" : "Tazama Tangazo Rasmi"}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "20px",
                fontSize: "0.85rem",
                color: "#64748B",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>{lang === "en" ? "Ages 3 - 17 Years Welcome" : "Watoto Miaka 3 - 17 Wanakaribishwa"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} color="#0070F3" />
                <span>{lang === "en" ? "Certified STEAM Instructors" : "Wakufunzi Walioidhinishwa"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Award size={16} color="#FF6600" />
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
                marginTop: "16px",
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px 20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(0, 112, 243, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0070F3",
                  }}
                >
                  <Zap size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                    {lang === "en" ? "Physical Kits for Every Learner" : "Vifaa Halisi vya Kila Mwanafunzi"}
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: "#64748B", margin: 0 }}>
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
                }}
              >
                {lang === "en" ? "Join Now" : "Jiunge"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
