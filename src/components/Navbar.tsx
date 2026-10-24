"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Calendar,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  BookOpen,
  Cpu,
  Flame,
  Users,
  Compass,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import {
  SparksFlameVector,
  TanzaniaFlagVector,
  UKFlagVector,
  OfficialWhatsAppIcon,
} from "./KidVectors";

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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      href: "#about",
      labelEn: "About",
      labelSw: "Kuhusu",
      icon: <Sparkles size={18} color="#FF6600" />,
      descEn: "Vision, mission & values",
      descSw: "Dira, dhamira na maadili",
    },
    {
      href: "#programmes",
      labelEn: "7 Programmes",
      labelSw: "Mitaala 7",
      icon: <Cpu size={18} color="#0070F3" />,
      descEn: "Robotics, AI, Circuits, 3D",
      descSw: "Roboti, AI, Saketi, 3D",
    },
    {
      href: "#workshop",
      labelEn: "Workshops",
      labelSw: "Warsha",
      icon: <Flame size={18} color="#EA580C" />,
      descEn: "Every Saturday practical labs",
      descSw: "Kila Jumamosi kwa vitendo",
    },
    {
      href: "#age-groups",
      labelEn: "Age Groups",
      labelSw: "Makundi ya Umri",
      icon: <Users size={18} color="#10B981" />,
      descEn: "Ages 3 - 17 progressive levels",
      descSw: "Miaka 3 - 17 ngazi 3",
    },
    {
      href: "#mobile-lab",
      labelEn: "Mobile Lab",
      labelSw: "Maabara Popote",
      icon: <Compass size={18} color="#8B5CF6" />,
      descEn: "We come to homes & schools",
      descSw: "Tunafika nyumbani na shuleni",
    },
    {
      href: "#contact",
      labelEn: "Contact",
      labelSw: "Mawasiliano",
      icon: <MapPin size={18} color="#059669" />,
      descEn: "Opp. DIT, Morogoro Road",
      descSw: "Mkabala na DIT, Dar",
    },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled
            ? "rgba(255, 255, 255, 0.96)"
            : "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: scrolled ? "0 4px 20px rgba(15, 23, 42, 0.08)" : "none",
        }}
      >
        {/* Top Announcement Bar - Fully Responsive */}
        <div
          style={{
            background: "linear-gradient(90deg, #FF6600 0%, #0070F3 50%, #059669 100%)",
            color: "#FFFFFF",
            padding: "4px clamp(12px, 3vw, 24px)",
            fontSize: "0.78rem",
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Slogan / Notice */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0, overflow: "hidden" }}>
            <SparksFlameVector size={15} animate={true} />
            <span
              className="announcement-text"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              {lang === "en"
                ? "Practical STEAM Education for Kids in Tanzania • Robotics, AI & Circuits"
                : "Elimu ya Vitendo ya STEAM kwa Watoto Tanzania • Roboti, AI & Saketi"}
            </span>
          </div>

          {/* Quick Hotline & Language switch */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <a
              href="tel:+255749998820"
              style={{
                background: "rgba(255, 255, 255, 0.22)",
                padding: "2px 8px",
                borderRadius: "10px",
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#FFFFFF",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                textDecoration: "none",
              }}
            >
              <Phone size={11} />
              <span>+255 749 998 820</span>
            </a>

            <button
              onClick={() => setLang(lang === "en" ? "sw" : "en")}
              style={{
                color: "#FFFFFF",
                fontSize: "0.72rem",
                fontWeight: 800,
                background: "rgba(0, 0, 0, 0.25)",
                padding: "2px 8px",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              title={lang === "en" ? "Badili kwenda Kiswahili" : "Switch to English"}
            >
              {lang === "en" ? (
                <>
                  <TanzaniaFlagVector size={14} />
                  <span>SW</span>
                </>
              ) : (
                <>
                  <UKFlagVector size={14} />
                  <span>EN</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 clamp(14px, 3vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            gap: "12px",
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
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(255, 102, 0, 0.15)",
                border: "1px solid #FFE4D6",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Sparks 360 Hub Logo"
                width={34}
                height={34}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(1.02rem, 3.2vw, 1.25rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  color: "#0F172A",
                  lineHeight: 1.15,
                }}
              >
                SPARKS <span style={{ color: "#FF6600" }}>360°</span> HUB
              </div>
              <p
                style={{
                  fontSize: "0.64rem",
                  color: "#64748B",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-tab-link">
                {lang === "en" ? link.labelEn : link.labelSw}
              </a>
            ))}
          </nav>

          {/* Actions CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            {/* Desktop WhatsApp Button */}
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
                fontSize: "0.82rem",
                fontWeight: 700,
                border: "1px solid #A7F3D0",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
            >
              <MessageCircle size={15} color="#059669" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Booking Button */}
            <button
              onClick={onOpenBooking}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px clamp(12px, 2.5vw, 18px)",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #FF6600 0%, #EA580C 100%)",
                color: "#FFFFFF",
                fontSize: "clamp(0.8rem, 2.2vw, 0.88rem)",
                fontWeight: 800,
                whiteSpace: "nowrap",
                boxShadow: "0 3px 12px rgba(255, 102, 0, 0.28)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <Calendar size={15} />
              <span className="hide-on-very-small">
                {lang === "en" ? "Register / Book" : "Jiandikishe"}
              </span>
              <span className="show-on-very-small">
                {lang === "en" ? "Book" : "Jisajili"}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: mobileMenuOpen ? "#0F172A" : "#F1F5F9",
                color: mobileMenuOpen ? "#FFFFFF" : "#0F172A",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: "1px solid #E2E8F0",
              }}
              className="mobile-burger"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Root-Level Mobile Side Navigation Drawer (Never trapped by header backdrop-filter) */}
      {mobileMenuOpen && (
        <div
          className="mobile-side-nav-wrapper"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Backdrop overlay */}
          <div
            className="mobile-side-nav-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15, 23, 42, 0.65)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Drawer Panel sliding in from the right */}
          <aside
            className="mobile-side-drawer-panel"
            style={{
              position: "relative",
              width: "min(340px, 86vw)",
              height: "100%",
              maxHeight: "100dvh",
              background: "#FFFFFF",
              boxShadow: "-8px 0 32px rgba(15, 23, 42, 0.28)",
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Drawer Header with Brand & Close Button */}
            <div
              style={{
                padding: "16px 18px",
                borderBottom: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#FAFAFA",
                position: "sticky",
                top: 0,
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(255, 102, 0, 0.15)",
                    border: "1px solid #FFE4D6",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Sparks 360 Hub Logo"
                    width={28}
                    height={28}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 900,
                      letterSpacing: "-0.01em",
                      color: "#0F172A",
                      lineHeight: 1.1,
                    }}
                  >
                    SPARKS <span style={{ color: "#FF6600" }}>360°</span> HUB
                  </div>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      color: "#64748B",
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    STEAMORA CO. LTD
                  </p>
                </div>
              </div>

              {/* Close (X) Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#F1F5F9",
                  color: "#0F172A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  border: "1px solid #E2E8F0",
                  transition: "all 0.2s ease",
                }}
                aria-label="Close Navigation"
              >
                <X size={20} />
              </button>
            </div>

            {/* Language Quick Switcher inside Side Navigation */}
            <div
              style={{
                padding: "12px 18px",
                background: "#F8FAFC",
                borderBottom: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748B" }}>
                {lang === "en" ? "Language / Lugha:" : "Lugha / Language:"}
              </span>
              <button
                onClick={() => setLang(lang === "en" ? "sw" : "en")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid #CBD5E1",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#0F172A",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "en" ? (
                  <>
                    <TanzaniaFlagVector size={16} />
                    <span>Kiswahili (SW)</span>
                  </>
                ) : (
                  <>
                    <UKFlagVector size={16} />
                    <span>English (EN)</span>
                  </>
                )}
              </button>
            </div>

            {/* Side Navigation Links */}
            <div style={{ padding: "14px 14px", display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "11px 12px",
                    borderRadius: "12px",
                    background: "#FFFFFF",
                    textDecoration: "none",
                    border: "1px solid #F1F5F9",
                    transition: "all 0.2s ease",
                  }}
                  className="side-nav-item"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "10px",
                        background: "#F8FAFC",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)",
                        flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                        {lang === "en" ? link.labelEn : link.labelSw}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>
                        {lang === "en" ? link.descEn : link.descSw}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="#94A3B8" />
                </a>
              ))}
            </div>

            {/* Bottom Actions inside Side Drawer */}
            <div
              style={{
                padding: "16px",
                borderTop: "1px solid #E2E8F0",
                background: "#FAFAFA",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Call and WhatsApp Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <a
                  href="tel:+255749998820"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 8px",
                    borderRadius: "10px",
                    background: "#FFFFFF",
                    color: "#0F172A",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <Phone size={14} color="#FF6600" />
                  <span>{lang === "en" ? "Call Hotline" : "Piga Simu"}</span>
                </a>

                <a
                  href="https://wa.me/255749998820?text=Hello%20Sparks%20360%20Hub,%20I%20would%20like%20to%20register%20my%20child%20for%20practical%20STEAM%20learning!"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 8px",
                    borderRadius: "10px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <OfficialWhatsAppIcon size={16} color="#FFFFFF" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Big Booking Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #FF6600 0%, #EA580C 100%)",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  boxShadow: "0 4px 14px rgba(255, 102, 0, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Calendar size={16} />
                <span>{lang === "en" ? "Book / Register Session" : "Jiandikishe Sasa"}</span>
              </button>

              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#64748B",
                  textAlign: "center",
                  lineHeight: 1.3,
                  marginTop: "2px",
                }}
              >
                📍 Opp. DIT, Morogoro Rd • Dar es Salaam<br />
                <strong style={{ color: "#0F172A" }}>STEAMORA COMPANY LIMITED</strong>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Navigation styling */}
      <style jsx global>{`
        .nav-tab-link {
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          padding: 7px 13px;
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
        .show-on-very-small {
          display: none !important;
        }
        .hide-on-very-small {
          display: inline !important;
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
        @media (max-width: 480px) {
          .announcement-text {
            display: none !important;
          }
          .show-on-very-small {
            display: inline !important;
          }
          .hide-on-very-small {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
