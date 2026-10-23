"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle,
  Phone,
  MessageCircle,
  ShieldCheck,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";
import {
  RobotVector,
  WhatsAppKidVector,
  PhoneCallKidVector,
  CelebrationVector,
} from "./KidVectors";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramme?: string;
  lang: "en" | "sw";
}

export default function BookingModal({
  isOpen,
  onClose,
  initialProgramme,
  lang,
}: BookingModalProps) {
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [ageGroup, setAgeGroup] = useState("Age 8 - 12");
  const [programme, setProgramme] = useState(
    initialProgramme || "Weekend STEAM Workshop (Robotics & Circuits)"
  );
  const [location, setLocation] = useState("Opp. DIT (Morogoro Rd & Bibi Titi)");
  const [childrenCount, setChildrenCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF6600", "#0070F3", "#10B981", "#F59E0B"],
      });
    } catch {
      // fallback
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sparks 360° Hub (STEAMORA)! I would like to register my child:\n\n` +
      `Parent: ${parentName}\n` +
      `Phone: ${parentPhone}\n` +
      `Child: ${childName} (${ageGroup})\n` +
      `Programme: ${programme}\n` +
      `Preferred Location: ${location}\n` +
      `Number of Children: ${childrenCount}\n\n` +
      `Please confirm registration & schedule details. Thank you!`
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "28px",
          width: "100%",
          maxWidth: "560px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
          border: "1px solid #E2E8F0",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "#FFFFFF",
            padding: "24px 28px",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  background: "#FF6600",
                  color: "#FFFFFF",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "2px 8px",
                  borderRadius: "10px",
                }}
              >
                SPARKS 360° HUB
              </span>
              <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>STEAMORA COMPANY LIMITED</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#FFFFFF", margin: "4px 0 0" }}>
              {lang === "en" ? "Student Registration & Booking" : "Fomu ya Usajili wa Mwanafunzi"}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px" }}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Hotline Notification Banner */}
              <div
                style={{
                  background: "#FFF8F3",
                  border: "1px solid #FFE4D6",
                  borderRadius: "16px",
                  padding: "14px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <PhoneCallKidVector size={28} animate={true} />
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>
                      {lang === "en" ? "Direct Registration Hotline" : "Nambari Rasmi ya Usajili"}
                    </span>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#FF6600" }}>
                      +255 749 998 820
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      background: "#25D366",
                      color: "#FFFFFF",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "10px",
                    }}
                  >
                    {lang === "en" ? "WhatsApp Active" : "WhatsApp Inapatikana"}
                  </span>
                </div>
              </div>

              {/* Parent Name */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                  {lang === "en" ? "Parent / Guardian Full Name *" : "Jina Kamili la Mzazi / Mlezi *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === "en" ? "e.g. Sarah Mwangi" : "Mfano: Sarah Mwangi"}
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #CBD5E1",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                  {lang === "en" ? "Phone Number (WhatsApp Active) *" : "Namba ya Simu (WhatsApp) *"}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+255 7XX XXX XXX"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #CBD5E1",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              {/* Child's Name & Age */}
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                    {lang === "en" ? "Child's Name *" : "Jina la Mtoto *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === "en" ? "e.g. Baraka" : "Mfano: Baraka"}
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid #CBD5E1",
                      fontSize: "0.95rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                    {lang === "en" ? "Age Group" : "Kundi la Umri"}
                  </label>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 10px",
                      borderRadius: "12px",
                      border: "1px solid #CBD5E1",
                      fontSize: "0.9rem",
                      outline: "none",
                      background: "#FFFFFF",
                    }}
                  >
                    <option value="Age 3 - 4">
                      {lang === "en" ? "Age 3 - 4 (Tiny Explorers)" : "Miaka 3 - 4 (Wavumbuzi Wadogo)"}
                    </option>
                    <option value="Age 5 - 7">
                      {lang === "en" ? "Age 5 - 7 (Junior Inventors)" : "Miaka 5 - 7 (Wabunifu Chipukizi)"}
                    </option>
                    <option value="Age 8 - 12">
                      {lang === "en" ? "Age 8 - 12 (Young Engineers)" : "Miaka 8 - 12 (Wahandisi Vijana)"}
                    </option>
                    <option value="Age 13 - 17">
                      {lang === "en" ? "Age 13 - 17 (Tech Innovators)" : "Miaka 13 - 17 (Wavumbuzi wa Teknolojia)"}
                    </option>
                  </select>
                </div>
              </div>

              {/* Programme Select - Strictly the 7 Core Programmes */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                  {lang === "en" ? "Programme / Activity" : "Chagua Programu"}
                </label>
                <select
                  value={programme}
                  onChange={(e) => setProgramme(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #CBD5E1",
                    fontSize: "0.9rem",
                    outline: "none",
                    background: "#FFFFFF",
                  }}
                >
                  <option value="Weekend STEAM Workshop (Robotics & Circuits)">
                    {lang === "en" ? "Weekend STEAM Workshop (Robotics & Circuits)" : "Warsha ya STEAM ya Wikendi (Roboti & Saketi)"}
                  </option>
                  <option value="Robotics">
                    {lang === "en" ? "1. Robotics (12 Sessions Level 1-3)" : "1. Roboti & Uhandisi (Vipindi 12)"}
                  </option>
                  <option value="Electronics & Circuits">
                    {lang === "en" ? "2. Electronics & Circuits (12 Sessions)" : "2. Saketi & Mizunguko ya Umeme (Vipindi 12)"}
                  </option>
                  <option value="Coding & Programming">
                    {lang === "en" ? "3. Coding & Programming (Scratch & Python)" : "3. Programu za Kompyuta (Coding & Programming)"}
                  </option>
                  <option value="3D Design & Printing">
                    {lang === "en" ? "4. 3D Design & Printing Technology" : "4. Muundo na Uchapishaji wa 3D"}
                  </option>
                  <option value="STEAM with AI for Kids">
                    {lang === "en" ? "5. STEAM with AI for Kids" : "5. STEAM na Akili Mnemba (AI)"}
                  </option>
                  <option value="Scientific Experiments">
                    {lang === "en" ? "6. Scientific Experiments Lab" : "6. Majaribio ya Sayansi (Maabara)"}
                  </option>
                  <option value="Creative Arts">
                    {lang === "en" ? "7. Creative Arts & Makerspace" : "7. Sanaa na Ubunifu wa Mikono"}
                  </option>
                  <option value="Mobile STEAM Lab (We Come To You)">
                    {lang === "en" ? "Mobile STEAM Lab (Visit our Home / School / Community)" : "Maabara Inayotembea (Nyumbani / Shuleni / Jamii)"}
                  </option>
                </select>
              </div>

              {/* Location Select - Opp. DIT or Mobile Lab */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                  {lang === "en" ? "Preferred Location" : "Kituo Unachopendelea"}
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #CBD5E1",
                    fontSize: "0.9rem",
                    outline: "none",
                    background: "#FFFFFF",
                  }}
                >
                  <option value="Opp. DIT (Morogoro Rd & Bibi Titi)">
                    {lang === "en"
                      ? "Opp. DIT Campus (Morogoro Rd & Bibi Titi Mohammed, Dar es Salaam)"
                      : "Kituo Kikuu - Mkabala na DIT (Morogoro Rd & Bibi Titi, Dar es Salaam)"}
                  </option>
                  <option value="Mobile STEAM Lab (Tunafika Popote - Home / School)">
                    {lang === "en"
                      ? "Mobile STEAM Lab (We Come To You - Home / School / Community)"
                      : "Maabara Inayotembea (Tunafika Popote - Nyumbani / Shuleni / Jamii)"}
                  </option>
                </select>
              </div>

              {/* Children Count Stepper */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E293B" }}>
                    {lang === "en" ? "Number of Children" : "Idadi ya Watoto"}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748B" }}>
                    {lang === "en" ? "Trained certified STEAM instructors" : "Wakufunzi walioidhinishwa wa STEAM"}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setChildrenCount(Math.max(1, childrenCount - 1))}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      background: "#F1F5F9",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: "1rem", fontWeight: 800, minWidth: "20px", textAlign: "center" }}>
                    {childrenCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setChildrenCount(childrenCount + 1)}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      background: "#F1F5F9",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #FF6600 0%, #FF8533 100%)",
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  boxShadow: "0 8px 24px rgba(255, 102, 0, 0.35)",
                  border: "none",
                  marginTop: "8px",
                }}
              >
                {lang === "en" ? "Submit Registration" : "Wasilisha Usajili"}
              </button>
            </form>
          ) : (
            /* Success & Direct Call / WhatsApp Confirmation Screen */
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <CelebrationVector size={64} animate={true} />

              <h4 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0F172A", margin: 0 }}>
                {lang === "en" ? "Registration Details Ready!" : "Taarifa Zimepokelewa!"}
              </h4>

              <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                {lang === "en"
                  ? `Thank you, ${parentName}! Registration details for ${childName} (${programme}) are prepared. Please connect directly with our admissions coordinator below:`
                  : `Asante sana, ${parentName}! Taarifa za ${childName} kwa ajili ya (${programme}) ziko tayari. Tafadhali wasiliana nasi moja kwa moja:`}
              </p>

              {/* Direct Hotline Card */}
              <div
                style={{
                  width: "100%",
                  background: "#0F172A",
                  color: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>
                  {lang === "en" ? "STEAMORA Official Hotline" : "Nambari Rasmi ya STEAMORA"}
                </span>

                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#FF8533", letterSpacing: "1px", margin: "6px 0" }}>
                  +255 749 998 820
                </div>

                <div style={{ fontSize: "0.78rem", color: "#CBD5E1" }}>
                  {lang === "en"
                    ? "Morogoro Rd & Bibi Titi Mohammed, Opp. DIT, Dar es Salaam"
                    : "Mkabala na DIT, Barabara ya Morogoro & Bibi Titi, Dar es Salaam"}
                </div>
              </div>

              {/* Direct WhatsApp Share button */}
              <a
                href={`https://wa.me/255749998820?text=${whatsappMessage}`}
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                }}
              >
                <WhatsAppKidVector size={24} />
                <span>{lang === "en" ? "Send Details via WhatsApp (+255 749 998 820)" : "Tuma Taarifa WhatsApp (+255 749 998 820)"}</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+255749998820"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "14px",
                  background: "#F1F5F9",
                  color: "#0F172A",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  border: "1px solid #CBD5E1",
                }}
              >
                <Phone size={18} color="#FF6600" />
                <span>{lang === "en" ? "Call Directly: +255 749 998 820" : "Piga Simu Sasa: +255 749 998 820"}</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                style={{
                  color: "#64748B",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginTop: "6px",
                }}
              >
                {lang === "en" ? "Close window" : "Funga dirisha"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
