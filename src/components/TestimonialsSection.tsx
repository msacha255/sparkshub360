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
        "Before SPARKS 360°, my son spent hours watching YouTube gaming videos. Since joining the Saturday STEAM Club, he now spends weekends assembling obstacle-avoiding cars and explaining circuit loops to us at dinner! The coaches are phenomenal and so patient.",
      commentSw:
        "Kabla ya kujiunga na SPARKS 360°, mwanangu alikuwa anatumia muda mwingi kuangalia video za michezo YouTube. Tangu ajiunge na Klabu ya Jumamosi, sasa anatumia wikendi kuunganisha magari ya roboti na kutuelezea jinsi saketi za umeme zinavyofanya kazi! Walimu ni wazuri sana na wavumilivu.",
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
        "What amazed me is how quickly my daughter grasped Scratch coding and practical logic. She actually designed a 3D keychain prototype that was printed in class and brought it home with immense pride. SPARKS 360° is giving our kids real 21st-century skills.",
      commentSw:
        "Kilichonishangaza ni jinsi binti yangu alivyoelewa programu za Scratch na mantiki ya kiteknolojia kwa kasi. Alibuni kifaa cha 3D kwenye kompyuta, kikachapishwa darasani na akakirudisha nyumbani kwa fahari kubwa. SPARKS 360° inawapa watoto wetu ujuzi halisi wa karne ya 21.",
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
        "As an academic, I evaluate pedagogy strictly. SPARKS 360° follows the gold standard of experiential STEAM: every child has their own physical kit, trial-and-error is celebrated, and problem solving comes naturally. Truly the best investment for curious young minds.",
      commentSw:
        "Kama msomi, ninaangalia sana namna mafunzo yanavyotolewa. SPARKS 360° inafuata viwango bora vya elimu ya vitendo (STEAM): kila mtoto ana seti yake binafsi, makosa yanachukuliwa kama nafasi ya kujifunza, na watoto wanafikiri kwa uhuru. Hakika ni uwekezaji bora kwa watoto.",
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
        "I was worried 5 years old was too young for robotics, but the trainers made it so visual, colorful, and fun with LEGO mechanics and safe snap circuits. His motor skills and ability to concentrate have improved remarkably. He looks forward to every session!",
      commentSw:
        "Nilikuwa na wasiwasi kuwa mtoto wa miaka 5 ni mdogo sana kwa roboti, lakini wakufunzi walifanya iwe rahisi sana, yenye rangi na mchezo kupitia vipuri vya LEGO na saketi salama. Uwezo wake wa kutuliza akili na kushika vitu umeongezeka sana. Anasubiri kila kipindi kwa hamu!",
      avatarBg: "#F5F3FF",
      avatarColor: "#7C3AED",
      initials: "ZM",
    },
    {
      id: 5,
      parentName: "Rashid H. Kassim",
      roleEn: "Community Parent & Tech Enthusiast",
      roleSw: "Mzazi na Mpenzi wa Teknolojia",
      school: "Tumarich Community / Bright Side",
      studentInfoEn: "Daughter (Age 13) • Arduino & Smart Automation",
      studentInfoSw: "Binti (Miaka 13) • Arduino & Mifumo ya Akili",
      rating: 5,
      commentEn:
        "My daughter used to say science was too abstract and boring in textbooks. After just four sessions at SPARKS Hub opposite DIT, she built an automated smart plant watering sensor with Arduino! Seeing that spark in her eyes is priceless.",
      commentSw:
        "Binti yangu alikuwa anasema sayansi ni ngumu na haina mvuto kwenye vitabu. Baada ya vipindi vinne tu pale kituoni SPARKS DIT, aliunda sensor inayomwagilia mmea kiotomatiki kwa Arduino! Kuona mwanga huo wa shauku machoni mwake haina thamani.",
      avatarBg: "#FFFBE6",
      avatarColor: "#B45309",
      initials: "RK",
    },
    {
      id: 6,
      parentName: "Sarah M. Kimario",
      roleEn: "Homeschool Coordinator",
      roleSw: "Msimamizi wa Kundi la Elimu ya Nyumbani",
      school: "ASK Community",
      studentInfoEn: "Group of 6 Kids • Mobile STEAM Lab",
      studentInfoSw: "Kikundi cha Watoto 6 • Mobile STEAM Lab",
      rating: 5,
      commentEn:
        "The Mobile Lab van coming straight to our compound was an absolute game changer! The instructors arrived fully equipped with kits, tables, safety gear, and complete enthusiasm. The kids talk about it all week long.",
      commentSw:
        "Huduma ya Mobile Lab kufika moja kwa moja nyumbani kwetu ilikuwa jambo la kipekee kabisa! Wakufunzi walifika wakiwa na vifaa vyote kamili vya roboti, kompyuta na nidhamu ya hali ya juu. Watoto wanaendelea kuongelea mafunzo haya wiki nzima.",
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
        background: "#F8FAFC",
        position: "relative",
        borderTop: "1.5px solid #F1F5F9",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 40px auto" }}>
          <div
            className="lego-pill lego-pill-red"
            style={{ marginBottom: "12px", display: "inline-flex" }}
          >
            <MessageSquareHeart size={16} />
            <span>{lang === "en" ? "Parent & Educator Reviews" : "Maoni ya Wazazi na Walimu"}</span>
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
              ? "Read honest reviews from families whose children have experienced the joy of building robots, soldering circuits, and writing their first code with SPARKS 360° HUB."
              : "Soma ushuhuda wa wazazi ambao watoto wao wamepata mabadiliko makubwa kiakili, uwezo wa kutatua matatizo, na shauku ya sayansi na roboti kupitia SPARKS 360°."}
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
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
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
