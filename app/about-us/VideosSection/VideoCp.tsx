"use client";

import { VideoModal } from "@/components/containers";
import { useClickOutsideModal } from "@/hooks";
import Image from "next/image";
import React, { useRef } from "react";
import { PlayIcon } from "@/components/icons";

interface Video {
  id: number;
  imageLink: string;
  videoLink: string;
  title: string;
}

const videos: Video[] = [
  {
    id: 1,
    imageLink: "/images/about_us_learn_more.avif",
    videoLink: "https://www.youtube.com/embed/_hjk98sPs44",
    title: "Learn More About Pen",
  },
];

const VideoCp = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [openedVideo, setOpenedVideo] = useClickOutsideModal<Video | null>(
    modalRef
  );

  return (
    <>
      <div className="flex flex-col gap-y-6 w-full">
        <div
          className="-mr-4 md:-mr-11 2xl:mr-0"
        >
          <ul className="flex flex-col md:flex-row mr-6 gap-6 md:gap-0">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col gap-2">

                <li className="md:w-[330px] 2xl:w-[384px] flex-none md:mr-6">
                  <button
                    className="w-full cursor-pointer"
                    aria-label="Open video modal button"
                    onClick={() => setOpenedVideo(video)}
                  >
                    <figure className="relative w-full h-[256px]">
                      <Image
                        fill
                        src={video.imageLink}
                        alt={video.title}
                        className="object-cover rounded-3xl"
                        unoptimized
                      />
                      <div className="absolute size-full bg-black/50 rounded-3xl" />
                      <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 pl-2 bg-white/25 rounded-full">
            
                        <PlayIcon className="relative text-white w-[19] h-[25px]" />
                      </div>{" "}
                    </figure>
                  </button>
                </li>

                <p className="font-bold text-neutral text-lg leading-6">{video.title}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {openedVideo && (
        <VideoModal
          ref={modalRef}
          isOpen={!!openedVideo}
          title={openedVideo.title}
          onClose={() => setOpenedVideo(null)}
          description="Employee interview video"
          videoLink={openedVideo?.videoLink ?? ""}
          videoType="youtube"
        />
      )}
    </>
  );
};

export default VideoCp;
