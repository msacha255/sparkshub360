import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF6600",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sparks360hub.co.tz"),
  title: "SPARKS 360° HUB | Practical STEAM Education for Kids in Tanzania",
  description:
    "SPARKS 360° HUB is a mobile innovation hub delivering hands-on STEAM learning (Robotics, Electronics & Circuits, Coding, 3D Printing, AI, and Science Experiments) to homes, schools, and communities across Tanzania. An Educational Programme under STEAMORA COMPANY LIMITED. Call/WhatsApp: +255 749 998 820.",
  keywords: [
    "Sparks 360 Hub",
    "Sparks Hub Tanzania",
    "STEAMORA COMPANY LIMITED",
    "Robotics for kids Dar es Salaam",
    "Kids coding Tanzania",
    "STEAM with AI for Kids",
    "Electronics and circuits kids Tanzania",
    "3D printing for children",
    "Scientific experiments for kids",
    "Mobile STEAM Lab Tanzania",
    "Opposite DIT Morogoro Road",
  ],
  authors: [{ name: "SPARKS 360° HUB - STEAMORA COMPANY LIMITED" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "SPARKS 360° HUB | Innovation Starts Here",
    description:
      "Hands-on robotics, circuits, AI coding, and science experiments for kids aged 3-17 in Tanzania. Under STEAMORA COMPANY LIMITED.",
    url: "https://sparks360hub.co.tz",
    siteName: "Sparks 360° Hub",
    images: [
      {
        url: "/images/flyer-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sparks 360 Hub Workshop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
