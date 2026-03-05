"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { images } from "./constants";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const CertificationsCarousel: React.FC<Props> = ({ className }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      watchDrag: false,
    },
    [AutoScroll({ speed: 2 })]
  );

  return (
    <div
      className={twMerge("embla__viewport overflow-hidden", className)}
      ref={emblaRef}
    >
      <ul className="embla__container flex items-center">
        {[...images, ...images].map(({ link, className, alt }, i) => (
          <li key={i} className="embla__slide mr-12 2xl:mr-16 flex-none">
            <figure className={className}>
              <Image
                src={link}
                alt={alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full"
                loading="lazy"
                quality={60}
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsCarousel;
