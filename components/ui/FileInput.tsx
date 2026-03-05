"use client";

import { useInputValidation } from "@/hooks";
import { compressFiles } from "@/lib/imageCompression";
import React, { ChangeEvent, DragEvent, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import {
  AlertTriangleIcon,
  ExclamationIcon,
  LoaderIcon,
  TrashIcon,
  UploadIcon,
} from "../icons";
import { Tooltip } from "./Tooltip";

interface Props {
  id: string;
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  listClassName?: string;
  listElementClassName?: string;
  required?: boolean;
  maxTotalSize?: number;
}

const ALLOWED_EXTENSIONS = [
  ".jpeg",
  ".gif",
  ".ipt",
  ".obj",
  ".wrl",
  ".3dxml",
  ".x_b",
  ".exp",
  ".jpg",
  ".step",
  ".prt",
  ".stl",
  ".jt",
  ".3mf",
  ".dwg",
  ".sat",
  ".png",
  ".sldprt",
  ".psm",
  ".fbx",
  ".3ds",
  ".iges",
  ".dxf",
  ".sab",
  ".zip",
  ".3dm",
  ".par",
  ".glb",
  ".dae",
  ".igs",
  ".dwf",
  ".stp",
  ".pdf",
  ".catpart",
  ".model",
  ".vrml",
  ".cgr",
  ".x_t",
  ".dwfx",
  ".ifc",
  ".doc",
  ".catshape",
  ".neu",
  ".prc",
  ".stpz",
];

const FileInput: React.FC<Props> = ({
  id,
  label,
  inputClassName,
  listClassName,
  listElementClassName,
  containerClassName,
  required,
  maxTotalSize,
}) => {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
    setError,
  } = useFormContext();
  const { required: requiredValidation } = useInputValidation();

  const value: File[] = watch(id);
  const error = errors[id];

  const formatFileSize = (size: number): string => {
    if (size < 1024) {
      return `${size}B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)}KB`;
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(1)}MB`;
    } else {
      return `${(size / (1024 * 1024 * 1024)).toFixed(1)}GB`;
    }
  };

  const validateFiles = (
    files: File[]
  ): { valid: File[]; invalid: string[] } => {
    const valid: File[] = [];
    const invalid: string[] = [];

    files.forEach((file) => {
      const fileName = file.name.toLowerCase();
      const hasValidExtension = ALLOWED_EXTENSIONS.some((ext) =>
        fileName.endsWith(ext)
      );

      if (hasValidExtension) {
        valid.push(file);
      } else {
        invalid.push(file.name);
      }
    });

    return { valid, invalid };
  };

  const checkTotalFileSize = (newFiles: File[], existingFiles: File[] = []): boolean => {
    if (!maxTotalSize) return true;

    const totalSize = [...existingFiles, ...newFiles].reduce(
      (acc, file) => acc + file.size,
      0
    );

    if (totalSize > maxTotalSize) {
      const maxSizeMB = (maxTotalSize / (1024 * 1024)).toFixed(1);
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(1);
      setError(id, {
        type: "manual",
        message: `Total file size (${totalSizeMB}MB) exceeds the maximum allowed size of ${maxSizeMB}MB. Please remove some files or upload smaller files.`,
      });
      return false;
    }

    return true;
  };

  const [isCompressing, setIsCompressing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>("");

  const handleFileSelect = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      const { valid, invalid } = validateFiles(selectedFiles);

      if (invalid.length > 0) {
        setError(id, {
          type: "manual",
          message: `Invalid file format: ${invalid.join(
            ", "
          )}. Please upload files with supported extensions.`,
        });
        return;
      } else {
        clearErrors(id);
      }

      if (!checkTotalFileSize(valid, value)) {
        return;
      }

      if (valid.length > 0) {
        try {
          setIsCompressing(true);
          setUploadProgress("Compressing images...");

          const compressedFiles = await compressFiles(valid, {
            maxSizeMB: 1.5,
            maxWidthOrHeight: 2048,
            quality: 0.9,
          });

          if (!checkTotalFileSize(compressedFiles, value)) {
            setIsCompressing(false);
            setUploadProgress("");
            return;
          }

          setUploadProgress("");
          setValue(id, [...value, ...compressedFiles]);
        } catch (error) {
          console.error("Error compressing files:", error);
          if (checkTotalFileSize(valid, value)) {
            setValue(id, [...value, ...valid]);
          }
        } finally {
          setIsCompressing(false);
          setUploadProgress("");
        }
      }
    }
  };

  const handleDrop = async (
    event: DragEvent<HTMLDivElement>
  ): Promise<void> => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const { valid, invalid } = validateFiles(droppedFiles);

    if (invalid.length > 0) {
      setError(id, {
        type: "manual",
        message: `Invalid file format: ${invalid.join(
          ", "
        )}. Please upload files with supported extensions.`,
      });
      return;
    } else {
      clearErrors(id);
    }

    if (!checkTotalFileSize(valid, value)) {
      return;
    }

    if (valid.length > 0) {
      try {
        setIsCompressing(true);
        setUploadProgress("Compressing images...");

        const compressedFiles = await compressFiles(valid, {
          maxSizeMB: 1.5,
          maxWidthOrHeight: 2048,
          quality: 0.9,
        });

        if (!checkTotalFileSize(compressedFiles, value)) {
          setIsCompressing(false);
          setUploadProgress("");
          return;
        }

        setUploadProgress("");
        setValue(id, [...value, ...compressedFiles]);
      } catch (error) {
        console.error("Error compressing files:", error);
        if (checkTotalFileSize(valid, value)) {
          setValue(id, [...value, ...valid]);
        }
      } finally {
        setIsCompressing(false);
        setUploadProgress("");
      }
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const removeFile = (fileName: string): void => {
    setValue(
      id,
      value.filter((file: File) => file.name !== fileName)
    );
    clearErrors(id);
  };

  return (
    <div className={twMerge("flex flex-col gap-y-3", containerClassName)}>
      <div className="flex flex-col gap-y-2xs">
        {label && (
          <label
            htmlFor={id}
            className="h-5.5 pb-0.5 text-sm leading-[125%] cursor-pointer font-medium text-neutral"
          >
            <span className="inline-block py-px">{label}</span>{" "}
            {required && <span className="text-form-red">*</span>}
          </label>
        )}

        <Controller
          control={control}
          name={id}
          rules={{
            validate: (value) => {
              if (required) {
                const validationResult = requiredValidation(
                  value && value.length > 0 ? value : ""
                );
                if (validationResult !== true) return validationResult;
              }

              if (maxTotalSize && value && value.length > 0) {
                const totalSize = value.reduce((acc: number, file: File) => acc + file.size, 0);
                if (totalSize > maxTotalSize) {
                  const maxSizeMB = (maxTotalSize / (1024 * 1024)).toFixed(1);
                  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(1);
                  return `Total file size (${totalSizeMB}MB) exceeds the maximum allowed size of ${maxSizeMB}MB.`;
                }
              }

              return true;
            },
          }}
          render={() => (
            <label htmlFor={id} className="cursor-pointer">
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={twMerge(
                  "h-[172px] flex flex-col gap-y-3 items-center justify-center py-6 px-11 rounded-[8px] border border-dashed bg-inverse-subtle",
                  error ? "border-form-red" : "border-eleveted",
                  inputClassName
                )}
              >
                <input
                  id={id}
                  type="file"
                  multiple
                  accept={ALLOWED_EXTENSIONS.join(",")}
                  onChange={(e) => {
                    handleFileSelect(e);
                  }}
                  className="hidden"
                />

                <div className="p-[8.67px] border border-neutral-strong rounded-[8px] bg-white">
                  <UploadIcon className="size-3 text-black" />
                </div>
                <div className="flex items-center justify-center gap-x-1 ">
                  <p className="whitespace-nowrap text-sm font-medium leading-[125%] text-neutral">
                    {isCompressing && uploadProgress
                      ? uploadProgress
                      : "Drop your files here or browse"}
                  </p>

                  {isCompressing && uploadProgress && (
                    <LoaderIcon className="ml-1 size-4 text-brand-primary animate-spin" />
                  )}

                  {!isCompressing && (
                    <Tooltip
                      content={
                        <ul className="grid grid-cols-4 md:grid-cols-6 2xl:grid-cols-8 gap-x-1 md:gap-x-2.5 gap-y-1">
                          {ALLOWED_EXTENSIONS.map((item) => (
                            <li
                              key={item}
                              className="text-xs/[15px] text-neutral"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      }
                      className="w-[300px] md:w-[400px] 2xl:w-[520px] mr-44 md:mr-0 2xl:mr-32"
                    >
                      <ExclamationIcon className="size-[13.33px] text-muted" />
                    </Tooltip>
                  )}
                </div>
              </div>
            </label>
          )}
        />
      </div>

      {!!value.length && (
        <ul
          className={twMerge(
            "grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2.5 overflow-y-auto",
            listClassName
          )}
        >
          {value.map(({ name, size, type }, i) => (
            <li
              key={`${name}-${i}`}
              className={twMerge(
                "flex justify-between items-center w-full p-2 rounded-[8px] border border-eleveted",
                listElementClassName
              )}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="flex items-center justify-center shrink-0 size-[38px] text-[10px] leading-[125%] font-bold rounded-[8px] text-muted bg-eleveted">
                  .{type.split("/")[1]}
                </div>

                <div className="flex flex-col min-w-0 flex-1 font-medium">
                  <span className="block text-neutral truncate">{name}</span>
                  <span className="block text-muted truncate">
                    {formatFileSize(size)}
                  </span>
                </div>
              </div>

              <button
                aria-label="Remove file"
                onClick={() => removeFile(name)}
                className="shrink-0 cursor-pointer"
              >
                <TrashIcon className="w-[15px] h-[16.885px] text-muted" />
              </button>
            </li>
          ))}
        </ul>
      )}

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

export default FileInput;
