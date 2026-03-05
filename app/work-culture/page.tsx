import { Breadcrumbs, Heading } from "@/components/ui";
import About from "./components/About";
import Content from "./components/Content";
import Hero from "./components/Hero";
import TabGallery from "./components/TabGallery";
import { TabProvider } from "./contexts/TabContext";
import type { Metadata } from "next";
import { breadcrumbItems } from "./constants";

export const metadata: Metadata = {
  title: "Work Culture",
  description:
    "RHINOS culture team: Collaborative environment, professional growth & comprehensive benefits. 401k match, PTO, employee appreciation events. Join us today!",
  keywords: [
    "RHINOS culture",
    "employee-centric workplace",
    "collaborative manufacturing environment",
    "professional development",
    "work-life balance",
    "employee appreciation",
    "manufacturing team culture",
    "skilled craftsmen jobs",
    "Anaheim workplace",
    "family-friendly employer",
  ],
  alternates: {
    canonical: "/work-culture",
  },
  openGraph: {
    title: "Work Culture | Pen Manufacturing",
    description:
      "Join our RHINOS culture team! Collaborative environment with professional growth opportunities, employee appreciation events, and comprehensive benefits.",
    url: "/work-culture",
  },
};

export default function WorkCulturePage() {
  return (
    <section className="flex flex-col py-4xl md:py-5xl">
      <div className="mx-auto w-full max-w-[1440px] px-x-mobile md:px-x-tablet 2xl:px-x-desktop flex flex-col gap-y-3">
        <Breadcrumbs items={breadcrumbItems} />
        <Heading
          as="h1"
          className="sr-only text-2xl/8 2xl:text-[32px]/[100%] font-bold 2xl:font-extrabold text-neutral"
        >
          Work Culture - Manufacturing Jobs and Careers in Anaheim, Orange County, Los Angeles, and Southern California
        </Heading>
      </div>

      <div className="flex flex-col gap-y-4xl md:gap-y-5xl">
        <Hero />
        <Content />
        <About />
        <TabProvider>
          <TabGallery title="Photo Gallery" />
        </TabProvider>
      </div>
    </section>
  );
}
