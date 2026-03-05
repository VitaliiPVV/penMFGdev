import { Heading } from "@/components/ui"
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { highlightText } from "@/app/utils/highlightText";

interface SubtitleSectionProps {
  subtitle: string[];
  text?: string[];
  subtitleImage?: string;
  subtitleImageClass?: string;
  textClass?: string;
  subtitleClass?: string;
  highlight?: string;
};

const SubtitleSection = ({
  subtitle,
  text,
  subtitleImage,
  subtitleImageClass,
  subtitleClass,
  textClass,
  highlight,
}: SubtitleSectionProps) => {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2" className="text-2xl/8 2xl:text-2xl/10 font-bold text-neutral">
        {subtitle[0]} <span className="text-brand-primary">{subtitle[1]}</span>
      </Heading>

      <div className={twMerge("flex flex-col 2xl:flex-row gap-6", subtitleClass)}>
        {subtitleImage && (
            <figure className={twMerge("relative w-full 2xl:w-1/2 h-[240px] md:h-[300px] 2xl:h-[336px]", subtitleImageClass)}>
              <Image
                fill
                src={subtitleImage}
                alt={`${subtitle[0]} ${subtitle[1]}`}
                className="object-cover rounded-3xl"
                unoptimized
              />
            </figure>
          )}

          <div className={twMerge("flex flex-col gap-4 text-neutral leading-[130%]", subtitleImage && '2xl:w-1/2', textClass)}>
            {text?.map((text) => (
              <p key={text}>
                {
                  highlight
                    ? highlightText(text, highlight)
                    : text
                }
              </p>
            ))}
          </div>
      </div>
    </section>
  );
};

export default SubtitleSection;
