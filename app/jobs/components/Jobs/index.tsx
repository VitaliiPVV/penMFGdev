"use client";

import React from "react";
import { JobCard } from "./JobCard";
import { StrapiJobDepartment } from "@/types";
import { LoaderIcon } from "@/components/icons";
import { Heading } from "@/components/ui";

interface JobListProps {
  departments: StrapiJobDepartment[];
  isLoading: boolean;
}

const JobList: React.FC<JobListProps> = ({ departments, isLoading }) => {

  if (isLoading) {
    return (
      <section className="flex justify-center py-8">
        <LoaderIcon className="text-brand-primary size-6" />
      </section>
    );
  }

  const formattedJobs = departments
    .map((dept) => {
      const jobs = (dept.jobOpenings || []).map((job) => ({
        id: job.id,
        name: job.name,
        jobType: job.jobType?.type ?? "",
        location: job.jobType?.location ?? "",
        department: dept.department,
        href: job.link || "",
      }));

      return { department: dept.department, jobs };
    })
    .filter(({ jobs }) => jobs.length > 0);

  const jobsCount = formattedJobs.reduce(
    (sum, { jobs }) => sum + jobs.length,
    0
  );

  return (
    <section>
      <span className="inline-block pb-4 text-sm/[125%] font-medium text-neutral-strong">
        {jobsCount} {jobsCount === 1 ? "role" : "roles"}
      </span>

      {!!jobsCount ? (
        <ul className="flex flex-col gap-y-8">
          {formattedJobs.map(({ department, jobs }) => (
            <li key={department} className="flex flex-col gap-y-l">
              <Heading as="h2" className="text-lg/6 md:text-xl/normal font-semibold text-neutral">
                {department}
              </Heading>
              <ul className="flex flex-col gap-y-m">
                {jobs.map((job) => (
                  <li key={`${department}-${job.id}`}>
                    <JobCard {...job} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <Heading as="h2" className="text-center text-xl font-medium text-neutral">
          No openings
        </Heading>
      )}
    </section>
  );
};

export default JobList;
