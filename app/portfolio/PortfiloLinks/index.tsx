import { Heading } from "@/components/ui"
import { linksData } from "./consts";
import LinkCard from "./LinkCard";

const PortfolioLinks = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <Heading
          as="h2"
          className="text-[24px] md:text-[32px] text-neutral leading-8 md:leading-10 font-bold"
        >
          Metal Fabrication <span className="text-brand-primary">Project Portfolio</span>
        </Heading>
        <p className="text-neutral leading-[130%]">
          Pen Manufacturing is your custom manufacturing solution. We invite you to contact us or call us at 714-992-0950 with your custom application needs. We are located in Anaheim, California and serve the Southern California area near Los Angeles, San Diego and surrounding areas.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {linksData.map((item) => (
          <LinkCard key={item.id} label={item.title} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioLinks;
