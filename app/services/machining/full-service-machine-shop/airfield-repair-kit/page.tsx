import React from "react";
import { InfoCard, QuoteForm } from "@/components/containers";
import { Breadcrumbs, GetQuote, Heading } from "@/components/ui";
import Image from "next/image";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Machining services", href: "/services/machining" },
  { label: "Full Service Machine Shop", href: "/services/machining/full-service-machine-shop" },
  { label: "Airfield Repair Kit" },
];

const AirfieldRepairKit = () => {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-neutral overflow-auto">
        <Breadcrumbs items={breadcrumbItems} className="w-full" />

        <Heading as="h1" className="text-2xl leading-tight 2xl:text-[32px] 2xl:leading-10 font-bold">
          Airfield Repair Kit
          <span className="sr-only">
            {" "}
            - Metal Fabrication services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
          </span>
        </Heading>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="text-2xl leading-tight font-bold">
              Emergency Airfield Repair Kit - Rapid Runway Repair Kit
              <span className="sr-only">
                {" "}
                - Metal Fabrication services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
              </span>
            </Heading>

            <div className="flex flex-col-reverse 2xl:flex-row gap-6">
              <div className="flex flex-col gap-4 w-full 2xl:w-1/2">
                <p>The Emergency Airfield Damage Repair Kit is mission critical equipment needed to expeditiously repair damaged and substandard airstrips in critical locations. Expedient runway repairs are essential to the safe recovery of aircraft that may be in-flight when the damage occurred, to the ability to continue operations forward to ensure adequate support to soldiers. Adequate airfield facilities are undeniably vital to the success of the mission of the 82nd Airborne Division.</p>
                <p>Pen Manufacturing has developed a mobile, compact solution that will allow the 82nd Airborne to rapidly repair damaged landing strips and keep them in a safe state during disaster relief and emergency response operations. We have developed the Emergency Airfield Damage Repair Kit for emergency, mission critical equipment that is needed to rapidly mobilize and to be utilized to safely protect our troops.</p>
              </div>

              <figure className="relative w-full 2xl:w-1/2 h-[240px] md:h-[289px]">
                <Image
                  fill
                  src='/images/services/machining/repair_kit.webp'
                  alt='Airfield Repair Kit'
                  className="object-cover rounded-3xl"
                  unoptimized
                />
              </figure>
            </div>
          </div>

          <GetQuote />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Heading as="h2" className="text-2xl leading-tight font-bold">
          Airfield Damage Repair Kits
          <span className="sr-only">
            {" "}
            - Metal Fabrication services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
          </span>
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className='rounded-2xl p-6 bg-inverse-subtle flex flex-col gap-3'>
            <p className="font-semibold leading-6 text-lg text-neutral">EADR-C-KIT</p>
            <p className="leading-6 text-lg text-muted">
              <span>Emergency Airfield Damage Repair Consumables Kit</span><br />
              <span><strong>MSRP</strong>: $26,248.00. FOB: ZIP 92801</span>
            </p>
          </div>
          <div className='rounded-2xl p-6 bg-inverse-subtle flex flex-col gap-3'>
            <p className="font-semibold leading-6 text-lg text-neutral">EADR-D-KIT</p>
            <p className="leading-6 text-lg text-muted">
              <span>Emergency Airfield Damage Repair Durables Kit</span><br />
              <span><strong>MSRP</strong>: $208,164.00. FOB: ZIP 92801</span>
            </p>
          </div>
        </div>
      </div>

      <QuoteForm
        className="px-m md:px-5 2xl:px-8 2xl:bg-inverse-subtle"
        fileInputClassName="2xl:bg-white"
      />
    </section>
  );
};

export default AirfieldRepairKit;
