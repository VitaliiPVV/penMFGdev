"use client";

import { OrderedListCard, QuoteForm } from "@/components/containers";
import { Heading } from "@/components/ui";
import { use, useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import { aboutUsPages } from "./consts";
import { Video } from "./components";
import Image from "next/image";
import { InfoCard } from "@/components/ui/InfoCard";

export default function AboutUsPages({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { setActiveTabId } = useContext(TabContext);

  const { name: projectName } = use(params);

  useEffect(() => {
    setActiveTabId(projectName);
  }, [projectName, setActiveTabId]);

  const selectedPage = aboutUsPages.find((project) => project.id === projectName) || aboutUsPages[0];

  return (
    <main className="flex flex-col gap-16">
      <section>
        {selectedPage.content.map((content, id) => (
          <div
            key={id}
            className={`flex flex-col ${content.contactTitle ? 'gap-2' : 'gap-4'}`}
          >
            {content.title && (
              <Heading as="h1" className="text-2xl 2xl:text-[32px] text-neutral font-bold mb-1 2xl:mb-2">
                {content.title}
                <span className="sr-only">
                  {" "}
                  - Custom Metal Fabrication Project Portfolio
                </span>
              </Heading>
            )}
            {content.subtitle && (
              <p className="leading-tight font-medium text-neutral mt-6">{content.subtitle}</p>
            )}
            {content.contactTitle && (
              <p className="leading-tight font-medium text-neutral mt-6">{content.contactTitle}</p>
            )}
            {content?.text?.map((text) => (
              <p key={text} className="text-neutral">{text}</p>
            ))}

            {content.video && (
              <div className="mt-4">
                <Video {...content.video} />
              </div>
            )}

            {content.image && (
              <div className="flex flex-col-reverse 2xl:flex-col gap-6">
                <div
                  className='mt-4 gap-6 flex flex-col'>
                  <figure className='relative flex-shrink-0 h-[224px] md:h-[290px] 2xl:h-[504px]'>
                    <Image
                      src={content.image}
                      alt={content.title || 'about-us image'}
                      fill
                      className="w-full rounded-[24px] object-cover"
                    />
                    <figcaption className="sr-only">{content.title}</figcaption>
                  </figure>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.countItems?.map((item) => (
                    <OrderedListCard key={item.number} listElement={item} />
                  ))}
                </div>
              </div>
            )}

            {content.component && <>{content.component}</>}

            {content.contactItems && (
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                {content.contactItems.map(({ title, icon, children }, i) => (
                  <div key={title} className="md:last:col-span-2 2xl:last:col-span-1 w-full">
                    <InfoCard
                      title={title}
                      icon={icon}
                      index={i}
                      className=""
                    >
                      {children}
                    </InfoCard>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
      <QuoteForm
        className="px-m md:px-5 2xl:px-8 md:bg-inverse-subtle"
        fileInputClassName="md:bg-white"
      />
    </main>
  );
};
