"use client";

import { useInputValidation } from "@/hooks";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AlertTriangleIcon, DropdownIcon } from "../icons";
import { Dropdown } from "./Dropdown";

interface DropdownInputOption {
  id: number | string;
  value?: number | string;
  name: string;
}

interface Props {
  id: string;
  options: DropdownInputOption[];
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  onChange?: (option: DropdownInputOption) => void;
}

const DropdownInput: React.FC<Props> = ({
  id,
  label,
  disabled,
  placeholder,
  options,
  description,
  className,
  required,
  onChange = () => {},
}) => {
  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const { required: requiredValidation } = useInputValidation();

  const value = watch(id);
  const error = errors[id];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsDropdownOpened(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleOptionSelect = (option: DropdownInputOption) => {
    onChange(option);
    setValue(id, option);
    setIsDropdownOpened(false);
    clearErrors(id);
  };

  const handleOpen = () => {
    if (!isDropdownOpened && !disabled) {
      setIsDropdownOpened(true);
    }
  };

  return (
    <div className="flex flex-col gap-y-1">
      <label
        htmlFor={id}
        className="h-5.5 pb-0.5 text-[14px] leading-[125%] font-medium cursor-pointer text-neutral"
      >
        <span className="inline-block py-px">{label}</span>

        {required && <span className="text-form-red"> *</span>}
      </label>

      {description && (
        <p className="text-sm leading-[22px] text-muted ">{description}</p>
      )}

      <Dropdown
        ref={containerRef}
        isOpened={isDropdownOpened}
        options={options}
        selectedOption={value}
        onOptionSelect={handleOptionSelect}
      >
        <Controller
          name={id}
          rules={{
            validate: (value) => {
              if (required) {
                const validationResult = requiredValidation(value);
                if (validationResult !== true) return validationResult;
              }

              return true;
            },
          }}
          render={({ field: { value } }) => (
            <button
              id={id}
              disabled={disabled}
              onFocus={handleOpen}
              onClick={handleOpen}
              type="button"
              className={classNames(
                className,
                "flex items-center justify-between relative w-full px-md py-sm appearance-none border rounded-lg text-neutral shadow-xs outline-none focus:ring-2 focus:ring-offset-2 placeholder:text-form-dark-gray transition-all",
                {
                  "border-form-light-gray": !error,
                  "border-form-red": error,
                  "cursor-pointer bg-white": !disabled,
                  "cursor-not-allowed text-dark-blue-300 bg-form-gray border-form-dark-gray":
                    disabled,
                  "h-10.5": !value && !placeholder,
                }
              )}
            >
              {value && (
                <span className="text-neutral truncate">{value.name}</span>
              )}
              {!value && placeholder && (
                <span className="text-form-dark-gray truncate">
                  {placeholder}
                </span>
              )}

              <DropdownIcon
                className={`${
                  isDropdownOpened && "rotate-180"
                } shrink-0 w-3 h-2 ${
                  disabled ? "text-dark-blue-300" : "text-muted"
                }  transition-all`}
              />
            </button>
          )}
        />
      </Dropdown>

      {error && (
        <div className="flex items-center gap-x-1">
          <AlertTriangleIcon className="size-4 text-form-red" />
          <span className="text-[12px] leading-4 text-form-red">
            {String(error.message)}
          </span>
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
