import React from "react";
import ContentBlock from "./ContentBlock";
import Link from "next/link";

const contentBlocks = [
  {
    titleFirstPart: "Reducing",
    titleSecondPart: "Supply Chain Risk",
    list: [
      {
        number: 1,
        title: "Reshoring",
        text: "Bring production closer with efficient, cost-effective reshoring support.",
      },
      {
        number: 2,
        title: "Large to Small Projects",
        text: "From small runs to large builds, our capacity lowers risk and keeps projects on track.",
      },
      {
        number: 3,
        title: "Overflow work",
        text: "We handle extra workload seamlessly to maintain your deadlines and quality.",
      },
      {
        number: 4,
        title: "Succession planning for supply chain",
        text: "Future-proof your operations with reliable backup strategies and continuity planning.",
      },
    ],
    imageLink: "/images/supply_chain_risk.webp",
  },
  {
    titleFirstPart: "Helping With",
    titleSecondPart: "Complex Work",
    list: [
      {
        number: 1,
        title: "Degreed engineers",
        text: "Expert engineers delivering reliable, innovative solutions with collaborative design support.",
      },
      {
        number: 2,
        title: "Many capabilities under one roof",
        text: (
          <>
            One team, many capabilities —{" "}
            <Link
              href="/portfolio/services/certified-welding"
              className="text-brand-primary underline"
            >
              welding
            </Link>
            ,{" "}
            <Link
              href="/portfolio/services/sheet-metal"
              className="text-brand-primary underline"
            >
              sheet metal
            </Link>{" "}
            and{" "}
            <Link
              href="/portfolio/services/finishing-assembling"
              className="text-brand-primary underline"
            >
              assembling
            </Link>
            .
          </>
        ),
      },
      {
        number: 3,
        title: (
          <Link
            href="/quality"
            className="text-neutral hover:text-brand-primary hover:underline transition-colors"
          >
            Certified Facility
          </Link>
        ),
        text: (
          <>
            <Link href="/quality" className="text-brand-primary underline">
              AS9100, ISO9100, NADCAP, ITAR
            </Link>{" "}
            and other compliance standards
          </>
        ),
      },
      {
        number: 4,
        title: "From Prototyping to production runs",
        text: "Precision parts delivered quickly, from one-off prototypes to full runs",
      },
    ],
    imageLink: "/images/content_image_2.avif",
    reverse: true,
  },
];

const Content = () => {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 2xl:gap-y-[90px] py-12 2xl:py-16 px-4 md:px-11 2xl:px-30 rounded-[16px] 2xl:rounded-[24px] bg-inverse-subtle">
      {contentBlocks.map(
        ({ imageLink, list, titleFirstPart, titleSecondPart, reverse }, i) => (
          <ContentBlock
            key={imageLink}
            imageLink={imageLink}
            titleFirstPart={titleFirstPart}
            titleSecondPart={titleSecondPart}
            reverse={reverse}
            contentList={list}
            index={i}
          />
        )
      )}
    </div>
  );
};

export default Content;
