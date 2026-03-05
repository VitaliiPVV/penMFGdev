"use client";

import { GalleryCarousel } from "@/components/containers";
import React from "react";
import { StrapiTestimonial } from "@/types";
import TestimonialCard from "./TestimonialCard";

interface TestimonialsClientProps {
  testimonials: StrapiTestimonial[];
}

const TestimonialsClient: React.FC<TestimonialsClientProps> = ({
  testimonials,
}) => {
  return (
    <GalleryCarousel
      items={testimonials}
      renderItem={(testimonial: StrapiTestimonial) => (
        <TestimonialCard {...testimonial} />
      )}
      title="Testimonials"
      buttonVariant="ghost"
      containerHeights={{ default: 339, md: 319, '2xl': 319 }}
      itemWidth={{ default: 343, md: 384 }}
      options={{ loop: true, align: "start", slidesToScroll: 1 }}
      controlsPosition="top"
      headerSpacing="mb-2xl md:mb-[60px]"
      edgeReachConfiguration={{
        reachSide: "right",
        marginConfigurations: {
          right: {
            default: "mr-x-mobile",
            md: "md:mr-x-tablet",
            "2xl": "2xl:mr-x-desktop",
            compensate: "-mr-0"
          },
        },
      }}
    />
  );
};

export default TestimonialsClient;
