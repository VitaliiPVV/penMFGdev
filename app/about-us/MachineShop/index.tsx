import { InfoCard } from "@/components/containers";
import { Heading } from "@/components/ui";
import { Machines } from "./consts";

const MachineShop = () => {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2" className="text-2xl/8 2xl:text-2xl/10 font-bold text-neutral">
        LADBS Certified Southern California <span className="text-brand-primary">Metal Fabricator & Machine Shop</span>
      </Heading>

      <p className="max-w-[900px] text-neutral leading-[130%]">Pen Manufacturing is now certified by The City of Los Angeles Department of Building and Safety (LADBS) recognizing proficiency with aluminum, stainless steel, carbon steel, high-strength steel, and others. You can trust Pen to have the expertise to take on public projects around LA and Southern California area. License number FB02883-0.</p>
      <p className="max-w-[900px] text-neutral leading-[130%]">Pen Manufacturing provides these comprehensive services to customers that are looking for a complete &quot;turn-key&quot; solution. Contact the Pen Manufacturing team today for help in solving your unique manufacturing challenges.</p>

      <div className="flex flex-col gap-5">
        <p className="font-medium leading-tight text-neutral">
          Our Machine Shop service area includes many areas of greater Los Angeles including:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {Machines.map((machine) => (
            <InfoCard
              key={machine.id}
              title={machine.name}
              className="py-[30px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineShop;
