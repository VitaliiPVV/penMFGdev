'use client';

import { TabProvider } from "@/app/portfolio/(with-tabs)/contexts/TabContext";
import { BreadcrumbsProvider, useBreadcrumbs } from "@/app/portfolio/(with-tabs)/contexts/BreadcrumbsContext";
import Tabs from "@/components/containers/Tabs";
import { Breadcrumbs, CirclePattern, Heading } from "@/components/ui";
import { TabGroup } from "@/types/Tabs";

interface FeaturedIndustriesLayoutProps<T> {
  children: React.ReactNode;
  tabItems: (T & TabGroup)[];
  pageLabel: string;
  pageHrefPrefix: string;
  breadcrumbItems: { label: string; href?: string }[];
}

function TabsLayoutContent<T extends TabGroup>({ children, breadcrumbItems, pageLabel, pageHrefPrefix, tabItems }: FeaturedIndustriesLayoutProps<T>) {
  const { breadcrumbs } = useBreadcrumbs();
  const finalBreadcrumbItems = breadcrumbs || breadcrumbItems;
  
  return (
    <TabProvider>
      <div className="bg-brand-primary w-full rounded-b-3xl overflow-hidden">
        <header className="w-full max-w-[1440px] px-x-mobile md:px-x-tablet 2xl:px-x-desktop py-8 relative">
          <Breadcrumbs items={finalBreadcrumbItems} className="text-white relative z-2" />
          <CirclePattern
            containerClassName="-left-[186px] -bottom-[150px]"
            boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.12) inset"
            innerCircleClassName="size-[173.29px] bg-[#2F41AA]"
            middleCircleClassName="size-[280.67px] bg-[#2C40AB]"
            outerCircleClassName="size-[390.17px] bg-[#2C3DAD]"
          />
        </header>
      </div>
      <div className="flex flex-col gap-y-4xl 2xl:gap-y-5xl max-w-[1440px] mx-auto py-4xl md:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
        <Tabs<T>
          tabItems={tabItems}
          hrefPrefix={pageHrefPrefix}
          tabListClassName="2xl:basis-[243px] 2xl:flex-shrink-0"
        >
          {children}
        </Tabs>
      </div>
    </TabProvider>
  );
}

export default function TabsLayout<T extends TabGroup>(props: FeaturedIndustriesLayoutProps<T>) {
  return (
    <BreadcrumbsProvider>
      <TabsLayoutContent<T> {...props} />
    </BreadcrumbsProvider>
  );
}