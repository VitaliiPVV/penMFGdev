import { SOCIAL_MEDIA_URLS, PHONE_NUMBERS } from "@/constants";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pen Manufacturing",
    url: "https://pen-manufacturing.com",
    logo: "https://pen-manufacturing.com/logo.png",
    description:
      "ITAR-registered AS9100 & ISO9001 certified metal fabricator since 1982. Custom metal fabrication, precision CNC machining, and welding services in Southern California.",

    foundingDate: "1982",

    address: {
      "@type": "PostalAddress",
      streetAddress: "1808 N American St",
      addressLocality: "Anaheim",
      addressRegion: "CA",
      postalCode: "92801",
      addressCountry: "US",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_NUMBERS.localFormatted,
        contactType: "customer service",
        areaServed: [
          "US",
          "Southern California",
          "Orange County",
          "Los Angeles",
        ],
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE_NUMBERS.tollFreeFormatted,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],

    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.8458,
      longitude: -117.9298,
    },

    areaServed: [
      {
        "@type": "City",
        name: "Anaheim",
      },
      {
        "@type": "City",
        name: "Los Angeles",
      },
      {
        "@type": "City",
        name: "San Diego",
      },
      {
        "@type": "City",
        name: "Long Beach",
      },
      {
        "@type": "City",
        name: "Irvine",
      },
      {
        "@type": "City",
        name: "Santa Ana",
      },
      {
        "@type": "City",
        name: "Fullerton",
      },
      {
        "@type": "City",
        name: "Orange",
      },
      {
        "@type": "City",
        name: "Brea",
      },
      {
        "@type": "City",
        name: "Newport Beach",
      },
      {
        "@type": "City",
        name: "Yorba Linda",
      },
      // Counties
      {
        "@type": "AdministrativeArea",
        name: "Orange County",
      },
      {
        "@type": "AdministrativeArea",
        name: "Los Angeles County",
      },
      {
        "@type": "AdministrativeArea",
        name: "San Bernardino County",
      },
      {
        "@type": "AdministrativeArea",
        name: "Riverside County",
      },
      {
        "@type": "AdministrativeArea",
        name: "San Diego County",
      },
      {
        "@type": "State",
        name: "California",
      },
    ],

    knowsAbout: [
      "ITAR Compliance",
      "AS9100 Certification",
      "ISO9001 Certification",
      "AWS D1.1 Structural Steel Welding",
      "AWS D1.2 Aluminum Welding",
      "AWS D1.6 Stainless Steel Welding",
      "LADBS Certified FB02883-0",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Metal Fabrication Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Certified Welding Services",
            description: "AWS D1.1 certified MIG/TIG welding for aerospace & industrial applications in Los Angeles and Orange County",
            areaServed: ["Los Angeles", "Orange County", "Anaheim"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CNC Machining",
            description: "Precision CNC milling and turning for complex parts. 5-axis capabilities for aerospace and medical device manufacturers",
            areaServed: ["Los Angeles County", "Orange County"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sheet Metal Fabrication",
            description: "Custom sheet metal cutting, forming, and bending. Laser cutting and waterjet services for industrial manufacturers",
            areaServed: ["Southern California", "San Diego"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finishing & Assembly",
            description: "Complete finishing services including powder coating, anodizing, and assembly. ISO 9001:2015 certified",
            areaServed: ["Los Angeles", "Inland Empire"],
          },
        },
      ],
    },

    sameAs: Object.values(SOCIAL_MEDIA_URLS),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
