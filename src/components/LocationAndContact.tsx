"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageCircle,
  Truck,
} from "lucide-react";
import {
  PhoneCallKidVector,
  WhatsAppKidVector,
  RobotVector,
} from "./KidVectors";

interface LocationAndContactProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

export default function LocationAndContact({ onOpenBooking, lang }: LocationAndContactProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("+255749998820");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" style={{ padding: "80px 0", background: "#F8FAFC", position: "relative" }}>
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
                Visit Our Hub or <span className="gradient-text">Book a Session Today</span>
              </>
            ) : (
              <>
                Tembelea Kituo Chetu au <span className="gradient-text">Wasiliana Nasi Sasa</span>
              </>
            )}
          </h2>

          <p style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.6 }}>
            {lang === "en"
              ? "We are based opposite DIT along Morogoro Road, and our Mobile STEAM Lab travels anywhere across Dar es Salaam and Tanzania to homes, schools, and communities."
              : "Tunapatikana mkabala na DIT Barabara ya Morogoro, na Maabara yetu Inayotembea inafika popote Dar es Salaam na Tanzania nzima majumbani, mashuleni na vituo vya jamii."}
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "40px",
          }}
        >
          {/* Location 1: Main DIT Office */}
          <div
            className="kid-card"
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "32px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                className="kid-icon-box"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "rgba(0, 112, 243, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0070F3",
                }}
              >
                <MapPin size={26} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "#0070F3",
                    letterSpacing: "0.05em",
                  }}
                >
                  {lang === "en" ? "Headquarters & Workshop Lab" : "Makao Makuu & Warsha za STEAM"}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                  {lang === "en" ? "Morogoro Rd & Bibi Titi" : "Barabara ya Morogoro & Bibi Titi"}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
              <strong>
                {lang === "en"
                  ? "Opposite DIT (Dar es Salaam Institute of Technology)"
                  : "Mkabala na DIT (Taasisi ya Teknolojia Dar es Salaam)"}
              </strong>
              <br />
              {lang === "en"
                ? "Central practical innovation hub for student robotics workshops, AI programming, electronics labs, and teacher guidance."
                : "Kituo kikuu cha mafunzo ya vitendo ya roboti, programu za AI, maabara za umeme na mwongozo wa walimu."}
            </p>

            <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #F1F5F9" }}>
              <a
                href="https://maps.google.com/?q=Dar+es+Salaam+Institute+of+Technology"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0070F3",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                }}
              >
                <span>{lang === "en" ? "View on Google Maps" : "Fungua Ramani ya Google"}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Location 2: Mobile STEAM Lab (Tunafika Popote) */}
          <div
            className="kid-card"
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "32px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                className="kid-icon-box"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "rgba(16, 185, 129, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10B981",
                }}
              >
                <Truck size={26} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "#10B981",
                    letterSpacing: "0.05em",
                  }}
                >
                  {lang === "en" ? "Mobile STEAM Lab" : "Maabara Inayotembea ya STEAM"}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                  {lang === "en" ? "We Come To You!" : "Tunafika Popote!"}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
              <strong>{lang === "en" ? "We Travel To Your Doorstep" : "Tunakufikia Popote Ulipo"}</strong>
              <br />
              {lang === "en"
                ? "Bringing complete robotics fleets, 3D printers, coding laptops, and science lab apparatus directly to homes, schools, churches, mosques, and charities."
                : "Tunaleta vifaa vyote vya roboti, printa za 3D, kompyuta na vifaa vya maabara nyumbani, shuleni, misikitini, makanisani na kwenye jamii."}
            </p>

            <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #F1F5F9" }}>
              <button
                onClick={onOpenBooking}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#10B981",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <span>{lang === "en" ? "Request Mobile Lab Visit" : "Omba Maabara Ifike Kwako"}</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Location 3: Direct Registration Hotline Call to Action */}
          <div
            className="kid-card"
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              borderRadius: "24px",
              padding: "32px",
              color: "#FFFFFF",
              boxShadow: "0 15px 35px rgba(15, 23, 42, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#FF8533", fontWeight: 800 }}>
                {lang === "en" ? "Direct Hotline & Registration" : "Nambari Rasmi ya Usajili & Taarifa"}
              </span>
              <PhoneCallKidVector size={24} animate={true} />
            </div>

            <div>
              <div style={{ fontSize: "0.78rem", color: "#94A3B8" }}>
                {lang === "en" ? "Call or WhatsApp Directly:" : "Piga Simu au WhatsApp Moja kwa Moja:"}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 0.08)",
                  padding: "12px 14px",
                  borderRadius: "14px",
                  marginTop: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.68rem", color: "#94A3B8" }}>
                    {lang === "en" ? "OFFICIAL NUMBER" : "NAMBARI RASMI"}
                  </div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "#FF8533", letterSpacing: "0.5px" }}>
                    +255 749 998 820
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  style={{
                    background: copiedPhone ? "#10B981" : "rgba(255, 255, 255, 0.15)",
                    color: "#FFFFFF",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? (lang === "en" ? "Copied" : "Imenakiliwa") : (lang === "en" ? "Copy" : "Nakili")}</span>
                </button>
              </div>
            </div>

            <div style={{ fontSize: "0.82rem", color: "#CBD5E1", lineHeight: 1.5 }}>
              {lang === "en" ? (
                <>
                  Sparks 360° Hub is an educational programme under <br />
                  <strong style={{ color: "#FF8533" }}>STEAMORA COMPANY LIMITED</strong>.
                </>
              ) : (
                <>
                  Sparks 360° Hub ni programu ya kielimu chini ya <br />
                  <strong style={{ color: "#FF8533" }}>STEAMORA COMPANY LIMITED</strong>.
                </>
              )}
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
              <a
                href="https://wa.me/255749998820"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "12px",
                  background: "#25D366",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <WhatsAppKidVector size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+255749998820"
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #FF6600, #FF8533)",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <Phone size={16} />
                <span>{lang === "en" ? "Call Now" : "Piga Simu"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "24px 32px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Phone */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              className="kid-icon-box"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#E8F5E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2E7D32",
              }}
            >
              <PhoneCallKidVector size={30} animate={true} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 700 }}>
                {lang === "en" ? "CALL OR WHATSAPP" : "PIGA SIMU AU WHATSAPP"}
              </div>
              <a
                href="tel:+255749998820"
                style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}
              >
                +255 749 998 820
              </a>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              className="kid-icon-box"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#E0F2FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0284C7",
              }}
            >
              <Mail size={24} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 700 }}>
                {lang === "en" ? "EMAIL US" : "TUTUMIE BARUA PEPE"}
              </div>
              <a
                href="mailto:sparkshubtz@gmail.com"
                style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}
              >
                sparkshubtz@gmail.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              className="kid-icon-box"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#FCE7F3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#DB2777",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 700 }}>
                {lang === "en" ? "INSTAGRAM & TIKTOK" : "INSTAGRAM NA TIKTOK"}
              </div>
              <a
                href="https://instagram.com/spark360hub_tz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}
              >
                @spark360hub_tz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
