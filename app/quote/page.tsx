import React from 'react'
import { Heading } from '@/components/ui';
import { QuoteForm } from '@/components/containers'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Get a free quote for your custom metal fabrication, CNC machining, or welding project. Fast response from our experienced team in Southern California.",
  alternates: {
    canonical: "/quote"
  },
  openGraph: {
    title: "Request a Quote | Pen Manufacturing",
    description: "Get a custom quote for metal fabrication, CNC machining, and welding services.",
    url: "/quote"
  },
};

const Quote = () => {
  return (
    <section className="py-4xl md:py-5xl bg-white">
      <div className="relative  2xl:h-[902px] py-8 md:py-0 2xl:py-16 px-4 md:px-11 2xl:px-30 2xl:bg-[url('/images/form_bg.webp')] bg-cover bg-center bg-no-repeat rounded-[24px]">
        <div className="hidden 2xl:block absolute inset-0 bg-brand-primary opacity-90 rounded-[24px]" />
        <div className="relative flex flex-col items-center gap-9 md:gap-8 2xl:gap-y-12">
          <Heading as="h1" className="hidden 2xl:block text-2xl 2xl:text-[32px] font-bold leading-10 text-neutral 2xl:text-white">
            Get a Fast, Professional Estimate
            <span className="sr-only">
              {" "}
              - Metal Fabrication & CNC Machining Services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
            </span>
          </Heading>
          <QuoteForm hasTitle={false} className="px-m md:px-5 2xl:px-8 2xl:w-[731px]" />
        </div>
      </div>
    </section>
  )
}

export default Quote