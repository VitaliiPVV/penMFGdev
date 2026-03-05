"use client";

import { QuoteForm } from "@/components/containers";
import { Heading } from "@/components/ui";
import Image from "next/image";
import Metrics from "./components/Metrics";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] 2xl:min-h-[953px] pb-[34px] md:pb-[44px] 2xl:pb-16 pt-12 md:pt-10 2xl:pt-16 px-x-mobile md:px-x-tablet 2xl:px-x-desktop rounded-b-3xl overflow-hidden">
      <Image
        src="/images/hero_bg.webp"
        alt="Pen Manufacturing precision metal fabrication facility"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 w-full h-full bg-[#030F2F99]/80 rounded-b-3xl z-10" />

      <div className="flex flex-col items-center justify-center relative z-10 w-full h-full max-w-screen-2xl mx-auto">
        <div className="flex-1 flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between gap-8 2xl:gap-[51px] w-full">
          <div className="flex flex-col gap-l md:gap-xl 2xl:min-w-[566px] flex-1 text-center md:text-left w-full">
            <Heading
              as="h1"
              className="text-[28px]/[125%] md:text-[32px]/[125%] 2xl:text-[44px]/[125%] font-extrabold text-white"
            >
              PEN Manufacturing: Your Trusted Partner in Precision Machining,
              Sheet Metal, and Welding for High-Performance Industries
              <span className="sr-only">
                {" "}
                - Serving Anaheim, Orange County, Los Angeles, and Southern California
              </span>
            </Heading>
            <p className="text-lg/6 font-medium text-white 2xl:mb-[30px]">
              Transforming complex blueprints into high-precision parts
            </p>

            <Metrics className="hidden md:hidden 2xl:grid" />
          </div>

          <QuoteForm
            type="landing"
            hasTitle={false}
            className="2xl:mt-[35px] 2xl:min-w-[583px] bg-white md:bg-white px-m md:px-2xl 2xl:px-xl rounded-3xl"
          />
        </div>

        <Metrics className="2xl:hidden pt-8" />
      </div>
    </section>
  );
};

export default Hero;
