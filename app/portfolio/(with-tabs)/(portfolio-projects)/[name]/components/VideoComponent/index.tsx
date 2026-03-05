"use client";

import { VideoModal } from "@/components/containers";
import { useClickOutsideModal } from "@/hooks";
import Image from "next/image";
import React, { useRef } from "react";
import { PlayIcon } from "@/components/icons";

type Video = {
  videoLink: string;
  videoImg: string;
}

interface VideoComponentProps {
  video: Video;
}

const VideoComponent = ({ video }: VideoComponentProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [openedVideo, setOpenedVideo] = useClickOutsideModal<Video | null>(
    modalRef
  );

  return (
    <>
      <div className="flex flex-col gap-y-6 w-full">
        <button
          className="w-full cursor-pointer"
          aria-label="Open video modal button"
          onClick={() => setOpenedVideo(video)}
        >
          <figure className="relative w-full h-[353px]">
            <Image
              fill
              src={video.videoImg}
              alt={`Testing the machined and assembled parts for proper operation.`}
              className="object-cover rounded-3xl"
              unoptimized
            />
            <figcaption className="sr-only">
              Testing the machined and assembled parts for proper operation.
            </figcaption>
            <div className="absolute size-full bg-black/50 rounded-3xl" />
            <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 pl-2 bg-white/25 rounded-full">
  
              <PlayIcon className="relative text-white w-[19] h-[25px]" />
            </div>{" "}
          </figure>
        </button>
      </div>

      {openedVideo && (
        <VideoModal
          ref={modalRef}
          title="Testing the machined and assembled parts for proper operation."
          isOpen={!!openedVideo}
          onClose={() => setOpenedVideo(null)}
          description="Testing the machined and assembled parts for proper operation."
          videoLink={openedVideo?.videoLink ?? ""}
          videoType="youtube"
        />
      )}
    </>
  );
};

export default VideoComponent;
