import { CirclePattern, Heading } from "@/components/ui";
import React from "react";

const About = () => {
  return (
    <section className="px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <div className="max-w-[1440px] mx-auto relative overflow-hidden flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6 p-xl md:p-3xl 2xl:p-4xl rounded-3xl text-white bg-brand-primary">
        <Heading
          as="h2"
          className="max-w-[441px] z-10 text-2xl/8 md:text-[44px]/[125%] font-bold md:font-extrabold"
        >
          About PEN Manufacturing
          <span className="sr-only">
            {" "}
            - AS9100/ISO Certified Metal Fabrication in Anaheim, Orange County, Los Angeles, and Southern California
          </span>
        </Heading>

        <p className="z-10 2xl:max-w-[639px] text-sm/[125%] font-medium">
          Founded in 1982, PEN Manufacturing has been a trusted partner in
          supporting local infrastructure and a wide range of industries with
          precision fabrication services. What began as three Anaheim-based
          metal fabrication companies has evolved into a unified, full-service
          manufacturing facility—offering machining, sheet metal, certified
          welding, finishing, and assembly under one roof. As an
          AS9100/ISO-certified and ITAR-registered facility, we uphold rigorous
          quality standards and leverage advanced technologies to meet the
          demands of modern manufacturing. Our team of degreed mechanical
          engineers ensures every project—from prototype to large-scale
          production—meets the highest standards of precision and performance.
          With an average lead time of just 3.2 weeks and a 98.9% quality
          rating, PEN Manufacturing continues to deliver results that our
          clients trust. Our customer base spans from small prototype facilities
          to Fortune 500 companies, all relying on us for dependable engineering
          support, responsive service, and superior craftsmanship.
        </p>

        <CirclePattern
          containerClassName="-right-24 top-21 md:-left-94 md:-top-10"
          boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.12) inset"
          innerCircleClassName="size-[342.09px] bg-[#2A3EAB]"
          middleCircleClassName="size-[555.531px] bg-[#2C40AB]"
          outerCircleClassName="size-[774.82px] bg-[#2C3DAD]"
        />
      </div>
    </section>
  );
};

export default About;
