"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  RobotVector,
  CircuitVector,
  CodingVector,
  ThreeDPrinterVector,
  AIBrainVector,
  ScienceFlaskVector,
  ArtPaletteVector,
} from "./KidVectors";

interface ProgrammesSectionProps {
  onSelectProgramme: (programmeName: string) => void;
  lang: "en" | "sw";
}

export default function ProgrammesSection({ onSelectProgramme, lang }: ProgrammesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const programmes = [
    {
      id: "robotics",
      category: "engineering",
      icon: <RobotVector size={36} animate={true} />,
      titleEn: "Robotics & Mechanics",
      titleSw: "Roboti na Uhandisi",
      descEn: "Build smart robots, assemble chassis, wire DC motors, and test ultrasonic obstacle sensors.",
      descSw: "Kutengeneza roboti zenye akili, kuunganisha mota na vitambuzi vya vizuizi.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/robotics.jpg",
      skills: ["Chassis Assembly", "Ultrasonic Sensors", "Motor Control", "Arduino Coding"],
      skillsSw: ["Kuunda Bodi ya Roboti", "Vitambuzi vya Vizuizi", "Udhibiti wa Mota", "Programu za Arduino"],
      accentColor: "#FF6600",
      cardBg: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
      borderColor: "#FED7AA",
      iconBg: "linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)",
      tagBg: "#FFF7ED",
      tagBorder: "#FDBA74",
      tagColor: "#C2410C",
    },
    {
      id: "electronics",
      category: "engineering",
      icon: <CircuitVector size={36} animate={true} />,
      titleEn: "Electronics & Circuits",
      titleSw: "Mizunguko ya Umeme (Circuits)",
      descEn: "Safe breadboard wiring, push switches, LEDs, buzzers, and microchips.",
      descSw: "Kuunganisha mifumo ya umeme, breadboard, swichi na taa za LED.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/electronics.jpg",
      skills: ["Breadboards", "LEDs & Switches", "Power Distribution", "Microchips"],
      skillsSw: ["Bodi za Breadboard", "Taa za LED & Swichi", "Mzunguko wa Umeme", "Vipuri vya Umeme"],
      accentColor: "#0070F3",
      cardBg: "linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)",
      borderColor: "#BFDBFE",
      iconBg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
      tagBg: "#EFF6FF",
      tagBorder: "#93C5FD",
      tagColor: "#1D4ED8",
    },
    {
      id: "coding",
      category: "tech",
      icon: <CodingVector size={36} animate={true} />,
      titleEn: "Coding & Programming",
      titleSw: "Programu za Kompyuta (Coding)",
      descEn: "Create interactive games, animations, and apps through Scratch and Python logic.",
      descSw: "Kutengeneza michezo ya video na programu kupitia Scratch na Python.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/coding.jpg",
      skills: ["Block Coding (Scratch)", "Game Logic", "Python Basics", "Web Concepts"],
      skillsSw: ["Block Coding (Scratch)", "Mantiki ya Michezo", "Misingi ya Python", "Misingi ya Wavuti"],
      accentColor: "#10B981",
      cardBg: "linear-gradient(180deg, #ECFDF5 0%, #FFFFFF 100%)",
      borderColor: "#A7F3D0",
      iconBg: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
      tagBg: "#ECFDF5",
      tagBorder: "#6EE7B7",
      tagColor: "#047857",
    },
    {
      id: "3d-printing",
      category: "engineering",
      icon: <ThreeDPrinterVector size={36} animate={true} />,
      titleEn: "3D Design & Printing",
      titleSw: "Muundo na Uchapishaji wa 3D",
      descEn: "Turn digital 3D models into real physical creations using filament 3D printers.",
      descSw: "Kubuni michoro kwenye kompyuta na kuchapisha vitu halisi vya 3D.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/3d-printing.jpg",
      skills: ["CAD 3D Modeling", "Filament Printing", "Spatial Geometry", "Rapid Prototyping"],
      skillsSw: ["Uchoraji wa 3D (CAD)", "Uchapishaji wa Printa", "Jiometria ya Maumbo", "Kutengeneza Mfano Halisi"],
      accentColor: "#8B5CF6",
      cardBg: "linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 100%)",
      borderColor: "#DDD6FE",
      iconBg: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)",
      tagBg: "#F5F3FF",
      tagBorder: "#C4B5FD",
      tagColor: "#6D28D9",
    },
    {
      id: "ai",
      category: "tech",
      icon: <AIBrainVector size={36} animate={true} />,
      titleEn: "STEAM with AI for Kids",
      titleSw: "STEAM na Akili Mnemba (AI)",
      descEn: "Hands-on artificial intelligence, computer vision, and smart automated systems.",
      descSw: "Kujifunza akili mnemba (AI), utambuzi wa picha na mifumo ya kisasa.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/ai-tech.jpg",
      skills: ["Prompt Engineering", "Computer Vision", "AI Ethics", "Smart Assistants"],
      skillsSw: ["Kuelekeza AI (Prompting)", "Utambuzi wa Picha", "Maadili ya AI", "Mifumo ya Kidijitali"],
      accentColor: "#EC4899",
      cardBg: "linear-gradient(180deg, #FDF2F8 0%, #FFFFFF 100%)",
      borderColor: "#FBCFE8",
      iconBg: "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)",
      tagBg: "#FDF2F8",
      tagBorder: "#F472B6",
      tagColor: "#BE185D",
    },
    {
      id: "science",
      category: "science",
      icon: <ScienceFlaskVector size={36} animate={true} />,
      titleEn: "Scientific Experiments",
      titleSw: "Majaribio ya Kisayansi",
      descEn: "Exciting physical science experiments, circuit physics, and lab discovery.",
      descSw: "Majaribio ya kusisimua ya sayansi ya vitendo, fizikia na maabara.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/science.jpg",
      skills: ["Fun Chemistry", "Optics & Physics", "Microscopy", "Scientific Method"],
      skillsSw: ["Kemia ya Kufurahisha", "Fizikia & Mwangaza", "Darubini ya Maabara", "Mbinu za Kisayansi"],
      accentColor: "#F59E0B",
      cardBg: "linear-gradient(180deg, #FEFCE8 0%, #FFFFFF 100%)",
      borderColor: "#FDE68A",
      iconBg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
      tagBg: "#FEFCE8",
      tagBorder: "#FCD34D",
      tagColor: "#B45309",
    },
    {
      id: "arts",
      category: "science",
      icon: <ArtPaletteVector size={36} animate={true} />,
      titleEn: "Creative Arts & Crafts",
      titleSw: "Sanaa na Ubunifu wa Mikono",
      descEn: "Express ideas through makerspace crafts, tactile design, and creative projects.",
      descSw: "Sanaa na ufundi wa mikono, ubunifu wa kisasa na utengenezaji wa vitu.",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/categories/creative-arts.jpg",
      skills: ["Painting & Sketching", "Makerspace Crafts", "Color Theory", "Product Design"],
      skillsSw: ["Kuchora & Kupaka Rangi", "Ufundi wa Ubunifu", "Mchanganyiko wa Rangi", "Kusanifu Vitu"],
      accentColor: "#06B6D4",
      cardBg: "linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%)",
      borderColor: "#99F6E4",
      iconBg: "linear-gradient(135deg, #CFFAFE 0%, #A5F3FC 100%)",
      tagBg: "#F0FDFA",
      tagBorder: "#5EEAD4",
      tagColor: "#0E7490",
    },
  ];

  const filteredProgrammes =
    activeFilter === "all"
      ? programmes
      : programmes.filter((p) => p.category === activeFilter);

  return (
    <section id="programmes" style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
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
                Our 7 Core <span className="gradient-text">STEAM Programmes</span>
              </>
            ) : (
              <>
                Programu 7 Kuu za <span className="gradient-text">STEAM na Teknolojia</span>
              </>
            )}
          </h2>

          <p style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.6 }}>
            {lang === "en"
              ? "100% hands-on STEAM learning with real physical tools, qualified instructors, and progressive mastery."
              : "Elimu ya vitendo 100% kwa vifaa halisi, walimu wenye uzoefu, na ngazi za mafunzo kwa watoto na vijana."}
          </p>

          {/* Filter Pills */}
          <div
            className="horizontal-scroll-mobile"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "24px",
              padding: "4px 2px",
            }}
          >
            {[
              { id: "all", labelEn: "All 7 Programmes", labelSw: "Programu Zote (7)" },
              { id: "engineering", labelEn: "Robotics & Circuits", labelSw: "Roboti & Umeme" },
              { id: "tech", labelEn: "Coding & AI", labelSw: "Coding & AI" },
              { id: "science", labelEn: "Science & Arts", labelSw: "Sayansi & Sanaa" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "24px",
                  fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  background: activeFilter === f.id ? "#0F172A" : "#F1F5F9",
                  color: activeFilter === f.id ? "#FFFFFF" : "#475569",
                  border: "none",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? f.labelEn : f.labelSw}
              </button>
            ))}
          </div>
        </div>

        {/* Programme Cards Grid - Each div has its distinct thematic background color */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 290px), 1fr))",
            gap: "clamp(20px, 3.5vw, 30px)",
          }}
        >
          {filteredProgrammes.map((p) => (
            <div
              key={p.id}
              className="lego-card"
              style={{
                borderRadius: "24px",
                border: `2px solid ${p.borderColor}`,
                borderTop: `6px solid ${p.accentColor}`,
                background: p.cardBg,
                boxShadow: `0 8px 24px ${p.accentColor}15, 0 2px 6px rgba(15, 23, 42, 0.04)`,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
              }}
            >
              {/* Photo Preview Header - 16:10 aspect ratio with translucent glowing vector badge */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  background: "#F8FAFC",
                  borderBottom: `1.5px solid ${p.borderColor}`,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.titleEn}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />

                {/* Translucent Glass Floating Vector Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: `1.5px solid ${p.borderColor}`,
                    borderRadius: "9999px",
                    padding: "4px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
                  }}
                >
                  <Sparkles size={12} color={p.accentColor} />
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      color: p.accentColor,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {lang === "en" ? p.levelsEn : p.levelsSw}
                  </span>
                </div>
              </div>

              {/* Card Body with thematic background */}
              <div
                style={{
                  padding: "22px 20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Icon & Title Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        background: p.iconBg,
                        border: `2px solid ${p.accentColor}40`,
                        boxShadow: `0 4px 14px ${p.accentColor}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          color: "#0F172A",
                          lineHeight: 1.25,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {lang === "en" ? p.titleEn : p.titleSw}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#475569",
                      lineHeight: 1.55,
                      marginBottom: "16px",
                    }}
                  >
                    {lang === "en" ? p.descEn : p.descSw}
                  </p>

                  {/* Key Skills Thematic Badges */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "22px",
                    }}
                  >
                    {(lang === "en" ? p.skills : p.skillsSw).map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "4px 9px",
                          borderRadius: "8px",
                          background: p.tagBg,
                          border: `1px solid ${p.tagBorder}`,
                          color: p.tagColor,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enroll CTA Button - Thematic Solid Accent Button */}
                <button
                  onClick={() => onSelectProgramme(p.titleEn)}
                  style={{
                    width: "100%",
                    padding: "12px 18px",
                    borderRadius: "14px",
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    border: "none",
                    background: p.accentColor,
                    color: "#FFFFFF",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: `0 4px 14px ${p.accentColor}35`,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 6px 18px ${p.accentColor}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 14px ${p.accentColor}35`;
                  }}
                >
                  <span>{lang === "en" ? "Enroll in Programme" : "Jiunge na Programu Hii"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
