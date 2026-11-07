"use client";

import React, { useState } from "react";
import { Sparkles, Trophy, Award, Users, Rocket, Calendar, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

interface ImpactSectionProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

interface StatItem {
  id: string;
  number: string;
  suffix?: string;
  labelEn: string;
  labelSw: string;
  descEn: string;
  descSw: string;
  color: string;
  glowColor: string;
  bgLight: string;
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
}

const STATS_DATA: StatItem[] = [
  {
    id: "learners",
    number: "10K",
    suffix: "+",
    labelEn: "Learners Trained",
    labelSw: "Wanafunzi Waliofunzwa",
    descEn: "Curious minds ignited through hands-on robotics, coding, AI & electronics.",
    descSw: "Watoto na vijana waliojengewa ujuzi halisi wa roboti, AI, coding na sayansi.",
    color: "#FBBF24", // Sunburst Amber/Gold (from ref)
    glowColor: "rgba(251, 191, 36, 0.25)",
    bgLight: "rgba(251, 191, 36, 0.08)",
    icon: Users,
  },
  {
    id: "awards",
    number: "7",
    labelEn: "Awards & Recognitions",
    labelSw: "Tuzo & Utambuzi wa Ubunifu",
    descEn: "National & regional honours celebrating youth STEAM innovation excellence.",
    descSw: "Tuzo na heshima za kitaifa zikitambua ubunifu na ubora wa mafunzo yetu.",
    color: "#FB7185", // Coral Pink/Rose (from ref)
    glowColor: "rgba(251, 113, 133, 0.25)",
    bgLight: "rgba(251, 113, 133, 0.08)",
    icon: Trophy,
  },
  {
    id: "workshops",
    number: "10",
    suffix: "+",
    labelEn: "Workshops & Camps",
    labelSw: "Warsha & Kambi za STEAM",
    descEn: "Immersive Saturday clubs, holiday bootcamps, and interactive school maker labs.",
    descSw: "Kambi maalum za likizo, warsha za shule, na madarasa ya vitendo ya Jumamosi.",
    color: "#2DD4BF", // Vibrant Mint Teal (from ref)
    glowColor: "rgba(45, 212, 191, 0.25)",
    bgLight: "rgba(45, 212, 191, 0.08)",
    icon: Zap,
  },
  {
    id: "years",
    number: "1",
    labelEn: "Year in Operation",
    labelSw: "Mwaka 1 wa Mafanikio",
    descEn: "A high-velocity journey building Tanzania's premier hub for young creators.",
    descSw: "Mwaka mmoja wa safari ya kasi tukibadilisha elimu kuwa ya vitendo na tija.",
    color: "#A78BFA", // Electric Lavender Purple (from ref)
    glowColor: "rgba(167, 139, 250, 0.25)",
    bgLight: "rgba(167, 139, 250, 0.08)",
    icon: Rocket,
  },
];

export default function ImpactSection({ onOpenBooking, lang }: ImpactSectionProps) {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <section
      id="impact"
      style={{
        paddingTop: "clamp(64px, 9vw, 100px)",
        paddingBottom: "clamp(64px, 9vw, 100px)",
        background: "linear-gradient(180deg, #070B14 0%, #0D1627 50%, #080D1A 100%)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Ambient background light glows matching brand palette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 102, 0, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 108, 183, 0.16) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          right: "25%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* The Masterpiece Journey Card */}
        <div
          style={{
            background: "linear-gradient(145deg, #111E34 0%, #0E182B 60%, #091120 100%)",
            borderRadius: "clamp(24px, 4vw, 36px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow:
              "0 25px 60px -15px rgba(2, 6, 23, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            padding: "clamp(28px, 5.5vw, 64px) clamp(20px, 4.5vw, 56px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle inner card gradient accents */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle at 100% 0%, rgba(251, 191, 36, 0.08) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          {/* Top Header Block: Eyebrow, Dual-Color Title, Subtext */}
          <div style={{ maxWidth: "820px", marginBottom: "clamp(32px, 5vw, 52px)" }}>
            {/* Tag Pill with glowing golden dot */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 14px",
                borderRadius: "9999px",
                background: "rgba(251, 191, 36, 0.1)",
                border: "1px solid rgba(251, 191, 36, 0.25)",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FBBF24",
                  boxShadow: "0 0 8px #FBBF24",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.86rem)",
                  fontWeight: 800,
                  color: "#FBBF24",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {lang === "en" ? "Our Journey in Numbers" : "Safari Yetu kwa Namba"}
              </span>
            </div>

            {/* Dual Tone Main Heading */}
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#FFFFFF", display: "block" }}>
                {lang === "en" ? "Every milestone." : "Kila hatua."}
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 70%, #FF6600 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                {lang === "en" ? "A story of possibility." : "Ni simulizi ya uwezo wetu."}
              </span>
            </h2>

            {/* Inspiring, human-crafted subtext (maneno mazuri) */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.18rem)",
                color: "#CBD5E1",
                lineHeight: 1.65,
                fontWeight: 500,
                maxWidth: "720px",
              }}
            >
              {lang === "en"
                ? "Behind every number are curious minds, new discoveries, and moments that make learning matter. From wire circuits to autonomous robots, we are nurturing the inventors who will lead Tanzania tomorrow."
                : "Nyuma ya kila namba kuna watoto wenye shauku ya kugundua, vifaa halisi mikononi mwao, na nyakati za furaha zinazofanya mafunzo kuwa na maana. Tunalea kizazi cha wavumbuzi watakaoiongoza Tanzania kesho."}
            </p>
          </div>

          {/* 4 Key Statistics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: "clamp(24px, 3.5vw, 36px)",
              paddingBottom: "clamp(24px, 4vw, 36px)",
            }}
          >
            {STATS_DATA.map((stat) => {
              const isHovered = hoveredStat === stat.id;
              const IconComp = stat.icon;

              return (
                <div
                  key={stat.id}
                  onMouseEnter={() => setHoveredStat(stat.id)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    background: isHovered
                      ? "rgba(255, 255, 255, 0.06)"
                      : "rgba(255, 255, 255, 0.025)",
                    border: `1px solid ${
                      isHovered ? stat.color + "70" : "rgba(255, 255, 255, 0.08)"
                    }`,
                    borderRadius: "20px",
                    padding: "clamp(20px, 3vw, 28px)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 14px 30px -10px ${stat.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.15)`
                      : "none",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Subtle Top-right Icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: stat.bgLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${stat.color}35`,
                      }}
                    >
                      <IconComp size={20} color={stat.color} />
                    </div>
                  </div>

                  {/* Big Hero Number */}
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2.75rem, 5.5vw, 3.8rem)",
                      fontWeight: 900,
                      color: stat.color,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      marginBottom: "10px",
                      textShadow: isHovered ? `0 0 20px ${stat.glowColor}` : "none",
                      transition: "text-shadow 0.3s ease",
                    }}
                  >
                    {stat.number}
                    {stat.suffix && (
                      <span style={{ fontSize: "0.85em", opacity: 0.9 }}>
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Metric Title */}
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                      marginBottom: "12px",
                    }}
                  >
                    {lang === "en" ? stat.labelEn : stat.labelSw}
                  </div>

                  {/* Colored Underline Bar Accent (Just like reference) */}
                  <div
                    style={{
                      width: isHovered ? "56px" : "40px",
                      height: "4px",
                      borderRadius: "9999px",
                      background: stat.color,
                      boxShadow: `0 0 10px ${stat.glowColor}`,
                      transition: "width 0.3s ease",
                      marginBottom: "14px",
                    }}
                  />

                  {/* Clean Narrative Description */}
                  <p
                    style={{
                      fontSize: "clamp(0.84rem, 1.3vw, 0.92rem)",
                      color: "#94A3B8",
                      lineHeight: 1.55,
                      marginTop: "auto",
                    }}
                  >
                    {lang === "en" ? stat.descEn : stat.descSw}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Card Footer Banner with Quote & Action */}
          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              marginTop: "clamp(24px, 4vw, 36px)",
              paddingTop: "clamp(20px, 3vw, 28px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {/* Inspiring motto from reference */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flex: "1 1 320px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(251, 191, 36, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(251, 191, 36, 0.3)",
                }}
              >
                <Sparkles size={18} color="#FBBF24" />
              </div>
              <p
                style={{
                  fontSize: "clamp(0.92rem, 1.5vw, 1.05rem)",
                  fontWeight: 600,
                  color: "#E2E8F0",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                {lang === "en" ? (
                  <>
                    <strong style={{ color: "#FBBF24" }}>Learning today.</strong> Opening possibilities for tomorrow.
                  </>
                ) : (
                  <>
                    <strong style={{ color: "#FBBF24" }}>Kujifunza leo.</strong> Kufungua milango ya kesho ya ubunifu.
                  </>
                )}
              </p>
            </div>

            {/* Quick Action Button */}
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(0.88rem, 1.4vw, 0.98rem)",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  border: "none",
                  boxShadow: "0 6px 20px rgba(255, 102, 0, 0.35)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 10px 26px rgba(255, 102, 0, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 102, 0, 0.35)";
                }}
              >
                <span>
                  {lang === "en" ? "Join Our Next Cohort" : "Jiunge na Darasa Lijalo"}
                </span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
