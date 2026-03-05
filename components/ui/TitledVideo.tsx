"use client";

import { VideoModal } from "@/components/containers";
import { useClickOutsideModal } from "@/hooks";
import Image from "next/image";
import React, { useRef } from "react";
import { PlayIcon } from "@/components/icons";
import { twMerge } from "tailwind-merge";

interface TitledVideoProps {
  videoImage: string;
  videoLink: string;
  videoTitle: string;
  videoItemClass?: string;
}

const TitledVideo = ({
  videoImage,
  videoLink,
  videoTitle,
  videoItemClass,
}: TitledVideoProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [openedVideo, setOpenedVideo] = useClickOutsideModal<TitledVideoProps | null>(
    modalRef
  );

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full flex-none md:mr-6">
          <button
            className="w-full cursor-pointer"
            aria-label="Open video modal button"
            onClick={() => setOpenedVideo({
              videoImage,
              videoLink,
              videoTitle,
            })}
          >
            <figure className={twMerge("relative w-full h-[256px]", videoItemClass)}>
              <Image
                fill
                src={videoImage}
                alt={videoTitle}
                className="object-cover rounded-3xl"
                unoptimized
              />
              <div className="absolute size-full bg-black/50 rounded-3xl" />
              <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 pl-2 bg-white/25 rounded-full">
    
                <PlayIcon className="relative text-white w-[19] h-[25px]" />
              </div>{" "}
            </figure>
          </button>
        </div>

        <p className="font-bold text-neutral text-lg leading-6">{videoTitle}</p>
      </div>

      {openedVideo && (
        <VideoModal
          ref={modalRef}
          isOpen={!!openedVideo}
          title={openedVideo.videoTitle}
          onClose={() => setOpenedVideo(null)}
          description="Employee interview video"
          videoLink={openedVideo?.videoLink ?? ""}
          videoType="youtube"
        />
      )}
    </>
  );
};

export default TitledVideo;
