"use client";

import { STRAPI_URL } from "@/constants";
import { CirclePattern, Heading } from "@/components/ui";
import { StrapiTeamMember } from "@/types";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { VideoIcon } from "@/components/icons";
import { VideoModal } from "@/components/containers";
import { useClickOutsideModal } from "@/hooks";
import { getLinkedInEmbedUrl } from "@/app/utils/getLinkedInEmbedUrl";

export const TeamCard: React.FC<StrapiTeamMember> = ({
  image,
  name,
  position,
  description,
  email,
  videoLink,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [openedVideo, setOpenedVideo] = useClickOutsideModal<string | null>(modalRef);

  const imageUrl = image?.url
    ? image.url.startsWith("http")
      ? image.url
      : `${STRAPI_URL}${image.url}`
    : "/images/team_placeholder.png";

  return (
    <>
      <article className="relative rounded-3xl overflow-hidden flex flex-col 2xl:w-[221px] 2xl:h-[303px]">
        <figure
          className="h-[219px] 2xl:block relative 2xl:aspect-[221/223] rounded-t-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(circle, #F5F6F6 0%, #C9C9C9 100%)'
          }}
        >
          {videoLink && (
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center absolute top-3 right-3 cursor-pointer z-2"
              onClick={() => setOpenedVideo(videoLink)}
            >
              <VideoIcon />
            </button>
          )}
          <Image
            unoptimized
            fill
            src={imageUrl}
            alt={`${name}, ${position} at Pen Manufacturing`}
            className="object-cover object-top"
          />

          <motion.div
            initial={false}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-inverse-subtle"
          />

          <figcaption className="sr-only">{description}</figcaption>
        </figure>

        <div className="2xl:hidden p-xl rounded-3xl text-center bg-inverse-subtle">
          <Heading
            as="h3"
            className="pb-1 text-base/5 font-semibold text-neutral"
          >
            {name}
          </Heading>
          <Heading as="h4" className="pb-l text-sm/[125%] font-medium text-muted">
            {position}
          </Heading>
          <p className="pb-sm text-xs/[125%] text-neutral">{description}</p>
          <span className="text-xs/[125%] text-muted">{email}</span>
        </div>

        <div className="hidden 2xl:block h-20" />

        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "100%" : "80px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden 2xl:flex absolute z-3 bottom-0 left-0 right-0 flex-col items-center justify-center px-6 rounded-b-3xl text-center bg-inverse-subtle"
        >
          <motion.div
            initial={false}
            animate={isHovered ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <Heading as="h3" className="text-sm font-semibold text-neutral mb-1">
              {name}
            </Heading>
            <Heading as="h4" className="text-xs text-neutral">
              {position}
            </Heading>
          </motion.div>

          <motion.div
            initial={false}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
            className="absolute inset-0 h-full flex flex-col items-center justify-center px-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <div className="relative h-full flex flex-col items-center justify-center">
                <Heading
                  as="h3"
                  className="text-base/5 font-semibold text-neutral mb-1"
                >
                  {name}
                </Heading>

                <span className="inline-block text-xs/[125%] font-medium text-muted mb-xl">
                  {email}
                </span>

                <p className="text-center text-xs/[125%] font-medium text-neutral">
                  {description}
                </p>

                <CirclePattern
                  containerClassName="-left-64 top-10"
                  outerCircleClassName="size-[464.492px]"
                  middleCircleClassName="size-[333.032px]"
                  innerCircleClassName="size-[205.078px]"
                  boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.12) inset"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      </article>

      {openedVideo && (
        <VideoModal
          ref={modalRef}
          isOpen={!!openedVideo}
          onClose={() => setOpenedVideo(null)}
          videoLink={getLinkedInEmbedUrl(openedVideo) ?? ""}
          videoType="linkedin"
        />
      )}
    </>
  );
};
