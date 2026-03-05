"use client";

import { FilterButton } from "@/components/containers";
import { GalleryCard } from "@/components/containers";
import { Heading, Button } from "@/components/ui";
import FilterTag from "@/components/ui/FilterTag";
import { useFilterHandler } from "@/hooks";
import { FilterGroup, StrapiPortfolioImage } from "@/types";
import { getImageUrl } from "@/lib/getImageUrl";
import { getCollection } from "@/lib/strapi/strapi";
import React, { useState, useEffect, useCallback } from "react";
import { LoaderIcon } from "@/components/icons";

interface GalleryClientProps {
  filterOptions: FilterGroup[];
  initialImages: StrapiPortfolioImage[];
  initialHasMore: boolean;
  pageSize: number;
}

const GalleryClient: React.FC<GalleryClientProps> = ({
  filterOptions,
  initialImages,
  initialHasMore,
  pageSize,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [images, setImages] = useState<StrapiPortfolioImage[]>(initialImages);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loadingMore, setLoadingMore] = useState(false);

  const { handleFilterRemove } = useFilterHandler();

  const isFilterApplied = Object.values(selectedFilters).some(
    (filters) => filters.length > 0
  );

  const buildFilters = useCallback(() => {
    const materialFilters = selectedFilters.materials || [];
    const industryFilters = selectedFilters.industries || [];

    const filters: Record<string, { documentId: { $in: string[] } }> = {};

    if (materialFilters.length > 0) {
      filters.material = { documentId: { $in: materialFilters } };
    }

    if (industryFilters.length > 0) {
      filters.industry = { documentId: { $in: industryFilters } };
    }

    return Object.keys(filters).length > 0 ? filters : undefined;
  }, [selectedFilters]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setPage(1);

        const imagesResponse = await getCollection<StrapiPortfolioImage>(
          "portfolio-images",
          {
            populate: ["image", "material", "industry"],
            sort: ["createdAt:asc"],
            filters: buildFilters(),
            pagination: {
              page: 1,
              pageSize,
            },
          }
        );

        setImages(imagesResponse.data);
        setHasMore(
          imagesResponse.meta.pagination.page <
            imagesResponse.meta.pagination.pageCount
        );
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    if (
      Object.values(selectedFilters).every((filters) => filters.length === 0)
    ) {
      setImages(initialImages);
      setPage(1);
      setHasMore(initialHasMore);
    } else {
      fetchImages();
    }
  }, [buildFilters, selectedFilters, pageSize, initialImages, initialHasMore]);

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const nextPage = page + 1;

      const imagesResponse = await getCollection<StrapiPortfolioImage>(
        "portfolio-images",
        {
          populate: ["image", "material", "industry"],
          sort: ["createdAt:asc"],
          filters: buildFilters(),
          pagination: {
            page: nextPage,
            pageSize,
          },
        }
      );

      setImages((prev) => [...prev, ...imagesResponse.data]);
      setPage(nextPage);
      setHasMore(
        imagesResponse.meta.pagination.page <
          imagesResponse.meta.pagination.pageCount
      );
    } catch (error) {
      console.error("Error loading more images:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <>
      <Heading
        as="h1"
        className="sr-only text-[24px] leading-[32px] 2xl:text-[32px] 2xl:leading-normal font-extrabold text-neutral"
      >
        Manufacturing portfolio
      </Heading>

      <div className="flex flex-col 2xl:flex-row items-start 2xl:justify-end gap-2">
        <div className="flex-shrink-0 w-auto flex justify-start 2xl:justify-end order-1 2xl:order-2">
          <FilterButton
            filterOptions={filterOptions}
            selectedFilterOptions={selectedFilters}
            setSelectedFilterOptions={setSelectedFilters}
          />
        </div>

        {isFilterApplied && (
          <div className="flex flex-row items-center gap-2 flex-wrap flex-1 2xl:mr-auto order-2 2xl:order-1">
            {filterOptions.map((group) => {
              const groupSelectedFilters = selectedFilters[group.id] || [];

              return groupSelectedFilters.map((optionId) => {
                const option = group.options.find((opt) => opt.id === optionId);

                if (!option) return null;

                return (
                  <FilterTag
                    key={optionId}
                    data={{
                      groupId: group.id,
                      optionId,
                      groupLabel: group.label,
                      label: option.label,
                    }}
                    onRemove={(groupId, optionId) =>
                      handleFilterRemove(
                        selectedFilters,
                        setSelectedFilters,
                        groupId,
                        optionId
                      )
                    }
                  />
                );
              });
            })}
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <LoaderIcon className={"text-brand-primary size-6"} />
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-8 text-neutral font-semibold text-lg">
          No images found.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-m 2xl:gap-6">
          {images.map((item, index) => {
            const imageUrl = getImageUrl(item.image?.url);
            const tags = [item.industry?.name, item.material?.name].filter(
              (tag): tag is string => Boolean(tag)
            );

            return (
              <GalleryCard
                key={item.documentId}
                image={imageUrl}
                tags={tags}
                description={item.description}
                priority={index < 4}
              />
            );
          })}
        </div>
      )}

      {!loading && hasMore && (
        <footer className="flex justify-center mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={handleLoadMore}
            loading={loadingMore}
          >
            Load more
          </Button>
        </footer>
      )}
    </>
  );
};

export default GalleryClient;
