import React from "react";
import { LinkCard, QuoteForm } from "@/components/containers";
import { Breadcrumbs, GetQuote, Heading } from "@/components/ui";
import Image from "next/image";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Machining services", href: "/services/machining" },
  { label: "Full Service Machine Shop", href: "/services/machining/full-service-machine-shop" },
  { label: "Kitting Solutions" },
];

const KittingSolutions = () => {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-neutral">
        <Breadcrumbs items={breadcrumbItems} className="w-full" />

        <Heading as="h1" className="text-2xl leading-tight 2xl:text-[32px] 2xl:leading-10 font-bold">
          Kitting Solutions
          <span className="sr-only">
            {" "}
            - Metal Fabrication services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
          </span>
        </Heading>

        <figure className="relative w-full h-[350px] 2xl:h-[389px] max-w-[900px]">
          <Image
            fill
            src='/images/services/machining/kitting_solution.webp'
            alt='Kitting Solutions'
            className="object-cover rounded-3xl"
            unoptimized
          />
        </figure>

        <p className="max-w-[900px]">
          With the growing need for imaging technologies, we have come to utilize visual image inspections. The need for efficiency, precision and quality have been grown as we are now able to provide many services to our customers. Our assembly line&apos;s output must reflect market demand. We strive for flexibility and efficiency in our shop and have been proud of the many accomplishments we have been available to turn out.
        </p>

        <GetQuote />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
        <LinkCard
          label='Airfield Repair Kit'
          url='/services/machining/full-service-machine-shop/airfield-repair-kit'
        />
      </div>

      <QuoteForm
        className="px-m md:px-5 2xl:px-8 2xl:bg-inverse-subtle"
        fileInputClassName="2xl:bg-white"
      />
    </section>
  );
};

export default KittingSolutions;
