import { Heading } from "@/components/ui";
import { getImageUrl } from "@/lib/getImageUrl";
import { getCollection } from "@/lib/strapi/strapi";
import { StrapiPortfolioImage } from "@/types";
import GalleryClient from "./components/GalleryClient";

export interface WorkItem {
  id: string;
  image: string | null;
  fullSizeImage: string | null;
  alt: string;
  tags: string[];
  description?: string;
}

const INITIAL_IMAGES_COUNT = 12;

export const Gallery = async () => {
  const response = await getCollection<StrapiPortfolioImage>(
    "portfolio-images",
    {
      populate: ["image", "material", "industry", "fullSizeImage"],
      sort: ["createdAt:desc"],
      pagination: {
        page: 1,
        pageSize: INITIAL_IMAGES_COUNT,
      },
    }
  );

  const portfolioImages = response.data;

  const workItems: WorkItem[] = portfolioImages.map((item) => {
    const imageUrl = getImageUrl(item.image.url);
    const fullSizeImageUrl = getImageUrl(item.fullSizeImage?.url);
    const tags = [item.industry?.name, item.material?.name].filter(
      (tag): tag is string => Boolean(tag)
    );

    return {
      id: item.documentId,
      image: imageUrl,
      fullSizeImage: fullSizeImageUrl,
      alt: item.description || "Portfolio image",
      tags,
      description: item.description,
    };
  });

  return (
    <section className="flex flex-col gap-y-xl py-12 md:py-16 pl-x-mobile md:pl-x-tablet 2xl:pl-x-desktop">
      <Heading
        as="h2"
        className="text-[24px]/8 md:text-[32px]/10 font-bold text-neutral"
      >
        <span>Our Recent</span> <span className="text-brand-primary">Work</span>
        <span className="sr-only">
          {" "}
          - Metal Fabrication Portfolio in Anaheim, Orange County, Los Angeles, and Southern California
        </span>
      </Heading>
      <GalleryClient workItems={workItems} />
    </section>
  );
};
