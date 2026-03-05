import { InfoCard } from "@/components/containers";
import { Heading } from "@/components/ui";
import { CodesData } from "./consts";

const MachineCodes = () => {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2" className="text-2xl/8 2xl:text-2xl/10 font-bold text-neutral">
        NAICS Code 332710 - <span className="text-brand-primary">Machine Shop</span>
      </Heading>

      <p className="max-w-[900px] font-medium leading-tight text-neutral leading-[130%]">
        Pen Manufacturing is registered with the North American Industry Classification System (NAICS) under code 332710 - Machine Shop. As a full-service metal fabrication shop, we also have capabilities for the following NAICS codes:
      </p>

      <div className="flex flex-col gap-5">
        <p className="font-semibold leading-tight text-neutral">
          CNC Machinery at our Anaheim Jobshop:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {CodesData.map((code) => (
            <InfoCard
              key={code.id}
              title={code.title}
              text={code.description}
              className="bg-white border border-eleveted"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineCodes;
