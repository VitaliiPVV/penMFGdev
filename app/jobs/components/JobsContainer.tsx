"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Filter from "./Filter";
import JobList from "./Jobs";
import { useStrapiCollection } from "@/hooks";
import { StrapiJobDepartment, StrapiJobType } from "@/types";
import { ALL_OPTIONS_VALUE } from "./Filter/constants";

const JobsContainer = () => {
  const searchParams = useSearchParams();
  const department = searchParams.get("department") || "";
  const jobType = searchParams.get("jobType") || "";

  const filters = useMemo(() => {
    const filterObj: Record<string, unknown> = {};

    if (department && department !== ALL_OPTIONS_VALUE) {
      filterObj.department = { $containsi: department };
    }

    return filterObj;
  }, [department]);

  const populateFilters = useMemo(() => {
    const jobOpeningsFilters: Record<string, unknown> = {};

    if (jobType && jobType !== ALL_OPTIONS_VALUE) {
      jobOpeningsFilters.jobType = {
        type: { $containsi: jobType }
      };
    }

    return jobOpeningsFilters;
  }, [jobType]);

  const params = useMemo(() => {
    const baseParams: Record<string, unknown> = {
      populate: {
        jobOpenings: {
          populate: ["jobDepartment", "jobType"],
        },
      },
    };

    if (Object.keys(filters).length > 0) {
      baseParams.filters = filters;
    }

    if (Object.keys(populateFilters).length > 0) {
      const populate = baseParams.populate as Record<string, Record<string, unknown>>;
      const jobOpenings = populate.jobOpenings as Record<string, unknown>;

      populate.jobOpenings = {
        ...jobOpenings,
        filters: populateFilters,
      };
    }

    return baseParams;
  }, [filters, populateFilters]);

  const { data: allDepartments } = useStrapiCollection<StrapiJobDepartment>(
    "job-departments",
    {
      populate: {
        jobOpenings: {
          populate: ["jobDepartment", "jobType"],
        },
      },
    }
  );

  const { data: departments, isLoading } =
    useStrapiCollection<StrapiJobDepartment>("job-departments", params);
  const { data: jobTypes } = useStrapiCollection<StrapiJobType>("job-types", {
    sort: ["createdAt:asc"]
  });

  return (
    <>
      <Filter departments={allDepartments} jobTypes={jobTypes} />
      <JobList departments={departments} isLoading={isLoading} />
    </>
  );
};

export default JobsContainer;
