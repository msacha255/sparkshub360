"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, MapPin, Menu, X, MessageCircle } from "lucide-react";
import { SparksFlameVector, TanzaniaFlagVector, UKFlagVector } from "./KidVectors";

interface NavbarProps {
  onOpenBooking: () => void;
  lang: "en" | "sw";
  setLang: (lang: "en" | "sw") => void;
}

export default function Navbar({ onOpenBooking, lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(255, 255, 255, 0.94)"
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: scrolled ? "0 4px 20px rgba(15, 23, 42, 0.08)" : "none",
        }}
      >
        {/* Top Announcement Bar */}
        <div
          style={{
            background: "linear-gradient(90deg, #FF6600 0%, #0070F3 50%, #059669 100%)",
            color: "#FFFFFF",
            padding: "5px 20px",
            fontSize: "0.8rem",
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <SparksFlameVector size={16} animate={true} />
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "0.78rem" }}>
              {lang === "en"
                ? "Practical STEAM Education for Kids in Tanzania • Robotics, AI Coding & Circuits"
                : "Elimu ya Vitendo ya STEAM kwa Watoto Tanzania • Roboti, Coding & Saketi za Umeme"}
            </span>
            <a
              href="tel:+255749998820"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                padding: "2px 8px",
                borderRadius: "10px",
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#FFFFFF",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <span>+255 749 998 820</span>
            </a>
          </div>

          {/* Quick Lang Switch */}
          <div style={{ flexShrink: 0 }}>
            <button
              onClick={() => setLang(lang === "en" ? "sw" : "en")}
              style={{
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontWeight: 700,
                background: "rgba(0, 0, 0, 0.2)",
                padding: "3px 10px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
              }}
            >
              {lang === "en" ? (
                <>
                  <TanzaniaFlagVector size={18} />
                  <span>KISWAHILI</span>
                </>
              ) : (
                <>
                  <UKFlagVector size={18} />
                  <span>ENGLISH</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
            gap: "16px",
          }}
        >
          {/* Logo with Title */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 3px 10px rgba(255, 102, 0, 0.18)",
                border: "1px solid #FFE4D6",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Sparks 360 Hub Logo"
                width={38}
                height={38}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#0F172A", lineHeight: 1.15 }}>
                SPARKS <span style={{ color: "#FF6600" }}>360°</span> HUB
              </div>
              <p style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0 }}>
                STEAMORA CO. LTD
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links — Segmented Tabs */}
          <nav
            className="desktop-nav"
            style={{
              display: "none",
              alignItems: "center",
              gap: "2px",
              background: "#F1F5F9",
              padding: "4px",
              borderRadius: "14px",
              border: "1px solid #E2E8F0",
            }}
          >
            <a href="#about" className="nav-tab-link">
              {lang === "en" ? "About" : "Kuhusu"}
            </a>
            <a href="#programmes" className="nav-tab-link">
              {lang === "en" ? "7 Programmes" : "Mitaala 7"}
            </a>
            <a href="#workshop" className="nav-tab-link">
              {lang === "en" ? "Workshops" : "Warsha"}
            </a>
            <a href="#age-groups" className="nav-tab-link">
              {lang === "en" ? "Age Groups" : "Makundi ya Umri"}
            </a>
            <a href="#mobile-lab" className="nav-tab-link">
              {lang === "en" ? "Mobile Lab" : "Maabara Popote"}
            </a>
            <a href="#contact" className="nav-tab-link">
              {lang === "en" ? "Contact" : "Mawasiliano"}
            </a>
          </nav>

          {/* Actions CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <a
              href="https://wa.me/255749998820?text=Hello%20Sparks%20360%20Hub,%20I%20would%20like%20to%20register%20my%20child%20for%20practical%20STEAM%20learning!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-nav-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "10px",
                background: "#ECFDF5",
                color: "#065F46",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "1px solid #A7F3D0",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
            >
              <MessageCircle size={16} color="#059669" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 18px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #FF6600 0%, #EA580C 100%)",
                color: "#FFFFFF",
                fontSize: "0.88rem",
                fontWeight: 800,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(255, 102, 0, 0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <Calendar size={16} />
              <span>{lang === "en" ? "Register / Book" : "Jiandikishe"}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#F1F5F9",
                color: "#0F172A",
                cursor: "pointer",
              }}
              className="mobile-burger"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#FFFFFF",
              borderTop: "1px solid #E2E8F0",
              padding: "16px 24px 24px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1rem", fontWeight: 600, color: "#1E293B" }}
              >
                {lang === "en" ? "About Us (STEAMORA Co. Ltd)" : "Kuhusu Sisi (STEAMORA Co. Ltd)"}
              </a>
              <a
                href="#programmes"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1rem", fontWeight: 600, color: "#1E293B" }}
              >
                {lang === "en" ? "Our 7 STEAM Programmes" : "Programu 7 za STEAM"}
              </a>
              <a
                href="#workshop"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1rem", fontWeight: 600, color: "#1E293B" }}
              >
                {lang === "en" ? "Weekend STEAM Workshops" : "Warsha za STEAM za Wikendi"}
              </a>
              <a
                href="#age-groups"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1rem", fontWeight: 600, color: "#1E293B" }}
              >
                {lang === "en" ? "Age Groups (3 - 17 Years)" : "Makundi ya Umri (Miaka 3 - 17)"}
              </a>
              <a
                href="#mobile-lab"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1rem", fontWeight: 600, color: "#1E293B" }}
              >
                {lang === "en" ? "Mobile STEAM Lab (We Come To You)" : "Maabara Inayokufuata Popote"}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1rem", fontWeight: 600, color: "#1E293B" }}
              >
                {lang === "en" ? "Location & Contact (+255 749 998 820)" : "Mahali na Mawasiliano"}
              </a>

              <div style={{ paddingTop: "12px", borderTop: "1px solid #E2E8F0" }}>
                <p style={{ fontSize: "0.85rem", color: "#1E293B", fontWeight: 700, marginBottom: "8px" }}>
                  {lang === "en"
                    ? "Hotline & WhatsApp: +255 749 998 820 | Opp. DIT, Morogoro Rd"
                    : "Simu & WhatsApp: +255 749 998 820 | Mkabala na DIT, Barabara ya Morogoro"}
                </p>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #FF6600, #FF8533)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  {lang === "en" ? "Register / Book Session" : "Jiandikishe Sasa"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Navigation styling */}
      <style jsx global>{`
        .nav-tab-link {
          font-size: 0.9rem;
          font-weight: 700;
          color: #475569;
          padding: 8px 14px;
          border-radius: 10px;
          white-space: nowrap !important;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          text-decoration: none;
          line-height: 1;
        }
        .nav-tab-link:hover {
          color: #FF6600;
          background: #FFFFFF;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
          transform: translateY(-1px);
        }
        @media (min-width: 1080px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger {
            display: none !important;
          }
        }
        @media (max-width: 1079px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-burger {
            display: flex !important;
          }
          .whatsapp-nav-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
