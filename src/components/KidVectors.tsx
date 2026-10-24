"use client";

import React from "react";

interface VectorProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

// 1. Cute Kid Robot Vector (IconScout 3D / Playful style)
export const RobotVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="botHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="botEarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8533" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="botGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Antenna */}
    <line x1="32" y1="12" x2="32" y2="4" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="4" r="3.5" fill="#F59E0B" filter="url(#botGlow)" />
    {/* Ears / Bolts */}
    <rect x="8" y="24" width="5" height="10" rx="2.5" fill="url(#botEarGrad)" />
    <rect x="51" y="24" width="5" height="10" rx="2.5" fill="url(#botEarGrad)" />
    {/* Head */}
    <rect x="12" y="12" width="40" height="34" rx="12" fill="url(#botHeadGrad)" />
    <rect x="14" y="14" width="36" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.35" />
    {/* Screen / Visor */}
    <rect x="17" y="20" width="30" height="18" rx="6" fill="#0F172A" />
    {/* Cheerful Glowing Eyes */}
    <circle cx="25" cy="28" r="4" fill="#22D3EE" filter="url(#botGlow)" />
    <circle cx="26" cy="27" r="1.5" fill="#FFFFFF" />
    <circle cx="39" cy="28" r="4" fill="#22D3EE" filter="url(#botGlow)" />
    <circle cx="40" cy="27" r="1.5" fill="#FFFFFF" />
    {/* Cute Mouth */}
    <path d="M29 33C30.5 35 33.5 35 35 33" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    {/* Cheeks */}
    <ellipse cx="20" cy="32" rx="2" ry="1.2" fill="#F43F5E" fillOpacity="0.7" />
    <ellipse cx="44" cy="32" rx="2" ry="1.2" fill="#F43F5E" fillOpacity="0.7" />
    {/* Neck & Body base */}
    <rect x="27" y="46" width="10" height="5" rx="2" fill="#64748B" />
    <path d="M18 51C18 49 46 49 46 51L49 59C49 61 15 61 15 59L18 51Z" fill="#0284C7" />
    <circle cx="32" cy="56" r="2.5" fill="#F59E0B" />
  </svg>
);

// 2. Creative Lightbulb / Spark Vector (Idea & Innovation)
export const LightbulbVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-wiggle" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="60%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Radiating Sunshine rays */}
    <line x1="32" y1="4" x2="32" y2="8" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <line x1="12" y1="12" x2="16" y2="16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <line x1="52" y1="12" x2="48" y2="16" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <line x1="4" y1="28" x2="9" y2="28" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    <line x1="60" y1="28" x2="55" y2="28" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    {/* Bulb Glass */}
    <path
      d="M32 10C21.5 10 14 17.5 14 27C14 33.5 18 38 21 42L22 46H42L43 42C46 38 50 33.5 50 27C50 17.5 42.5 10 32 10Z"
      fill="url(#bulbGrad)"
    />
    {/* Gloss highlight */}
    <path d="M22 16C17 20 17 28 17 30" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fillOpacity="0.4" />
    {/* Filament smile */}
    <circle cx="27" cy="26" r="2.5" fill="#78350F" />
    <circle cx="37" cy="26" r="2.5" fill="#78350F" />
    <path d="M28 32C30 35 34 35 36 32" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
    {/* Screw base */}
    <rect x="23" y="47" width="18" height="4" rx="2" fill="#94A3B8" />
    <rect x="24" y="52" width="16" height="4" rx="2" fill="#64748B" />
    <rect x="26" y="57" width="12" height="3" rx="1.5" fill="#475569" />
  </svg>
);

// 3. Coding & Laptop Vector (Scratch & Python)
export const CodingVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="lapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    {/* Screen frame */}
    <rect x="10" y="10" width="44" height="32" rx="5" fill="url(#lapGrad)" />
    <rect x="12" y="12" width="40" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.4" />
    {/* Display */}
    <rect x="14" y="14" width="36" height="24" rx="3" fill="#0F172A" />
    {/* Code Brackets & colorful puzzle blocks */}
    <path d="M21 21L17 25L21 29" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 21L33 25L29 29" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Code line bars */}
    <rect x="36" y="20" width="10" height="3" rx="1.5" fill="#F59E0B" />
    <rect x="21" y="32" width="16" height="3" rx="1.5" fill="#A855F7" />
    <rect x="39" y="32" width="7" height="3" rx="1.5" fill="#EC4899" />
    {/* Laptop base */}
    <path d="M6 46H58C58 46 56 54 53 54H11C8 54 6 46 6 46Z" fill="#CBD5E1" />
    <rect x="26" y="47" width="12" height="2.5" rx="1" fill="#94A3B8" />
  </svg>
);

// 4. Circuit & Electronics Vector (Breadboard, LEDs & Microchip)
export const CircuitVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-wiggle" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    {/* Board */}
    <rect x="8" y="10" width="48" height="44" rx="8" fill="url(#circuitGrad)" />
    {/* Copper / Silver Pins */}
    <circle cx="16" cy="18" r="2.5" fill="#FEF08A" />
    <circle cx="48" cy="18" r="2.5" fill="#FEF08A" />
    <circle cx="16" cy="46" r="2.5" fill="#FEF08A" />
    <circle cx="48" cy="46" r="2.5" fill="#FEF08A" />
    {/* Traces */}
    <path d="M16 18H28V26" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M48 18H36V26" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 46H28V38" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M48 46H36V38" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Central Chip */}
    <rect x="22" y="24" width="20" height="16" rx="4" fill="#0F172A" />
    <path d="M33 26L27 33H33L31 38L37 31H31L33 26Z" fill="url(#boltGrad)" />
  </svg>
);

// 5. 3D Design & Printing Vector
export const ThreeDPrinterVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="cubeGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="cubeGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#7E22CE" />
      </linearGradient>
    </defs>
    {/* Printer Frame */}
    <rect x="10" y="8" width="44" height="48" rx="6" stroke="#64748B" strokeWidth="3" fill="#F8FAFC" />
    {/* Top Extruder Rail */}
    <rect x="14" y="16" width="36" height="4" rx="2" fill="#94A3B8" />
    {/* Extruder Head & Nozzle */}
    <rect x="28" y="14" width="8" height="10" rx="2" fill="#EA580C" />
    <polygon points="30,24 34,24 32,28" fill="#F59E0B" />
    {/* Laser / Filament Beam */}
    <line x1="32" y1="28" x2="32" y2="33" stroke="#EC4899" strokeWidth="2" strokeDasharray="2 2" />
    {/* Isometric Printed Cube */}
    {/* Top face */}
    <polygon points="32,32 44,38 32,44 20,38" fill="url(#cubeGradTop)" />
    {/* Left face */}
    <polygon points="20,38 32,44 32,54 20,48" fill="url(#cubeGradLeft)" />
    {/* Right face */}
    <polygon points="32,44 44,38 44,48 32,54" fill="#6B21A8" />
  </svg>
);

// 6. STEAM with AI Vector (Cute Neural Brain)
export const AIBrainVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-spin-slow" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#BE185D" />
      </linearGradient>
    </defs>
    {/* Brain Silhouettes */}
    <path
      d="M26 14C20 14 16 19 16 25C13 27 12 31 12 35C12 40 16 44 19 46C20 50 25 52 30 52V14H26Z"
      fill="url(#aiGrad)"
    />
    <path
      d="M38 14C44 14 48 19 48 25C51 27 52 31 52 35C52 40 48 44 45 46C44 50 39 52 34 52V14H38Z"
      fill="url(#aiGrad)"
    />
    {/* Synapse Nodes & Wires */}
    <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
    <circle cx="40" cy="24" r="3" fill="#FFFFFF" />
    <circle cx="22" cy="38" r="3" fill="#FFFFFF" />
    <circle cx="42" cy="38" r="3" fill="#FFFFFF" />
    <line x1="24" y1="24" x2="32" y2="30" stroke="#FDF2F8" strokeWidth="2" />
    <line x1="40" y1="24" x2="32" y2="30" stroke="#FDF2F8" strokeWidth="2" />
    <line x1="22" y1="38" x2="32" y2="30" stroke="#FDF2F8" strokeWidth="2" />
    <line x1="42" y1="38" x2="32" y2="30" stroke="#FDF2F8" strokeWidth="2" />
    <circle cx="32" cy="30" r="4.5" fill="#FDE047" />
  </svg>
);

// 7. Scientific Experiment Flask Vector (Bubbling Potion)
export const ScienceFlaskVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="flaskLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="60%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* Flask Neck */}
    <rect x="28" y="10" width="8" height="16" fill="#CBD5E1" fillOpacity="0.4" />
    <rect x="25" y="8" width="14" height="4" rx="2" fill="#94A3B8" />
    {/* Body */}
    <path
      d="M28 24L12 50C10 53 12 56 16 56H48C52 56 54 53 52 50L36 24V12H28V24Z"
      stroke="#64748B"
      strokeWidth="3"
      fill="#F8FAFC"
      fillOpacity="0.2"
    />
    {/* Liquid */}
    <path d="M17 48L21 40C26 42 38 38 43 40L47 48C48 51 46 54 43 54H21C18 54 16 51 17 48Z" fill="url(#flaskLiquid)" />
    {/* Bubbles */}
    <circle cx="28" cy="46" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />
    <circle cx="36" cy="48" r="1.8" fill="#FFFFFF" fillOpacity="0.8" />
    <circle cx="32" cy="38" r="2.2" fill="#34D399" />
    <circle cx="30" cy="28" r="1.8" fill="#34D399" />
    <circle cx="35" cy="20" r="1.5" fill="#34D399" />
  </svg>
);

// 8. Creative Arts Palette Vector (Colors & Brush)
export const ArtPaletteVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-wiggle" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="palGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="100%" stopColor="#FDBA74" />
      </linearGradient>
    </defs>
    {/* Palette body */}
    <path
      d="M32 8C18.7 8 8 18.7 8 32C8 42 14.5 48 22 48C25.5 48 27 46 29 44C30.5 42 32 41 35 41C39 41 42 44 42 48C42 50.5 44 52.5 46.5 52.5C53.5 52.5 56 43 56 32C56 18.7 45.3 8 32 8Z"
      fill="url(#palGrad)"
      stroke="#EA580C"
      strokeWidth="2.5"
    />
    {/* Thumb hole */}
    <ellipse cx="46" cy="38" rx="4" ry="5" fill="#F8FAFC" stroke="#EA580C" strokeWidth="2" />
    {/* Colorful Paint Blobs */}
    <circle cx="20" cy="20" r="4.5" fill="#EF4444" />
    <circle cx="32" cy="16" r="4.5" fill="#F59E0B" />
    <circle cx="44" cy="22" r="4.5" fill="#3B82F6" />
    <circle cx="18" cy="32" r="4.5" fill="#10B981" />
    <circle cx="26" cy="40" r="4.5" fill="#8B5CF6" />
    {/* Paintbrush dipping */}
    <line x1="50" y1="14" x2="38" y2="28" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
    <polygon points="38,28 35,32 39,31" fill="#3B82F6" />
  </svg>
);

// 9. Rollerblade / Skating Vector (Sport & Movement)
export const RollerbladeVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="bootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6600" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Boot */}
    <path
      d="M18 10H32C34 10 36 12 36 15V26L48 30C52 32 54 36 54 40V43H14V14C14 11.8 15.8 10 18 10Z"
      fill="url(#bootGrad)"
    />
    <rect x="18" y="16" width="14" height="4" rx="2" fill="#FED7AA" />
    <rect x="20" y="24" width="14" height="4" rx="2" fill="#FED7AA" />
    {/* Chassis frame */}
    <rect x="10" y="44" width="46" height="5" rx="2.5" fill="#0F172A" />
    {/* 4 Wheels */}
    <circle cx="16" cy="53" r="4.5" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
    <circle cx="16" cy="53" r="1.5" fill="#FFFFFF" />
    <circle cx="27" cy="53" r="4.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
    <circle cx="27" cy="53" r="1.5" fill="#FFFFFF" />
    <circle cx="38" cy="53" r="4.5" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
    <circle cx="38" cy="53" r="1.5" fill="#FFFFFF" />
    <circle cx="49" cy="53" r="4.5" fill="#EC4899" stroke="#0F172A" strokeWidth="2" />
    <circle cx="49" cy="53" r="1.5" fill="#FFFFFF" />
  </svg>
);

// 10. Swimming Goggles & Water Wave Vector
export const SwimmingVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-wiggle" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="swimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    {/* Goggles Strap */}
    <path d="M6 24C14 22 50 22 58 24" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
    {/* Left Lens */}
    <rect x="14" y="16" width="16" height="15" rx="7" fill="url(#swimGrad)" stroke="#0F172A" strokeWidth="3" />
    <line x1="18" y1="20" x2="26" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fillOpacity="0.7" />
    {/* Right Lens */}
    <rect x="34" y="16" width="16" height="15" rx="7" fill="url(#swimGrad)" stroke="#0F172A" strokeWidth="3" />
    <line x1="38" y1="20" x2="46" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fillOpacity="0.7" />
    {/* Center Bridge */}
    <line x1="30" y1="23" x2="34" y2="23" stroke="#0F172A" strokeWidth="3" />
    {/* Water Splash Waves */}
    <path
      d="M8 46C12 43 16 43 20 46C24 49 28 49 32 46C36 43 40 43 44 46C48 49 52 49 56 46"
      stroke="#0284C7"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M12 54C16 51 20 51 24 54C28 57 32 57 36 54C40 51 44 51 48 54"
      stroke="#38BDF8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 11. Delicious Meal & Nutrition Vector (Food will be available)
export const FoodMealVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    {/* Plate */}
    <ellipse cx="32" cy="38" rx="26" ry="14" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
    <ellipse cx="32" cy="36" rx="20" ry="10" fill="#FFFFFF" />
    {/* Healthy Apple / Fruit */}
    <circle cx="24" cy="34" r="8" fill="#EF4444" />
    <path d="M24 26C24 23 27 22 28 21" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="28" cy="22" rx="2" ry="1" fill="#22C55E" />
    {/* Sandwich triangle */}
    <polygon points="34,30 46,30 40,40" fill="#F59E0B" />
    <rect x="36" y="33" width="8" height="2" fill="#10B981" />
    {/* Fork & Spoon */}
    <path d="M10 20V32" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="8" y1="20" x2="12" y2="20" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M54 20V32" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="54" cy="22" rx="2.5" ry="3.5" fill="#94A3B8" />
  </svg>
);

// 12. Party Celebration / Confetti Vector
export const CelebrationVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-wiggle" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="popperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6600" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Popper cone */}
    <polygon points="12,52 24,28 36,44" fill="url(#popperGrad)" stroke="#C2410C" strokeWidth="2" />
    <path d="M12 52L36 44" stroke="#FBBF24" strokeWidth="3" />
    {/* Bursting Confetti Ribbons */}
    <path d="M30 20Q36 12 44 16T54 8" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M24 16Q28 6 36 8T46 4" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M38 32Q48 30 52 38" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Stars & Diamonds */}
    <circle cx="48" cy="22" r="3" fill="#F59E0B" />
    <circle cx="28" cy="10" r="2.5" fill="#A855F7" />
    <polygon points="40,22 42,26 46,27 43,30 44,34 40,32 36,34 37,30 34,27 38,26" fill="#FBBF24" />
  </svg>
);

// 13. Flame / Energy Sparks Vector
export const SparksFlameVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <defs>
      <linearGradient id="flameOuter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8533" />
        <stop offset="60%" stopColor="#FF6600" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="flameInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    {/* Outer flame */}
    <path
      d="M32 6C32 6 38 16 38 24C38 26 43 28 46 32C50 37 50 44 46 50C42 56 34 58 28 58C18 58 14 50 14 40C14 30 22 22 26 18C28 23 32 23 32 18C32 14 32 6 32 6Z"
      fill="url(#flameOuter)"
    />
    {/* Inner golden core */}
    <path
      d="M32 28C32 28 36 34 36 38C36 42 34 48 30 48C26 48 24 44 24 40C24 35 28 32 30 30C31 33 32 33 32 28Z"
      fill="url(#flameInner)"
    />
  </svg>
);

// 14. Community Kids Vector (Children & Teens)
export const CommunityKidsVector = ({ size = 32, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    {/* Kid 1 (Orange shirt) */}
    <circle cx="22" cy="22" r="7" fill="#FDBA74" stroke="#EA580C" strokeWidth="2" />
    <path d="M12 48C12 40 16 35 22 35C28 35 32 40 32 48" fill="#FF6600" />
    {/* Kid 2 (Blue shirt, taller teen) */}
    <circle cx="36" cy="18" r="8" fill="#FED7AA" stroke="#0284C7" strokeWidth="2" />
    <path d="M26 48C26 38 31 32 38 32C45 32 50 38 50 48" fill="#0284C7" />
    {/* Kid 3 (Green shirt) */}
    <circle cx="48" cy="24" r="6" fill="#FDBA74" stroke="#15803D" strokeWidth="2" />
    <path d="M42 48C42 42 45 38 50 38C55 38 58 42 58 48" fill="#10B981" />
    {/* Floating friendly heart / star */}
    <path d="M35 8L37 12L41 13L38 16L39 20L35 18L31 20L32 16L29 13L33 12L35 8Z" fill="#FBBF24" />
  </svg>
);

// 15. Tanzania Flag Badge Vector
export const TanzaniaFlagVector = ({ size = 28, className = "" }: VectorProps) => (
  <svg
    width={size}
    height={(size * 2) / 3}
    viewBox="0 0 48 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "4px", overflow: "hidden" }}
  >
    {/* Green Top Triangle */}
    <polygon points="0,0 48,0 0,32" fill="#1EB53A" />
    {/* Blue Bottom Triangle */}
    <polygon points="48,0 48,32 0,32" fill="#00A3E0" />
    {/* Yellow Stripe */}
    <polygon points="0,32 8,32 48,5 48,0 40,0 0,27" fill="#FCD116" />
    {/* Black Stripe */}
    <polygon points="0,32 5,32 48,3 48,0 43,0 0,29" fill="#000000" />
  </svg>
);

// 16. UK / English Flag Badge Vector
export const UKFlagVector = ({ size = 28, className = "" }: VectorProps) => (
  <svg
    width={size}
    height={(size * 2) / 3}
    viewBox="0 0 48 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "4px", overflow: "hidden" }}
  >
    <rect width="48" height="32" fill="#012169" />
    {/* Diagonals White */}
    <line x1="0" y1="0" x2="48" y2="32" stroke="#FFFFFF" strokeWidth="6" />
    <line x1="0" y1="32" x2="48" y2="0" stroke="#FFFFFF" strokeWidth="6" />
    {/* Diagonals Red */}
    <line x1="0" y1="0" x2="48" y2="32" stroke="#C8102E" strokeWidth="3" />
    <line x1="0" y1="32" x2="48" y2="0" stroke="#C8102E" strokeWidth="3" />
    {/* Cross White */}
    <rect x="19" y="0" width="10" height="32" fill="#FFFFFF" />
    <rect x="0" y="11" width="48" height="10" fill="#FFFFFF" />
    {/* Cross Red */}
    <rect x="21" y="0" width="6" height="32" fill="#C8102E" />
    <rect x="0" y="13" width="48" height="6" fill="#C8102E" />
  </svg>
);

// 17. Document / Flyer Vector
export const DocumentFlyerVector = ({ size = 28, className = "" }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <rect x="14" y="8" width="36" height="48" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
    <path d="M38 8L50 20H42C39.8 20 38 18.2 38 16V8Z" fill="#FF8533" />
    <rect x="20" y="22" width="14" height="3" rx="1.5" fill="#FF6600" />
    <rect x="20" y="29" width="24" height="2.5" rx="1" fill="#94A3B8" />
    <rect x="20" y="35" width="24" height="2.5" rx="1" fill="#94A3B8" />
    <rect x="20" y="41" width="18" height="2.5" rx="1" fill="#94A3B8" />
    <circle cx="42" cy="46" r="4" fill="#10B981" />
  </svg>
);

// 18. Official WhatsApp Vector (Customizable color / Pure White)
export const OfficialWhatsAppIcon = ({
  size = 28,
  color = "#FFFFFF",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.67 14.51 13.52 14.68C13.38 14.84 13.23 14.87 12.98 14.74C12.73 14.62 11.93 14.35 10.98 13.51C10.24 12.85 9.74 12.04 9.6 11.79C9.45 11.54 9.58 11.41 9.71 11.28C9.82 11.17 9.96 10.99 10.08 10.85C10.21 10.7 10.25 10.6 10.33 10.43C10.41 10.27 10.37 10.12 10.31 10C10.25 9.87 9.76 8.67 9.55 8.18C9.35 7.7 9.15 7.77 9 7.76L8.52 7.75C8.35 7.75 8.08 7.81 7.85 8.06C7.62 8.31 6.98 8.91 6.98 10.13C6.98 11.35 7.87 12.53 8 12.7C8.12 12.87 9.74 15.36 12.22 16.43C12.81 16.69 13.27 16.84 13.63 16.95C14.22 17.14 14.76 17.11 15.19 17.05C15.67 16.98 16.66 16.45 16.87 15.87C17.07 15.28 17.07 14.78 17.01 14.68C16.95 14.57 16.81 14.51 16.56 14.39Z" />
  </svg>
);

// Cute Kid WhatsApp Vector with Green Badge
export const WhatsAppKidVector = ({ size = 28, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-bounce-joy" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
  >
    <circle cx="24" cy="24" r="23" fill="#25D366" />
    <path
      d="M24 8C15.16 8 8 15.16 8 24C8 26.83 8.74 29.5 20.12 32.77L8.5 40L15.95 38.07C18.39 39.31 21.12 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8ZM30.93 29.83C30.56 30.87 28.93 31.75 27.88 31.9C27.17 32.01 26.27 32.08 23.18 30.79C19.24 29.15 16.69 25.14 16.49 24.88C16.3 24.62 14.85 22.7 14.85 20.7C14.85 18.7 15.86 17.73 16.26 17.31C16.58 16.98 17.12 16.83 17.63 16.83C17.79 16.83 17.95 16.84 18.09 16.85C18.5 16.87 18.72 16.9 18.99 17.56C19.33 18.39 20.16 20.42 20.26 20.62C20.37 20.82 20.46 21.09 20.32 21.36C20.2 21.63 20.1 21.74 19.9 21.97C19.7 22.2 19.51 22.37 19.3 22.63C19.11 22.84 18.9 23.07 19.13 23.47C19.36 23.87 20.16 25.18 21.33 26.22C22.85 27.58 24.08 28.01 24.52 28.19C24.86 28.33 25.26 28.3 25.5 28.04C25.8 27.71 26.19 27.15 26.57 26.61C26.85 26.23 27.21 26.17 27.57 26.3C27.94 26.44 29.91 27.41 30.31 27.61C30.71 27.81 30.98 27.91 31.09 28.1C31.19 28.28 31.19 28.75 30.93 29.83Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 19. Playful Phone Call Vector
export const PhoneCallKidVector = ({ size = 28, className = "", animate = false }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animate ? "animate-wiggle" : ""} ${className}`}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <circle cx="32" cy="32" r="28" fill="#FF8533" />
    <circle cx="32" cy="32" r="25" fill="#FF6600" />
    <path
      d="M23 20C21.9 20 20.8 20.9 20.5 22C19.7 24.5 19.5 29.5 24 35.5C28.5 41.5 33.5 42.3 36 42.5C37.1 42.2 38 41.1 38 40V36C38 35.4 37.6 35 37 34.8L32.5 33.8C32 33.7 31.4 33.9 31.1 34.3L29.5 36.3C27.5 35 26 33.5 24.7 31.5L26.7 29.9C27.1 29.6 27.3 29 27.2 28.5L26.2 24C26 23.4 25.6 23 25 23H23Z"
      fill="#FFFFFF"
    />
    <path d="M38 21C42 22 45 25 46 29" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
    <path d="M42 16C48 18 52 23 54 29" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 20. Calendar / Schedule Kid Vector
export const CalendarKidVector = ({ size = 28, className = "" }: VectorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <rect x="10" y="14" width="44" height="42" rx="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
    <path d="M10 24H54V18C54 14.7 51.3 12 48 12H16C12.7 12 10 14.7 10 18V24Z" fill="#0070F3" />
    <rect x="18" y="8" width="4" height="8" rx="2" fill="#0F172A" />
    <rect x="42" y="8" width="4" height="8" rx="2" fill="#0F172A" />
    <circle cx="22" cy="34" r="3" fill="#FF6600" />
    <circle cx="32" cy="34" r="3" fill="#10B981" />
    <circle cx="42" cy="34" r="3" fill="#0070F3" />
    <circle cx="22" cy="44" r="3" fill="#8B5CF6" />
    <circle cx="32" cy="44" r="3" fill="#EC4899" />
    <circle cx="42" cy="44" r="3" fill="#F59E0B" />
  </svg>
);
