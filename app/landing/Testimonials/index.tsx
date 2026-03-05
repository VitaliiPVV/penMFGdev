import React from "react";
import TestimonialsClient from "./components/TestimonialsClient";
import { getCollection } from "@/lib/strapi/strapi";
import { StrapiTestimonial } from "@/types";

const Testimonials = async () => {
  const response = await getCollection<StrapiTestimonial>("testimonials", {
    populate: ["avatar"],
    sort: ["createdAt:asc"],
  });

  return (
    <section className="py-12 pl-x-mobile md:pl-x-tablet 2xl:pl-x-desktop bg-inverse-subtle">
      <TestimonialsClient testimonials={response.data} />
    </section>
  );
};

export default Testimonials;
