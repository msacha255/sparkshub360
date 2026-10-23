"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      icon: <RobotVector size={34} animate={true} />,
      titleEn: "Robotics",
      titleSw: "Roboti & Uhandisi",
      descEn: "Build smart robots through engineering, hands on assembly, and programming.",
      descSw: "Kutengeneza roboti zenye akili kupitia uhandisi, kuunganisha sehemu na programu za kompyuta.",
      agesEn: "Ages 5 - 17",
      agesSw: "Miaka 5 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/robotics-kids.jpg",
      skills: ["Chassis Assembly", "Ultrasonic Sensors", "Motor Control", "Arduino Coding"],
      skillsSw: ["Kuunda Bodi ya Roboti", "Vitambuzi vya Vizuizi", "Udhibiti wa Mota", "Programu za Arduino"],
      accentColor: "#FF6600",
      bgGradient: "linear-gradient(135deg, rgba(255, 102, 0, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
    },
    {
      id: "electronics",
      category: "engineering",
      icon: <CircuitVector size={34} animate={true} />,
      titleEn: "Electronics & Circuits",
      titleSw: "Mizunguko ya Umeme (Circuits)",
      descEn: "Explore circuits and smart systems through practical projects and connections.",
      descSw: "Kujifunza mifumo ya umeme na teknolojia kupitia miradi halisi ya kuunganisha nyaya na taa.",
      agesEn: "Ages 5 - 17",
      agesSw: "Miaka 5 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/circuits-kids.jpg",
      skills: ["Breadboards", "LEDs & Switches", "Power Distribution", "Microchips"],
      skillsSw: ["Bodi za Breadboard", "Taa za LED & Swichi", "Mzunguko wa Umeme", "Vipuri vya Umeme"],
      accentColor: "#0070F3",
      bgGradient: "linear-gradient(135deg, rgba(0, 112, 243, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
    },
    {
      id: "coding",
      category: "tech",
      icon: <CodingVector size={34} animate={true} />,
      titleEn: "Coding & Programming",
      titleSw: "Programu za Kompyuta (Coding)",
      descEn: "Create games, apps, and animations through coding tools and digital logic.",
      descSw: "Kutengeneza michezo ya video, programu (apps) na katuni kupitia mantiki ya kompyuta.",
      agesEn: "Ages 5 - 17",
      agesSw: "Miaka 5 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/ai-coding.jpg",
      skills: ["Block Coding (Scratch)", "Game Logic", "Python Basics", "Web Concepts"],
      skillsSw: ["Block Coding (Scratch)", "Mantiki ya Michezo", "Misingi ya Python", "Misingi ya Wavuti"],
      accentColor: "#10B981",
      bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
    },
    {
      id: "3d-printing",
      category: "engineering",
      icon: <ThreeDPrinterVector size={34} animate={true} />,
      titleEn: "3D Design & Printing",
      titleSw: "Muundo na Uchapishaji wa 3D",
      descEn: "Turn ideas into real 3D creations through digital design and printing technology.",
      descSw: "Kubadilisha mawazo kuwa vitu halisi vinavyoshikika kwa kutumia teknolojia ya printa za 3D.",
      agesEn: "Ages 7 - 17",
      agesSw: "Miaka 7 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/3d-printing-kids.jpg",
      skills: ["CAD 3D Modeling", "Filament Printing", "Spatial Geometry", "Rapid Prototyping"],
      skillsSw: ["Uchoraji wa 3D (CAD)", "Uchapishaji wa Printa", "Jiometria ya Maumbo", "Kutengeneza Mfano Halisi"],
      accentColor: "#8B5CF6",
      bgGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
    },
    {
      id: "ai",
      category: "tech",
      icon: <AIBrainVector size={34} animate={true} />,
      titleEn: "STEAM with AI for Kids",
      titleSw: "STEAM na Akili Mnemba (AI)",
      descEn: "Use AI tools to solve problems and explore future technology.",
      descSw: "Kutumia zana za akili mnemba (AI) kutatua changamoto na kujiandaa na teknolojia ya kesho.",
      agesEn: "Ages 8 - 17",
      agesSw: "Miaka 8 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/ai-coding.jpg",
      skills: ["Prompt Engineering", "Computer Vision", "AI Ethics", "Smart Assistants"],
      skillsSw: ["Kuelekeza AI (Prompting)", "Utambuzi wa Picha", "Maadili ya AI", "Mifumo ya Kidijitali"],
      accentColor: "#EC4899",
      bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
    },
    {
      id: "science",
      category: "science",
      icon: <ScienceFlaskVector size={34} animate={true} />,
      titleEn: "Scientific Experiments",
      titleSw: "Majaribio ya Kisayansi",
      descEn: "Discover science through exciting experiments, observation, and practical discovery.",
      descSw: "Kugundua kanuni za sayansi kupitia majaribio ya kusisimua ya maabara na uchunguzi.",
      agesEn: "Ages 3 - 17",
      agesSw: "Miaka 3 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/science-lab.jpg",
      skills: ["Fun Chemistry", "Optics & Physics", "Microscopy", "Scientific Method"],
      skillsSw: ["Kemia ya Kufurahisha", "Fizikia & Mwangaza", "Darubini ya Maabara", "Mbinu za Kisayansi"],
      accentColor: "#F59E0B",
      bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
    },
    {
      id: "arts",
      category: "science",
      icon: <ArtPaletteVector size={34} animate={true} />,
      titleEn: "Creative Arts",
      titleSw: "Sanaa na Ubunifu",
      descEn: "Express ideas through drawing, painting, crafts, and creative design activities.",
      descSw: "Kueleza mawazo kwa kuchora, kupaka rangi, ufundi wa mikono na ubunifu wa kisasa.",
      agesEn: "Ages 3 - 17",
      agesSw: "Miaka 3 - 17",
      levelsEn: "Level 1 - 3 (12 sessions)",
      levelsSw: "Ngazi 1 - 3 (Vipindi 12)",
      image: "/images/creative-arts-kids.jpg",
      skills: ["Painting & Sketching", "Makerspace Crafts", "Color Theory", "Product Design"],
      skillsSw: ["Kuchora & Kupaka Rangi", "Ufundi wa Ubunifu", "Mchanganyiko wa Rangi", "Kusanifu Vitu"],
      accentColor: "#06B6D4",
      bgGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(255, 255, 255, 1) 100%)",
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
              ? "Designed for ages 3 to 17 under STEAMORA COMPANY LIMITED. Every programme combines real physical tools, qualified instructors, and 12-session progressive mastery levels."
              : "Imeandaliwa kwa watoto wa miaka 3 hadi 17 chini ya STEAMORA COMPANY LIMITED. Kila programu inajumuisha vifaa halisi, walimu wenye uzoefu, na vipindi 12 kwa kila ngazi."}
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "28px",
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
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  background: activeFilter === f.id ? "#0F172A" : "#F1F5F9",
                  color: activeFilter === f.id ? "#FFFFFF" : "#475569",
                  border: "none",
                }}
              >
                {lang === "en" ? f.labelEn : f.labelSw}
              </button>
            ))}
          </div>
        </div>

        {/* Programme Cards Grid - Strictly the 7 Core Programmes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredProgrammes.map((p) => (
            <div
              key={p.id}
              className="kid-card"
              style={{
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                background: p.bgGradient,
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Photo Preview Header */}
              <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
                <Image
                  src={p.image}
                  alt={p.titleEn}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(6px)",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: p.accentColor,
                  }}
                >
                  {lang === "en" ? p.agesEn : p.agesSw}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(6px)",
                    padding: "3px 8px",
                    borderRadius: "8px",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {lang === "en" ? p.levelsEn : p.levelsSw}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div
                    className="kid-icon-box"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                      border: "1px solid #F1F5F9",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                    {lang === "en" ? p.titleEn : p.titleSw}
                  </h3>
                </div>

                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5, marginBottom: "18px" }}>
                  {lang === "en" ? p.descEn : p.descSw}
                </p>

                {/* Micro skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {(lang === "en" ? p.skills : p.skillsSw).map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(255, 255, 255, 0.85)",
                        border: "1px solid #E2E8F0",
                        padding: "3px 8px",
                        borderRadius: "8px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#334155",
                      }}
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid rgba(226, 232, 240, 0.7)" }}>
                  <button
                    onClick={() => onSelectProgramme(p.titleEn)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "12px",
                      background: "#FFFFFF",
                      border: `1.5px solid ${p.accentColor}`,
                      color: p.accentColor,
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = p.accentColor;
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.color = p.accentColor;
                    }}
                  >
                    <span>{lang === "en" ? "Enroll in Programme" : "Jiandikishe Hapa"}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
