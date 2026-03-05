import React from "react";
import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "../icons";

interface Props {
  onClick: () => void;
  arrowDirection?: "right" | "left";
  variant?: "default" | "ghost";
  className?: string;
}

const CarouselButton: React.FC<Props> = ({
  onClick,
  arrowDirection = "right",
  variant = "default",
  className,
  ...props
}) => {
  const isGhost = variant === "ghost";

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-full cursor-pointer transition-all flex items-center justify-center",
        isGhost
          ? "size-6 text-brand-primary"
          : "size-10 p-3 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white active:bg-brand-pressed",
        className
      )}
      {...props}
    >
      <ArrowRightIcon
        className={twMerge(
          isGhost ? "size-6" : "size-4",
          arrowDirection === "left" && "rotate-180"
        )}
      />
    </button>
  );
};

export default CarouselButton;
