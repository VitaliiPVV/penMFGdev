import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Heading } from '@/components/ui';
import React, { Suspense } from 'react'
import JobsContainer from './components/JobsContainer';
import type { Metadata } from 'next';

const JobsLoadingSkeleton = () => (
  <section>
    <div className="h-6 w-20 bg-gray-200 rounded mb-4 animate-pulse" />
    <ul className="flex flex-col gap-y-8">
      {[1, 2, 3].map((i) => (
        <li key={i} className="flex flex-col gap-y-l">
          <div className="h-7 w-32 bg-gray-200 rounded animate-pulse" />
          <ul className="flex flex-col gap-y-m">
            {[1, 2].map((j) => (
              <li key={j} className="h-20 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export const metadata: Metadata = {
  title: "Careers & Jobs",
  description: "Join our RHINOS culture! Machinist, welder, CNC operator jobs in Anaheim, CA. Benefits: 401k match, Cal Choice medical/dental/vision, PTO, paid holidays. Apply now for manufacturing careers.",
  keywords: ["machinist jobs Anaheim", "welder jobs Orange County", "CNC operator careers", "manufacturing jobs 92801", "401k employer match", "Cal Choice benefits", "metal fabrication careers", "Anaheim CA jobs", "hiring machinists", "welding jobs California"],
  alternates: {
    canonical: "/jobs"
  },
  openGraph: {
    title: "Careers & Jobs | Pen Manufacturing",
    description: "Join our RHINOS culture team in Anaheim! Competitive benefits including 401k match, Cal Choice health plans, and PTO. Hiring machinists, welders, and CNC operators.",
    url: "/jobs"
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Careers' },
  { label: 'Jobs' }
];

const Jobs = () => {
  return (
    <section className="flex flex-col gap-y-xl max-w-[1440px] mx-auto py-4xl md:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <div className="flex flex-col gap-y-3">
        <Breadcrumbs items={breadcrumbItems} />

        <Heading as="h1" className="sr-only text-2xl/8 2xl:text-[32px]/[100%] font-bold 2xl:font-extrabold text-neutral">
          Jobs - Manufacturing Careers in Anaheim, Orange County, Los Angeles, Irvine, Santa Ana, Fullerton, and Southern California
        </Heading>
      </div>

      <Suspense fallback={<JobsLoadingSkeleton />}>
        <JobsContainer />
      </Suspense>
    </section>
  )
}

export default Jobs