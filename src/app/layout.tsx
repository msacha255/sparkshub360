import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF6600",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sparks360hub.co.tz"),
  title: {
    default: "SPARKS 360° HUB | Elimu ya Vitendo ya STEAM, Roboti na Coding kwa Watoto Dar es Salaam",
    template: "%s | SPARKS 360° HUB",
  },
  description:
    "SPARKS 360° HUB ni kituo kikuu cha elimu ya vitendo ya STEAM (Roboti, Mizunguko ya Umeme, AI & Coding, 3D Printing, na Sayansi) kwa watoto wenye umri wa miaka 3-17 Dar es Salaam, Tanzania. Tunashirikiana na shule za kimataifa (IST, The Apton, DIA, Indian School, Kidz Kollege, Tumarich, Guiding Minds, ASK, Bright Side) pamoja na Mobile STEAM Lab inayofika majumbani na mashuleni. Kituo kipo mkabala na DIT Morogoro Road. Wasiliana nasi / WhatsApp: +255 749 998 820.",
  keywords: [
    "SPARKS 360 HUB",
    "Sparks Hub Tanzania",
    "STEAMORA COMPANY LIMITED",
    "Robotics for kids Dar es Salaam",
    "Roboti za watoto Tanzania",
    "Coding for kids Tanzania",
    "Mafunzo ya kompyuta kwa watoto",
    "Mizunguko ya umeme watoto",
    "3D printing for children Dar es Salaam",
    "Science experiments for kids Tanzania",
    "Lego education Tanzania",
    "Saturday STEAM Club Dar es Salaam",
    "Holiday STEAM Bootcamps Tanzania",
    "Mobile STEAM Lab Dar es Salaam",
    "Opposite DIT Morogoro Road",
    "International School of Tanganyika robotics",
    "The Apton School STEAM",
    "Dar es Salaam International Academy coding",
    "Indian School Dar es Salaam STEAM",
    "Kidz Kollege robotics",
    "Tumarich community STEAM",
    "Guiding Minds Academy",
    "ASK community Tanzania",
    "Bright Side Learning Centre",
    "Kids holiday camps Dar es Salaam",
    "Kambi za watoto za likizo Dar es Salaam",
  ],
  authors: [{ name: "STEAMORA COMPANY LIMITED", url: "https://sparks360hub.co.tz" }],
  creator: "STEAMORA COMPANY LIMITED",
  publisher: "STEAMORA COMPANY LIMITED",
  category: "Education",
  alternates: {
    canonical: "https://sparks360hub.co.tz",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "SPARKS 360° HUB | Elimu ya Vitendo ya STEAM, Roboti na Coding kwa Watoto",
    description:
      "Kituo kikuu cha roboti za vitendo, saketi za umeme, AI coding, na printa za 3D kwa watoto miaka 3–17 Dar es Salaam, Tanzania. Kituoni DIT na Mobile Lab inayofika kwako. Chini ya STEAMORA COMPANY LIMITED.",
    url: "https://sparks360hub.co.tz",
    siteName: "SPARKS 360° HUB",
    images: [
      {
        url: "/images/hero-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "SPARKS 360 Hub Practical STEAM Workshop for Kids in Dar es Salaam",
      },
    ],
    locale: "sw_TZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPARKS 360° HUB | Practical STEAM Education for Kids in Tanzania",
    description:
      "Hands-on robotics, electronic circuits, coding, AI & 3D printing for children aged 3-17 in Dar es Salaam. Mobile Lab & Centre opposite DIT.",
    images: ["/images/hero-showcase.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "TZ-02",
    "geo.placename": "Dar es Salaam, Tanzania",
    "geo.position": "-6.8163;39.2804",
    "ICBM": "-6.8163, 39.2804",
    "geo.country": "TZ",
    "format-detection": "telephone=yes",
    "rating": "General",
    "target-audience": "Parents, Schools, Students, Educators",
    "llm-content-declaration": "education, steam, robotics, electronics, coding, 3d-printing, science, tanzania",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sw">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* GEO Spatial & Location Optimization for Local Search */}
        <meta name="geo.region" content="TZ-02" />
        <meta name="geo.placename" content="Dar es Salaam, Tanzania" />
        <meta name="geo.position" content="-6.8163;39.2804" />
        <meta name="ICBM" content="-6.8163, 39.2804" />

        {/* Structured Data JSON-LD for Google, Bing & AI Engines (ChatGPT, Perplexity, Gemini) */}
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
