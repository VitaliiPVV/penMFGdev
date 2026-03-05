"use client";

import React, { useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui";

interface LoadMoreButtonProps {
  currentPage: number;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ currentPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(currentPage + 1));

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <Button
      className="w-full md:w-fit self-center"
      size="lg"
      onClick={handleLoadMore}
      loading={isPending}
    >
      Load more
    </Button>
  );
};

export default LoadMoreButton;
