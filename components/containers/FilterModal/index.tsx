'use client';

import { Checkmark, CounterBadge, Crossmark, FilterTag, FilterTagData, Heading, Modal } from '@/components/ui';
import { FilterGroup } from '@/types';
import { useRef } from 'react';

interface FilterModalProps {
  ref?: React.ForwardedRef<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
  filterOptions: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterToggle: (groupId: string, optionId: string) => void;
  onFilterRemove: (groupId: string, optionId: string) => void;
  onFiltersReset: () => void;
  className?: string;
}

const FilterModal: React.FC<FilterModalProps> = ({
  ref,
  isOpen,
  onClose,
  filterOptions,
  selectedFilters,
  onFilterToggle,
  onFilterRemove,
  onFiltersReset,
  className = '',
}) => {
  const defaultRef = useRef<HTMLDivElement>(null);

  const getSelectedFilterTags = () => {
    const tags: FilterTagData[] = [];

    filterOptions.forEach((group) => {
      const selectedFiltersByGroup = selectedFilters[group.id] || [];

      selectedFiltersByGroup.forEach((optionId) => {
        const option = group.options.find((opt) => opt.id === optionId);

        if (option) {
          tags.push({
            groupId: group.id,
            optionId: option.id,
            label: option.label,
            groupLabel: group.label,
          });
        }
      });
    });

    return tags;
  };

  if (!isOpen) return null;

  const selectedTags = getSelectedFilterTags();

  return (
    <Modal
      ref={ref || defaultRef}
      isOpen={isOpen}
      onClose={onClose}
      modalClassName={`2xl:min-h-[712px] p-4 md:p-8 bg-white rounded-3xl w-full max-w-c-4xl max-h-[90vh] flex flex-col items-start gap-6 overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Heading as="h3" className="text-2xl/8 font-bold text-black">Filter</Heading>
          {selectedTags.length ? <CounterBadge count={selectedTags.length} /> : null}
        </div>
        <button onClick={onClose} className="text-muted cursor-pointer" aria-label="Close filter modal">
          <Crossmark width="24px" height="24px" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto w-full">
        <ul className="space-y-6">
          {filterOptions.map((group) => {
            const groupSelectedFilters = selectedFilters?.[group.id] || [];

            return (
              <li key={group.id} className="border rounded-lg border-eleveted">
                <div className="p-4 flex flex-wrap gap-[10px] items-center border-b border-eleveted">
                  <Heading as="h4" className="py-[6px] text-base/6 font-semibold text-neutral">{group.label}</Heading>
                  {groupSelectedFilters.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {groupSelectedFilters.map((optionId) => {
                        const option = group.options.find((opt) => opt.id === optionId);

                        if (!option) return null;

                        return (
                          <li key={optionId}>
                            <FilterTag
                              data={{
                                groupId: group.id,
                                optionId,
                                groupLabel: group.label,
                                label: option.label,
                              }}
                              onRemove={onFilterRemove}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                <ul className="p-1 flex flex-col max-h-[204px] overflow-y-auto">
                  {group.options.map((option) => {
                    const isSelected = groupSelectedFilters.includes(option.id);

                    return (
                      <li key={option.id}>
                        <button
                          onClick={() => onFilterToggle(group.id, option.id)}
                          className="w-full flex items-center justify-between p-2 text-left hover:bg-inverse-subtle rounded-lg transition-colors group cursor-pointer"
                        >
                          <span className="text-sm text-neutral font-medium leading-[18px]">{option.label}</span>
                          {isSelected && <Checkmark width="16" height="16" className="text-muted" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={onFiltersReset} className="text-sm font-medium text-destructive cursor-pointer">
        Reset filters
      </button>
    </Modal>
  );
};

export default FilterModal;
