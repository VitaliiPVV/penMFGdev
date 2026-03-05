import { IndustryList } from "@/components/containers";
import { Heading } from "@/components/ui";
import Link from "next/link";

const Industries = () => {
  return (
    <section className="max-w-[1440px] 2xl:mx-auto flex flex-col gap-y-6 px-4 py-2xl 2xl:py-5xl md:px-11 2xl:px-30">
      <Heading
        as="h2"
        className="text-[24px] leading-[32px] 2xl:text-[32px] 2xl:leading-normal font-extrabold text-neutral"
      >
        <span className="text-neutral">Featured</span>{" "}
        <Link
          href="portfolio/featured-industries/aerospace-defence-space"
          className="text-brand-primary font-bold"
        >
          Industries
        </Link>
        <span className="sr-only">
          {" "}
          - Aerospace, Medical Devices, Automotive, Wastewater Treatment, Energy, Industrial Manufacturing in Anaheim, Orange County, Los Angeles, and Southern California
        </span>
      </Heading>

      <IndustryList />
    </section>
  );
};

export default Industries;
