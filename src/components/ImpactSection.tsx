"use client";

import React, { useState } from "react";
import { Sparkles, Trophy, Award, Users, Rocket, Zap, ArrowRight } from "lucide-react";

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
  bgColor: string;
  borderColor: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
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
    color: "#D97706", // Warm Amber
    bgColor: "#FEF3C7",
    borderColor: "#FDE68A",
    icon: Users,
  },
  {
    id: "awards",
    number: "7",
    labelEn: "Awards & Recognitions",
    labelSw: "Tuzo & Utambuzi wa Ubunifu",
    descEn: "National & regional honours celebrating youth STEAM innovation excellence.",
    descSw: "Tuzo na heshima za kitaifa zikitambua ubunifu na ubora wa mafunzo yetu.",
    color: "#E11D48", // Coral Rose / Red
    bgColor: "#FFE4E6",
    borderColor: "#FECDD3",
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
    color: "#059669", // Vibrant Emerald Green
    bgColor: "#D1FAE5",
    borderColor: "#A7F3D0",
    icon: Zap,
  },
  {
    id: "years",
    number: "1",
    labelEn: "Year in Operation",
    labelSw: "Mwaka 1 wa Mafanikio",
    descEn: "A high-velocity journey building Tanzania's premier hub for young creators.",
    descSw: "Mwaka mmoja wa safari ya kasi tukibadilisha elimu kuwa ya vitendo na tija.",
    color: "#006CB7", // Royal Brand Blue
    bgColor: "#E0F2FE",
    borderColor: "#BAE6FD",
    icon: Rocket,
  },
];

export default function ImpactSection({ onOpenBooking, lang }: ImpactSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="impact"
      style={{
        paddingTop: "clamp(64px, 8vw, 96px)",
        paddingBottom: "clamp(64px, 8vw, 96px)",
        background: "linear-gradient(180deg, #FFF1F2 0%, #FFE4E6 50%, #FFF1F2 100%)",
        position: "relative",
        borderTop: "2px solid #FECDD380",
        borderBottom: "2px solid #FECDD380",
      }}
    >
      <div className="container">
        {/* Section Header: Standard clean alignment matching all other sections */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 44px auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "16px",
              fontFamily: "var(--font-heading)",
            }}
          >
            {lang === "en" ? (
              <>
                Every Milestone.{" "}
                <span style={{ color: "#E11D48" }}>A Story of Possibility.</span>
              </>
            ) : (
              <>
                Kila Hatua Tuliyopiga.{" "}
                <span style={{ color: "#E11D48" }}>Ni Simulizi ya Mafanikio.</span>
              </>
            )}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              color: "#475569",
              lineHeight: 1.6,
              fontFamily: "var(--font-body)",
            }}
          >
            {lang === "en"
              ? "Behind every number are curious young minds, new discoveries, and moments that make learning matter. From wire circuits to autonomous robots, we are nurturing the inventors who will lead Tanzania tomorrow."
              : "Nyuma ya kila namba kuna watoto wenye shauku ya kugundua, vifaa halisi mikononi mwao, na nyakati za furaha zinazofanya mafunzo kuwa na maana. Tunalea kizazi cha wavumbuzi watakaoiongoza Tanzania kesho."}
          </p>
        </div>

        {/* 4 Stats Cards Grid - Clean, Straight & Uniform */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          {STATS_DATA.map((stat) => {
            const isHovered = hoveredCard === stat.id;
            const IconComp = stat.icon;

            return (
              <div
                key={stat.id}
                className="lego-card"
                onMouseEnter={() => setHoveredCard(stat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  border: `2px solid ${isHovered ? stat.color : "#F1F5F9"}`,
                  borderTop: `6px solid ${stat.color}`,
                  padding: "30px 24px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isHovered
                    ? `0 16px 32px rgba(15, 23, 42, 0.08)`
                    : "0 6px 20px rgba(15, 23, 42, 0.04)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  position: "relative",
                }}
              >
                {/* Top Row: Icon Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: stat.bgColor,
                      border: `1px solid ${stat.borderColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconComp size={22} color={stat.color} />
                  </div>
                </div>

                {/* Big Metric Number */}
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.75rem, 5vw, 3.6rem)",
                    fontWeight: 900,
                    color: stat.color,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                  {stat.suffix && (
                    <span style={{ fontSize: "0.85em", opacity: 0.9 }}>
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Metric Label */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.1rem, 1.6vw, 1.25rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.3,
                    marginBottom: "12px",
                  }}
                >
                  {lang === "en" ? stat.labelEn : stat.labelSw}
                </h3>

                {/* Accent Underline Bar */}
                <div
                  style={{
                    width: isHovered ? "56px" : "40px",
                    height: "4px",
                    borderRadius: "9999px",
                    background: stat.color,
                    marginBottom: "14px",
                    transition: "width 0.25s ease",
                  }}
                />

                {/* Microcopy Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.88rem, 1.3vw, 0.95rem)",
                    color: "#64748B",
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

        {/* Bottom Banner Row: Straight, Clean & Aligned */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1.5px solid #FECDD3",
            padding: "20px 28px",
            boxShadow: "0 6px 20px rgba(225, 29, 72, 0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Quote & Sparkle */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: "1 1 320px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#FFE4E6",
                border: "1px solid #FECDD3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Sparkles size={20} color="#E11D48" />
            </div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.08rem)",
                fontWeight: 700,
                color: "#0F172A",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {lang === "en" ? (
                <>
                  <strong style={{ color: "#E11D48" }}>Learning today.</strong> Opening possibilities for tomorrow.
                </>
              ) : (
                <>
                  <strong style={{ color: "#E11D48" }}>Kujifunza leo.</strong> Kufungua milango ya kesho ya ubunifu na mafanikio.
                </>
              )}
            </p>
          </div>

          {/* Action Button */}
          <div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="lego-btn-orange"
              style={{
                background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                padding: "12px 26px",
                fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
              }}
            >
              <span>{lang === "en" ? "Join Our Next Cohort" : "Jiunge na Darasa Lijalo"}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
