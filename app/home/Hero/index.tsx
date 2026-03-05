import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[747px] 2xl:h-[721px] flex flex-col items-center justify-center rounded-b-3xl p-4 md:p-11 2xl:px-80 overflow-hidden">
      <Image
        src="/images/hero_bg.webp"
        alt="Pen Manufacturing precision metal fabrication facility"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={60}
      />
      <div className="absolute inset-0 w-full h-full opacity-60 bg-black rounded-b-3xl z-10" />
      <div className="relative z-20 flex flex-col justify-center items-center h-full 2xl:h-fit">
        <Heading
          as="h1"
          className="max-w-[781px] pb-5 2xl:pb-4 text-white text-[28px] md:text-[32px] 2xl:text-[44px] leading-[100%] md:leading-[125%] font-extrabold text-center"
        >
          Southern California&apos;s leader in precision metal manufacturing for
          critical supply chains
          <span className="sr-only">
            {" "}
            - Serving Anaheim, Los Angeles, Orange County, Irvine, Santa Ana,
            Fullerton, Long Beach, San Diego, and all of Southern California
          </span>
        </Heading>
        <p className="text-inverse-subtle text-lg/6 font-medium text-center">
          Delivering complex, high-quality fabrication and supply solutions you
          can rely on
        </p>
      </div>
      <div className="relative z-20 mt-auto 2xl:mt-6 flex flex-col md:flex-row items-center gap-4 2xl:gap-6 w-full 2xl:w-fit">
        <Link href="/quote" className="w-full 2xl:w-fit">
          <Button
            size="lg"
            className="w-full hover:bg-brand-primary hover:text-white"
            variant="secondary"
          >
            Get A Quote
          </Button>
        </Link>

        <Link
          href="/portfolio/services/certified-welding"
          className="w-full 2xl:w-fit"
        >
          <Button
            size="lg"
            variant="outline"
            className="w-full text-white border-white hover:bg-white hover:text-brand-primary"
          >
            View Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
