"use client";

import { Button, Heading } from "@/components/ui";
import useActiveBreakpoint from "@/hooks/useActiveBreakpoint";
import { RemoteMediaData } from "@/types";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { Controls, Slide } from "./components";
import { computeTWMarginConfiguration, EdgeReachConfiguration } from "./utils";

interface ContainerHeights {
  default: number;
  [key: string]: number;
}

interface ItemWidths {
  default: number;
  [key: string]: number;
}

interface BaseGalleryCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  hasViewAll?: boolean;
  viewAllHref?: string;
  hasCounter?: boolean;
  controlsPosition?: "top" | "bottom" | "dynamic";
  buttonVariant?: "default" | "ghost";
  headerSpacing?: string;
  containerHeights: ContainerHeights;
  itemWidth?: number | ItemWidths;
  options?: EmblaOptionsType;
  edgeReachConfiguration?: EdgeReachConfiguration;
  hideControls?: boolean;
}

interface ImageGalleryCarouselProps extends BaseGalleryCarouselProps {
  data: RemoteMediaData[];
  items?: never;
  renderItem?: never;
}

interface CustomGalleryCarouselProps<T = unknown>
  extends BaseGalleryCarouselProps {
  data?: never;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

type GalleryCarouselProps<T = unknown> =
  | ImageGalleryCarouselProps
  | CustomGalleryCarouselProps<T>;

const GalleryCarousel = <T = unknown,>({
  data,
  items,
  renderItem,
  title,
  hasCounter = false,
  hasViewAll = false,
  viewAllHref = "",
  controlsPosition = "bottom",
  buttonVariant = "default",
  headerSpacing = "mb-6",
  containerHeights,
  itemWidth,
  options,
  edgeReachConfiguration,
  hideControls = false,
  className: containerClassName,
  ...restContainerProps
}: GalleryCarouselProps<T>) => {
  const slideData = data || items || [];
  const isCustomMode = !data && items && renderItem;
  const emblaOptions: EmblaOptionsType = {
    align: options?.align || "start",
    loop: options?.loop || false,
    slidesToScroll: options?.slidesToScroll || 1,
    skipSnaps: options?.skipSnaps || false,
    ...(options || {}),
  };

  const activeBreakpoint = useActiveBreakpoint();

  const hasDimensions = itemWidth && containerHeights;

  const getResponsiveValue = (
    values: ContainerHeights | ItemWidths,
    breakpoint: string,
    defaultFallback: number
  ): number => {
    if (values[breakpoint] !== undefined) return values[breakpoint];

    const fallbackOrder = ["2xl", "md", "sm", "xs", "default"];
    const currentIndex = fallbackOrder.indexOf(breakpoint);

    for (let i = currentIndex + 1; i < fallbackOrder.length; i++) {
      if (values[fallbackOrder[i]] !== undefined) {
        return values[fallbackOrder[i]];
      }
    }

    return values.default || defaultFallback;
  };

  const containerHeightValue = getResponsiveValue(
    containerHeights,
    activeBreakpoint,
    290
  );

  const itemWidthValue =
    typeof itemWidth === "number"
      ? itemWidth
      : itemWidth
      ? getResponsiveValue(itemWidth as ItemWidths, activeBreakpoint, 290)
      : undefined;

  const [currentImageNumber, setCurrentImageNumber] = useState(1);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  useEffect(() => {
    setCurrentImageNumber(1);
    emblaApi?.scrollTo(0);
  }, [slideData, emblaApi]);

  useEffect(() => {
    const handleSlide = () => {
      if (emblaApi) setCurrentImageNumber(emblaApi.selectedScrollSnap() + 1);
    };

    emblaApi?.on("slidesInView", handleSlide);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const {
    leftMargin,
    rightMargin,
    leftCompensationMargin,
    rightCompensationMargin,
  } = computeTWMarginConfiguration(edgeReachConfiguration);

  return (
    <div
      className={twMerge(
        "embla flex flex-col flex-grow-1 min-w-0",
        containerClassName,
        leftCompensationMargin,
        rightCompensationMargin
      )}
      {...restContainerProps}
    >
      <div
        className={twJoin(
          "flex justify-between items-center",
          leftMargin,
          rightMargin
        )}
      >
        {title && (
          <Heading
            as="h3"
            className={twMerge(
              "text-2xl/8 md:text-[32px]/10 font-bold text-neutral",
              headerSpacing
            )}
          >
            {title}
          </Heading>
        )}

        {!hideControls &&
          (controlsPosition === "top" || controlsPosition === "dynamic") && (
            <Controls
              hasCounter={hasCounter}
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
              currentNumber={currentImageNumber}
              size={slideData.length}
              direction="opposite"
              buttonVariant={buttonVariant}
              className={twJoin(
                "ml-auto",
                headerSpacing,
                controlsPosition === "dynamic" && "hidden 2xl:flex",
                rightMargin
              )}
            />
          )}
        {hasViewAll && (
          <Button variant="ghost" size="md" className={headerSpacing}>
            <Link href={viewAllHref}>View All</Link>
          </Button>
        )}
      </div>
      <div
        className={twMerge(
          "embla__viewport w-fill overflow-hidden",
          headerSpacing
        )}
        style={{ height: `${containerHeightValue}px`, width: "100%" }}
        ref={emblaRef}
      >
        <ul className={twMerge("embla__container flex h-full")}>
          {isCustomMode
            ? items!.map((item, index) => (
                <li
                  key={index}
                  className={twJoin(
                    "relative embla__slide flex-none rounded-3xl overflow-hidden",
                    emblaOptions.loop ? "mr-6" : "not-last:mr-6",
                    !hasDimensions ? `basis-[100%]` : ""
                  )}
                  style={
                    hasDimensions
                      ? {
                          width: `${itemWidthValue}px`,
                          height: `${containerHeightValue}px`,
                        }
                      : undefined
                  }
                >
                  {renderItem!(item, index)}
                </li>
              ))
            : data!.map((slideData) => (
                <Slide
                  data={slideData}
                  key={slideData.documentId}
                  className={twJoin(
                    "relative embla__slide flex-none rounded-3xl overflow-hidden",
                    emblaOptions.loop ? "mr-6" : "not-last:mr-6",
                    !hasDimensions ? `basis-[100%]` : ""
                  )}
                  imageProps={
                    hasDimensions && itemWidthValue !== undefined
                      ? { width: itemWidthValue, height: containerHeightValue }
                      : { fill: true }
                  }
                  imageClassName={twJoin(
                    `object-cover`,
                    hasDimensions
                      ? `w-[${itemWidthValue}px] h-[${containerHeightValue}px]`
                      : ""
                  )}
                />
              ))}
        </ul>
      </div>

      {!hideControls &&
        (controlsPosition === "bottom" || controlsPosition === "dynamic") && (
          <Controls
            hasCounter={hasCounter}
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
            currentNumber={currentImageNumber}
            size={slideData.length}
            buttonVariant={buttonVariant}
            className={twMerge(
              controlsPosition === "dynamic" ? "2xl:hidden" : "",
              leftMargin,
              rightMargin
            )}
          />
        )}
    </div>
  );
};

export default GalleryCarousel;
export type {
  CustomGalleryCarouselProps,
  GalleryCarouselProps,
  ImageGalleryCarouselProps,
};
