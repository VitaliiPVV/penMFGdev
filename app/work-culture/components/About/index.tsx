import { Button, CirclePattern, Heading } from "@/components/ui";
import Link from "next/link";
import React from "react";
import VideoCarousel from "./VideoCarousel";

const About = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-brand-primary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 max-w-[1440px] mx-auto py-3xl md:py-8 px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
          <div className="flex flex-col gap-y-3 text-center md:text-left text-white">
            <p className="text-lg/6 font-medium">
              Looking for your next opportunity?
            </p>
            <Heading
              as="h2"
              className="text-2xl/8 2xl:text-[32px]/10 font-bold"
            >
              Join our team and build your future!
            </Heading>
          </div>

          <Link href="/jobs" className="w-full md:w-fit">
            <Button size="lg" variant="secondary" className="w-full">
              Go to Jobs
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden py-4xl md:py-5xl rounded-b-3xl bg-inverse-subtle">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-y-4 max-w-[1440px] mx-auto py-3xl md:py-8 px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
          <VideoCarousel />
        </div>

        <CirclePattern
          containerClassName="-top-110 -left-90 md:-top-60 md:-left-76 2xl:-top-90 2xl:-left-90"
          innerCircleClassName="size-[327.723px] md:size-[250.054px] 2xl:size-[327.723px]"
          middleCircleClassName="size-[532.2px] md:size-[406.07px] 2xl:size-[532.2px]"
          outerCircleClassName="size-[742.279px] md:size-[566.361px] 2xl:size-[742.279px]"
          boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
        />
      </div>
    </section>
  );
};

export default About;
