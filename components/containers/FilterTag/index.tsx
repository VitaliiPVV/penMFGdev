'use client';

import { Crossmark } from '@/components/ui';

export interface FilterTagData {
  groupId: string;
  optionId: string;
  label: string;
  groupLabel: string;
}

interface FilterTagProps {
  data: FilterTagData;
  onRemove: () => void;
}

const FilterTag = ({ data, onRemove }: FilterTagProps) => {
  return (
    <div className="inline-flex items-center gap-1 px-4 py-2 bg-inverse-subtle hover:bg-eleveted rounded-full text-sm font-medium text-neutral transition-all duration-500">
      <span>{data.label}</span>
      <button
        onClick={onRemove}
        className="text-muted hover:text-netural transition-colors cursor-pointer"
        aria-label={`Remove ${data.label} filter`}
      >
        <Crossmark width="18px" height="18px" />
      </button>
    </div>
  );
};

export default FilterTag;
