import { highlightText } from "@/app/utils/highlightText";
import { Heading } from "@/components/ui";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface TitleSectionProps {
  title: string;
  secondTitle?: string;
  verticalSpace?: string;
  image?: string;
  text?: string[];
  imageHeight?: string;
  highlight?: string;
}

const TitleSection = ({
  title,
  secondTitle,
  text,
  verticalSpace,
  image,
  imageHeight,
  highlight,
}: TitleSectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 text-neutral">
        <Heading as="h1" className="text-2xl leading-tight 2xl:text-[32px] 2xl:leading-10 font-bold">
          {title}
          <span className="sr-only">
            {" "}
            - Metal Fabrication services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
          </span>
        </Heading>

        {secondTitle && (
          <Heading as="h2" className="text-2xl font-bold">
            {secondTitle}
            <span className="sr-only">
              {" "}
              - Metal Fabrication services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
            </span>
          </Heading>
        )}

        <div
          className={twMerge(
            "flex flex-col gap-4",
            verticalSpace && 'grid 2xl:grid-cols-2 gap-6',
            verticalSpace === 'normal' && 'grid 2xl:grid-cols-2 flex-row-reverse gap-6',
          )}
        >
          {image && (
            <figure className={twMerge("relative w-full", verticalSpace === 'normal' && 'order-2', imageHeight)}>
              <Image
                fill
                src={image}
                alt={title}
                className="object-cover rounded-3xl"
                unoptimized
              />
            </figure>
          )}
          <div className={twMerge('flex flex-col gap-4 leading-[130%]', verticalSpace === 'normal' && 'order-1')}>
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
      </div>
    </section>
  );
};

export default TitleSection;
