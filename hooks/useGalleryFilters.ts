import { useState, useEffect, useMemo } from "react";
import { FilterGroup, StrapiMaterial, StrapiIndustry } from "@/types";
import { useFilterHandler } from "@/hooks";
import { getCollection } from "@/lib/strapi/strapi";

const useGalleryFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [materials, setMaterials] = useState<StrapiMaterial[]>([]);
  const [industries, setIndustries] = useState<StrapiIndustry[]>([]);

  const { handleFilterRemove } = useFilterHandler();

  const filterOptions: FilterGroup[] = useMemo(
    () => [
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
    ],
    [materials, industries]
  );

  const fetchFilterOptions = async () => {
    try {
      const [materialsResponse, industriesResponse] = await Promise.all([
        getCollection<StrapiMaterial>("materials", { populate: ["image"] }),
        getCollection<StrapiIndustry>("industries"),
      ]);

      setMaterials(materialsResponse.data);
      setIndustries(industriesResponse.data);
    } catch (error) {
      console.error("Error fetching filter options:", error);
    }
  };

  const buildFilters = () => {
    const filters: Record<string, unknown> = {};

    if (selectedFilters.materials?.length > 0) {
      filters.material = {
        documentId: { $in: selectedFilters.materials },
      };
    }

    if (selectedFilters.industries?.length > 0) {
      filters.industry = {
        documentId: { $in: selectedFilters.industries },
      };
    }

    return Object.keys(filters).length > 0 ? filters : undefined;
  };

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  const isFilterApplied = !!Object.entries(selectedFilters).length;

  return {
    selectedFilters,
    setSelectedFilters,
    filterOptions,
    handleFilterRemove,
    buildFilters,
    isFilterApplied,
  };
};

export default useGalleryFilters