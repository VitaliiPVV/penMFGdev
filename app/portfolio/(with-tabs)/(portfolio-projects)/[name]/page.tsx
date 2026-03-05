"use client";

import { QuoteForm } from "@/components/containers";
import { Heading } from "@/components/ui";
import { use, useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import { projectsData } from "./consts";
import VideoComponent from "./components/VideoComponent";
import Image from "next/image";

export default function PortfolioProject({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { setActiveTabId } = useContext(TabContext);

  const { name: projectName } = use(params);

  useEffect(() => {
    setActiveTabId(projectName);
  }, [projectName, setActiveTabId]);

  const selectedProject = projectsData.find((project) => project.id === projectName) || projectsData[0];

  return (
    <>
      {selectedProject.content.map((content) => (
        <section
          key={content.title || (content.subtitle && content.subtitle[0])}
          className={`flex flex-col gap-4 ${content.title && 'gap-6'}`}
        >
          {content.title && (
            <Heading as="h1" className="text-2xl 2xl:text-4xl text-neutral font-bold">
              {content.title}
              <span className="sr-only">
                {" "}
                - Custom Metal Fabrication Project Portfolio
              </span>
            </Heading>
          )}
          {content.subtitle && (
            <Heading
              as="h2"
              className="text-2xl leading-8 font-bold text-neutral"
            >
              {content.subtitle[0]} <span className="text-brand-primary">{content.subtitle[1]}</span>
            </Heading>
          )}
          {content.text.map((text) => (
            <p key={text} className="text-neutral">{text}</p>
          ))}

          {content.video && (
            <div className="mt-4">
              <VideoComponent
                video={content.video}
              />
            </div>
          )}

          {content.images && (
            <div
              className={`
                mt-4 gap-6 grid grid-cols-1
                ${content.images.length > 1 && 'md:grid-cols-2'}
                ${content.images.length > 2 && 'grid-cols-2 md:grid-cols-3'}
              `}
            >
              {content.images.map((image, index) => {
                const imagesLength = content.images!.length;
                const isLast = imagesLength > 2 && index === 2;
                return (
                  <figure 
                    key={image} 
                    className={`
                      relative flex-shrink-0
                      ${isLast 
                        ? 'h-[240px] 2xl:h-[300px]'
                        : 'h-[172px] md:h-[240px] 2xl:h-[300px]' 
                      }
                      ${imagesLength > 2 && index === 2 && 'col-span-2 md:col-span-1'}
                    `}
                  >
                    <Image
                      src={image}
                      alt={selectedProject.label}
                      fill
                      className="w-full rounded-[24px] object-cover"
                    />
                    <figcaption className="sr-only">{selectedProject.label}</figcaption>
                  </figure>
                );
              })}
            </div>
          )}
        </section>
      ))}
      <QuoteForm
        className="px-m md:px-5 2xl:px-8 md:bg-inverse-subtle"
        fileInputClassName="md:bg-white"
      />
    </>
  );
};
