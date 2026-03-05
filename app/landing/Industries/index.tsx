import { IndustryList } from "@/components/containers";
import { Heading } from "@/components/ui";

const Industries = () => {
  return (
    <section className="py-2xl 2xl:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <div className="flex flex-col gap-y-6 max-w-[1440px] mx-auto">
        <Heading
          as="h2"
          className="text-[24px] leading-[32px] 2xl:text-[32px] 2xl:leading-normal font-extrabold text-neutral"
        >
          <span className="text-neutral">Featured</span>{" "}
          <span className="text-brand-primary font-bold">Industries</span>
          <span className="sr-only">
            {" "}
            - Aerospace, Medical Devices, Automotive Manufacturing in Anaheim, Orange County, Los Angeles, and Southern California
          </span>
        </Heading>

        <IndustryList isLinkDisabled />
      </div>
    </section>
  );
};

export default Industries;
