"use client";

import classNames from "classnames";
import React from "react";
import { AlertTriangleIcon, CheckIcon } from "../icons";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  id: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  description?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const CheckboxInput: React.FC<Props> = ({
  id,
  label,
  disabled,
  className,
  required,
  ...props
}) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const value = watch(id);
  const error = errors[id];

  return (
    <div className="w-fit flex flex-col gap-y-1">
      <label htmlFor={id} className="flex items-start md:items-center gap-x-2 w-full cursor-pointer">
        <div
          className={classNames(
            className,
            "relative size-5 flex items-center justify-center border rounded-sm transition-all cursor-pointer",
            {
              "border-neutral-strong": !value,
              "bg-brand-primary border-brand-primary": value,
            }
          )}
        >
          <Controller
            name={id}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id={id}
                type="checkbox"
                disabled={disabled}
                className="absolute w-full h-full opacity-0 cursor-pointer"
                {...props}
              />
            )}
          />

          {value && (
            <CheckIcon className="size-3.5 text-white transition-all" />
          )}
        </div>

        {label && (
          <span className="text-[14px]/[22px] text-neutral md:whitespace-nowrap">{label}</span>
        )}
        {required && <span className="text-form-red">*</span>}
      </label>

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

export default CheckboxInput;
