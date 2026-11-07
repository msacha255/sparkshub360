"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Send,
  Phone,
  Sparkles,
  School,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  CreditCard,
  MessageCircle,
} from "lucide-react";

interface ChildRegistrationSectionProps {
  lang: "en" | "sw";
}

export default function ChildRegistrationSection({ lang }: ChildRegistrationSectionProps) {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("8");
  const [school, setSchool] = useState("International School of Tanganyika (IST)");
  const [customSchool, setCustomSchool] = useState("");
  const [programme, setProgramme] = useState("Saturday STEAM Club (Robotics & Circuits)");
  const [mode, setMode] = useState("Kituoni Sparks Hub (Opposite DIT)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const schoolOptions = [
    "International School of Tanganyika (IST)",
    "The Apton School",
    "Dar es Salaam International Academy (DIA)",
    "Indian School Dar es Salaam",
    "Kidz Kollege",
    "Tumarich Community",
    "Guiding Minds Academy",
    "ASK Community",
    "Bright Side Learning Centre",
    "Other / Shule Nyingine",
  ];

  const programmeOptions = [
    { value: "Saturday STEAM Club (Robotics & Circuits)", labelEn: "Saturday STEAM Club (Weekly)", labelSw: "Klabu ya STEAM ya Jumamosi (Kila Wiki)" },
    { value: "Holiday STEAM Bootcamp", labelEn: "Holiday STEAM Bootcamp (Intensive)", labelSw: "Kambi ya Likizo ya STEAM (Wiki 2)" },
    { value: "Robotics & Automation", labelEn: "Robotics & Automation (Level 1-3)", labelSw: "Roboti & Uhandisi (Ngazi 1-3)" },
    { value: "Electronics & Circuits", labelEn: "Electronics & Circuits (Breadboards)", labelSw: "Mizunguko ya Umeme (Saketi & Umeme)" },
    { value: "Coding & AI for Kids", labelEn: "Coding & AI for Kids (Scratch/Python)", labelSw: "Coding & AI kwa Watoto (Scratch/Python)" },
    { value: "3D Design & Printing", labelEn: "3D Design & 3D Printing", labelSw: "Ubunifu & Uchapishaji wa 3D" },
    { value: "Fun Science Experiments", labelEn: "Fun Science Experiments", labelSw: "Majaribio ya Sayansi ya Vitendo" },
    { value: "Mobile STEAM Lab (Private Home/School)", labelEn: "Mobile STEAM Lab (Home/School)", labelSw: "Mobile STEAM Lab (Nyumbani/Shuleni)" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const actualSchool = school === "Other / Shule Nyingine" && customSchool ? customSchool : school;

    const message =
      `*USAJILI MPYA WA MTOTO - SPARKS 360° HUB*\n\n` +
      `👤 *Jina la Mzazi:* ${parentName}\n` +
      `📞 *Namba ya Simu/WhatsApp:* ${phone}\n` +
      `🧒 *Jina la Mtoto:* ${childName}\n` +
      `🎂 *Umri wa Mtoto:* ${childAge} Miaka\n` +
      `🏫 *Shule:* ${actualSchool}\n` +
      `🚀 *Programu:* ${programme}\n` +
      `📍 *Njia ya Mafunzo:* ${mode}\n` +
      (notes ? `📝 *Maoni:* ${notes}\n` : "") +
      `\nNimejaza fomu kupitia tovuti ya Sparks Hub, ninaomba maelekezo zaidi ya kuanza!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/255749998820?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="register"
      style={{
        paddingTop: "clamp(64px, 8vw, 96px)",
        paddingBottom: "clamp(64px, 8vw, 96px)",
        background: "linear-gradient(180deg, #FFFDFB 0%, #FFF5EB 50%, #FFFDFB 100%)",
        position: "relative",
        borderTop: "2px solid #FED7AA80",
        borderBottom: "2px solid #FED7AA80",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px auto" }}>
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
                Register Your Child for <span style={{ color: "#FF6600" }}>SPARKS 360°</span>
              </>
            ) : (
              <>
                Sajili Mtoto Wako Kwenye <span style={{ color: "#FF6600" }}>SPARKS 360° HUB</span>
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
              ? "Fill out this quick form to reserve your child's spot. We confirm instantly via WhatsApp."
              : "Jaza fomu hii fupi kumpatia mwanao nafasi. Tunathibitisha papo hapo kupitia WhatsApp."}
          </p>
        </div>

        {/* Main Grid: Form + Trust & Lipa Namba Info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "36px",
            alignItems: "start",
          }}
        >
          {/* Left: The Registration Form */}
          <div
            className="lego-card"
            style={{
              padding: "clamp(24px, 4vw, 36px)",
              background: "#FFFFFF",
              border: "1.5px solid #FFD5B8",
              borderTop: "6px solid #FF6600",
              borderRadius: "26px",
              boxShadow: "0 14px 40px rgba(255, 102, 0, 0.08)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    background: "#E9F8F1",
                    color: "#00A859",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px auto",
                  }}
                >
                  <CheckCircle2 size={38} />
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: "10px",
                  }}
                >
                  {lang === "en" ? "Registration Received!" : "Usajili Umepokelewa!"}
                </h3>
                <p style={{ color: "#475569", lineHeight: 1.6, marginBottom: "24px" }}>
                  {lang === "en"
                    ? "Thank you! We have opened WhatsApp with your details. Our team is ready to guide you on session timings and kits."
                    : "Asante sana! Tumefungua WhatsApp na taarifa zako. Timu yetu ipo tayari kukupa ratiba kamili na maelekezo ya kuanza."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="lego-btn-outline"
                  style={{ fontSize: "0.92rem" }}
                >
                  {lang === "en" ? "Register Another Child" : "Sajili Mtoto Mwingine"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  {/* Parent Name */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "6px",
                      }}
                    >
                      {lang === "en" ? "Parent's Full Name *" : "Jina Kamili la Mzazi *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder={lang === "en" ? "e.g., Sarah John" : "mfano: Sarah John"}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "6px",
                      }}
                    >
                      {lang === "en" ? "Phone / WhatsApp Number *" : "Namba ya Simu / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+255 7XX XXX XXX"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  {/* Child Name */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "6px",
                      }}
                    >
                      {lang === "en" ? "Child's Name *" : "Jina la Mtoto *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder={lang === "en" ? "e.g., Daniel" : "mfano: Daniel"}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Child Age */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "6px",
                      }}
                    >
                      {lang === "en" ? "Age (3-17) *" : "Umri (3-17) *"}
                    </label>
                    <select
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 10px",
                        borderRadius: "12px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        outline: "none",
                        background: "#FFFFFF",
                      }}
                    >
                      {[...Array(15)].map((_, i) => {
                        const age = i + 3;
                        return (
                          <option key={age} value={age}>
                            {age} {lang === "en" ? "Years" : "Miaka"}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {/* Child School (With 9 Partner Schools Highlighted) */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "6px",
                    }}
                  >
                    {lang === "en" ? "Child's School *" : "Shule ya Mtoto *"}
                  </label>
                  <select
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      outline: "none",
                      background: "#FFFFFF",
                    }}
                  >
                    {schoolOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  {school === "Other / Shule Nyingine" && (
                    <input
                      type="text"
                      required
                      value={customSchool}
                      onChange={(e) => setCustomSchool(e.target.value)}
                      placeholder={lang === "en" ? "Enter school name" : "Andika jina la shule"}
                      style={{
                        width: "100%",
                        marginTop: "8px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  )}
                </div>

                {/* Preferred Programme */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "6px",
                    }}
                  >
                    {lang === "en" ? "Preferred STEAM Programme *" : "Programu Unayoichagua *"}
                  </label>
                  <select
                    value={programme}
                    onChange={(e) => setProgramme(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      outline: "none",
                      background: "#FFFFFF",
                    }}
                  >
                    {programmeOptions.map((prog) => (
                      <option key={prog.value} value={prog.value}>
                        {lang === "en" ? prog.labelEn : prog.labelSw}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Training Mode */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "6px",
                    }}
                  >
                    {lang === "en" ? "Preferred Location / Mode *" : "Mahali pa Kujifunzia *"}
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      outline: "none",
                      background: "#FFFFFF",
                    }}
                  >
                    <option value="Kituoni Sparks Hub (Opposite DIT)">
                      {lang === "en"
                        ? "At SPARKS Hub Centre (Opposite DIT Morogoro Road)"
                        : "Kituoni SPARKS Hub (Mkabili wa DIT Barabara ya Morogoro)"}
                    </option>
                    <option value="Nyumbani Kwetu (Mobile Lab In-Home)">
                      {lang === "en"
                        ? "At Home / Private Residence (Mobile STEAM Lab)"
                        : "Nyumbani Kwetu / Kwenye Eneo Letu (Mobile STEAM Lab)"}
                    </option>
                    <option value="Shuleni (After-school Club)">
                      {lang === "en"
                        ? "At School (After-school STEAM Club)"
                        : "Shuleni (Klabu ya Baada ya Masomo)"}
                    </option>
                  </select>
                </div>

                {/* Additional Note */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "6px",
                    }}
                  >
                    {lang === "en" ? "Questions or Specific Goals (Optional)" : "Swali au Lengo Maalum (Hiari)"}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      lang === "en"
                        ? "e.g., Has beginner experience in Scratch coding..."
                        : "mfano: Ana ujuzi wa awali wa kompyuta..."
                    }
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.92rem",
                      fontFamily: "inherit",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="lego-btn-orange"
                  style={{ width: "100%", fontSize: "1.05rem", padding: "14px 20px" }}
                >
                  <Send size={18} />
                  <span>
                    {lang === "en"
                      ? "Submit & Confirm via WhatsApp"
                      : "Kamilisha Usajili Kupitia WhatsApp"}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Why Choose SparkHub + Lipa Namba Details */}
          <div>
            {/* Why Register Card */}
            <div
              className="lego-card"
              style={{
                padding: "28px",
                marginBottom: "24px",
                borderTop: "5px solid #FF6600",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Sparkles size={20} color="#FF6600" />
                <span>{lang === "en" ? "What Every Child Gets:" : "Nini Mtoto Wako Anapata:"}</span>
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#00A859" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div style={{ fontSize: "0.92rem", color: "#334155" }}>
                    <strong>{lang === "en" ? "100% Practical Learning:" : "100% Mafunzo ya Vitendo:"}</strong>{" "}
                    {lang === "en"
                      ? "No passive listening. Every student builds and codes their own model from day one."
                      : "Hakuna kukaa tu na kusikiliza. Kila mtoto anaunda na kuendesha mradi wake mwenyewe."}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#00A859" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div style={{ fontSize: "0.92rem", color: "#334155" }}>
                    <strong>{lang === "en" ? "Dedicated Kits for All:" : "Seti Binafsi kwa Kila Mtoto:"}</strong>{" "}
                    {lang === "en"
                      ? "We provide high-grade robotics, electronic components, and laptops for every kid."
                      : "Kila mtoto anapewa vifaa kamili vya roboti, bodi za umeme na kompyuta bila kugombania."}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#00A859" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div style={{ fontSize: "0.92rem", color: "#334155" }}>
                    <strong>{lang === "en" ? "Official Certification:" : "Cheti Rasmi cha Ubunifu:"}</strong>{" "}
                    {lang === "en"
                      ? "Graduation certificate issued under STEAMORA COMPANY LIMITED."
                      : "Cheti rasmi cha ufaulu kinachotolewa chini ya STEAMORA COMPANY LIMITED."}
                  </div>
                </div>
              </div>
            </div>

            {/* Official Mobile Payment & Contact Details */}
            <div
              className="lego-card"
              style={{
                padding: "24px",
                background: "#0F172A",
                color: "#FFFFFF",
                border: "1px solid #1E293B",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CreditCard size={20} color="#FFC20E" />
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFC20E" }}>
                    {lang === "en" ? "Official Payment & Contact" : "Namba ya Malipo & Mawasiliano"}
                  </span>
                </div>
                <span
                  style={{
                    background: "rgba(16, 185, 129, 0.2)",
                    color: "#10B981",
                    padding: "2px 8px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  Mitandao Yote
                </span>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "16px",
                  marginBottom: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", marginBottom: "4px" }}>
                  Tigo Pesa • M-Pesa • Airtel Money • HaloPesa
                </div>
                <div
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    letterSpacing: "0.04em",
                    color: "#FFC20E",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  +255 749 998 820
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#E2E8F0", marginTop: "4px" }}>
                  STEAMORA COMPANY LIMITED
                </div>
              </div>

              <div style={{ fontSize: "0.82rem", color: "#CBD5E1", lineHeight: 1.5 }}>
                {lang === "en"
                  ? "Send payments or inquiries directly to our official line +255 749 998 820 via any mobile money network. Confirmations are sent immediately on WhatsApp."
                  : "Tuma malipo au maulizo moja kwa moja kwenye namba yetu rasmi ya +255 749 998 820 kupitia mtandao wowote wa simu. Risiti na uthibitisho vinatumwa papo hapo WhatsApp."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

