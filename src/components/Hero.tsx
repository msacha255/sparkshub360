"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Zap,
  Code,
  Box,
  FlaskConical,
  Calendar,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenFlyerModal: () => void;
  lang: "en" | "sw";
}

interface HeroSlide {
  id: string;
  image: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  categoryEn: string;
  categorySw: string;
  titleEn: string;
  titleSw: string;
  descEn: string;
  descSw: string;
  badgeEn: string;
  badgeSw: string;
  badgeColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "robotics",
    image: "/images/robotics-kids.jpg",
    icon: Cpu,
    categoryEn: "Robotics & Mechanics",
    categorySw: "Roboti na Uhandisi",
    titleEn: "Building Smart Robots & Autonomous Cars",
    titleSw: "Kujenga Magari ya Roboti & Vitambuzi",
    descEn: "Students wire motors, assemble chassis, and test real sensors with hands-on robotics kits.",
    descSw: "Wanafunzi wanaunganisha motors, chasis za magari, na sensor za vitambuzi kupitia vifaa halisi.",
    badgeEn: "Robotics Kits",
    badgeSw: "Vifaa Vimetolewa",
    badgeColor: "#FF6600",
  },
  {
    id: "circuits",
    image: "/images/circuits-kids.jpg",
    icon: Zap,
    categoryEn: "Electronics & Circuits",
    categorySw: "Mizunguko ya Umeme Salama",
    titleEn: "Safe 5V/9V Breadboard Circuits & Solar",
    titleSw: "Mizunguko ya Umeme, LED & Nguvu ya Jua",
    descEn: "Safe breadboard wiring, push switches, LED indicators, buzzers, and solar power exploration.",
    descSw: "Kuweka waya salama kwenye breadboard, swichi, taa za LED na nguvu safi ya jua.",
    badgeEn: "100% Safe 5V/9V",
    badgeSw: "Salama Kabisa 5V",
    badgeColor: "#006CB7",
  },
  {
    id: "coding",
    image: "/images/ai-coding.jpg",
    icon: Code,
    categoryEn: "Coding & AI",
    categorySw: "Kujifunza Coding & AI",
    titleEn: "Scratch Programming & Computer Logic",
    titleSw: "Scratch Coding & Mantiki ya Kompyuta",
    descEn: "Interactive game development, animations, and foundational artificial intelligence concepts.",
    descSw: "Kubuni michezo ya video, hadithi za kidijitali, na kujifunza kanuni za akili bandia (AI).",
    badgeEn: "Beginner to Pro",
    badgeSw: "Kuanzia Msingi",
    badgeColor: "#7C3AED",
  },
  {
    id: "3d",
    image: "/images/3d-printing-kids.jpg",
    icon: Box,
    categoryEn: "3D Design & Printing",
    categorySw: "Uchapishaji wa 3D & Ubunifu",
    titleEn: "From 3D Computer Models to Physical Objects",
    titleSw: "Kubuni 3D & Kuchapisha Vitu Halisi",
    descEn: "Students design 3D models and watch them materialize layer-by-layer on real 3D printers.",
    descSw: "Watoto wanabuni maumbo kwenye kompyuta na kuyashuhudia yakichapishwa na mashine ya 3D.",
    badgeEn: "Real 3D Printers",
    badgeSw: "Mashine Halisi ya 3D",
    badgeColor: "#E11D48",
  },
  {
    id: "science",
    image: "/images/science-lab.jpg",
    icon: FlaskConical,
    categoryEn: "Practical Science Lab",
    categorySw: "Majaribio ya Sayansi",
    titleEn: "Hands-on Physics & Chemistry Experiments",
    titleSw: "Majaribio ya Sayansi, Fizikia & Ugunduzi",
    descEn: "Exciting physical experiments demonstrating natural forces, density, and chemical reactions.",
    descSw: "Majaribio ya kusisimua ya kuelewa kanuni za sayansi, nguvu za asili na kemia ya vitendo.",
    badgeEn: "Fun Discovery",
    badgeSw: "Ugunduzi wa Sayansi",
    badgeColor: "#059669",
  },
  {
    id: "bootcamp",
    image: "/images/bootcamp-banner.jpg",
    icon: Calendar,
    categoryEn: "Saturday Club & Holiday Camps",
    categorySw: "Klabu ya Jumamosi & Likizo",
    titleEn: "Weekly Sessions Opposite DIT Morogoro Rd",
    titleSw: "Madarasa ya Jumamosi Mkabala na DIT",
    descEn: "Every Saturday 9:30 AM – 1:00 PM for ages 3–17, plus intensive school holiday camps.",
    descSw: "Kila Jumamosi saa 3:30 asubuhi hadi 7:00 mchana kwa watoto miaka 3–17 na kambi za likizo.",
    badgeEn: "Ages 3 - 17",
    badgeSw: "Watoto Miaka 3 - 17",
    badgeColor: "#D97706",
  },
];

export default function Hero({ onOpenBooking, onOpenFlyerModal, lang }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const currentSlide = HERO_SLIDES[activeIndex];
  const CurrentIcon = currentSlide.icon;

  return (
    <section
      style={{
        paddingTop: "clamp(100px, 12vw, 136px)",
        paddingBottom: "clamp(48px, 7vw, 76px)",
        background: "#FFFFFF",
        borderBottom: "1px solid #F1F5F9",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "clamp(32px, 5vw, 60px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Heading, Value Prop & Simple CTAs */}
          <div>
            {/* Top Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                background: "#FFFBE6",
                border: "1.5px solid #FDE68A",
                color: "#B45309",
                fontSize: "0.86rem",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
                marginBottom: "18px",
              }}
            >
              <Sparkles size={16} color="#D97706" />
              <span>
                {lang === "en"
                  ? "SPARKS 360° HUB • STEAMORA CO. LTD"
                  : "SPARKS 360° HUB • STEAMORA CO. LTD"}
              </span>
            </div>

            {/* Main Headline in Fredoka */}
            <h1
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0F172A",
                lineHeight: 1.18,
                marginBottom: "18px",
              }}
            >
              {lang === "en" ? (
                <>
                  Inspiring Young Minds Through{" "}
                  <span style={{ color: "#FF6600" }}>Hands-on STEAM</span> Learning.
                </>
              ) : (
                <>
                  Kukuza Vipaji vya Watoto Kupitia Elimu ya Vitendo ya{" "}
                  <span style={{ color: "#FF6600" }}>STEAM na Roboti</span>.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.12rem)",
                color: "#475569",
                lineHeight: 1.65,
                marginBottom: "28px",
                maxWidth: "540px",
              }}
            >
              {lang === "en"
                ? "Delivering practical robotics, electric circuits, coding, AI, and 3D printing to homes, schools, and communities across Dar es Salaam. Every child builds, tests, and innovates."
                : "Kituo cha elimu ya vitendo (Roboti, Mizunguko ya Umeme, AI, Uchapishaji wa 3D na Sayansi) kinachofika nyumbani, shuleni, na kituoni kwetu mkabala na DIT Morogoro Road."}
            </p>

            {/* Simple Lego-Style CTA Row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <button
                onClick={onOpenBooking}
                className="lego-btn-orange"
                style={{ fontSize: "1rem", padding: "13px 26px" }}
              >
                <span>{lang === "en" ? "Register Your Child" : "Sajili Mtoto Wako"}</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={onOpenFlyerModal}
                className="lego-btn-outline"
                style={{ fontSize: "0.95rem", padding: "12px 22px" }}
              >
                <span>{lang === "en" ? "View Activity Photos" : "Tazama Picha za Shughuli"}</span>
              </button>

              <a
                href="https://wa.me/255749998820?text=Habari%20SparksHub%2C%20ninapenda%20kufahamu%20zaidi%20kuhusu%20mafunzo%20ya%20STEAM%20kwa%20watoto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "12px 18px",
                  borderRadius: "9999px",
                  background: "#ECFDF5",
                  color: "#065F46",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  border: "1.5px solid #A7F3D0",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} color="#059669" />
                <span>WhatsApp Admin</span>
              </a>
            </div>

            {/* Quick Trust Checklist */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                fontSize: "0.85rem",
                color: "#64748B",
                fontWeight: 600,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="#00A859" />
                <span>{lang === "en" ? "Ages 3 - 17 Years" : "Watoto Miaka 3 - 17"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} color="#006CB7" />
                <span>{lang === "en" ? "Certified Instructors" : "Wakufunzi Walioidhinishwa"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Award size={16} color="#FF6600" />
                <span>{lang === "en" ? "100% Practical STEM" : "100% Elimu ya Vitendo"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lego Education Style Activity Slideshow */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Visual Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
                border: "4px solid #FFFFFF",
                background: "#0F172A",
              }}
            >
              {/* Stacked Slides with crossfade transition */}
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: idx === activeIndex ? 1 : 0,
                    transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: idx === activeIndex ? "auto" : "none",
                    zIndex: idx === activeIndex ? 2 : 1,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={lang === "en" ? slide.titleEn : slide.titleSw}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    style={{ objectFit: "cover" }}
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Top-Left Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 14px",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.82)",
                  backdropFilter: "blur(10px)",
                  color: "#FFFFFF",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <CurrentIcon size={15} color="#FDE047" />
                <span>
                  {lang === "en" ? currentSlide.categoryEn : currentSlide.categorySw}
                </span>
              </div>

              {/* Top-Right Counter Pill */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.8)",
                  backdropFilter: "blur(10px)",
                  color: "#F8FAFC",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <span>
                  {activeIndex + 1} / {HERO_SLIDES.length}
                </span>
              </div>

              {/* Navigation Arrows: Left & Right */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Activity"
                style={{
                  position: "absolute",
                  top: "44%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0F172A",
                  cursor: "pointer",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.16)",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Activity"
                style={{
                  position: "absolute",
                  top: "44%",
                  right: "12px",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0F172A",
                  cursor: "pointer",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.16)",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>

              {/* Floating Bottom Card: Dynamically describes the active activity */}
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "14px",
                  right: "14px",
                  zIndex: 10,
                  background: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(12px)",
                  padding: "12px 18px",
                  borderRadius: "18px",
                  boxShadow: "0 10px 28px rgba(0, 0, 0, 0.14)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(0.88rem, 1.4vw, 0.96rem)",
                      fontWeight: 800,
                      color: "#0F172A",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {lang === "en" ? currentSlide.titleEn : currentSlide.titleSw}
                  </div>

                  <span
                    style={{
                      background: currentSlide.badgeColor,
                      color: "#FFFFFF",
                      padding: "4px 11px",
                      borderRadius: "9999px",
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      boxShadow: `0 2px 6px ${currentSlide.badgeColor}44`,
                    }}
                  >
                    {lang === "en" ? currentSlide.badgeEn : currentSlide.badgeSw}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#475569",
                    lineHeight: 1.45,
                    marginBottom: "8px",
                  }}
                >
                  {lang === "en" ? currentSlide.descEn : currentSlide.descSw}
                </div>

                {/* Dot Indicators */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {HERO_SLIDES.map((slide, i) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        height: "7px",
                        width: activeIndex === i ? "24px" : "7px",
                        borderRadius: "9999px",
                        background: activeIndex === i ? slide.badgeColor : "#CBD5E1",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Activity Selector Chips (Lego Education Style) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "14px",
                overflowX: "auto",
                paddingBottom: "4px",
                scrollbarWidth: "none",
              }}
            >
              {HERO_SLIDES.map((slide, i) => {
                const isSelected = activeIndex === i;
                const IconComp = slide.icon;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "7px 13px",
                      borderRadius: "9999px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      border: isSelected ? `2px solid ${slide.badgeColor}` : "1.5px solid #E2E8F0",
                      background: isSelected ? slide.badgeColor : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#475569",
                      cursor: "pointer",
                      boxShadow: isSelected
                        ? `0 4px 12px ${slide.badgeColor}33`
                        : "0 1px 3px rgba(0,0,0,0.04)",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={13} color={isSelected ? "#FFFFFF" : slide.badgeColor} />
                    <span>{lang === "en" ? slide.categoryEn : slide.categorySw}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
