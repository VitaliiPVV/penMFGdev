import React from "react";
import Gallery from "./Gallery";
import Materials from "./Materials";
import { CustomSuspense } from "@/components/ui";
import type { Metadata } from "next";
import { PHONE_NUMBERS } from "@/constants";
import { QuoteForm } from "@/components/containers";
import PortfolioLinks from "./PortfiloLinks";
import LinkCard from "./PortfiloLinks/LinkCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Featured projects: Hyperloop Test Sled, Angel Stadium Anaheim, Caltech. Custom SS tanks, biomixers, clarifiers, piping. Serving LA, San Diego, Southern California. Call ${PHONE_NUMBERS.local}.`,
  keywords: [
    "Hyperloop Test Sled fabrication",
    "Angel Stadium project",
    "Caltech manufacturing",
    "stainless steel tanks",
    "biomixers fabrication",
    "clarifiers manufacturing",
    "custom SS piping",
    "wastewater treatment equipment",
    "aerospace projects",
    "custom metal fabrication portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | Pen Manufacturing",
    description:
      "High-profile projects including Hyperloop Test Sled, Angel Stadium, and Caltech. Custom stainless steel tanks, biomixers, and precision fabrication.",
    url: "/portfolio",
  },
};

const Portfolio = async () => {
  return (
    <section className="flex flex-col gap-y-4xl 2xl:gap-y-5xl max-w-[1440px] mx-auto py-4xl md:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <Gallery />
      <PortfolioLinks />
      <CustomSuspense>
        <Materials />
      </CustomSuspense>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:mb-16">
        <LinkCard
          label="Machinery Projects"
          url="/portfolio/machinery-projects"
        />
      </div>
      <QuoteForm
        className="px-m md:px-5 2xl:px-8 2xl:bg-inverse-subtle"
        fileInputClassName="2xl:bg-white"
      />
    </section>
  );
};

export default Portfolio;
