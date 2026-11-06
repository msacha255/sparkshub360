import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": "https://sparks360hub.co.tz/#organization",
    name: "SPARKS 360° HUB",
    alternateName: ["Sparks Hub Tanzania", "Sparks 360 Hub", "STEAMORA SPARKS HUB"],
    legalName: "STEAMORA COMPANY LIMITED",
    url: "https://sparks360hub.co.tz",
    logo: "https://sparks360hub.co.tz/images/logo.png",
    image: "https://sparks360hub.co.tz/images/hero-showcase.jpg",
    description:
      "SPARKS 360° HUB is a premier hands-on STEAM innovation center delivering practical robotics, circuits, AI coding, 3D printing, and science experiments for kids aged 3 to 17 across Dar es Salaam, Tanzania. An educational programme under STEAMORA COMPANY LIMITED.",
    telephone: "+255749998820",
    email: "sparkshubtz@gmail.com",
    priceRange: "TSh 30,000 - TSh 350,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Morogoro Road & Bibi Titi Mohammed, Opposite DIT Campus",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      postalCode: "11101",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.8163,
      longitude: 39.2804,
    },
    hasMap: "https://maps.google.com/?q=Dar+es+Salaam+Institute+of+Technology",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:30",
      },
    ],
    sameAs: [
      "https://instagram.com/spark360hub_tz",
      "https://wa.me/255749998820",
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Dar es Salaam, Tanzania",
      },
      {
        "@type": "AdministrativeArea",
        name: "Masaki, Oysterbay, Mikocheni, Upanga, Mbezi Beach, Tanzania",
      },
    ],
    knowsAbout: [
      "Practical STEAM Education",
      "LEGO Robotics and Mindstorms",
      "Electronics and Breadboard Circuit Building",
      "Scratch Block Coding and Python Programming for Children",
      "3D Modeling and 3D Printing Prototyping",
      "Kids Science Laboratory Experiments",
      "School Holiday STEAM Bootcamps",
      "Saturday STEAM Club",
      "Mobile STEAM Lab Services",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "International School of Tanganyika (IST) Partner Network",
      },
      {
        "@type": "Organization",
        name: "The Apton School Partner Network",
      },
      {
        "@type": "Organization",
        name: "Dar es Salaam International Academy (DIA) Partner Network",
      },
      {
        "@type": "Organization",
        name: "Indian School Dar es Salaam Partner Network",
      },
      {
        "@type": "Organization",
        name: "Kidz Kollege Partner Network",
      },
      {
        "@type": "Organization",
        name: "Tumarich Community Network",
      },
      {
        "@type": "Organization",
        name: "Guiding Minds Academy Network",
      },
      {
        "@type": "Organization",
        name: "ASK Community Network",
      },
      {
        "@type": "Organization",
        name: "Bright Side Learning Centre Network",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SPARKS 360° HUB in Tanzania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SPARKS 360° HUB is a mobile STEAM innovation center operated under STEAMORA COMPANY LIMITED in Dar es Salaam, Tanzania. It delivers hands-on robotics, solder-free electronic circuits, AI & computer programming, 3D printing, and scientific experiments for children aged 3 to 17.",
        },
      },
      {
        "@type": "Question",
        name: "Where is SPARKS 360° HUB located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The main physical innovation workshop is located opposite the DIT Campus along Morogoro Road and Bibi Titi Mohammed Street in Dar es Salaam, Tanzania. Furthermore, the SPARKS 360° Mobile STEAM Lab travels directly to homes, partner schools, and community centers throughout the city.",
        },
      },
      {
        "@type": "Question",
        name: "Which partner schools collaborate with SPARKS 360° HUB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leading schools and community academies include International School of Tanganyika (IST), The Apton School, Dar es Salaam International Academy (DIA), Indian School Dar es Salaam, Kidz Kollege, Tumarich Community, Guiding Minds Academy, ASK Community, and Bright Side Learning Centre.",
        },
      },
      {
        "@type": "Question",
        name: "What age groups are welcome at SPARKS 360° HUB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Children from 3 to 17 years old are welcome. Learners are grouped into age-appropriate cohorts: Early Explorers (Ages 3-5), Junior Inventors (Ages 6-9), Young Engineers (Ages 10-13), and Tech Innovators (Ages 14-17).",
        },
      },
      {
        "@type": "Question",
        name: "How can parents register and pay for classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parents can enroll online through the official website registration form or contact the administration directly via WhatsApp / Call at +255 749 998 820. Payments are accepted via all mobile money networks (Tigo Pesa, M-Pesa, Airtel Money, HaloPesa) to the official business line under STEAMORA COMPANY LIMITED.",
        },
      },
    ],
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "Hands-on Robotics & Autonomous Machines",
        description: "Building motorized chassis, obstacle detection with ultrasonic sensors, and microcontroller programming for young learners.",
        provider: {
          "@type": "EducationalOrganization",
          name: "SPARKS 360° HUB",
        },
      },
      {
        "@type": "Course",
        position: 2,
        name: "Electronics, Breadboards & Electric Circuits",
        description: "Practical solder-free breadboard electronics, LED matrix logic, sensors, buzzers, and microchip power systems.",
        provider: {
          "@type": "EducationalOrganization",
          name: "SPARKS 360° HUB",
        },
      },
      {
        "@type": "Course",
        position: 3,
        name: "Coding, Game Logic & Creative AI for Kids",
        description: "Scratch block programming, Python algorithms, and generative AI literacy tailored for children aged 5-17.",
        provider: {
          "@type": "EducationalOrganization",
          name: "SPARKS 360° HUB",
        },
      },
      {
        "@type": "Course",
        position: 4,
        name: "3D CAD Modeling & 3D Printing Prototyping",
        description: "Turning digital 3D geometry into physical real-world plastic parts using rapid prototyping 3D printers.",
        provider: {
          "@type": "EducationalOrganization",
          name: "SPARKS 360° HUB",
        },
      },
      {
        "@type": "Course",
        position: 5,
        name: "Saturday STEAM Club & Holiday Bootcamps",
        description: "Weekly Saturday innovation sessions and school vacation intensive bootcamps with individual hardware kits provided.",
        provider: {
          "@type": "EducationalOrganization",
          name: "SPARKS 360° HUB",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
    </>
  );
}
