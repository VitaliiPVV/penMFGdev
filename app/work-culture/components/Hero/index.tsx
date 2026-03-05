import { NewPenLogoIcon } from "@/components/icons";
import { Heading } from "@/components/ui";
import Image from "next/image";
import React from "react";

const cultureList: { id: number; name: string }[] = [
  {
    id: 1,
    name: "Reliability",
  },
  {
    id: 2,
    name: "Humility",
  },
  {
    id: 3,
    name: "Innovation",
  },
  {
    id: 4,
    name: "Neatness",
  },
  {
    id: 5,
    name: "Outstanding Quality",
  },
  {
    id: 6,
    name: "Safety",
  },
];

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center py-xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop bg-white">
        <figure className="relative w-full max-w-[1200px] h-[425px]">
          <Image
            fill
            src="/images/work_culture_img_1.webp"
            alt="Pen Manufacturing team members working together in modern metal fabrication facility"
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1200px"
            priority
          />
          <figcaption className="sr-only">
            Pen Manufacturing team members working together in modern metal
            fabrication facility
          </figcaption>
        </figure>
      </div>

      <div className="relative overflow-hidden rounded-2xl 2xl:rounded-3xl bg-inverse-subtle">
        <div className="relative z-10 flex flex-col gap-y-xl 2xl:gap-y-2xl max-w-[1440px] mx-auto py-2xl 2xl:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
          <Heading as="h2" className="text-2xl/8 2xl:text-[32px]/10 font-bold">
            <span className="text-brand-primary">R.H.I.N.O.S</span>{" "}
            <span className="text-neutral">CULTURE</span>
          </Heading>

          <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-xl">
            {cultureList.map(({ id, name }) => (
              <li
                key={id}
                className="flex items-center gap-x-3 p-6 rounded-3xl text-lg/6 font-semibold text-brand-primary bg-white"
              >
                <div className="flex items-center justify-center size-11 rounded-full bg-brand-subtle">
                  {name[0]}
                </div>

                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>

        <NewPenLogoIcon className="hidden md:block scale-x-[-1] absolute -bottom-20 -left-54 w-[431px] h-[335px] text-[#EEEEEE]" />
        <NewPenLogoIcon className="hidden md:block absolute bottom-16 -right-59 2xl:-bottom-26 2xl:-right-60 w-[451px] h-[350px] 2xl:w-[630px] 2xl:h-[489px] text-[#EEEEEE]" />
      </div>
    </section>
  );
};

export default Hero;
