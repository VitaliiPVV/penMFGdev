"use client";

import { TabGroup } from "@/types/Tabs";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  hrefPrefix?: string;
  data: TabGroup;
  isActive: boolean;
}

const Tab = ({ className, isActive = false, ...props }: TabProps) => {
  const {
    hrefPrefix = "",
    data: { id, label },
  } = props;

  const tabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isActive && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isActive]);

  return (
    <Link
      href={`${hrefPrefix}/${id}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`${id}-panel`}
      id={`${id}-tab`}
      ref={tabRef}
      className={twMerge(
        'block px-4 py-2 font-medium text-sm leading-4.5 w-full h-full rounded-[17px] cursor-pointer whitespace-nowrap 2xl:whitespace-normal',
        isActive
          ? "bg-brand-elevated text-brand-pressed"
          : "text-muted hover:bg-brand-subtle hover:text-brand-primary animation-colors duration-500",
        className
      )}
    >
      {label}
    </Link>
  );
};

export default Tab;
