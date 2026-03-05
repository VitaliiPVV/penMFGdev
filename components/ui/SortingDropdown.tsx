'use client';

import useClickOutsideModal from '@/hooks/useClickOutsideModal';
import usePressEscape from '@/hooks/useEscOutsideModal';
import { SortOption } from '@/types/SortOption';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Checkmark from './Checkmark';
import ChevronDown from './ChevronDown';

interface SortingDropdownProps<T extends string> {
  value: T;
  options: Map<T, SortOption<T>>;
  onChange: (value: T) => void;
  className?: string;
}

export default function SortingDropdown<T extends string>({
  value,
  options,
  onChange,
  className = '',
}: SortingDropdownProps<T>) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useClickOutsideModal(dropdownRef);
  usePressEscape(isOpen, setIsOpen);

  const currentOption = options.get(value);

  const handleSelect = (optionValue: T) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="xs:relative" ref={dropdownRef}>
      <button
        aria-label="Open sorting popup button"
        className={twMerge(
          'group flex items-center w-fit h-[40px] py-2 px-4 rounded-[24px] cursor-pointer border border-brand-primary text-sm font-medium text-brand-primary hover:text-white hover:bg-brand-primary transition-all duration-500',
          isOpen && 'text-white bg-brand-primary',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-1">
          <span>{currentOption?.label || 'Sort'}</span>
          <ChevronDown
            width="18px"
            height="18px"
            className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute xs:min-w-[236px] left-0 xs:left-auto right-0 mt-2 bg-white border border-eleveted rounded-lg z-50 overflow-hidden shadow-[0_1px_3px_0_rgba(16,24,40,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <div role="listbox" aria-label="Sorting options">
            <div className="px-3 py-[10px] text-sm font-semibold text-netural leading-[20px] border-b border-eleveted">
              Sorting
            </div>
            {Array.from(options).map(([key, option]) => (
              <button
                key={key}
                onClick={() => handleSelect(option.value)}
                className="w-full px-3 py-[10px] text-left text-sm hover:bg-inverse-subtle focus:bg-inverse-subtle focus:outline-none transition-colors duration-150 flex items-center justify-between"
                role="option"
                aria-selected={value === option.value}
              >
                <span className="text-netural">{option.label}</span>
                {value === option.value && <Checkmark width="16px" height="16px" className="text-muted" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
