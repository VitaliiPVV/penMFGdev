import { getImageUrl } from "@/lib/getImageUrl";
import { StrapiTestimonial } from "@/types";
import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

export const TestimonialCard: React.FC<StrapiTestimonial> = ({
  description,
  name,
  avatar,
  rating,
}) => {
  const avatarUrl = avatar ? getImageUrl(avatar.url) : null;

  return (
    <div className="flex flex-col py-8 px-6 w-full h-full rounded-3xl bg-white">
      <StarRating rating={rating} />

      <p className="text-base/5 font-medium text-muted mt-8 mb-8 flex-grow">
        {description}
      </p>

      <div className="h-px w-full bg-brand-elevated" />

      <div className="flex items-center gap-4 mt-8">
        {avatarUrl && (
          <figure className="relative size-14 rounded-full overflow-hidden bg-neutral-200">
            <Image
              src={avatarUrl}
              alt={`Reviewer ${name}`}
              fill
              className="object-cover"
            />
            <figcaption className="sr-only">Reviewer {name}</figcaption>
          </figure>
        )}

        <div className="text-base/6 font-semibold text-neutral">{name}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
