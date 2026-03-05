import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { CheckIcon } from '../icons'

export interface DropdownOption {
  id: number | string
  value?: number | string
  name: string
}

interface Props {
  ref: React.RefObject<HTMLDivElement | null>
  isOpened: boolean
  options: DropdownOption[]
  selectedOption?: DropdownOption | null
  onOptionSelect: (option: DropdownOption) => void
  children: ReactNode
  showCheckIcon?: boolean
  dropdownClassName?: string
  optionClassName?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const Dropdown: React.FC<Props> = ({
  ref,
  isOpened,
  options,
  selectedOption,
  onOptionSelect,
  children,
  showCheckIcon = true,
  dropdownClassName,
  optionClassName,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <>
      <motion.div className="relative" ref={ref}>
        {children}

        <AnimatePresence>
          {isOpened && (
            <motion.div
              key="dropdown"
              className={twMerge(
                "absolute z-10 top-13 w-full",
                dropdownClassName
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.150 }}
            >
              <ul className="p-1 max-h-[168px] overflow-y-auto rounded-lg bg-white shadow-md">
                {options.map((option) => (
                  <li key={option.id} className="rounded-lg hover:bg-brand-subtle transition-all">
                    <button
                      type="button"
                      onClick={() => onOptionSelect(option)}
                      className="flex items-center justify-between w-full px-2 py-1.5 cursor-pointer"
                    >
                      <span className={twMerge(
                        "text-[14px] font-medium leading-[125%] text-form-dark",
                        optionClassName
                      )}>
                        {option.name}
                      </span>

                      {showCheckIcon && selectedOption?.id === option.id && <CheckIcon className="size-4 text-muted transition-all" />}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}