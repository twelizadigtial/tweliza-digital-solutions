import React from "react";

export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://tweliza.com/#organization",
        "name": "TWELIZA Digital Solutions",
        "alternateName": ["tweliza", "TWELIZA Web Studio"],
        "url": "https://tweliza.com",
        "logo": "https://tweliza.com/images/logo-dark.png",
        "image": "https://tweliza.com/images/projects/tweliza-digital-solutions.png",
        "description": "TWELIZA Digital Solutions is a luxury web design, web development, and digital growth studio specializing in custom 3D websites, UI/UX design, e-commerce systems, branding, and software development.",
        "email": "twelizadigital@gmail.com",
        "telephone": "+94 74 226 9976",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "LK",
          "addressRegion": "Western Province",
          "addressLocality": "Sri Lanka & Global Remote"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61593630011542",
          "https://instagram.com/tweliza",
          "https://wa.me/94742269976"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Engineering & Design Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Design & Development",
                "description": "High-performance responsive websites, web applications, and landing pages."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design & Prototyping",
                "description": "User-centered visual interface design, interactive prototypes, and design systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Development",
                "description": "Scalable e-commerce web stores with secure payment workflows and product catalog UI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3D Interactive Web Experiences",
                "description": "Immersive 3D CGI product showcases, WebGL interactive canvas, and Framer Motion animations."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://tweliza.com/#website",
        "url": "https://tweliza.com",
        "name": "TWELIZA Digital Solutions",
        "description": "Web Design, Web Development & UI/UX Studio",
        "publisher": {
          "@id": "https://tweliza.com/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
