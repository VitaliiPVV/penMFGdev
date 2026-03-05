import { InfoCard } from "@/components/containers";
import { ServicesData } from "./consts";

const Services = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="leading-[130%] text-neutral">
        Pen Manufacturing Los Angeles prides itself in running a flexible shop, one that can quickly and efficiently meet the needs of its customers. Short-run and prototype components can sometimes be completed in as little as 2-3 days, with a typical turnaround time for scheduled work being finished in 4-6 weeks, depending on the complexity of the project and any outside processing that may be required. Production quantities from 10 to 5000 can be handled in-house, depending on the size of the component. Along with the machining, welding, and metal fabrication services, additional in-house capabilities at Pen Manufacturing include plumbing, hydraulic assembly, electrical wiring, glass-beading, and delivery to the customer&apos;s site. As part of our commitment to be your one-stop machining, welding, and fabrication source in Los Angeles, we have developed a group of dependable, reliable vendors that provide additional finishing services.
      </p>

      <div className="flex flex-col gap-5">
        <p className="font-medium leading-tight text-neutral">These services include:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {ServicesData.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              className="py-[30px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
