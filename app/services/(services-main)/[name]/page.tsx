"use client";

import { InfoCard, LinkCard, MaterialsCard, QuoteForm } from "@/components/containers";
import { TabOptionCard } from "@/components/containers/Tabs/TabOptionCard";
import TabOptionsContainer from "@/components/containers/Tabs/TabOptionsContainer";
import { GetQuote, InfoItem, TitledVideo } from "@/components/ui";
import { TabGroup, TabPanelOption } from "@/types/Tabs";
import { use, useContext, useEffect } from "react";
import { services } from "./constants";
import { TabContext } from "@/app/portfolio/(with-tabs)/contexts/TabContext";
import { TitleSection, SubtitleSection } from "../components";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface ServiceGroup extends TabGroup {
  imagePath: string;
  options: TabPanelOption[];
}

export default function Services({ params }: {
  params: Promise<{ name: string }>;
}) {
  const { setActiveTabId } = useContext(TabContext);
  const { name: serviceName } = use(params);
  const selectedServiceGroup = services.find((group) => group.id === serviceName) || services[0];

  useEffect(() => {
    setActiveTabId(serviceName);
  }, [serviceName, setActiveTabId]);

  return (
    <div className="flex flex-col gap-16">
      {selectedServiceGroup.content.map((content, i) => (
        <section key={i} className="flex flex-col gap-5 text-neutral">
          {content.title && (
            <TitleSection
              title={content.title}
              secondTitle={content.secondTitle}
              verticalSpace={content.verticalSpace}
              image={content.image}
              text={content.text}
              imageHeight={content.imageHeight}
            />
          )}

          {content.subtitle && (
            <div>
              <SubtitleSection
                subtitle={content.subtitle}
                text={content.text}
                subtitleImage={content.subtitleImage}
                subtitleImageClass={content.subtitleImageClass}
                textClass={content.textClass}
                subtitleClass={content.subtitleClass}
              />
            </div>
          )}

          {content.images && (
            <div className={twMerge("flex gap-6", content.imagesArrClass)}>
              {content.images.map((image) => (
                <figure key={image} className={twMerge("relative w-full h-[350px] 2xl:h-[389px]", content.imageClass)}>
                  <Image
                    fill
                    src={image}
                    alt='content image'
                    className="object-cover rounded-3xl"
                    unoptimized
                  />
                </figure>
              ))}
            </div>
          )}

          {content.infoItems && (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
              {content.infoItems.map((item) => (
                <InfoItem title={item} key={item} />
              ))}
            </div>
          )}

          {content.options && (
            <TabOptionsContainer>
              {content.options.map((option) => (
                <TabOptionCard key={option.id} data={option} />
              ))}
            </TabOptionsContainer>
          )}

          {content.videos && (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
              {content.videos.map((video, id) => (
                <TitledVideo
                  key={id}
                  videoImage={video.videoImg}
                  videoLink={video.videoLink}
                  videoTitle={video.videoTitle}
                />
              ))}
            </div>
          )}

          {content.links && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.links.map((link) => (
                <LinkCard key={link.name} label={link.name} url={link.url} />
              ))}
            </div>
          )}

          {content.infoCards && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.infoCards.map((card) => (
                <InfoCard key={card.title} title={card.title} text={card.text} />
              ))}
            </div>
          )}

          {content.materials && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.materials.map((material) => (
                <MaterialsCard
                  key={material.name}
                  name={material.name}
                  image={ {url: material.image} }
                  description={material.name}
                  internalImage
                  imageClassName="size-[93px]"
                  cardClassName="p-6"
                />
              ))}
            </div>
          )}

          {content.textAfter && (
            <div className="flex flex-col gap-4">
              {content.textAfter.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          )}

          {content.btn && <GetQuote />}
        </section>
      ))}

      <QuoteForm
        className="px-m md:px-5 2xl:px-8 mt-6 mb-8 md:mt-10 md:bg-inverse-subtle"
        fileInputClassName="md:bg-white"
      />
    </div>
  );
};
