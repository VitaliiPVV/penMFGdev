import React, { ReactNode, Suspense } from "react";
import { LoaderIcon } from "../icons";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  loaderClassName?: string;
  containerClassName?: string;
}

const CustomSuspense: React.FC<Props> = ({
  children,
  containerClassName,
  loaderClassName,
}) => {
  return (
    <Suspense
      fallback={
        <section
          className={twMerge("flex justify-center py-8", containerClassName)}
        >
          <LoaderIcon
            className={twMerge("text-brand-primary size-6", loaderClassName)}
          />
        </section>
      }
    >
      {children}
    </Suspense>
  );
};

export default CustomSuspense;
