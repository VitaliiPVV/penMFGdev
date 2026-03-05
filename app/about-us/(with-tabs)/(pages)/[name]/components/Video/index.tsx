"use client";

import { PlayIcon } from "@/components/icons";
import { VideoModal } from "@/components/containers";
import { useClickOutsideModal } from "@/hooks";
import Image from "next/image";
import React, { useRef } from "react";

interface VideoProps {
  videoType?: "embedded" | "youtube" | "linkedin";
  imgLink: string;
  videoLink: string;
  videoTitle: string;
  className?: string;
}

const Video = ({ videoType, imgLink, videoLink, videoTitle, className }: VideoProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useClickOutsideModal(modalRef);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center relative w-full mx-auto cursor-pointer"
      >
        <figure className={`relative h-[353px] w-full cursor-pointer ${className}`}>
          <Image
            fill
            // src="/images/about_img.webp"
            src={imgLink}
            alt="About video image"
            className="object-cover rounded-[16px] 2xl:rounded-[24px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            loading="eager"
            quality={60}
          />

          <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 pl-2 bg-black/30 rounded-full">
            <PlayIcon className="relative text-white w-[19] h-[25px]" />
          </div>
        </figure>
      </button>

      <VideoModal
        ref={modalRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoLink={videoLink}
        title={videoTitle}
        // title="About Us"
        videoType={videoType || "youtube"}
      />
    </>
  );
};

export default Video;
