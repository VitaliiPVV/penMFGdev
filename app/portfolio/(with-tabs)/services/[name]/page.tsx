"use client";

import { QuoteForm } from "@/components/containers";
import { TabOptionCard } from "@/components/containers/Tabs/TabOptionCard";
import TabOptionsContainer from "@/components/containers/Tabs/TabOptionsContainer";
import { Button, Heading } from "@/components/ui";
import { TabGroup, TabPanelOption } from "@/types/Tabs";
import Image from "next/image";
import { use, useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import { services } from "./constants";
import Link from "next/link";

export interface ServiceGroup extends TabGroup {
  imagePath: string;
  options: TabPanelOption[];
}

export default function Services({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { setActiveTabId } = useContext(TabContext);

  const { name: serviceName } = use(params);

  useEffect(() => {
    setActiveTabId(serviceName);
  }, [serviceName, setActiveTabId]);

  const selectedServiceGroup: ServiceGroup =
    services.find((group) => group.id === serviceName) || services[0];

  return (
    <>
      <Heading as="h2" className="text-2xl font-bold">
        {selectedServiceGroup.label}
        <span className="sr-only">
          {" "}
          - Metal Fabrication Services in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, Long Beach, San Diego, and Southern California
        </span>
      </Heading>
      <div className="relative w-full h-[244px] md:h-[321px] rounded-3xl overflow-hidden">
        <Image
          fill
          src={selectedServiceGroup.imagePath}
          alt={selectedServiceGroup.label}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1200px"
          priority
        />
      </div>
      <TabOptionsContainer>
        {selectedServiceGroup.options.map((option) => (
          <TabOptionCard key={option.id} data={option} />
        ))}
      </TabOptionsContainer>
      <Link href="/quote" className="flex justify-center">
        <Button variant="primary" size="lg" className="w-full md:w-fit">
          Get A Quote
        </Button>
      </Link>
      <QuoteForm
        className="px-m md:px-5 2xl:px-8 mt-6 mb-8 md:mt-10 md:bg-inverse-subtle"
        fileInputClassName="md:bg-white"
      />
    </>
  );
}
