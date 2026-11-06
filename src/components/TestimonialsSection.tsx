"use client";

import React from "react";
import { Star, MessageSquareHeart, CheckCircle2, Quote, Sparkles } from "lucide-react";

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

interface Testimonial {
  id: number;
  parentName: string;
  roleEn: string;
  roleSw: string;
  school: string;
  studentInfoEn: string;
  studentInfoSw: string;
  rating: number;
  commentEn: string;
  commentSw: string;
  avatarBg: string;
  avatarColor: string;
  initials: string;
}

export default function TestimonialsSection({ onOpenBooking, lang }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      parentName: "Fatma S. Al-Jabry",
      roleEn: "Parent of Grade 4 Student",
      roleSw: "Mzazi wa Mwanafunzi wa Darasa la 4",
      school: "International School of Tanganyika (IST)",
      studentInfoEn: "Son (Age 9) • Robotics & Circuits",
      studentInfoSw: "Mtoto wa Kiume (Miaka 9) • Roboti & Umeme",
      rating: 5,
      commentEn:
        "Since joining the Saturday STEAM Club, my son spends weekends assembling robot cars and explaining circuits to us! The coaches are phenomenal and so patient.",
      commentSw:
        "Tangu ajiunge na Klabu ya Jumamosi, sasa anatumia wikendi kuunganisha magari ya roboti na kuelezea circuits! Walimu ni wazuri sana na wavumilivu.",
      avatarBg: "#EBF4FC",
      avatarColor: "#006CB7",
      initials: "FA",
    },
    {
      id: 2,
      parentName: "David K. Mtei",
      roleEn: "Parent of Year 3 Student",
      roleSw: "Mzazi wa Mwanafunzi wa Year 3",
      school: "The Apton School",
      studentInfoEn: "Daughter (Age 8) • AI Coding & 3D Printing",
      studentInfoSw: "Binti (Miaka 8) • Coding ya AI & 3D Printing",
      rating: 5,
      commentEn:
        "My daughter designed a 3D keychain prototype, printed it in class, and brought it home with immense pride. Real 21st-century skills!",
      commentSw:
        "Binti yangu alibuni kifaa cha 3D kwenye kompyuta, kikachapishwa darasani na akakirudisha nyumbani kwa fahari kubwa. Ujuzi halisi wa kisasa!",
      avatarBg: "#FFF3EB",
      avatarColor: "#FF6600",
      initials: "DM",
    },
    {
      id: 3,
      parentName: "Dr. Ananya Patel",
      roleEn: "Parent & University Lecturer",
      roleSw: "Mzazi & Mhadhiri wa Chuo Kikuu",
      school: "Dar es Salaam International Academy (DIA)",
      studentInfoEn: "Twins (Ages 10 & 12) • Holiday Bootcamp",
      studentInfoSw: "Mapacha (Miaka 10 & 12) • Kambi ya Likizo",
      rating: 5,
      commentEn:
        "Every child has their own physical kit, and problem solving comes naturally. Truly the best investment for curious young minds.",
      commentSw:
        "Kila mtoto anajifunza kwa seti yake binafsi, na watoto wanafikiri kwa uhuru. Hakika ni uwekezaji bora kwa akili za watoto.",
      avatarBg: "#E9F8F1",
      avatarColor: "#00A859",
      initials: "AP",
    },
    {
      id: 4,
      parentName: "Zawadi Mwamburi",
      roleEn: "Parent of Junior Learner",
      roleSw: "Mzazi wa Mtoto wa Awali",
      school: "Kidz Kollege",
      studentInfoEn: "Son (Age 5) • Early Discovery & LEGO Robotics",
      studentInfoSw: "Mtoto wa Kiume (Miaka 5) • Ugunduzi wa Awali & Roboti",
      rating: 5,
      commentEn:
        "The trainers made it visual and fun with LEGO mechanics and safe snap circuits. His focus and motor skills improved remarkably!",
      commentSw:
        "Wakufunzi walifanya iwe rahisi sana kwa LEGO na circuits salama. Uwezo wake wa kutuliza akili na kushika vitu umeongezeka sana!",
      avatarBg: "#F5F3FF",
      avatarColor: "#7C3AED",
      initials: "ZM",
    },
    {
      id: 5,
      parentName: "Rashid H. Kassim",
      roleEn: "Tech Enthusiast Parent",
      roleSw: "Mzazi na Mpenzi wa Teknolojia",
      school: "Tumarich Community / Bright Side",
      studentInfoEn: "Daughter (Age 13) • Arduino & Smart Automation",
      studentInfoSw: "Binti (Miaka 13) • Arduino & Mifumo ya Akili",
      rating: 5,
      commentEn:
        "After four sessions at SPARKS Hub opposite DIT, she built an automated plant watering sensor with Arduino! Seeing her excitement is priceless.",
      commentSw:
        "Baada ya vipindi vinne tu pale DIT, aliunda sensor inayomwagilia mmea kiotomatiki kwa Arduino! Kuona mwanga wa shauku machoni mwake haina thamani.",
      avatarBg: "#FFFBE6",
      avatarColor: "#B45309",
      initials: "RK",
    },
    {
      id: 6,
      parentName: "Sarah M. Kimario",
      roleEn: "Homeschool Coordinator",
      roleSw: "Msimamizi wa Elimu ya Nyumbani",
      school: "ASK Community",
      studentInfoEn: "Group of 6 Kids • Mobile STEAM Lab",
      studentInfoSw: "Kikundi cha Watoto 6 • Mobile STEAM Lab",
      rating: 5,
      commentEn:
        "The Mobile Lab van coming straight to our compound was an absolute game changer! Fully equipped kits, laptops, and great instructors.",
      commentSw:
        "Mobile Lab kufika moja kwa moja nyumbani kwetu ilikuwa jambo zuri sana! Vifaa kamili vya roboti, kompyuta na wakufunzi wazuri.",
      avatarBg: "#FFF1F2",
      avatarColor: "#E11D48",
      initials: "SK",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        paddingTop: "clamp(48px, 8vw, 84px)",
        paddingBottom: "clamp(48px, 8vw, 84px)",
        background: "#FFFFFF",
        position: "relative",
        borderTop: "1.5px solid #F1F5F9",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 40px auto" }}>
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
                Loved by Parents Across <span style={{ color: "#FF4742" }}>Dar es Salaam</span>
              </>
            ) : (
              <>
                Kilio cha Shauku Kutoka kwa{" "}
                <span style={{ color: "#FF4742" }}>Wazazi Dar es Salaam</span>
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
              ? "Real stories from families whose children build robots, code apps, and innovate with us."
              : "Ushuhuda halisi wa wazazi ambao watoto wao wanajifunza roboti na sayansi kwa vitendo."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="lego-card"
              style={{
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                borderRadius: "24px",
                border: "1.5px solid #E2E8F0",
                borderTop: `5px solid ${t.avatarColor}`,
                background: "#FFFFFF",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                {/* Top Row: Stars and Quote Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#FFC20E" color="#FFC20E" />
                    ))}
                  </div>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#94A3B8",
                    }}
                  >
                    <Quote size={16} />
                  </div>
                </div>

                {/* Comment */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#334155",
                    lineHeight: 1.65,
                    marginBottom: "20px",
                    fontStyle: "normal",
                  }}
                >
                  &ldquo;{lang === "en" ? t.commentEn : t.commentSw}&rdquo;
                </p>
              </div>

              {/* Author & Student Details */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1.5px solid #F1F5F9",
                }}
              >
                {/* Initials Avatar */}
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: t.avatarBg,
                    color: t.avatarColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "1rem",
                    flexShrink: 0,
                    border: `2px solid ${t.avatarColor}20`,
                  }}
                >
                  {t.initials}
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        lineHeight: 1.2,
                      }}
                    >
                      {t.parentName}
                    </h4>
                    <CheckCircle2 size={14} color="#00A859" />
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#64748B",
                      fontWeight: 600,
                      marginTop: "2px",
                    }}
                  >
                    {t.school}
                  </div>

                  <div
                    style={{
                      fontSize: "0.76rem",
                      color: "#FF6600",
                      fontWeight: 700,
                      marginTop: "2px",
                    }}
                  >
                    {lang === "en" ? t.studentInfoEn : t.studentInfoSw}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onOpenBooking} className="lego-btn-orange">
            <Sparkles size={18} />
            <span>
              {lang === "en" ? "Join Our Happy Parent Community" : "Ungana na Wazazi Wetu Wenye Furaha"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

