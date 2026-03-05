import React from "react";
import { QuoteForm } from "@/components/containers";
import { Heading } from "@/components/ui";

const Form = () => {
  return (
    <section id="contact-form" className="relative scroll-mt-[79px] 2xl:py-5xl md:px-x-tablet 2xl:px-x-desktop 2xl:bg-[url('/images/form_bg.webp')] bg-cover bg-center bg-no-repeat rounded-[24px]">
      <div className="hidden 2xl:block absolute inset-0 bg-brand-primary opacity-90 rounded-[24px]" />
      <div className="relative flex flex-col items-center gap-9 md:gap-8 2xl:gap-y-12">
        <Heading as="h2" className="hidden 2xl:block text-2xl 2xl:text-[32px] font-bold leading-10 text-neutral 2xl:text-white">
          Get a Fast, Professional Estimate
          <span className="sr-only">
            {" "}
            - Metal Fabrication Services in Anaheim, Orange County, Los Angeles, and Southern California
          </span>
        </Heading>
        <QuoteForm
          heading="Contact Us"
          hasTitle={false}
          buttonLabel="Get in touch"
          className="w-full px-m md:px-5 2xl:px-8 rounded-3xl 2xl:w-[731px] 2xl:min-h-[630px]"
        />
      </div>
    </section>
  );
};

export default Form;
