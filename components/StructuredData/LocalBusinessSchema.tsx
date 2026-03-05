import { PHONE_NUMBERS } from "@/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pen-manufacturing.com",

    name: "Pen Manufacturing",
    image: "https://pen-manufacturing.com/images/facility.jpg",

    address: {
      "@type": "PostalAddress",
      streetAddress: "1808 N American St",
      addressLocality: "Anaheim",
      addressRegion: "CA",
      postalCode: "92801",
      addressCountry: "US",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.8458,
      longitude: -117.9298,
    },

    telephone: PHONE_NUMBERS.localFormatted,

    priceRange: "$$$",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:00",
        closes: "15:00",
      },
    ],

    url: "https://pen-manufacturing.com",
    email: "info@pen-manufacturing.com",

    paymentAccepted: ["Cash", "Check", "Credit Card", "Invoice"],

    currenciesAccepted: "USD",

    areaServed: [
      "Anaheim",
      "Los Angeles",
      "San Diego",
      "Orange County",
      "Southern California",
    ],

    slogan: "Your Partner in Supply Chain Manufacturing Success",

    foundingDate: "1982",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
