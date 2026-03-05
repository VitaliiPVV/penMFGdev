"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui";

const CTA = () => {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-3xl md:py-2xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop bg-brand-primary">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 w-full rounded-3xl ">
        <div className="flex flex-col gap-y-3 text-center md:text-left text-white">
          <p className="text-lg/6 font-medium">Have a project in mind?</p>
          <Heading as="h2" className="text-2xl/8 2xl:text-[32px]/10 font-bold">
            Don&apos;t Hesitate, Contact Us Now!
            <span className="sr-only">
              {" "}
              - Metal Fabrication Services in Anaheim, Orange County, Los Angeles, and Southern California
            </span>
          </Heading>
        </div>

        <Button
          variant="secondary"
          size="lg"
          className="w-full md:w-fit whitespace-nowrap"
          onClick={handleScrollToForm}
        >
          Get In touch
        </Button>
      </div>
    </section>
  );
};

export default CTA;
