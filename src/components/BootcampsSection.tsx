"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Users,
  Trophy,
  Cpu,
} from "lucide-react";

interface BootcampsSectionProps {
  onOpenBooking: (bootcampTitle?: string) => void;
  lang: "en" | "sw";
}

export default function BootcampsSection({ onOpenBooking, lang }: BootcampsSectionProps) {
  const [activeTab, setActiveTab] = useState<"weekend" | "holiday" | "home">("weekend");

  const bootcamps = [
    {
      id: "weekend",
      tabLabelEn: "Saturday STEAM Club",
      tabLabelSw: "Klabu ya Jumamosi",
      tagEn: "Ongoing Every Saturday",
      tagSw: "Kila Jumamosi ya Wiki",
      tagColor: "#FF6600",
      tagBg: "#FFF3EB",
      titleEn: "Saturday Practical STEAM Club",
      titleSw: "Klabu ya STEAM ya Jumamosi (Roboti & Saketi)",
      descEn:
        "Exciting 4-hour hands-on sessions every Saturday where kids assemble smart robots, solder-free electronic circuits, and program interactive games.",
      descSw:
        "Mafunzo ya vitendo ya saa 4 kila Jumamosi ambapo watoto wanaunda roboti, mizunguko salama ya umeme bila kulehemu, na kutengeneza michezo ya kompyuta.",
      timeEn: "Every Saturday • 9:00 AM – 1:00 PM",
      timeSw: "Kila Jumamosi • Saa 3:00 Asubuhi – 7:00 Mchana",
      locationEn: "SPARKS Hub, Opposite DIT Morogoro Road",
      locationSw: "Kituo cha SPARKS, Mkabili wa DIT Barabara ya Morogoro",
      ageEn: "Ages 4 - 17 (Grouped by age)",
      ageSw: "Miaka 4 - 17 (Wakigawanywa kwa rika)",
      image: "/images/gallery/sparkshub_photo_017.jpg",
      pointsEn: [
        "Every child works with their own dedicated robotics kit",
        "Build obstacle-avoiding cars, smart traffic lights & buzzers",
        "Scratch block programming and Python logic",
        "Weekly project showcase and certificate badges",
      ],
      pointsSw: [
        "Kila mtoto anafanya kazi na seti yake binafsi ya roboti",
        "Kuunda magari yanayokwepa vizuizi na taa za barabarani",
        "Coding ya Scratch na mantiki ya Python",
        "Maonyesho ya miradi kila wiki na beji za ushindi",
      ],
      priceEn: "Flexible per-session or monthly package",
      priceSw: "Malipo kwa kipindi au mwezi mzima",
    },
    {
      id: "holiday",
      tabLabelEn: "Holiday STEAM Bootcamps",
      tabLabelSw: "Kambi za Likizo za STEAM",
      tagEn: "School Breaks & Vacations",
      tagSw: "Wakati wa Likizo za Shule",
      tagColor: "#006CB7",
      tagBg: "#EBF4FC",
      titleEn: "Intensive 2-Week Holiday Innovation Bootcamp",
      titleSw: "Kambi Maalumu ya Likizo ya Wiki 2 ya Ubunifu",
      descEn:
        "An immersive holiday acceleration camp covering the entire spectrum: 3D printing design, advanced robotics with sensors, microcontrollers, and creative AI.",
      descSw:
        "Kambi ya kusisimua ya likizo inayofunika uchapishaji wa 3D, roboti zenye vitambuzi, bodi za microcontrollers na zana bunifu za AI.",
      timeEn: "Monday to Friday • 9:00 AM – 1:30 PM",
      timeSw: "Jumatatu hadi Ijumaa • Saa 3:00 Asubuhi – 7:30 Mchana",
      locationEn: "SPARKS Hub DIT & Selected Partner Venues",
      locationSw: "Kituoni DIT & Kumbi za Shule Washirika",
      ageEn: "Ages 5 - 17",
      ageSw: "Miaka 5 - 17",
      image: "/images/gallery/sparkshub_photo_016.jpg",
      pointsEn: [
        "10 intensive days of hands-on STEM challenges",
        "Design and 3D print real prototypes to take home",
        "Team hackathon and graduation demonstration for parents",
        "Official STEAMORA Certificate of Innovation",
      ],
      pointsSw: [
        "Siku 10 za changamoto halisi za kiuhasibu na sayansi",
        "Kubuni na kuchapisha vifaa halisi vya 3D kurudi navyo nyumbani",
        "Shindano la ubunifu na maonyesho mbele ya wazazi",
        "Cheti Rasmi cha Ubunifu kutoka STEAMORA",
      ],
      priceEn: "Special holiday package with all kits included",
      priceSw: "Kifurushi maalum cha likizo kikiwa na vifaa vyote",
    },
    {
      id: "home",
      tabLabelEn: "Mobile Lab In-Home Camps",
      tabLabelSw: "Kambi ya Nyumbani (Mobile Lab)",
      tagEn: "Private & Estate Groups",
      tagSw: "Vikundi vya Mtaa na Nyumbani",
      tagColor: "#00A859",
      tagBg: "#E9F8F1",
      titleEn: "Custom STEAM Camp At Your Home or Estate",
      titleSw: "Kambi Binafsi ya STEAM Nyumbani au Mtaani Kwako",
      descEn:
        "Gather 3 to 8 neighborhood friends or family members, and our mobile STEAM van arrives with all laptops, kits, and educators at your chosen doorstep.",
      descSw:
        "Kusanya watoto 3 hadi 8 wa familia au majirani, na maabara yetu ya Mobile STEAM inafika moja kwa moja nyumbani kwako na vifaa vyote na wakufunzi.",
      timeEn: "Flexible timings tailored to your calendar",
      timeSw: "Muda unaopangwa kulingana na ratiba yako",
      locationEn: "Your Residence / Private Compound",
      locationSw: "Nyumbani Kwako / Kwenye Eneo Lako",
      ageEn: "Ages 4 - 17",
      ageSw: "Miaka 4 - 17",
      image: "/images/gallery/sparkshub_photo_025.jpg",
      pointsEn: [
        "Maximum convenience: No traffic or drop-off hassles",
        "Personalised curriculum matching kids' speed and interests",
        "Safe, familiar home environment with full lab gear",
        "Perfect for siblings, friends, and homeschoolers",
      ],
      pointsSw: [
        "Urahisi kamili: Hakuna msongamano wa foleni za asubuhi",
        "Mtaala unaorekebishwa kulingana na uwezo wa mtoto",
        "Mazingira salama na rafiki ya nyumbani",
        "Inafaa sana kwa watoto wa familia moja au marafiki wa mtaa",
      ],
      priceEn: "Group rate per child",
      priceSw: "Gharama nafuu ya kikundi kwa kila mtoto",
    },
  ];

  const currentBootcamp = bootcamps.find((b) => b.id === activeTab) || bootcamps[0];

  return (
    <section
      id="bootcamps"
      style={{
        paddingTop: "clamp(48px, 8vw, 84px)",
        paddingBottom: "clamp(48px, 8vw, 84px)",
        background: "#F8FAFC",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px auto" }}>
          <div
            className="lego-pill lego-pill-yellow"
            style={{ marginBottom: "12px", display: "inline-flex" }}
          >
            <Flame size={16} />
            <span>{lang === "en" ? "Practical Intensive Learning" : "Kambi na Mafunzo ya Vitendo"}</span>
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
                SPARKS 360° <span style={{ color: "#FF6600" }}>Bootcamps & Weekend Clubs</span>
              </>
            ) : (
              <>
                Kambi za <span style={{ color: "#FF6600" }}>Bootcamps na Klabu za Wikendi</span>
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
              ? "Transform your child's weekends and holidays into active innovation, curiosity, and hands-on invention instead of passive screen time."
              : "Badilisha wikendi na likizo za watoto wako ziwe muda wa uvumbuzi, roboti na majaribio ya vitendo badala ya kutumia muda mwingi mbele ya simu na televisheni."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "36px",
            flexWrap: "wrap",
          }}
        >
          {bootcamps.map((b) => {
            const isSelected = b.id === activeTab;
            return (
              <button
                key={b.id}
                onClick={() => setActiveTab(b.id as any)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  border: isSelected ? "2px solid #FF6600" : "2px solid #E2E8F0",
                  background: isSelected ? "#FF6600" : "#FFFFFF",
                  color: isSelected ? "#FFFFFF" : "#475569",
                  boxShadow: isSelected
                    ? "0 4px 0 #D45400, 0 8px 16px rgba(255, 102, 0, 0.2)"
                    : "0 2px 6px rgba(15, 23, 42, 0.04)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {lang === "en" ? b.tabLabelEn : b.tabLabelSw}
              </button>
            );
          })}
        </div>

        {/* Main Bootcamp Card Showcase */}
        <div
          className="lego-card"
          style={{
            padding: "clamp(24px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* Left: Info & Checklist */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "9999px",
                background: currentBootcamp.tagBg,
                color: currentBootcamp.tagColor,
                fontSize: "0.85rem",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              <Sparkles size={14} />
              <span>{lang === "en" ? currentBootcamp.tagEn : currentBootcamp.tagSw}</span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                marginBottom: "14px",
              }}
            >
              {lang === "en" ? currentBootcamp.titleEn : currentBootcamp.titleSw}
            </h3>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              {lang === "en" ? currentBootcamp.descEn : currentBootcamp.descSw}
            </p>

            {/* Quick Details Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F1F5F9",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  fontSize: "0.88rem",
                  color: "#0F172A",
                  fontWeight: 600,
                }}
              >
                <Clock size={18} color="#FF6600" />
                <span>{lang === "en" ? currentBootcamp.timeEn : currentBootcamp.timeSw}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F1F5F9",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  fontSize: "0.88rem",
                  color: "#0F172A",
                  fontWeight: 600,
                }}
              >
                <MapPin size={18} color="#006CB7" />
                <span>{lang === "en" ? currentBootcamp.locationEn : currentBootcamp.locationSw}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F1F5F9",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  fontSize: "0.88rem",
                  color: "#0F172A",
                  fontWeight: 600,
                }}
              >
                <Users size={18} color="#00A859" />
                <span>{lang === "en" ? currentBootcamp.ageEn : currentBootcamp.ageSw}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F1F5F9",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  fontSize: "0.88rem",
                  color: "#0F172A",
                  fontWeight: 600,
                }}
              >
                <Trophy size={18} color="#D97706" />
                <span>{lang === "en" ? currentBootcamp.priceEn : currentBootcamp.priceSw}</span>
              </div>
            </div>

            {/* Checkpoints */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: "12px",
                }}
              >
                {lang === "en" ? "What Your Child Will Achieve:" : "Nini Mtoto Wako Atafanya:"}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {(lang === "en" ? currentBootcamp.pointsEn : currentBootcamp.pointsSw).map(
                  (pt, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.92rem",
                        color: "#334155",
                      }}
                    >
                      <CheckCircle2 size={18} color="#00A859" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{pt}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <button
                onClick={() =>
                  onOpenBooking(lang === "en" ? currentBootcamp.titleEn : currentBootcamp.titleSw)
                }
                className="lego-btn-orange"
              >
                <span>{lang === "en" ? "Register for this Bootcamp" : "Sajili Mtoto Kwenye Hii Kambi"}</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`https://wa.me/255749998820?text=Habari%20SparksHub%2C%20ninataka%20kujiunga%20na%20${encodeURIComponent(
                  currentBootcamp.titleSw
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lego-btn-outline"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right: Real Activity Photo Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
                position: "relative",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src={currentBootcamp.image}
                alt={currentBootcamp.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: "cover" }}
              />

              {/* Overlay Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  background: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(8px)",
                  padding: "12px 16px",
                  borderRadius: "16px",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "#FF6600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Cpu size={20} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                      SPARKS 360° Real Session
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#CBD5E1" }}>
                      Hands-on practical STEAM in action
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "#00A859",
                    color: "#FFFFFF",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                  }}
                >
                  100% Practical
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

