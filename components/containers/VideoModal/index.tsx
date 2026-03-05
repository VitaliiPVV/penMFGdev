"use client";

import React, { forwardRef } from "react";
import { CloseBoldIcon } from "@/components/icons";
import { Heading, Modal } from "@/components/ui";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  videoType?: "embedded" | "youtube" | "linkedin";
  videoLink: string;
  description?: string;
  title?: string;
}

const VideoModal = forwardRef<HTMLDivElement, Props>(
  (
    {
      isOpen,
      onClose,
      videoLink,
      description,
      videoType = "embedded",
      title,
    },
    ref
  ) => {
    const isEmbedded = videoType === "embedded";
    const isYoutube = videoType === "youtube";
    const isLinkedIn = videoType === "linkedin";

    const youtubeUrl = isYoutube
      ? `${videoLink}?autoplay=1&mute=1&rel=0`
      : videoLink;

    return (
      <Modal
        ref={ref}
        isOpen={isOpen}
        onClose={onClose}
        containerClassName="2xl:px-30 2xl:py-[97px]"
        modalClassName="w-full max-w-[1200px] h-auto"
      >
        <div className="flex flex-col gap-y-6 p-6 bg-white rounded-[24px]">
          <div className="flex justify-between items-center">
            <Heading
              as="h2"
              className="text-2xl md:text-[44px] font-extrabold leading-[125%] text-brand-primary"
            >
              {title || "Employee spotlight"}
            </Heading>

            <button
              onClick={onClose}
              className="pt-1 md:pt-2 cursor-pointer"
            >
              <CloseBoldIcon className="size-4 md:size-5 text-muted" />
            </button>
          </div>

          <figure className="w-full aspect-video">
            {isEmbedded && (
              <video
                className="rounded-[24px] w-full h-full"
                controls
                preload="metadata"
                style={{ objectFit: "contain" }}
              >
                <source src={videoLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {isYoutube && (
              <iframe
                src={youtubeUrl}
                className="rounded-[24px] w-full h-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {isLinkedIn && (
              <iframe
                src={videoLink}
                className="rounded-[24px] w-full h-full"
                title="LinkedIn video"
                allowFullScreen
              />
            )}

            {description && (
              <figcaption className="sr-only">
                {description}
              </figcaption>
            )}
          </figure>
        </div>
      </Modal>
    );
  }
);

VideoModal.displayName = "VideoModal";

export default VideoModal;
