"use client";

import { QuoteForm } from "@/components/containers";
import { GalleryCarousel } from "@/components/containers";
import { TabOptionCard } from "@/components/containers/Tabs/TabOptionCard";
import TabOptionsContainer from "@/components/containers/Tabs/TabOptionsContainer";
import { Button, Heading } from "@/components/ui";
import { RemoteMediaData } from "@/types";
import { TabGroup, TabPanelOption } from "@/types/Tabs";
import { use, useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import { industries } from "./constants";
import Link from "next/link";

export interface IndustryGroup extends TabGroup {
  description: string;
  options: TabPanelOption[];
  gallery: RemoteMediaData[];
}

export default function Industries({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { setActiveTabId } = useContext(TabContext);

  const { name: industryName } = use(params);

  useEffect(() => {
    setActiveTabId(industryName);
  }, [industryName, setActiveTabId]);

  const selectedIndustryGroup: IndustryGroup =
    industries.find((group) => group.id === industryName) || industries[0];

  return (
    <>
      <Heading as="h2" className="text-2xl font-bold">
        {selectedIndustryGroup.label}
        <span className="sr-only">
          {" "}
          - Manufacturing Solutions in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, and Southern California
        </span>
      </Heading>
      <p className="mt-4 text-base text-netural-600 max-w-[720px]">
        {selectedIndustryGroup.description}
      </p>
      <TabOptionsContainer>
        {selectedIndustryGroup.options.map((option) => (
          <TabOptionCard key={option.id} data={option} />
        ))}
      </TabOptionsContainer>
      <Link href="/quote" className="flex justify-start">
        <Button variant="primary" size="lg" className="w-full md:w-fit">
          Get A Quote
        </Button>
      </Link>
      <GalleryCarousel
        data={selectedIndustryGroup.gallery}
        options={{ loop: true }}
        title="Gallery"
        hasViewAll
        itemWidth={282}
        containerHeights={{ default: 290 }}
        className="mt-16"
        viewAllHref="/portfolio"
        hideControls={selectedIndustryGroup.gallery.length <= 3}
        edgeReachConfiguration={{
          reachSide: "right",
          marginConfigurations: {
            right: { default: "mr-4 md:mr-11", compensate: "-mr-4 md:-mr-11" },
          },
        }}
      />
      <QuoteForm
        className="px-m md:px-5 2xl:px-8 mt-6 mb-8 md:mt-10 md:bg-inverse-subtle"
        fileInputClassName="md:bg-white"
      />
    </>
  );
}
