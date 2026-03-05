import { CertificationsCarousel } from "@/components/containers";
import { Heading } from "@/components/ui";

const Certifications = () => {
  return (
    <section className="flex flex-col gap-y-2xl py-6 rounded-[24px">
      <div className="px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
        <Heading
          as="h2"
          className="max-w-[1440px] mx-auto text-2xl/8 md:text-[32px]/10 font-bold"
        >
          <span className="text-neutral">Certification </span>{" "}
          <span className="text-brand-primary">& Licenses</span>
          <span className="sr-only">
            {" "}
            - AS9100, ISO 9001, ITAR Certified in Anaheim, Orange County, Los Angeles, and Southern California
          </span>
        </Heading>
      </div>

      <CertificationsCarousel className="py-6" />
    </section>
  );
};

export default Certifications;
