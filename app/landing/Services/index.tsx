import React from "react";
import { Heading } from "@/components/ui";
import ServiceCard from "./components/ServiceCard";
import { services } from "./constants";

const Services = () => {
  return (
    <section className="py-16 px-x-mobile md:px-x-tablet 2xl:px-x-desktop rounded-3xl bg-inverse-subtle">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-y-xl md:gap-y-2xl">
          <div className="flex flex-col gap-y-3">
            <Heading
              as="h2"
              className="text-[24px]/8 md:text-[32px]/10 font-bold text-neutral"
            >
              <span>Our</span>{" "}
              <span className="text-brand-primary">Services</span>
              <span className="sr-only">
                {" "}
                - CNC Machining, Welding, Sheet Metal in Anaheim, Orange County, Los Angeles, and Southern California
              </span>
            </Heading>

            <p className="max-w-[796px] text-lg/6 font-medium text-neutral">
              We provide end-to-end manufacturing solutions engineered to the
              highest standards. Our commitment to quality is validated by our
              AS9100D, ISO 9001, and ITAR certifications, making us a trusted
              partner for mission-critical aerospace, defense, and industrial
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
