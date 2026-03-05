import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui";
import React from "react";
import Team from "./Team";
import About from "./About";
import { QuoteForm } from "@/components/containers";
import type { Metadata } from "next";
import Experience from "./Experience";
import Equipments from "./Equipments";
import Services from "./Services";
import VideosSection from "./VideosSection";
import MachineShop from "./MachineShop";
import MachineCodes from "./MachineCodes";
import Links from "./Links";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LADBS certified metal fabricator (FB02883-0) with 145+ years welding experience, 200+ years fabrication expertise. Hurco CNC machining, turn-key solutions. NAICS 332710. Serving Orange County, LA, Anaheim.",
  keywords: [
    "LADBS certified fabricator",
    "FB02883-0",
    "Hurco CNC machines",
    "NAICS 332710",
    "machine shop Anaheim",
    "certified welder Orange County",
    "turn-key metal fabrication",
    "CNC machining Los Angeles",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Pen Manufacturing",
    description:
      "LADBS certified metal fabricator with 145+ years combined welding experience. Hurco CNC machines, MIG/TIG welding stations, turn-key manufacturing solutions in Southern California.",
    url: "/about-us",
  },
};

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About us" }];

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-y-xl py-4xl md:py-5xl">
      <div className="flex flex-col gap-y-3 w-full max-w-[1440px] mx-auto px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
        <Breadcrumbs items={breadcrumbItems} className="w-full" />
        <Heading
          as="h1"
          className="sr-only text-2xl/8 2xl:text-[32px]/[100%] font-bold 2xl:font-extrabold text-neutral"
        >
          About us - Metal Fabrication Services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, and Southern California
        </Heading>
      </div>

      <div className="flex flex-col gap-y-5xl max-w-[1440px] mx-auto px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
        <Team />
        <About />
        <Experience />
        <Equipments />
        <Services />
      </div>
    
      <VideosSection />

      <div className="flex flex-col gap-y-5xl max-w-[1440px] mx-auto px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
        <MachineShop />
        <MachineCodes />
        <Links />
        <QuoteForm
          className="px-m md:px-5 2xl:px-8 2xl:bg-inverse-subtle"
          fileInputClassName="2xl:bg-white"
        />
      </div>
    </section>
  );
};

export default AboutUs;
