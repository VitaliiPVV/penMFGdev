import { PHONE_NUMBERS } from "@/constants";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceUrl: string;
}

export function ServiceSchema({
  serviceName,
  description,
  serviceUrl,
}: ServiceSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Pen Manufacturing",
      url: "https://pen-manufacturing.com",
      telephone: PHONE_NUMBERS.localFormatted,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1808 N American St",
        addressLocality: "Anaheim",
        addressRegion: "CA",
        postalCode: "92801",
        addressCountry: "US",
      },
    },
    serviceType: "Metal Fabrication",
    areaServed: [
      {
        "@type": "State",
        name: "California",
      },
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
    ],
    url: `${baseUrl}${serviceUrl}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
