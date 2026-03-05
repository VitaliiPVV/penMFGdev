import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { LoaderIcon } from "../icons";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  loading,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  ...rest
}: ButtonProps) => {
  const { disabled } = rest;
  const isDisabled = disabled || loading;
  const sizeY = size === "lg" ? "py-4 h-[56px]" : "py-2 h-[40px]";
  const baseClasses = `flex flex-col items-center justify-center px-8 ${sizeY} rounded-4xl font-semibold transition-all duration-500`;

  const cursorClasses = isDisabled ? "cursor-not-allowed" : "cursor-pointer";

  const disabledClasses = isDisabled
    ? "text-neutral-400 border-neutral-400 opacity-80"
    : "";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: isDisabled
      ? "bg-brand-primary text-white"
      : "bg-brand-primary text-white active:text-neutral active:bg-brand-pressed hover:bg-[#4052CB]",
    secondary: isDisabled
      ? "bg-white text-brand-primary"
      : "bg-white text-brand-primary active:text-neutral active:bg-neutral-400 active:bg-brand-elevated hover:bg-brand-subtle",
    ghost: isDisabled
      ? "bg-transparent text-brand-primary"
      : "bg-transparent text-brand-primary hover:bg-brand-elevated active:bg-brand-pressed",
    outline: isDisabled
      ? "bg-transparent border border-brand-primary text-brand-primary"
      : "bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white active:bg-brand-pressed",
  };

  const loaderClasses: Record<ButtonVariant, string> = {
    primary: "text-white",
    secondary: "text-brand-primary",
    ghost: "text-brand-primary",
    outline: "text-brand-primary",
  };

  const appliedClasses = twMerge(
    baseClasses,
    cursorClasses,
    variantClasses[variant],
    disabledClasses,
    className
  );

  return (
    <button
      className={appliedClasses}
      type={type}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <LoaderIcon className={`${loaderClasses[variant]} absolute size-6`} />
      )}

      <div className={`${loading ? "opacity-0" : "flex"}`}>{children}</div>
    </button>
  );
};

export default Button;
