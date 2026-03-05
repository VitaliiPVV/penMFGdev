import { getImageUrl } from "@/lib/getImageUrl";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { CirclePattern } from "../../ui";

export interface MaterialsCardInterface {
  image: { url: string } | null;
  name: string;
  description?: string;
  cardClassName?: string;
  imageClassName?: string;
  circlePattern?: boolean;
  internalImage?: boolean;
}

const MaterialsCard: React.FC<MaterialsCardInterface> = ({
  image,
  name,
  description,
  cardClassName,
  imageClassName,
  circlePattern = true,
  internalImage = false,
}) => {
  const imageUrl = getImageUrl(image?.url);

  return (
    <div
      className={twMerge(
        "relative flex flex-col justify-between p-m 2xl:p-6 rounded-[24px] overflow-hidden bg-brand-subtle",
        cardClassName
      )}
    >
      <figure className="flex flex-col 2xl:gap-[10px] 2xl:justify-between z-1 relative">
        {internalImage ? (
          <>
            {image?.url && (
              <div
                className={twMerge(
                  "relative size-[72px] 2xl:size-[93px]",
                  imageClassName
                )}
              >
                <Image
                  fill
                  src={image?.url}
                  alt={`${name} image`}
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
          </>
        ) : (
          <>
            {imageUrl && (
              <div
                className={twMerge(
                  "relative size-[72px] 2xl:size-[93px]",
                  imageClassName
                )}
              >
                <Image
                  fill
                  src={imageUrl}
                  alt={`${name} image`}
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
          </>
        )}

        <figcaption className="flex flex-col gap-y-2.5 text-neutral">
          <span className="2xl:text-lg/6 font-bold">{name}</span>
          {description && <span className="sr-only">{description}</span>}
        </figcaption>
      </figure>

      {circlePattern && (
        <CirclePattern
          containerClassName="top-12 -right-24 md:-right-12 2xl:-top-6 2xl:-right-38"
          boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.12) inset"
          innerCircleClassName="size-[82.711px] 2xl:size-[178.829px] bg-brand-subtle"
          middleCircleClassName="size-[134.317px] 2xl:size-[290.407px] bg-brand-subtle"
          outerCircleClassName="size-[187.337px] 2xl:size-[405.041px] bg-brand-subtle"
        />
      )}
    </div>
  );
};

export default MaterialsCard;
