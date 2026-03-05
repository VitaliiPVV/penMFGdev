import Link from "next/link";
import React from "react";
import { Industry } from "./types";
import { ArrowUpIcon } from "@/components/icons";
import { CirclePattern } from "@/components/ui";

const IndustryCard: React.FC<Industry> = ({
  title,
  path,
  isLinkDisabled,
}) => {
  return (
    <Link
      href={`/portfolio/featured-industries/${path}`}
      className={`${
        isLinkDisabled ? "pointer-events-none" : ""
      } group h-21 flex relative overflow-hidden z-2 items-center gap-x-3 px-6 rounded-2xl bg-inverse-subtle`}
    >
      <div className="w-full flex gap-3 justify-between items-center">
        <span className="text-lg font-semibold relative z-1 leading-6">
          {title}
        </span>

        <ArrowUpIcon className="size-6 min-w-6 relative z-1" />

        <CirclePattern
          containerClassName="-top-14 -right-23 2xl:-right-10"
          boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
          innerCircleClassName="size-[123.664px]"
          middleCircleClassName="size-[200.822px]"
          outerCircleClassName="size-[280.094px]"
        />
      </div>
    </Link>
  );
};

export default IndustryCard;
