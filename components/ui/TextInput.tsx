"use client";

import classNames from "classnames";
import React from "react";
import { AlertTriangleIcon } from "../icons";
import { Controller, useFormContext } from "react-hook-form";
import { useInputValidation } from "@/hooks";

interface BaseProps {
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  description?: string;
}

type Props = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({
  id,
  label,
  disabled,
  placeholder,
  description,
  className,
  required,
  ...props
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const { required: requiredValidation, email, phone, noNumbers } = useInputValidation();

  const { type } = props;

  const error = errors[id];
  const isEmail = type === "email";
  const isPhone = type === "tel";
  const shouldNotContainNumbers = id === "fullName";

  return (
    <div className="flex flex-col gap-y-1">
      <label
        htmlFor={id}
        className="h-5.5 pb-0.5 text-[14px] leading-[125%] font-medium cursor-pointer text-neutral"
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
        rules={{
          validate: (value) => {
            if (required) {
              const validationResult = requiredValidation(value);
              if (validationResult !== true) return validationResult;
            }

            if (isEmail) {
              const validationResult = email(value);
              if (validationResult !== true) return validationResult;
            }

            if (isPhone) {
              const validationResult = phone(value);
              if (validationResult !== true) return validationResult;
            }

            if (shouldNotContainNumbers) {
              const validationResult = noNumbers(value);
              if (validationResult !== true) return validationResult;
            }

            return true;
          },
        }}
        render={({ field }) => (
          <input
            {...field}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            className={classNames(
              className,
              "h-11 px-md py-sm border rounded-lg text-base/5 text-neutral shadow-xs outline-none focus:ring-2 focus:ring-offset-2 placeholder:text-form-dark-gray bg-white transition-all",
              {
                "border-form-light-gray": !error,
                "border-form-red": error,
                "cursor-not-allowed bg-form-gray border-form-dark-gray":
                  disabled,
              }
            )}
            type="text"
            {...props}
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

export default TextInput;
