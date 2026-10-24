"use client";

import React from "react";
import Image from "next/image";
import { Eye, Target, CheckCircle2, Shield, Heart } from "lucide-react";
import { SparksFlameVector } from "./KidVectors";

interface AboutSectionProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

export default function AboutSection({ onOpenBooking, lang }: AboutSectionProps) {
  return (
    <section id="about" style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(30px, 5vw, 50px)",
            alignItems: "center",
          }}
        >
          {/* Left: Image Showcase with Badge */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(260px, 45vw, 440px)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
                border: "1px solid #E2E8F0",
              }}
            >
              <Image
                src="/images/robotics-kids.jpg"
                alt="Kids assembling robotics kits in Tanzania"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>

            {/* Floating Brand Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-14px",
                right: "14px",
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "12px 16px",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                maxWidth: "270px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#FFE4D6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <SparksFlameVector size={26} animate={true} />
              </div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>
                  STEAMORA Co. Ltd
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748B" }}>
                  {lang === "en" ? "Tanzania Educational Pioneer" : "Vinara wa Elimu ya STEAM Tanzania"}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision, Mission & Core Values */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              {lang === "en" ? (
                <>
                  Pioneering Practical <span className="gradient-text">STEAM Education</span> in Tanzania
                </>
              ) : (
                <>
                  Tunaongoza Katika Elimu ya Vitendo ya <span className="gradient-text">STEAM Tanzania</span>
                </>
              )}
            </h2>

            <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "24px" }}>
              {lang === "en"
                ? "SPARKS 360° HUB is a mobile innovation hub delivering practical STEAM learning to homes, schools, and communities through hands-on activities, technology, and creativity. We operate as an educational program under STEAMORA COMPANY LIMITED."
                : "SPARKS 360° HUB ni kituo bunifu cha elimu ya vitendo kinachopeleka elimu ya STEAM majumbani, mashuleni, na katika jamii kupitia shughuli za mikono, teknolojia, na ubunifu. Kinaendeshwa chini ya kampuni ya STEAMORA COMPANY LIMITED."}
            </p>

            {/* Vision & Mission Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "28px" }}>
              {/* Vision */}
              <div
                style={{
                  background: "#F8FAFC",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  borderLeft: "5px solid #FF6600",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Eye size={18} color="#FF6600" />
                  <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                    {lang === "en" ? "OUR VISION" : "DIRA YETU"}
                  </h4>
                </div>
                <p style={{ fontSize: "0.92rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
                  {lang === "en"
                    ? "To make practical STEAM education accessible everywhere and inspire young learners to become future innovators."
                    : "Kufanya elimu ya vitendo ya STEAM ipatikane popote na kuwatia moyo wanafunzi wadogo kuwa wavumbuzi wa kesho."}
                </p>
              </div>

              {/* Mission */}
              <div
                style={{
                  background: "#F8FAFC",
                  borderRadius: "18px",
                  padding: "18px 22px",
                  borderLeft: "5px solid #0070F3",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Target size={18} color="#0070F3" />
                  <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                    {lang === "en" ? "OUR MISSION" : "DHAMIRA YETU"}
                  </h4>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginTop: "8px" }}>
                  {(lang === "en"
                    ? [
                        "Strengthen problem solving skills",
                        "Build curiosity and critical thinking",
                        "Deliver future ready learning",
                        "Encourage exploration and discovery",
                        "Prepare children for tomorrow's world",
                        "Making STEAM accessible everywhere",
                      ]
                    : [
                        "Kujenga uwezo wa kutatua changamoto",
                        "Kukuza udadisi na kufikiri kwa kina",
                        "Kutoa elimu ya kujiandaa na kesho",
                        "Kuhimiza ugunduzi na majaribio",
                        "Kuwaandaa watoto kwa ulimwengu wa kesho",
                        "Kufanya STEAM ipatikane popote",
                      ]
                  ).map((m, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle2 size={14} color="#0070F3" />
                      <span style={{ fontSize: "0.82rem", color: "#334155", fontWeight: 600 }}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
