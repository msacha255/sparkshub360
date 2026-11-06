"use client";

import React from "react";
import Image from "next/image";
import { Award, CheckCircle2, ArrowRight, Sparkles, Building2 } from "lucide-react";

interface SchoolPartnersProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

interface PartnerInstitution {
  id: number;
  name: string;
  tagEn: string;
  tagSw: string;
  categoryEn: string;
  categorySw: string;
  logo: string;
  featured?: boolean;
}

export default function SchoolPartnersSection({ onOpenBooking, lang }: SchoolPartnersProps) {
  const partners: PartnerInstitution[] = [
    {
      id: 1,
      name: "DIT Design Studio",
      tagEn: "Innovation & Prototyping Hub",
      tagSw: "Kituo cha Uvumbuzi na Prototyping",
      categoryEn: "Tech & Maker Partner",
      categorySw: "Mshirika wa Uvumbuzi",
      logo: "/images/schools/dit_design_studio_clean.png",
      featured: true,
    },
    {
      id: 2,
      name: "Swahili Dmakers",
      tagEn: "3D Printing & Digital Fabrication",
      tagSw: "Printa za 3D & Utengenezaji wa Kidijitali",
      categoryEn: "Fabrication Partner",
      categorySw: "Mshirika wa Utengenezaji",
      logo: "/images/schools/swahili_dmakers_clean.png",
      featured: true,
    },
    {
      id: 3,
      name: "Honic Learn TZ",
      tagEn: "Practical STEM Kits & Tools",
      tagSw: "Seti na Vifaa vya Sayansi & Umeme",
      categoryEn: "STEM Kits Partner",
      categorySw: "Mshirika wa Vifaa vya STEM",
      logo: "/images/schools/honic_learn_clean.png",
      featured: true,
    },
    {
      id: 4,
      name: "International School of Tanganyika (IST)",
      tagEn: "IB World School",
      tagSw: "Shule ya Kimataifa ya IB",
      categoryEn: "School Partner",
      categorySw: "Shule Mshirika",
      logo: "/images/schools/ist.png",
    },
    {
      id: 5,
      name: "The Apton School",
      tagEn: "British Curriculum",
      tagSw: "Mtaala wa Uingereza",
      categoryEn: "School Partner",
      categorySw: "Shule Mshirika",
      logo: "/images/schools/apton.png",
    },
    {
      id: 6,
      name: "Dar es Salaam International Academy (DIA)",
      tagEn: "IB Continuum School",
      tagSw: "Akademia ya Kimataifa ya IB",
      categoryEn: "School Partner",
      categorySw: "Shule Mshirika",
      logo: "/images/schools/dia.svg",
    },
    {
      id: 7,
      name: "Indian School Dar es Salaam",
      tagEn: "CBSE Curriculum",
      tagSw: "Mtaala wa CBSE",
      categoryEn: "School Partner",
      categorySw: "Shule Mshirika",
      logo: "/images/schools/indian_school.png",
    },
    {
      id: 8,
      name: "Kidz Kollege",
      tagEn: "Early Childhood Foundation",
      tagSw: "Maandalizi ya Awali",
      categoryEn: "School Partner",
      categorySw: "Shule Mshirika",
      logo: "/images/schools/kidzkollege.png",
    },
    {
      id: 9,
      name: "Tumarich Community",
      tagEn: "Community Learning Hub",
      tagSw: "Kituo cha Jamii cha Kujifunzia",
      categoryEn: "Community Partner",
      categorySw: "Jamii Mshirika",
      logo: "/images/schools/tumarich.png",
    },
    {
      id: 10,
      name: "ASK Community",
      tagEn: "Youth & Kids Network",
      tagSw: "Mtandao wa Watoto na Vijana",
      categoryEn: "Community Partner",
      categorySw: "Jamii Mshirika",
      logo: "/images/schools/ask.png",
    },
    {
      id: 11,
      name: "Bright Side Learning Centre",
      tagEn: "Specialised Learning Hub",
      tagSw: "Kituo Maalumu cha Maarifa",
      categoryEn: "Learning Hub",
      categorySw: "Kituo cha Kujifunzia",
      logo: "/images/schools/brightside.png",
    },
  ];

  return (
    <section
      id="partners"
      style={{
        paddingTop: "clamp(56px, 8vw, 92px)",
        paddingBottom: "clamp(56px, 8vw, 92px)",
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)",
        position: "relative",
        borderTop: "2px solid #E2E8F0",
        borderBottom: "2px solid #E2E8F0",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px auto" }}>
          {/* Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFBE6",
              border: "1.5px solid #FDE68A",
              color: "#B45309",
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            <Award size={16} color="#D97706" />
            <span>
              {lang === "en" ? "Trusted Partners & School Network" : "Mtandao wa Shule na Taasisi Washirika"}
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              fontWeight: 900,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            {lang === "en" ? (
              <>
                Proudly Partnering with Leading{" "}
                <span style={{ color: "#006CB7" }}>Schools & Technology Institutions</span>.
              </>
            ) : (
              <>
                Tunashirikiana kwa Fahari na{" "}
                <span style={{ color: "#006CB7" }}>Shule na Taasisi Maarufu</span>.
              </>
            )}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            {lang === "en"
              ? "Empowering young minds through verified collaborations with top international schools, maker studios, and innovation centers in Dar es Salaam."
              : "Kufundisha roboti, coding, printa za 3D na sayansi ya vitendo kwa ushirikiano na shule za kimataifa, studio za uvumbuzi na vituo maarufu Dar es Salaam."}
          </p>
        </div>

        {/* Clean, World-Class Verified Partner Grid (Elevated Logo Cards) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))",
            gap: "18px",
            marginBottom: "44px",
          }}
        >
          {partners.map((p) => (
            <div
              key={p.id}
              className="lego-card"
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "1.5px solid #E2E8F0",
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "#006CB7";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0, 108, 183, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 23, 42, 0.04)";
              }}
            >
              {/* Category / Curriculum Pill */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: p.featured ? "#006CB7" : "#64748B",
                    background: p.featured ? "#EFF6FF" : "#F8FAFC",
                    border: `1px solid ${p.featured ? "#BFDBFE" : "#E2E8F0"}`,
                    padding: "3px 8px",
                    borderRadius: "9999px",
                  }}
                >
                  {lang === "en" ? p.tagEn : p.tagSw}
                </span>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                    color: "#059669",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                  title={lang === "en" ? "Verified Partner" : "Mshirika Aliyethibitishwa"}
                >
                  <CheckCircle2 size={13} color="#059669" />
                </span>
              </div>

              {/* Logo Frame */}
              <div
                style={{
                  height: "72px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 12px",
                  marginBottom: "14px",
                }}
              >
                <Image
                  src={p.logo}
                  alt={`${p.name} Logo`}
                  width={160}
                  height={60}
                  style={{
                    objectFit: "contain",
                    maxHeight: "56px",
                    maxWidth: "160px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              {/* Partner Name & Subtitle */}
              <div style={{ width: "100%", borderTop: "1px dashed #F1F5F9", paddingTop: "12px" }}>
                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.3,
                    marginBottom: "4px",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {p.name}
                </h3>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#64748B",
                  }}
                >
                  {lang === "en" ? p.categoryEn : p.categorySw}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* School & Institution Partnership CTA Banner */}
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
              <span>
                {lang === "en"
                  ? "For School Administrators, Labs & Tech Hubs"
                  : "Kwa Viongozi wa Shule, Maabara na Vituo vya Teknolojia"}
              </span>
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
                ? "Want SPARKS 360° HUB at Your School or Institution?"
                : "Ungependa SPARKS 360° HUB Ifike Shuleni au Kwenye Kituo Chako?"}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: 1.55,
              }}
            >
              {lang === "en"
                ? "We bring all robotics kits, electronic boards, 3D printers, and certified STEAM instructors directly to your institution for curricular STEAM days, student clubs, and intensive bootcamps."
                : "Tunaleta vifaa vyote vya roboti, saketi za umeme, printa za 3D na wakufunzi walioidhinishwa moja kwa moja shuleni au kituoni kwako kwa ajili ya klabu za jioni, siku za uvumbuzi na kambi za likizo."}
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <button
              onClick={onOpenBooking}
              className="lego-btn-yellow"
              style={{ fontSize: "0.95rem" }}
            >
              <span>{lang === "en" ? "Book STEAM Partnership" : "Omba Ushirikiano wa STEAM"}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="https://wa.me/255749998820?text=Habari%20SparksHub%2C%20ninapenda%20kufahamu%20zaidi%20kuhusu%20ushirikiano%20wa%20shule%20na%20taasisi%20(Partnership)"
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
