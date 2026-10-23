"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Shield,
  HeartHandshake,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  RobotVector,
  CircuitVector,
  CodingVector,
  ScienceFlaskVector,
  FoodMealVector,
  CelebrationVector,
  CommunityKidsVector,
  WhatsAppKidVector,
  PhoneCallKidVector,
} from "./KidVectors";

interface WeekendFlyerBannerProps {
  onOpenBooking: () => void;
  onOpenFlyerModal: () => void;
  lang: "en" | "sw";
}

export default function WeekendFlyerBanner({
  onOpenBooking,
  onOpenFlyerModal,
  lang,
}: WeekendFlyerBannerProps) {
  return (
    <section
      id="workshop"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF8F3 50%, #F0FDF4 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Banner Card Container */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "28px",
            boxShadow: "0 20px 60px -15px rgba(255, 102, 0, 0.15), 0 0 0 1px rgba(255, 102, 0, 0.15)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top Decorative Header Ribbon */}
          <div
            style={{
              background: "linear-gradient(90deg, #FF6600 0%, #F59E0B 50%, #059669 100%)",
              color: "#FFFFFF",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CelebrationVector size={28} animate={true} />
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                  {lang === "en" ? "PRACTICAL STEAM WEEKEND WORKSHOPS" : "WARSHA ZA VITENDO ZA STEAM ZA WIKENDI"}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.9)", margin: 0 }}>
                  {lang === "en"
                    ? "Interactive Robotics, Electronics, AI & Science • Every Saturday"
                    : "Roboti, Saketi za Umeme, AI & Sayansi kwa Vitendo • Kila Jumamosi"}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.2)",
                padding: "6px 16px",
                borderRadius: "20px",
                fontWeight: 700,
                fontSize: "0.85rem",
              }}
            >
              <span>{lang === "en" ? "LEARN • PLAY • GROW • THRIVE" : "JIFUNZE • CHEZA • KUA • SHINDA"}</span>
            </div>
          </div>

          <div
            style={{
              padding: "clamp(24px, 4vw, 48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  color: "#FF6600",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                }}
              >
                {lang === "en" ? "Interactive Hands-on STEAM Experience" : "Elimu Halisi ya Vitendo"}
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                {lang === "en" ? (
                  <>
                    What Are You Doing This Weekend?{" "}
                    <span style={{ color: "#FF6600" }}>JOIN US!</span>
                  </>
                ) : (
                  <>
                    Utafanya Nini Wikendi Hii?{" "}
                    <span style={{ color: "#FF6600" }}>JIUNGE NASI!</span>
                  </>
                )}
              </h2>

              <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "28px" }}>
                {lang === "en"
                  ? "A fun and enriching weekend filled with discovery, building, and lifelong innovation skills! Kids assemble real working robots, explore circuits, code smart games, and perform safe exciting scientific experiments."
                  : "Wikendi ya kufurahisha na yenye tija iliyojaa ugunduzi na stadi za kisasa! Watoto wanatengeneza roboti halisi, wanajifunza saketi za umeme, wanatengeneza michezo ya video na kufanya majaribio ya kusisimua ya sayansi."}
              </p>

              {/* Schedule Timeline (7 Core STEAM Disciplines Only) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                {/* 10 AM STEM Robotics & Circuits */}
                <div
                  className="kid-card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    background: "#F8FAFC",
                    padding: "16px",
                    borderRadius: "16px",
                    borderLeft: "5px solid #0070F3",
                  }}
                >
                  <div
                    className="kid-icon-box"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(0, 112, 243, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <RobotVector size={30} animate={true} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 800, color: "#0F172A", fontSize: "1rem" }}>
                        {lang === "en" ? "Robotics & Electric Circuits Lab" : "Warsha ya Roboti & Saketi za Umeme"}
                      </span>
                      <span
                        style={{
                          background: "#E0F2FE",
                          color: "#0284C7",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "10px",
                        }}
                      >
                        10:00 AM – 12:00 PM
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#64748B", margin: "4px 0 0" }}>
                      {lang === "en"
                        ? "Hands-on assembly of motorized robot cars, breadboard circuits, ultrasonic sensors & Arduino."
                        : "Kutengeneza magari ya roboti, saketi za umeme, vitambuzi na programu za Arduino kwa mikono yao."}
                    </p>
                  </div>
                </div>

                {/* 2 PM Coding, 3D Design & AI Tools */}
                <div
                  className="kid-card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    background: "#F8FAFC",
                    padding: "16px",
                    borderRadius: "16px",
                    borderLeft: "5px solid #FF6600",
                  }}
                >
                  <div
                    className="kid-icon-box"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(255, 102, 0, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CodingVector size={30} animate={true} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 800, color: "#0F172A", fontSize: "1rem" }}>
                        {lang === "en" ? "Coding, 3D Design & AI for Kids" : "Coding, Muundo wa 3D & AI kwa Watoto"}
                      </span>
                      <span
                        style={{
                          background: "#FFE4D6",
                          color: "#FF6600",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "10px",
                        }}
                      >
                        2:00 PM – 4:00 PM
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#64748B", margin: "4px 0 0" }}>
                      {lang === "en"
                        ? "Game design logic, creative AI prompts, 3D printer prototyping & digital creations."
                        : "Kutengeneza michezo ya video, zana za AI za watoto, uchapishaji wa 3D na miradi ya kiteknolojia."}
                    </p>
                  </div>
                </div>

                {/* Scientific Experiments & Refreshments */}
                <div
                  className="kid-card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    background: "#F8FAFC",
                    padding: "16px",
                    borderRadius: "16px",
                    borderLeft: "5px solid #10B981",
                  }}
                >
                  <div
                    className="kid-icon-box"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ScienceFlaskVector size={30} animate={true} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 800, color: "#0F172A", fontSize: "1rem" }}>
                        {lang === "en" ? "Science Lab Discovery & Lunch" : "Majaribio ya Sayansi & Chakula Cha Mchana"}
                      </span>
                      <span
                        style={{
                          background: "#DCFCE7",
                          color: "#15803D",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "10px",
                        }}
                      >
                        {lang === "en" ? "Nutritious Meals Included" : "Chakula na Vinywaji Vimejumuishwa"}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#64748B", margin: "4px 0 0" }}>
                      {lang === "en"
                        ? "Safe chemistry experiments, physics demonstrations, plus delicious healthy meals & refreshments provided."
                        : "Majaribio salama ya sayansi na maabara, pamoja na chakula kitamu na vinywaji safi kwa kila mwanafunzi."}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Pillars */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                  paddingTop: "16px",
                  borderTop: "1px solid #E2E8F0",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#FF6600", fontWeight: 800, fontSize: "0.85rem" }}>
                    {lang === "en" ? "All Welcome" : "Wote Wanakaribishwa"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Ages 3 - 17 Years" : "Miaka 3 - 17"}
                  </div>
                </div>
                <div style={{ textAlign: "center", borderLeft: "1px solid #E2E8F0", borderRight: "1px solid #E2E8F0" }}>
                  <div style={{ color: "#0070F3", fontWeight: 800, fontSize: "0.85rem" }}>
                    {lang === "en" ? "Safe & Certified" : "Mazingira Salama"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Trained STEAM Mentors" : "Wakufunzi Walioidhinishwa"}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#10B981", fontWeight: 800, fontSize: "0.85rem" }}>
                    {lang === "en" ? "We Come To You" : "Tunafika Popote"}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    {lang === "en" ? "Mobile STEAM Lab" : "Maabara Inayotembea"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Direct Call to Action / Registration (+255 749 998 820) */}
            <div
              style={{
                background: "radial-gradient(ellipse at 50% 30%, #1E293B 0%, #0F172A 100%)",
                borderRadius: "24px",
                padding: "36px 32px",
                color: "#FFFFFF",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* STEAMORA Label */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    color: "#FF8533",
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  STEAMORA COMPANY LIMITED
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#FFFFFF", marginTop: "10px", marginBottom: "4px" }}>
                  {lang === "en" ? "Book or Register Today" : "Wasiliana / Jiandikishe Sasa"}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#94A3B8", margin: 0 }}>
                  {lang === "en"
                    ? "Connect directly with our team to enroll your child or request a mobile lab session."
                    : "Wasiliana moja kwa moja na timu yetu kujiandikisha au kuagiza maabara inayotembea."}
                </p>
              </div>

              {/* Official Phone Number Highlight Box */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "18px",
                  padding: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>
                  {lang === "en" ? "Official Registration & Info Hotline" : "Nambari Rasmi ya Usajili & Taarifa"}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <PhoneCallKidVector size={36} animate={true} />
                  <a
                    href="tel:+255749998820"
                    style={{
                      fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                      fontWeight: 900,
                      color: "#FF8533",
                      letterSpacing: "0.5px",
                    }}
                  >
                    +255 749 998 820
                  </a>
                </div>

                <div style={{ fontSize: "0.78rem", color: "#CBD5E1" }}>
                  {lang === "en"
                    ? "Available 24/7 via Call & WhatsApp"
                    : "Inapatikana kwa Kupiga Simu & WhatsApp masaa yote"}
                </div>
              </div>

              {/* Center / Location note */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "14px",
                  borderRadius: "14px",
                }}
              >
                <MapPin size={22} color="#10B981" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#FFFFFF" }}>
                    {lang === "en" ? "HEADQUARTERS & WORKSHOP HUB:" : "MAKAO MAKUU & WARSHA ZA STEAM:"}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#CBD5E1" }}>
                    {lang === "en"
                      ? "Morogoro Rd & Bibi Titi Mohammed, Opp. DIT, Dar es Salaam"
                      : "Mkabala na DIT, Barabara ya Morogoro & Bibi Titi, Dar es Salaam"}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#FF8533", marginTop: "2px", fontWeight: 700 }}>
                    {lang === "en"
                      ? "🚐 Mobile STEAM Lab: We come to you across Dar es Salaam & Tanzania!"
                      : "🚐 Maabara Inayotembea: Tunafika popote Dar es Salaam & Tanzania!"}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="https://wa.me/255749998820?text=Habari%20Sparks%20360%20Hub,%20nahitaji%20kujiandikisha%20kwa%20ajili%20ya%20mafunzo%20ya%20STEAM%20kwa%20mtoto%20wangu!"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontSize: "1rem",
                    fontWeight: 800,
                    boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <WhatsAppKidVector size={24} />
                  <span>{lang === "en" ? "Chat on WhatsApp (+255 749 998 820)" : "Wasiliana WhatsApp (+255 749 998 820)"}</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    boxShadow: "0 8px 24px rgba(255, 102, 0, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <span>{lang === "en" ? "Fill Student Booking Form" : "Jaza Fomu ya Usajili"}</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={onOpenFlyerModal}
                  style={{
                    width: "100%",
                    padding: "11px",
                    borderRadius: "14px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#E2E8F0",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  {lang === "en" ? "View STEAM Lab Photos" : "Tazama Picha za Maabara"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
