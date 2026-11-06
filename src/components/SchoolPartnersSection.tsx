"use client";

import React from "react";
import { School, Award, CheckCircle2, ArrowRight, Sparkles, Building2, Users } from "lucide-react";

interface SchoolPartnersProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

interface SchoolItem {
  id: number;
  name: string;
  categoryEn: string;
  categorySw: string;
  badgeColor: string;
  badgeBg: string;
  curriculum: string;
  highlightEn: string;
  highlightSw: string;
  tag: string;
}

export default function SchoolPartnersSection({ onOpenBooking, lang }: SchoolPartnersProps) {
  const schools: SchoolItem[] = [
    {
      id: 1,
      name: "International School of Tanganyika (IST)",
      categoryEn: "International Partner",
      categorySw: "Mshirika wa Kimataifa",
      badgeColor: "#006CB7",
      badgeBg: "#EBF4FC",
      curriculum: "IB World School",
      highlightEn: "Robotics & Maker workshops for young innovators",
      highlightSw: "Mafunzo ya Roboti na uundaji kwa watoto wabunifu",
      tag: "IST Dar",
    },
    {
      id: 2,
      name: "The Apton School",
      categoryEn: "Primary & Early Years",
      categorySw: "Msingi & Maandalizi",
      badgeColor: "#FF6600",
      badgeBg: "#FFF3EB",
      curriculum: "British Curriculum",
      highlightEn: "Hands-on electric circuits & coding fundamentals",
      highlightSw: "Mizunguko ya umeme ya vitendo na misingi ya coding",
      tag: "Apton",
    },
    {
      id: 3,
      name: "Dar es Salaam International Academy (DIA)",
      categoryEn: "International Academy",
      categorySw: "Akademia ya Kimataifa",
      badgeColor: "#00A859",
      badgeBg: "#E9F8F1",
      curriculum: "IB Curriculum",
      highlightEn: "Sensors, smart logic & STEM problem solving",
      highlightSw: "Vitambuzi, mantiki ya kiteknolojia na utatuzi wa changamoto",
      tag: "DIA",
    },
    {
      id: 4,
      name: "Indian School Dar es Salaam",
      categoryEn: "Academic Institution",
      categorySw: "Taasisi ya Kielimu",
      badgeColor: "#B45309",
      badgeBg: "#FFFBE6",
      curriculum: "CBSE Curriculum",
      highlightEn: "Robotics chassis building & science exploration",
      highlightSw: "Uundaji wa bodi za roboti na ugunduzi wa kisayansi",
      tag: "Indian School",
    },
    {
      id: 5,
      name: "Kidz Kollege",
      categoryEn: "Early Childhood & Junior STEAM",
      categorySw: "Maandalizi & STEAM ya Awali",
      badgeColor: "#7C3AED",
      badgeBg: "#F5F3FF",
      curriculum: "Early Years Foundation",
      highlightEn: "Playful robotics, LEGO mechanics & tactile circuits",
      highlightSw: "Roboti za mchezo, mekanika ya LEGO na saketi salama",
      tag: "Kidz Kollege",
    },
    {
      id: 6,
      name: "Tumarich Community",
      categoryEn: "Community Learning Hub",
      categorySw: "Kituo cha Jamii cha Kujifunzia",
      badgeColor: "#EA580C",
      badgeBg: "#FFF7ED",
      curriculum: "Community STEAM",
      highlightEn: "Inclusive weekend STEAM workshops & digital literacy",
      highlightSw: "Warsha za STEAM za wikendi na ujuzi wa kiteknolojia",
      tag: "Tumarich",
    },
    {
      id: 7,
      name: "Guiding Minds Academy",
      categoryEn: "Progressive School",
      categorySw: "Shule ya Kisasa ya Ubunifu",
      badgeColor: "#0284C7",
      badgeBg: "#F0F9FF",
      curriculum: "Holistic Education",
      highlightEn: "Critical thinking, 3D printing & invention projects",
      highlightSw: "Fikra tunduizi, uchapishaji wa 3D na miradi ya uvumbuzi",
      tag: "Guiding Minds",
    },
    {
      id: 8,
      name: "ASK Community",
      categoryEn: "Youth & Kids Network",
      categorySw: "Mtandao wa Vijana na Watoto",
      badgeColor: "#059669",
      badgeBg: "#ECFDF5",
      curriculum: "Experiential Learning",
      highlightEn: "Creative tech camps & hands-on group experiments",
      highlightSw: "Kambi za teknolojia na majaribio ya pamoja ya sayansi",
      tag: "ASK Network",
    },
    {
      id: 9,
      name: "Bright Side Learning Centre",
      categoryEn: "Specialised Learning Hub",
      categorySw: "Kituo Maalumu cha Maarifa",
      badgeColor: "#D97706",
      badgeBg: "#FEF3C7",
      curriculum: "Individualised STEAM",
      highlightEn: "Sensory circuits, tailored coding & confidence building",
      highlightSw: "Mizunguko ya hisia, mafunzo ya kompyuta na kujiamini",
      tag: "Bright Side",
    },
  ];

  return (
    <section
      id="partners"
      style={{
        paddingTop: "clamp(48px, 8vw, 84px)",
        paddingBottom: "clamp(48px, 8vw, 84px)",
        background: "#FFFFFF",
        position: "relative",
        borderTop: "1.5px solid #F1F5F9",
        borderBottom: "1.5px solid #F1F5F9",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px auto" }}>
          <div
            className="lego-pill lego-pill-blue"
            style={{ marginBottom: "12px", display: "inline-flex" }}
          >
            <School size={16} />
            <span>
              {lang === "en" ? "Trusted School Network" : "Mtandao wa Shule Zinazotuamini"}
            </span>
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
                Proudly Partnering with Leading{" "}
                <span style={{ color: "#006CB7" }}>Schools & Communities</span>
              </>
            ) : (
              <>
                Tunajivunia Kushirikiana na{" "}
                <span style={{ color: "#006CB7" }}>Shule na Taasisi Bora</span>
              </>
            )}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)",
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            {lang === "en"
              ? "Through SPARKS 360° HUB and our Mobile STEAM Lab, students from top schools in Dar es Salaam experience joyful hands-on robotics, electronics, and coding directly in their classrooms and holiday bootcamps."
              : "Kupitia SPARKS 360° HUB na Maabara yetu ya Mobile STEAM Lab, wanafunzi kutoka shule zinazoheshimika Dar es Salaam wanajifunza roboti, umeme na coding kwa vitendo madarasani na kwenye kambi zetu za likizo."}
          </p>
        </div>

        {/* 9 Partner Schools Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {schools.map((school) => (
            <div
              key={school.id}
              className="lego-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                borderTop: `4px solid ${school.badgeColor}`,
              }}
            >
              <div>
                {/* Header row with curriculum pill & school index */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: school.badgeBg,
                      color: school.badgeColor,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    <Building2 size={13} />
                    {school.curriculum}
                  </span>

                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: "#94A3B8",
                      background: "#F8FAFC",
                      padding: "2px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    #{school.id}
                  </span>
                </div>

                {/* School Name */}
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "8px",
                    lineHeight: 1.35,
                  }}
                >
                  {school.name}
                </h3>

                {/* Focus / Highlight */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#64748B",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                  }}
                >
                  {lang === "en" ? school.highlightEn : school.highlightSw}
                </p>
              </div>

              {/* Status footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "12px",
                  borderTop: "1px dashed #E2E8F0",
                  fontSize: "0.82rem",
                  color: "#059669",
                  fontWeight: 700,
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <CheckCircle2 size={14} color="#059669" />
                  {lang === "en" ? "Active STEAM Partner" : "Mshirika Hai wa STEAM"}
                </span>

                <span style={{ color: "#64748B", fontWeight: 600 }}>
                  {lang === "en" ? school.categoryEn : school.categorySw}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* School Partnership CTA Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #006CB7 0%, #004C82 100%)",
            borderRadius: "24px",
            padding: "clamp(24px, 4vw, 36px)",
            color: "#FFFFFF",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            boxShadow: "0 14px 30px rgba(0, 108, 183, 0.25)",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.15)",
                padding: "4px 12px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              <Sparkles size={15} color="#FFC20E" />
              <span>{lang === "en" ? "For School Administrators & Teachers" : "Kwa Walimu Wakuu na Wasimamizi wa Shule"}</span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "8px",
                lineHeight: 1.25,
              }}
            >
              {lang === "en"
                ? "Want SPARKS 360° HUB at Your School or Community?"
                : "Ungependa SPARKS 360° HUB Ifike Shuleni au Kwenye Jamii Yako?"}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: 1.55,
              }}
            >
              {lang === "en"
                ? "We bring all robotics kits, electronic boards, 3D printers, and certified STEAM instructors directly to your school for after-school clubs, curricular STEAM days, and holiday camps."
                : "Tunaleta vifaa vyote vya roboti, bodi za umeme, printa za 3D na wakufunzi walioidhinishwa shuleni kwako kwa ajili ya klabu za jioni, siku maalum za sayansi, na kambi za likizo."}
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <button
              onClick={onOpenBooking}
              className="lego-btn-yellow"
              style={{ fontSize: "0.95rem" }}
            >
              <span>{lang === "en" ? "Book School STEAM Lab" : "Omba Mobile Lab Shuleni"}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="https://wa.me/255749998820?text=Habari%20SparksHub%2C%20ninapenda%20kufahamu%20zaidi%20kuhusu%20ushirikiano%20wa%20shule%20(School%20Partnership)"
              target="_blank"
              rel="noopener noreferrer"
              className="lego-btn-outline"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "none",
                fontSize: "0.95rem",
              }}
            >
              <span>WhatsApp Admin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
