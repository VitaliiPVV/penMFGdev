import { OrderedListCard } from "@/components/containers";
import { Heading } from "@/components/ui";
import { OrderedListCardInterface } from "@/types";
import Image from "next/image";

const contentList: OrderedListCardInterface[] = [
  {
    number: 1,
    title: "Collaborative Environment",
    text: "We consistently deliver on our promises, ensuring our customers and partners can trust us to meet their exoectations every time.",
  },
  {
    number: 2,
    title: "Employee-Centric Culture",
    text: "We consistently deliver on our promises, ensuring our customers and partners can trust us to meet their expectations every time.",
  },
  {
    number: 3,
    title: "Professional Growth",
    text: "We are committed to the professional development of our employees. We offer ongoing training, mentorship, and career advancement opportunities to help you grow and succeed in your career.",
  },
  {
    number: 4,
    title: "Workers Benefits",
    text: "Cal Choice medical, dental, and vision plans, paid time off, which includes vacations, sick leaves and holidays, and an employer-matched 401k help you stay healthy, rested, and prepared for the future.",
  },
];

const Content = () => {
  return (
    <section className="flex flex-col gap-y-xl 2xl:gap-y-2xl max-w-[1440px] mx-auto py-4xl 2xl:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <Heading as="h2" className="text-2xl/8 2xl:text-[32px]/10 font-bold">
        <span className="text-neutral">Why Work</span>{" "}
        <span className="text-brand-primary">With Us?</span>
      </Heading>

      <div className="flex flex-col-reverse gap-xl 2xl:flex-row">
        <figure className="shrink-0 relative w-full h-[224px] md:h-[290px] 2xl:h-[468px] 2xl:w-[493px]">
          <Image
            fill
            src="/images/work_culture_img_2.webp"
            alt="Pen Manufacturing employees collaborating in workplace with benefits and growth opportunities"
            className="object-cover rounded-2xl"
            unoptimized
          />
          <figcaption className="sr-only">
            Pen Manufacturing employees collaborating in workplace with benefits
            and growth opportunities
          </figcaption>
        </figure>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-xl 2xl:gap-x-l 2xl:gap-y-xl">
          {contentList.map((listElement) => (
            <OrderedListCard
              key={listElement.number}
              listElement={listElement}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Content;
