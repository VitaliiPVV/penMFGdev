import { GalleryCarousel } from "@/components/containers";
import { getCollection } from "@/lib/strapi/strapi";
import { StrapiPortfolioImage } from "@/types";

const INITIAL_IMAGES_COUNT = 12;

const Gallery = async () => {
  const { data: images } = await getCollection<StrapiPortfolioImage>(
    "portfolio-images",
    {
      populate: ["image"],
      pagination: {
        page: 1,
        pageSize: INITIAL_IMAGES_COUNT,
      },
    }
  );

  const imageLinks = images.map(({ documentId, image, alt, description }) => ({
    documentId,
    url: image.url,
    alternativeText: alt || "Gallery image",
    name: alt || "Gallery image",
    description,
  }));

  if (imageLinks.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-y-6 px-4 md:px-11 2xl:px-30">
      <GalleryCarousel
        data={imageLinks}
        options={{ loop: true }}
        title="Manufacturing Gallery"
        hasViewAll
        viewAllHref="/portfolio"
        itemWidth={282}
        containerHeights={{ default: 290 }}
        edgeReachConfiguration={{
          reachSide: "right",
          marginConfigurations: {
            right: {
              default: "mr-4 md:mr-11 2xl:mr-30",
              compensate: "-mr-4 md:-mr-11 2xl:-mr-30",
            },
          },
        }}
      />
    </section>
  );
};

export default Gallery;
