import Tag from "@/components/ui/Tag";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface GalleryCardInterface {
  tags: string[];
  image: string | null;
  description?: string;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GalleryCard: React.FC<GalleryCardInterface> = ({
  tags,
  image,
  description,
  priority = false,
  className,
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        "relative aspect-[282/290] overflow-hidden rounded-[24px] bg-brand-subtle",
        onClick && "cursor-pointer hover:opacity-90 transition-opacity",
        className
      )}
      onClick={onClick}
    >
      {image && (
        <Image
          src={image}
          alt={description || "Portfolio image"}
          fill
          className="object-cover"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 282px"
          quality={80}
          unoptimized
        />
      )}

      <div className="relative z-10 p-3">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="flex">
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        {description && (
          <figcaption className="sr-only">{description}</figcaption>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;
