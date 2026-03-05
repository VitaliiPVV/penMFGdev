"use client";

import { CloseBoldIcon } from "@/components/icons";
import { Modal, Tag } from "@/components/ui";
import Image from "next/image";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt?: string;
  description?: string;
  tags?: string[];
  ref: React.RefObject<HTMLDivElement | null>;
}

const ImageModal: React.FC<Props> = ({
  isOpen,
  onClose,
  imageSrc,
  alt = "Image",
  description,
  tags = [],
  ref,
}) => {
  return (
    <Modal
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="2xl:px-30 2xl:py-[97px]"
      modalClassName="w-full max-w-[1200px] h-auto"
    >
      <div className="flex flex-col gap-y-xl p-4 md:p-6 bg-white rounded-3xl">
        <div className="flex justify-between items-center gap-4">
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="flex">
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          )}

          <button onClick={onClose} className="pt-1 md:pt-2 cursor-pointer ml-auto">
            <CloseBoldIcon className="size-4 md:size-5 text-muted" />
          </button>
        </div>

        <figure className="w-full relative">
          <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-neutral-50">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={90}
              unoptimized
            />
          </div>

          {description && (
            <figcaption className="sr-only">{description}</figcaption>
          )}
        </figure>
      </div>
    </Modal>
  );
};

ImageModal.displayName = "ImageModal";

export default ImageModal;
