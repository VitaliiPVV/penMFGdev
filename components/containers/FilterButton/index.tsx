'use client';

import FilterModal from '@/components/containers/FilterModal';
import { DiscoverTuneIcon } from '@/components/icons';
import { ChevronDown, CounterBadge } from '@/components/ui';
import { SelectefFilters, SetFilters, useClickOutsideModal, useFilterHandler } from '@/hooks';
import usePressEscape from '@/hooks/useEscOutsideModal';
import { FilterGroup } from '@/types';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FilterButtonProps {
  label?: string;
  filterOptions: FilterGroup[];
  selectedFilterOptions: SelectefFilters;
  setSelectedFilterOptions: SetFilters;
}

const FilterButton = ({ label, filterOptions, setSelectedFilterOptions, selectedFilterOptions }: FilterButtonProps) => {
  const { handleFilterToggle, handleFilterRemove, handleFiltersReset, getSelectedFiltersCount } = useFilterHandler();

  const modalRef = useRef<HTMLDivElement>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useClickOutsideModal(modalRef);
  usePressEscape(isFilterModalOpen, setIsFilterModalOpen);

  const selectedFiltersCount = getSelectedFiltersCount(selectedFilterOptions);

  return (
    <>
      <button
        aria-label="Open filters modal button"
        className={twMerge(
          'group flex items-center w-fit h-[40px] py-2 px-4 rounded-[24px] cursor-pointer border border-brand-primary text-sm font-medium text-brand-primary hover:text-white hover:bg-brand-primary transition-all duration-500',
          isFilterModalOpen && 'text-white bg-brand-primary'
        )}
        onClick={() => setIsFilterModalOpen(true)}
      >
        <div className="flex items-center gap-1">
          {filterOptions.length !== 1 ? (
            <>
              <DiscoverTuneIcon className="size-[13.125px]" />
              <span>Filter</span>
            </>
          ) : (
            <>
              <span>{label || filterOptions[0].label}</span>
              <ChevronDown
                width="18px"
                height="18px"
                className={`transform transition-transform duration-200 ${isFilterModalOpen ? 'rotate-180' : ''}`}
              />
            </>
          )}
        </div>
        {selectedFiltersCount ? <CounterBadge count={selectedFiltersCount} className="ml-[5px]" /> : null}
      </button>
      <FilterModal
        ref={modalRef}
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filterOptions={filterOptions}
        selectedFilters={selectedFilterOptions}
        onFilterToggle={(groupId, optionId) =>
          handleFilterToggle(selectedFilterOptions, setSelectedFilterOptions, groupId, optionId)
        }
        onFilterRemove={(groupId, optionId) =>
          handleFilterRemove(selectedFilterOptions, setSelectedFilterOptions, groupId, optionId)
        }
        onFiltersReset={() => handleFiltersReset(filterOptions, setSelectedFilterOptions)}
      />
    </>
  );
};

export default FilterButton;
