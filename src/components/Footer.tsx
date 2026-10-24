"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart, MessageCircle } from "lucide-react";
import {
  RobotVector,
  CircuitVector,
  CodingVector,
  ThreeDPrinterVector,
  AIBrainVector,
  ScienceFlaskVector,
  ArtPaletteVector,
  PhoneCallKidVector,
  WhatsAppKidVector,
  OfficialWhatsAppIcon,
} from "./KidVectors";

interface FooterProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
}

export default function Footer({ onOpenBooking, lang }: FooterProps) {
  return (
    <footer
      style={{
        background: "#090D16",
        color: "#FFFFFF",
        paddingTop: "70px",
        paddingBottom: "36px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "#FFFFFF",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src="/images/logo.png" alt="Sparks 360 Logo" width={40} height={40} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF" }}>
                  SPARKS <span style={{ color: "#FF6600" }}>360°</span> HUB
                </span>
                <p style={{ fontSize: "0.72rem", color: "#94A3B8", margin: 0 }}>
                  “Innovation Starts Here”
                </p>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6, marginBottom: "20px" }}>
              {lang === "en"
                ? "Mobile STEAM innovation hub delivering practical robotics, circuits, AI coding, and science experiments to homes, schools, and communities across Tanzania."
                : "Kituo bunifu cha elimu ya vitendo (Roboti, Circuits, Coding na Sayansi) kinachofika nyumbani, shuleni, na katika jamii kote Dar es Salaam na Tanzania."}
            </p>

            <div
              style={{
                display: "inline-block",
                background: "rgba(255, 255, 255, 0.05)",
                padding: "10px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "0.8rem",
                color: "#CBD5E1",
              }}
            >
              {lang === "en" ? "An Educational Programme under" : "Programu ya Kielimu chini ya"} <br />
              <strong style={{ color: "#FF8533", fontSize: "0.9rem" }}>STEAMORA COMPANY LIMITED</strong>
            </div>
          </div>

          {/* Col 2: The 7 Core Programmes (No sports) */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>
              {lang === "en" ? "Our 7 STEAM Programmes" : "Programu Zetu 7 za STEAM"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", color: "#94A3B8" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <RobotVector size={18} />
                <span>{lang === "en" ? "1. Robotics & Engineering" : "1. Roboti & Uhandisi"}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CircuitVector size={18} />
                <span>{lang === "en" ? "2. Electronics & Circuits" : "2. Saketi & Mizunguko ya Umeme"}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CodingVector size={18} />
                <span>{lang === "en" ? "3. Coding & Programming" : "3. Programu za Kompyuta (Coding)"}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ThreeDPrinterVector size={18} />
                <span>{lang === "en" ? "4. 3D Design & Printing" : "4. Muundo na Uchapishaji wa 3D"}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <AIBrainVector size={18} />
                <span>{lang === "en" ? "5. STEAM with AI for Kids" : "5. STEAM na Akili Mnemba (AI)"}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ScienceFlaskVector size={18} />
                <span>{lang === "en" ? "6. Scientific Experiments" : "6. Majaribio ya Sayansi"}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ArtPaletteVector size={18} />
                <span>{lang === "en" ? "7. Creative Arts & Crafts" : "7. Sanaa na Ubunifu wa Mikono"}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Mobile STEAM Lab (We Come To You) */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>
              {lang === "en" ? "Mobile STEAM Lab" : "Maabara Inayotembea"}
            </h4>
            <div style={{ background: "rgba(255, 255, 255, 0.05)", borderRadius: "14px", padding: "16px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FF8533", marginBottom: "6px" }}>
                {lang === "en" ? "We Come To You!" : "Tunafika Popote!"}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#CBD5E1", lineHeight: 1.5 }}>
                {lang === "en" ? (
                  <>
                    • Homes & Private Residences
                    <br />
                    • Schools & Academic Clubs
                    <br />
                    • Churches, Mosques & Charities
                    <br />
                    • Community Innovation Events
                  </>
                ) : (
                  <>
                    • Majumbani & Makazi Binafsi
                    <br />
                    • Shuleni & Klabu za Masomo
                    <br />
                    • Makanisa, Misikiti & Jamii
                    <br />
                    • Matukio ya Ubunifu wa Watoto
                  </>
                )}
              </div>
              <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "0.8rem", color: "#10B981", fontWeight: 800 }}>
                {lang === "en" ? "Certified STEAM Mentors" : "Wakufunzi Walioidhinishwa wa STEAM"}
              </div>
            </div>
          </div>

          {/* Col 4: Contacts & Official Phone Number */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>
              {lang === "en" ? "Direct Contacts" : "Mawasiliano"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "#CBD5E1" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} color="#FF6600" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  {lang === "en"
                    ? "Opp. DIT, Bibi Titi & Morogoro Rd, Dar es Salaam"
                    : "Mkabala na DIT, Bibi Titi & Morogoro Rd, Dar es Salaam"}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={18} color="#0070F3" />
                <a href="tel:+255749998820" style={{ color: "#FF8533", fontWeight: 800, fontSize: "1.05rem" }}>
                  +255 749 998 820
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={18} color="#F59E0B" />
                <a href="mailto:sparkshubtz@gmail.com" style={{ color: "#CBD5E1" }}>
                  sparkshubtz@gmail.com
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a href="https://instagram.com/spark360hub_tz" target="_blank" rel="noopener noreferrer" style={{ color: "#CBD5E1" }}>
                  @spark360hub_tz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.8rem",
            color: "#64748B",
          }}
        >
          <div>
            {lang === "en"
              ? `© ${new Date().getFullYear()} SPARKS 360° HUB. An Educational Programme under STEAMORA COMPANY LIMITED. All rights reserved.`
              : `© ${new Date().getFullYear()} SPARKS 360° HUB. Programu ya Kielimu chini ya STEAMORA COMPANY LIMITED. Haki zote zimehifadhiwa.`}
          </div>
          <div>
            {lang === "en"
              ? "Dar es Salaam, Tanzania 🇹🇿 • Practical STEAM for Young Innovators"
              : "Dar es Salaam, Tanzania 🇹🇿 • Elimu ya Vitendo ya STEAM kwa Wavumbuzi Wadogo"}
          </div>
        </div>
      </div>

      {/* Floating Instant WhatsApp Button with Official High-Visibility WhatsApp Icon */}
      <a
        href="https://wa.me/255749998820?text=Hello%20Sparks%20360%20Hub,%20I%20would%20like%20to%20inquire%20about%20practical%20STEAM%20learning%20for%20my%20child!"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn animate-pulse-green"
        aria-label="Chat on WhatsApp (+255 749 998 820)"
      >
        <OfficialWhatsAppIcon size={30} color="#FFFFFF" />
        <span className="floating-whatsapp-text">WhatsApp Us</span>
      </a>

      <style jsx>{`
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 90;
          background: #25D366;
          color: #FFFFFF;
          border-radius: 9999px;
          padding: 12px 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          font-weight: 800;
          font-size: 0.92rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .floating-whatsapp-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.55);
        }
        @media (max-width: 640px) {
          .floating-whatsapp-btn {
            bottom: 20px;
            right: 20px;
            padding: 0;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 26px rgba(37, 211, 102, 0.55);
          }
          .floating-whatsapp-text {
            display: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
