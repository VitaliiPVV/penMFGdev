import React from "react";
import { Heading } from "@/components/ui";
import ServicesCard from "./ServicesCard";
import Link from "next/link";
import { LINKS } from "./consts";

const Services = () => {
  return (
    <section className="bg-inverse-subtle">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-y-xl px-4 md:px-11 2xl:px-30 py-4xl 2xl:py-5xl">
        <Heading
          as="h2"
          className="text-[24px] 2xl:text-[32px] font-bold leading-8 2xl:leading-10"
        >
          <span className="text-neutral">Explore</span>{" "}
          <Link
            href="portfolio/services/certified-welding"
            className="text-brand-primary font-bold"
          >
            Our Services
          </Link>
          <span className="sr-only">
            {" "}
            - Welding, Machining, Sheet Metal in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Brea, Yorba Linda, Newport Beach, Long Beach, San Diego, Riverside, San Bernardino, and Southern California
          </span>
        </Heading>

        <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {LINKS.map(({ id, ...data }) => (
            <li key={id} className="h-full">
              <ServicesCard {...data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
