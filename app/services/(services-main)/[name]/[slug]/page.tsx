"use client";

import { InfoCard, LinkCard, MaterialsCard, QuoteForm, TabOptionCard, TabOptionsContainer } from "@/components/containers";
import { use, useContext, useEffect } from "react";
import { TabContext } from "@/app/portfolio/(with-tabs)/contexts/TabContext";
import { servicesPages } from "./constants";
import { SubtitleSection, TitleSection } from "../../components";
import Image from "next/image";
import { GetQuote, InfoItem, TitledVideo } from "@/components/ui";
import { twMerge } from "tailwind-merge";

interface ServiceDetailPageProps {
  params: Promise<{ name: string; slug: string }>;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { setActiveTabId } = useContext(TabContext);
  const { name, slug } = use(params);
  const selectedServiceDetailPage = servicesPages.find((group) => group.id === slug) || servicesPages[0];

  useEffect(() => {
    setActiveTabId(slug);
  }, [slug, setActiveTabId]);

  return (
    <div className="flex flex-col gap-16">
      {selectedServiceDetailPage.content.map((content, i) => (
        <section key={i} className="flex flex-col gap-5">
          {content.title && (
            <TitleSection
              title={content.title}
              secondTitle={content.secondTitle}
              verticalSpace={content.verticalSpace}
              image={content.image}
              text={content.text}
              imageHeight={content.imageHeight}
              highlight={content.highlight}
            />
          )}

          {content.subtitle && (
            <div>
              <SubtitleSection
                subtitle={content.subtitle}
                text={content.text}
                subtitleImage={content.subtitleImage}
                subtitleImageClass={content.subtitleImageClass}
                highlight={content.highlight}
              />
            </div>
          )}

          {content.images && (
            <div className={twMerge("flex gap-6", content.imagesOrder)}>
              {content.images.map((image) => (
                <figure key={image} className="relative w-full h-[350px] 2xl:h-[389px]">
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
            <div className={twMerge("grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6", content.infoItemsOrder)}>
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
            <div className={twMerge("grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6", content.videoClass)}>
              {content.videos.map((video, id) => (
                <TitledVideo
                  key={id}
                  videoImage={video.videoImg}
                  videoLink={video.videoLink}
                  videoTitle={video.videoTitle}
                  videoItemClass={content.videoItemClass}
                />
              ))}
            </div>
          )}

          {content.links && (
            <div className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-6", content.linksClass)}>
              {content.links.map((link) => (
                <LinkCard key={link.name} label={link.name} url={link.url} />
              ))}
            </div>
          )}

          {content.infoCards && (
            <div className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-6", content.infoCardsClass)}>
              {content.infoCards.map((card) => (
                <InfoCard
                  key={card.title}
                  title={card.title}
                  text={card.text}
                  className={content.infoCardWhite ? 'bg-white border border-eleveted' : ''}
                />
              ))}
            </div>
          )}

          {content.materials && (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
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
            <div className={twMerge("flex flex-col gap-4", content.textAfterOrder)}>
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
}

