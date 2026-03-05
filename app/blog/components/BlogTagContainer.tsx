'use client';

import { FilterTag } from '@/components/ui';
import { SetFilters, useFilterHandler } from '@/hooks';
import { FilterGroup } from '@/types';

interface BlogTagContainerProps {
  filterOptions: FilterGroup[];
  setSelectedFilterOptions: SetFilters;
  selectedFilterOptions: Record<string, string[]>;
}

const BlogTagContainer = ({
  filterOptions,
  setSelectedFilterOptions,
  selectedFilterOptions,
}: BlogTagContainerProps) => {
  const { handleFilterRemove } = useFilterHandler();

  return filterOptions.map((group) => {
    const selectedFiltersByGroup = selectedFilterOptions[group.id] || [];

    return selectedFiltersByGroup.map((optionId) => {
      const option = group.options.find((opt) => opt.id === optionId);

      if (!option) {
        return null;
      }

      return (
        <FilterTag
          key={optionId}
          data={{
            groupId: group.id,
            optionId,
            groupLabel: group.label,
            label: option.label,
          }}
          onRemove={() => handleFilterRemove(selectedFilterOptions, setSelectedFilterOptions, group.id, optionId)}
        />
      );
    });
  });
};

export default BlogTagContainer;
