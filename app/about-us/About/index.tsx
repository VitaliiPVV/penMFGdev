import { CirclePattern, Heading } from "@/components/ui";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative overflow-hidden flex flex-col 2xl:flex-row 2xl:items-center gap-6 p-xl md:p-3xl 2xl:p-4xl rounded-3xl text-white bg-brand-primary">
      <Heading
        as="h2"
        className="z-10 text-2xl/8 md:text-[44px]/[125%] font-bold md:font-extrabold"
      >
        About PEN Manufacturing
      </Heading>

      <p className="z-10 2xl:max-w-[639px] text-sm/[125%] font-medium">
        Pen Manufacturing was created by merging three Anaheim-based metal
        fabrication companies to offer a{" "}
        <Link
          href="/portfolio"
          className="text-white underline hover:text-brand-subtle transition-colors"
        >
          full range of services
        </Link>
        . Combining their expertise allowed them to scale quickly and serve the
        expanding California manufacturing market. Today, the company continues
        to grow, providing{" "}
        <Link
          href="/quality"
          className="text-white underline hover:text-brand-subtle transition-colors"
        >
          high-quality
        </Link>
        , comprehensive{" "}
        <Link
          href="/portfolio/services/certified-welding"
          className="text-white underline hover:text-brand-subtle transition-colors"
        >
          fabrication services
        </Link>{" "}
        to a wide range of industries.
      </p>

      <CirclePattern
        containerClassName="-right-24 top-21 md:-left-84 md:top-20"
        boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.12) inset"
        innerCircleClassName="size-[342.09px] bg-[#2A3EAB]"
        middleCircleClassName="size-[555.531px] bg-[#2C40AB]"
        outerCircleClassName="size-[774.82px] bg-[#2C3DAD]"
      />
    </section>
  );
};

export default About;
