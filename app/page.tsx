import About from "./home/About";
import Certifications from "./home/Certifications";
import Content from "./home/Content";
import Form from "./home/Form";
import Gallery from "./home/Gallery";
import Hero from "./home/Hero";
import Metrics from "./home/Metrics";
import Services from "./home/Services";
import Industries from "./home/Industries";
import { CustomSuspense } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Metal Fabrication Los Angeles | CNC Machining Orange County | Pen Manufacturing",
  description:
    "Precision metal fabrication, CNC machining, and certified welding services in Anaheim, Irvine, Santa Ana, Fullerton, and throughout Los Angeles & Orange County. Serving aerospace, medical device, and industrial manufacturers across Southern California since 1982. ISO 9001:2015 certified.",
  keywords: [
    "metal fabrication Los Angeles",
    "CNC machining Orange County",
    "welding services Anaheim",
    "metal fabrication Irvine",
    "sheet metal Santa Ana",
    "machining Fullerton",
    "fabrication Newport Beach",
    "welding Brea",
    "manufacturing Yorba Linda",
    "aerospace manufacturing California",
    "medical device fabrication Orange County",
    "industrial metal fabrication San Diego",
    "custom sheet metal Los Angeles County",
    "precision machining Long Beach",
    "certified welding services Riverside County",
    "B2B manufacturing San Bernardino",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Metal Fabrication & CNC Machining | Los Angeles & Orange County | Pen Manufacturing",
    description:
      "Leading B2B metal fabricator serving Anaheim, Irvine, Santa Ana, Fullerton, Long Beach, and all of Southern California. Aerospace, medical, industrial manufacturing. ISO 9001:2015 certified since 1982.",
    url: "/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.pen-mfg.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pen Manufacturing - Metal Fabrication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Metal Fabrication & CNC Machining | Pen Manufacturing",
    description:
      "Leading B2B metal fabricator serving Southern California. Aerospace, medical, industrial manufacturing.",
    images: ["https://www.pen-mfg.com/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <section className="flex flex-col gap-y-12 md:gap-y-16 pb-12 md:pb-16">
      <Hero />
      <Metrics />
      <Content />
      <Services />
      <Industries />
      <CustomSuspense>
        <Gallery />
      </CustomSuspense>
      <About />
      <CustomSuspense>
        <Certifications />
      </CustomSuspense>
      <CustomSuspense>
        <Form />
      </CustomSuspense>
    </section>
  );
}
