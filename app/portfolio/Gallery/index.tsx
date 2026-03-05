import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { StrapiPortfolioImage, StrapiMaterial, StrapiIndustry, FilterGroup } from "@/types";
import { getCollection } from "@/lib/strapi/strapi";
import GalleryClient from "./components/GalleryClient";
import { PAGE_SIZE } from "./constants";

const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Manufacturing Portfolio",
  },
];

const Gallery = async () => {
  const [materialsResponse, industriesResponse, portfolioResponse] = await Promise.all([
    getCollection<StrapiMaterial>("materials", { populate: ["image"] }),
    getCollection<StrapiIndustry>("industries"),
    getCollection<StrapiPortfolioImage>("portfolio-images", {
      populate: ["image", "material", "industry"],
      sort: ["createdAt:asc"],
      pagination: {
        page: 1,
        pageSize: PAGE_SIZE,
      },
    }),
  ]);

  const materials = materialsResponse.data;
  const industries = industriesResponse.data;
  const initialImages = portfolioResponse.data;
  const initialHasMore = portfolioResponse.meta.pagination.page < portfolioResponse.meta.pagination.pageCount;

  const filterOptions: FilterGroup[] = [
    {
      id: "materials",
      label: "Materials",
      options: materials.map((material) => ({
        id: material.documentId,
        label: material.name,
      })),
    },
    {
      id: "industries",
      label: "Industries",
      options: industries.map((industry) => ({
        id: industry.documentId,
        label: industry.name,
      })),
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <Breadcrumbs items={breadcrumbs} />
      <GalleryClient
        filterOptions={filterOptions}
        initialImages={initialImages}
        initialHasMore={initialHasMore}
        pageSize={PAGE_SIZE}
      />
    </section>
  );
};

export default Gallery;
