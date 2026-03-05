"use client";

import { FilterButton } from "@/components/containers";
import { LoaderIcon } from "@/components/icons";
import { Breadcrumbs, Button, Heading, SortingDropdown } from "@/components/ui";
import { getCollection } from "@/lib/strapi/strapi";
import { FilterGroup, StrapiArticle } from "@/types";
import { SortOption } from "@/types/SortOption";
import { useCallback, useEffect, useState } from "react";
import { BlogTagContainer, Card } from "./components";

type SortValue = "recent" | "older";

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Blog" }];

const SORT_OPTIONS: Map<SortValue, SortOption<SortValue>> = new Map([
  ["recent", { value: "recent", label: "Recent" }],
  ["older", { value: "older", label: "Older" }],
]);

interface BlogClientProps {
  initialArticles: StrapiArticle[];
  initialFilterOptions: FilterGroup[];
  initialHasMore: boolean;
  pageSize: number;
}

export default function BlogClient({
  initialArticles,
  initialFilterOptions,
  initialHasMore,
  pageSize,
}: BlogClientProps) {
  const [sortBy, setSortBy] = useState<SortValue>("recent");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [articles, setArticles] = useState<StrapiArticle[]>(initialArticles);
  const [filterOptions] = useState<FilterGroup[]>(initialFilterOptions);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loadingMore, setLoadingMore] = useState(false);

  const buildSortParam = useCallback(() => {
    return sortBy === "recent" ? ["publishedAt:desc"] : ["publishedAt:asc"];
  }, [sortBy]);

  const buildFilters = useCallback(() => {
    const filterOptionIds = Object.values(selectedFilters).reduce(
      (acc, optionIds) => {
        acc.push(...optionIds);

        return acc;
      },
      []
    );

    const filters = {
      filterOptions: { documentId: { $in: filterOptionIds } },
    };

    return Object.keys(filters).length > 0 ? filters : undefined;
  }, [selectedFilters]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setPage(1);

        const articlesResponse = await getCollection<StrapiArticle>(
          "articles",
          {
            populate: "*",
            sort: buildSortParam(),
            filters: buildFilters(),
            pagination: {
              page: 1,
              pageSize,
            },
          }
        );

        setArticles(articlesResponse.data);
        setHasMore(
          articlesResponse.meta.pagination.page <
            articlesResponse.meta.pagination.pageCount
        );
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    if (sortBy !== "recent" || Object.keys(selectedFilters).length > 0) {
      fetchArticles();
    }
  }, [buildSortParam, buildFilters, sortBy, selectedFilters, pageSize]);

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const nextPage = page + 1;

      const articlesResponse = await getCollection<StrapiArticle>("articles", {
        populate: "*",
        sort: buildSortParam(),
        filters: buildFilters(),
        pagination: {
          page: nextPage,
          pageSize,
        },
      });

      setArticles((prev) => [...prev, ...articlesResponse.data]);
      setPage(nextPage);
      setHasMore(
        articlesResponse.meta.pagination.page <
          articlesResponse.meta.pagination.pageCount
      );
    } catch (error) {
      console.error("Error loading more articles:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} className="mb-3" />
      <header className="mb-8 flex flex-col gap-6">
        <Heading
          as="h1"
          className="sr-only text-4xl md:text-5xl font-bold text-gray-900"
        >
          Blog - Metal Fabrication Industry News & Insights from Anaheim, Orange County, Los Angeles, and Southern California
        </Heading>

        <div className="flex flex-col 2xl:flex-row items-start 2xl:justify-end gap-2">
          <div className="flex-shrink-0 w-auto flex justify-start 2xl:justify-end order-1 2xl:order-2 gap-3">
            <FilterButton
              filterOptions={filterOptions}
              selectedFilterOptions={selectedFilters}
              setSelectedFilterOptions={setSelectedFilters}
            />
            <SortingDropdown<SortValue>
              value={sortBy}
              options={SORT_OPTIONS}
              onChange={setSortBy}
            />
          </div>

          <div className="flex flex-row items-center gap-2 flex-wrap flex-1 2xl:mr-auto order-2 2xl:order-1">
            <BlogTagContainer
              filterOptions={filterOptions}
              selectedFilterOptions={selectedFilters}
              setSelectedFilterOptions={setSelectedFilters}
            />
          </div>
        </div>
      </header>
      <section aria-label="Blog posts">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <LoaderIcon className={"text-brand-primary size-6"} />
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {articles.map((data, index) => (
              <Card key={data.id} data={data} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-12">
            <div className="text-lg text-gray-600">
              {selectedFilters.categories &&
              selectedFilters.categories.length > 0
                ? "No articles found for the selected categories."
                : "No articles available."}
            </div>
          </div>
        )}
      </section>
      {!loading && hasMore && (
        <footer className="flex justify-center">
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
}
