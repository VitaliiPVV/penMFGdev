"use client";

import classNames from "classnames";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { AlertTriangleIcon } from "../icons";

interface Props {
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  required?: boolean;
  description?: string;
}

const TextareaInput: React.FC<Props> = ({
  id,
  label,
  disabled,
  placeholder,
  description,
  className,
  containerClassName,
  required,
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors[id];

  return (
    <div className={twMerge("flex flex-col gap-y-1", containerClassName)}>
      <label
        htmlFor={id}
        className="pb-0.5 text-[14px] leading-[125%] font-medium cursor-pointer text-neutral"
      >
        <span className="inline-block py-px">{label}</span>{" "}
        {required && <span className="text-form-red">*</span>}
      </label>

      {description && (
        <p className="text-sm leading-[22px] text-muted ">{description}</p>
      )}

      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            className={twMerge(
              "min-h-32 resize-none px-3.5 py-3 border rounded-lg text-neutral shadow-xs outline-none focus:ring-2 focus:ring-offset-2 placeholder:text-form-dark-gray transition-all bg-white",
              classNames(className, {
                "border-form-light-gray": !error,
                "border-form-red": error,
                "cursor-not-allowed bg-form-gray border-form-dark-gray":
                  disabled,
              }),
              className
            )}
          />
        )}
      />

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

export default TextareaInput;
