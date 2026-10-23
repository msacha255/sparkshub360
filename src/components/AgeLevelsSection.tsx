"use client";

import React, { useState } from "react";
import { Users, Clock, BookOpen, CheckCircle2, Trophy, Brain, ChevronRight } from "lucide-react";

interface AgeLevelsSectionProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

export default function AgeLevelsSection({ onOpenBooking, lang }: AgeLevelsSectionProps) {
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(2); // Default to Age 8-12

  const ageTiers = [
    {
      group: "Age 3 - 4",
      groupSw: "Miaka 3 - 4",
      name: "Sparks Tiny Explorers",
      nameSw: "Wavumbuzi Wadogo",
      levelEn: "Level 1 - 3 (36 Total Sessions)",
      levelSw: "Ngazi 1 - 3 (Vipindi 36 Jumla)",
      durationEn: "1 hour per session",
      durationSw: "Saa 1 kwa kila kipindi",
      focusEn: "Sensory discovery, basic block mechanics, early colors & shapes, simple creative arts.",
      focusSw: "Kugundua kupitia hisia, mechanics rahisi za vitu, rangi na maumbo, sanaa ya awali.",
      keyMilestones: [
        "Hand-eye coordination with tactile blocks",
        "Understanding cause & effect with light circuits",
        "Creative expression through clay & water colors",
        "Building confidence in small team groups",
      ],
      keyMilestonesSw: [
        "Uratibu wa mikono na macho kupitia matofali ya kujenga",
        "Kuelewa chanzo na matokeo kupitia saketi za taa",
        "Kueleza hisia za ubunifu kupitia udongo na rangi za maji",
        "Kujenga kujiamini katika vikundi vidogo vya marafiki",
      ],
      badgeColor: "#FF6600",
    },
    {
      group: "Age 5 - 7",
      groupSw: "Miaka 5 - 7",
      name: "Sparks Junior Inventors",
      nameSw: "Wabunifu Chipukizi",
      levelEn: "Level 1 - 3 (36 Total Sessions)",
      levelSw: "Ngazi 1 - 3 (Vipindi 36 Jumla)",
      durationEn: "1 hr to 1 hr 15 min per session",
      durationSw: "Saa 1 hadi 1:15 kwa kila kipindi",
      focusEn: "Introductory visual coding, motorized gears, breadboard LEDs, beginner science experiments.",
      focusSw: "Kuanza coding ya picha, gia za mota, taa za LED, na majaribio ya sayansi ya mwanzo.",
      keyMilestones: [
        "First motorized vehicle construction",
        "Simple circuits with coin batteries and buzzers",
        "Sequencing & digital storytelling with Scratch Jr",
        "Observation and scientific note taking",
      ],
      keyMilestonesSw: [
        "Kuunda gari la kwanza lenye mota ya umeme",
        "Saketi rahisi zenye betri ndogo na king'ora",
        "Kupanga mlolongo wa simulizi za picha kwa Scratch Jr",
        "Uchunguzi na kuandika kumbukumbu za kisayansi",
      ],
      badgeColor: "#0070F3",
    },
    {
      group: "Age 8 - 12",
      groupSw: "Miaka 8 - 12",
      name: "Sparks Young Engineers",
      nameSw: "Wahandisi Vijana",
      levelEn: "Level 1 - 3 (36 Total Sessions)",
      levelSw: "Ngazi 1 - 3 (Vipindi 36 Jumla)",
      durationEn: "1 hr 30 min per session",
      durationSw: "Saa 1 na nusu kwa kila kipindi",
      focusEn: "Arduino robotics, ultrasonic obstacle sensors, 3D modeling, intermediate coding & AI tools.",
      focusSw: "Roboti za Arduino, vitambuzi vya vizuizi, uchoraji wa 3D, coding ya kati na zana za AI.",
      keyMilestones: [
        "Building fully autonomous obstacle-avoiding rovers",
        "3D design & slicing prototypes for 3D printers",
        "Developing playable computer games and animations",
        "Solving real community challenges in teams",
      ],
      keyMilestonesSw: [
        "Kutengeneza gari la roboti linalokwepa vizuizi lenyewe",
        "Kubuni na kuandaa maumbo ya kuchapishwa na printa za 3D",
        "Kutengeneza michezo ya video inayochezeka kwenye kompyuta",
        "Kutatua changamoto halisi za kijamii katika timu",
      ],
      badgeColor: "#10B981",
    },
    {
      group: "Age 13 - 17",
      groupSw: "Miaka 13 - 17",
      name: "Sparks Tech Innovators",
      nameSw: "Wavumbuzi wa Teknolojia",
      levelEn: "Level 1 - 3 (36 Total Sessions)",
      levelSw: "Ngazi 1 - 3 (Vipindi 36 Jumla)",
      durationEn: "1 hr 30 min per session",
      durationSw: "Saa 1 na nusu kwa kila kipindi",
      focusEn: "Python & microcontroller programming, IoT smart systems, AI prompt engineering, portfolio building.",
      focusSw: "Programu za Python, mifumo ya IoT, Akili Mnemba (AI), na kutengeneza miradi ya maonyesho.",
      keyMilestones: [
        "Programming microcontrollers with C++ / Python",
        "Utilizing generative AI for software architecture",
        "Complex multi-sensor robotics and wireless control",
        "Preparation for national & international STEAM competitions",
      ],
      keyMilestonesSw: [
        "Kupanga mikonotroli kwa lugha za C++ na Python",
        "Kutumia mifumo ya AI katika kusanifu programu",
        "Roboti za kisasa zenye vitambuzi vingi na udhibiti wa teknolojia",
        "Kujiandaa kwa mashindano ya kitaifa na kimataifa ya STEAM",
      ],
      badgeColor: "#8B5CF6",
    },
  ];

  const currentTier = ageTiers[selectedAgeIndex];

  return (
    <section id="age-groups" style={{ padding: "80px 0", background: "#F8FAFC" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#0F172A",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            {lang === "en" ? (
              <>
                Age Groups & <span className="gradient-text">Progressive Levels</span>
              </>
            ) : (
              <>
                Makundi ya Umri & <span className="gradient-text">Ngazi za Mafanikio</span>
              </>
            )}
          </h2>

          <p style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.6 }}>
            {lang === "en"
              ? "Every stage is carefully tailored to cognitive and motor development. Each Level consists of 12 structured sessions with hands-on projects."
              : "Kila hatua imeandaliwa kulingana na uwezo na ukuaji wa mtoto. Kila ngazi inajumuisha vipindi 12 vyenye miradi inayoshikika."}
          </p>
        </div>

        {/* 4 Age Tab Selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          {ageTiers.map((tier, idx) => {
            const isSelected = selectedAgeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedAgeIndex(idx)}
                style={{
                  background: isSelected ? "#0F172A" : "#FFFFFF",
                  border: isSelected ? `2px solid ${tier.badgeColor}` : "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "16px",
                  textAlign: "left",
                  boxShadow: isSelected
                    ? "0 10px 25px rgba(15, 23, 42, 0.15)"
                    : "0 2px 6px rgba(15, 23, 42, 0.04)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: isSelected ? tier.badgeColor : "#0F172A",
                    }}
                  >
                    {lang === "en" ? tier.group : tier.groupSw}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      background: isSelected ? "rgba(255, 255, 255, 0.15)" : "#F1F5F9",
                      color: isSelected ? "#FFFFFF" : "#64748B",
                      fontWeight: 700,
                    }}
                  >
                    {lang === "en" ? "Level 1 - 3" : "Ngazi 1 - 3"}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: isSelected ? "#E2E8F0" : "#64748B",
                  }}
                >
                  {lang === "en" ? tier.name : tier.nameSw}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Deep-Dive Card */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
            padding: "clamp(24px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* Left Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span
                style={{
                  background: currentTier.badgeColor,
                  color: "#FFFFFF",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                }}
              >
                {lang === "en" ? currentTier.group : currentTier.groupSw}
              </span>
              <span style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 600 }}>
                {lang === "en" ? "12 Sessions Per Level" : "Vipindi 12 Kila Ngazi"}
              </span>
            </div>

            <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "#0F172A", marginBottom: "12px" }}>
              {lang === "en" ? currentTier.name : currentTier.nameSw}
            </h3>

            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.6, marginBottom: "20px" }}>
              {lang === "en" ? currentTier.focusEn : currentTier.focusSw}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                padding: "14px",
                background: "#F8FAFC",
                borderRadius: "14px",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Clock size={16} color="#0070F3" />
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1E293B" }}>
                  {lang === "en" ? currentTier.durationEn : currentTier.durationSw}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <BookOpen size={16} color="#10B981" />
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1E293B" }}>
                  {lang === "en" ? "12 Hands-on Projects" : "Miradi 12 ya Vitendo"}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: currentTier.badgeColor,
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "24px",
                fontWeight: 800,
                fontSize: "0.95rem",
                boxShadow: `0 8px 20px ${currentTier.badgeColor}40`,
              }}
            >
              <span>{lang === "en" ? `Enroll in ${currentTier.group}` : `Jiandikishe kwa ${currentTier.groupSw}`}</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right: Key Milestones & What Students Gain */}
          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid #E2E8F0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Trophy size={20} color="#FF6600" />
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                {lang === "en" ? "Learning Milestones" : "Ujuzi Atakaoupata Mwanafunzi"}
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {(lang === "en" ? currentTier.keyMilestones : currentTier.keyMilestonesSw).map((milestone, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "0.88rem", color: "#334155", fontWeight: 600 }}>
                    {milestone}
                  </span>
                </div>
              ))}
            </div>

            {/* Official Gains from Brochure Page 2 */}
            <div style={{ paddingTop: "16px", borderTop: "1px solid #E2E8F0" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: "#64748B",
                  letterSpacing: "0.05em",
                }}
              >
                {lang === "en" ? "What Every Student Gains:" : "Faida Kuu kwa Mwanafunzi:"}
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                  marginTop: "8px",
                }}
              >
                {(lang === "en"
                  ? [
                      "Problem solving skills",
                      "Critical thinking ability",
                      "Creativity & innovation mindset",
                      "Confidence and teamwork",
                      "Technology & engineering skills",
                      "Safe physical coordination",
                    ]
                  : [
                      "Uwezo wa kutatua changamoto",
                      "Kufikiri kwa kina na umakini",
                      "Mwelekeo wa ubunifu & uvumbuzi",
                      "Kujiamini & kazi ya pamoja",
                      "Ujuzi wa teknolojia na uhandisi",
                      "Uratibu makini wa vitendo",
                    ]
                ).map((gain, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#10B981", fontSize: "0.8rem", fontWeight: 900 }}>✓</span>
                    <span style={{ fontSize: "0.78rem", color: "#475569", fontWeight: 600 }}>{gain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
