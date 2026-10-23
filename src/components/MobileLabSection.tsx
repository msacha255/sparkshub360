"use client";

import React from "react";
import Image from "next/image";
import {
  Truck,
  Home,
  School,
  Church,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
} from "lucide-react";

interface MobileLabSectionProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

export default function MobileLabSection({ onOpenBooking, lang }: MobileLabSectionProps) {
  const venues = [
    {
      icon: <Home size={24} color="#FF6600" />,
      titleEn: "Homes & Private Tutoring",
      titleSw: "Nyumbani & Mafunzo Binafsi",
      descEn: "We bring full robotic kits, computers, and science gear directly to your living room or compound.",
      descSw: "Tunaleta vifaa vyote vya roboti, kompyuta na maabara ya sayansi nyumbani kwako.",
    },
    {
      icon: <School size={24} color="#0070F3" />,
      titleEn: "Schools & Academies",
      titleSw: "Shule & Vyuo",
      descEn: "Turnkey STEAM clubs, curriculum integration, and teacher support for schools across Dar es Salaam.",
      descSw: "Kuanzisha klabu za STEAM shuleni, kuunganisha mitaala na kuwawezesha walimu.",
    },
    {
      icon: <Church size={24} color="#10B981" />,
      titleEn: "Churches & Mosques",
      titleSw: "Makanisa & Misikiti",
      descEn: "Weekend youth empowerment programs, holiday camps, and moral-centered tech literacy.",
      descSw: "Programu za vijana za wikendi, kambi za likizo na mafunzo ya teknolojia kwa vijana wa madhehebu yote.",
    },
    {
      icon: <HeartHandshake size={24} color="#F59E0B" />,
      titleEn: "Charities & Communities",
      titleSw: "Mashirika ya Hisani & Jamii",
      descEn: "Bridging the digital divide for underserved youth, NGOs, and community development centers.",
      descSw: "Kufikisha elimu ya teknolojia kwa watoto wasiojiweza na vituo vya kijamii kote nchini.",
    },
  ];

  return (
    <section id="mobile-lab" style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container">
        {/* Main Banner Block */}
        <div
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            borderRadius: "32px",
            padding: "clamp(32px, 5vw, 56px)",
            color: "#FFFFFF",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.2)",
          }}
        >
          {/* Background Glow */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255, 102, 0, 0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  color: "#FF8533",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                {lang === "en" ? "Mobile STEAM Lab • We Come To You" : "Maabara Inayotembea • Tunafika Popote"}
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "18px",
                }}
              >
                {lang === "en" ? (
                  <>
                    Bringing Innovation & Creativity Directly to{" "}
                    <span style={{ color: "#FF8533" }}>Your Community</span>.
                  </>
                ) : (
                  <>
                    Tunaleta Ubunifu na Teknolojia Moja kwa Moja{" "}
                    <span style={{ color: "#FF8533" }}>Kwenye Eneo Lako</span>.
                  </>
                )}
              </h2>

              <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "28px" }}>
                {lang === "en"
                  ? "Don't let location be a barrier. SPARKS 360° HUB transports our mobile science kits, robot fleets, 3D printers, and professional instructors right to your doorstep."
                  : "Usiwe na wasiwasi kuhusu umbali. SPARKS 360° HUB inasafirisha maabara yetu ya roboti, printa za 3D, na walimu waliobobea popote ulipo jijini Dar es Salaam."}
              </p>

              {/* Mission Checkpoints */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {(lang === "en"
                  ? [
                      "Experienced & Certified STEAM Instructors",
                      "Professional Learner-Centered Guidance",
                      "Mobile STEAM Lab with Complete Hands-On Kits",
                      "Future-Focused Technology & AI Skills",
                    ]
                  : [
                      "Wakufunzi Walioidhinishwa na Wenye Uzoefu",
                      "Mwongozo Unaomlenga Mwanafunzi Kiufanisi",
                      "Maabara Inayotembea yenye Vifaa Kamili vya Vitendo",
                      "Stadi za Kiteknolojia na AI Zilizolenga Kesho",
                    ]
                ).map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem", color: "#F1F5F9", fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <button
                  onClick={onOpenBooking}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                    color: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: "24px",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    boxShadow: "0 8px 24px rgba(255, 102, 0, 0.4)",
                  }}
                >
                  <span>{lang === "en" ? "Request Mobile Lab" : "Agiza Maabara Inayotembea"}</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href="https://wa.me/255749998820?text=Hello%20Sparks%20Hub,%20we%20want%20to%20book%20a%20Mobile%20STEAM%20Lab%20for%20our%20school%20or%20home"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255, 255, 255, 0.12)",
                    color: "#FFFFFF",
                    padding: "14px 24px",
                    borderRadius: "24px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span>WhatsApp: +255 749 998 820</span>
                </a>
              </div>
            </div>

            {/* Right: Where We Reach Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {venues.map((venue, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {venue.icon}
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                    {lang === "en" ? venue.titleEn : venue.titleSw}
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.5, margin: 0 }}>
                    {lang === "en" ? venue.descEn : venue.descSw}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
