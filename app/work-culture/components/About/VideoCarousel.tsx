"use client";

import { CarouselButton, Heading } from "@/components/ui";
import { VideoModal } from "@/components/containers";
import { EMPLOYEE_VIDEO_URLS } from "@/constants";
import { useClickOutsideModal } from "@/hooks";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { PlayIcon } from "@/components/icons";

interface Video {
  id: number;
  imageLink: string;
  videoLink: string;
}

const videos: Video[] = [
  {
    id: 1,
    imageLink: "/images/work_culture_video_img_1.avif",
    videoLink: EMPLOYEE_VIDEO_URLS[0],
  },
  {
    id: 2,
    imageLink: "/images/work_culture_video_img_2.avif",
    videoLink: EMPLOYEE_VIDEO_URLS[1],
  },
  {
    id: 3,
    imageLink: "/images/work_culture_video_img_3.avif",
    videoLink: EMPLOYEE_VIDEO_URLS[2],
  },
  {
    id: 4,
    imageLink: "/images/work_culture_video_img_4.avif",
    videoLink: EMPLOYEE_VIDEO_URLS[3],
  },
];

const VideoCarousel = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [openedVideo, setOpenedVideo] = useClickOutsideModal<Video | null>(
    modalRef
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla flex flex-col gap-y-6 w-full">
        <div className="flex justify-between items-center w-full">
          <Heading as="h2" className="text-2xl/8 2xl:text-[32px]/10 font-bold">
            <span className="text-neutral">Join</span>{" "}
            <span className="text-brand-primary">Our Team</span>
          </Heading>

          <div className="hidden 2xl:flex gap-x-3">
            <CarouselButton
              onClick={scrollPrev}
              className="embla__prev"
              arrowDirection="left"
              aria-label="Carousel prev button"
            />
            <CarouselButton
              onClick={scrollNext}
              className="embla__next"
              aria-label="Carousel next button"
            />
          </div>
        </div>

        <div
          className="embla__viewport overflow-hidden -mr-4 md:-mr-11 2xl:mr-0"
          ref={emblaRef}
        >
          <ul className="embla__container flex mr-6">
            {videos.map((video) => (
              <li
                key={video.id}
                className="embla__slide w-[282px] md:w-[384px] flex-none mr-6"
              >
                <button
                  className="w-full cursor-pointer"
                  aria-label="Open video modal button"
                  onClick={() => setOpenedVideo(video)}
                >
                  <figure className="relative w-full h-[256px]">
                    <Image
                      fill
                      src={video.imageLink}
                      alt={`Employee interview video ${video.id} - Join our team at Pen Manufacturing`}
                      className="object-cover rounded-3xl"
                      unoptimized
                    />
                    <figcaption className="sr-only">
                      Employee interview video {video.id} - Join our team at Pen
                      Manufacturing
                    </figcaption>
                    <div className="absolute size-full bg-black/50 rounded-3xl" />
                    <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 pl-2 bg-white/25 rounded-full">
          
                      <PlayIcon className="relative text-white w-[19] h-[25px]" />
                    </div>{" "}
                  </figure>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex 2xl:hidden gap-x-3">
          <CarouselButton
            onClick={scrollPrev}
            className="embla__prev"
            arrowDirection="left"
            aria-label="Carousel prev button"
          />
          <CarouselButton
            onClick={scrollNext}
            className="embla__next"
            aria-label="Carousel next button"
          />
        </div>
      </div>

      {openedVideo && (
        <VideoModal
          ref={modalRef}
          isOpen={!!openedVideo}
          onClose={() => setOpenedVideo(null)}
          description="Employee interview video"
          videoLink={openedVideo?.videoLink ?? ""}
          videoType="youtube"
        />
      )}
    </>
  );
};

export default VideoCarousel;
