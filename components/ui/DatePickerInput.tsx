"use client";

import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { AlertTriangleIcon } from "../icons";
import Calendar from "./Calendar";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  description?: string;
}

const DatePickerInput: React.FC<Props> = ({
  id,
  label,
  disabled,
  placeholder,
  description,
  className,
  required,
}) => {
  const {
    formState: { errors },
    control,
    setValue
  } = useFormContext();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const error = errors[id];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getFormatedDate = (date?: Date): string => {
    if (!date) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target as Node) &&
      calendarRef.current &&
      !calendarRef.current.contains(e.target as Node)
    ) {
      setIsOpened(false);
    }
  };

  const handleSelectDate = (date: Date | undefined) => {
    setSelectedDate(date);
    setIsOpened(false);
    setValue(id, getFormatedDate(date))
  };

  return (
    <div className="flex flex-col gap-y-1">
      <label
        htmlFor={id}
        className="h-5.5 pb-0.5 text-[14px]/[125%] font-medium cursor-pointer text-neutral"
      >
        <span className="inline-block py-px">{label}</span>{" "}
        {required && <span className="text-form-red">*</span>}
      </label>

      {description && (
        <p className="text-sm leading-[22px] text-muted ">{description}</p>
      )}

      <div className="relative w-full">
        <Controller
          name={id}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              ref={inputRef}
              id={id}
              type="text"
              autoComplete="off"
              placeholder={placeholder}
              onFocus={() => setIsOpened(true)}
              disabled={disabled}
              readOnly
              className={classNames(
                className,
                "w-full px-md py-sm cursor-pointer border rounded-lg text-neutral shadow-xs outline-none focus:ring-2 focus:ring-offset-2 placeholder:text-form-dark-gray bg-white transition-all",
                {
                  "border-form-light-gray": !error,
                  "border-form-red": error,
                  "cursor-not-allowed bg-form-gray border-form-dark-gray":
                    disabled,
                }
              )}
            />
          )}
        />

        <AnimatePresence>
          {isOpened && (
            <motion.div
              ref={calendarRef}
              className="absolute left-0 pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleSelectDate}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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

export default DatePickerInput;
