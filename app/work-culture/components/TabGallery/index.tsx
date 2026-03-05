"use client";

import { GalleryCarousel } from "@/components/containers";
import TabButton from "@/components/containers/Tabs/TabButton";
import TabList from "@/components/containers/Tabs/TabList";
import TabPanel from "@/components/containers/Tabs/TabPanel";
import TabsContainer from "@/components/containers/Tabs/TabsContainer";
import { LoaderIcon } from "@/components/icons";
import { Heading } from "@/components/ui";
import { useStrapiCollection } from "@/hooks";
import { TabGroup } from "@/types/Tabs";
import { useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";

export interface GalleryGroup extends TabGroup {
  documentId: string;
  snag: string;
  images: {
    documentId: string;
    url: string;
    alternativeText?: string;
    name: string;
  }[];
}

interface TabGalleryProps {
  title?: string;
}

const TabGallery = ({ title }: TabGalleryProps) => {
  const { activeTabId, setActiveTabId } = useContext(TabContext);
  const { data: tabItems, isLoading } = useStrapiCollection<GalleryGroup>(
    "work-culture-galleries",
    {
      populate: "images",
    }
  );

  const activeTab =
    tabItems.find((tab) => tab.snag === activeTabId) || tabItems[0];

  useEffect(() => {
    if (!activeTabId && activeTab) {
      setActiveTabId(activeTab.snag);
    }
  }, [setActiveTabId, activeTabId, activeTab]);

  if (isLoading) {
    return <LoaderIcon className="text-brand-primary w-full mx-auto size-6" />;
  }

  if (!activeTab) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[1440px] px-x-mobile md:px-x-tablet 2xl:px-x-desktop flex flex-col gap-y-3">
      <TabsContainer className="flex w-full flex-col 2xl:flex-row gap-6 2xl:gap-43">
        <div className="flex flex-shrink-0 2xl:basis-[243px] flex-col gap-y-xl 2xl:gap-y-2xl">
          {title && (
            <Heading
              as="h2"
              className="text-2xl/8 2xl:text-[32px]/10 font-bold text-neutral"
            >
              {title}
            </Heading>
          )}
          <TabList
            className="w-full h-auto 2xl:h-fit overflow-x-auto"
            listProps={{
              className:
                "flex flex-row 2xl:flex-col gap-2 min-w-fit 2xl:min-w-auto flex-wrap justify-start md:flex-nowrap md:justify-between",
            }}
          >
            {tabItems.map((tab) => (
              <TabButton
                key={tab.documentId}
                isActive={activeTabId === tab.snag}
                data={tab}
                onClick={() => setActiveTabId(tab.snag)}
              />
            ))}
          </TabList>
        </div>
        <TabPanel className="flex-shrink-1 w-full flex flex-col gap-6">
          <GalleryCarousel
            data={activeTab.images}
            options={{ loop: true }}
            hasCounter
            controlsPosition="dynamic"
            containerHeights={{ default: 290, "2xl": 450 }}
          />
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default TabGallery;
