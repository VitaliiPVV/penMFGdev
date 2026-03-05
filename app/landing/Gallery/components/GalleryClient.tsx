"use client";

import React, { useRef, useState } from "react";
import { GalleryCarousel, GalleryCard, ImageModal } from "@/components/containers";
import { useClickOutsideModal, useDisableBodyScroll, useEscOutsideModal } from "@/hooks";
import { WorkItem } from "..";

interface GalleryClientProps {
  workItems: WorkItem[];
}

const GalleryClient: React.FC<GalleryClientProps> = ({ workItems }) => {
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useClickOutsideModal(modalRef, false);

  const handleOpenModal = (item: WorkItem) => {
    if (item.fullSizeImage) {
      setSelectedImage(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useDisableBodyScroll(isModalOpen);
  useEscOutsideModal(isModalOpen, setIsModalOpen);

  return (
    <>
      <GalleryCarousel
        items={workItems}
        renderItem={(item: WorkItem) => (
          <GalleryCard
            image={item.image}
            tags={item.tags}
            description={item.description}
            onClick={() => handleOpenModal(item)}
          />
        )}
        containerHeights={{ default: 290 }}
        itemWidth={282}
        options={{ loop: true, align: "start" }}
        controlsPosition="bottom"
        edgeReachConfiguration={{
          reachSide: "right",
          marginConfigurations: {
            right: { default: "mr-0", compensate: "-mr-0" },
          },
        }}
      />

      {selectedImage && (
        <ImageModal
          ref={modalRef}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageSrc={selectedImage.fullSizeImage!}
          alt={selectedImage.alt}
          description={selectedImage.description}
          tags={selectedImage.tags}
        />
      )}
    </>
  );
};

export default GalleryClient;
