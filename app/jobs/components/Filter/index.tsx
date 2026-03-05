"use client";

import { Button, DropdownInput } from "@/components/ui";
import { DropdownOption } from "@/components/ui/Dropdown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ALL_OPTIONS_ID, ALL_OPTIONS_VALUE } from "./constants";
import { StrapiJobDepartment, StrapiJobType } from "@/types";

interface FormValues {
  department: DropdownOption;
  jobType: DropdownOption;
}

interface FilterProps {
  departments: StrapiJobDepartment[];
  jobTypes: StrapiJobType[];
}

const defaultOption: DropdownOption = {
  id: ALL_OPTIONS_ID,
  value: ALL_OPTIONS_VALUE,
  name: ALL_OPTIONS_VALUE,
};

const Filter = ({ departments, jobTypes }: FilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const departmentOptions: DropdownOption[] = useMemo(
    () => [
      defaultOption,
      ...departments.map((dept) => ({
        id: dept.id,
        value: dept.department,
        name: dept.department,
      })),
    ],
    [departments]
  );

  const jobTypeOptions: DropdownOption[] = useMemo(
    () => [
      defaultOption,
      ...jobTypes.map((type) => ({
        id: type.id,
        value: type.type,
        name: type.type,
      })),
    ],
    [jobTypes]
  );

  function getInitialOption(opts: DropdownOption[], value?: string | null) {
    if (!value) return opts[0];
    return opts.find((o) => String(o.value) === value) ?? opts[0];
  }

  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      department: defaultOption,
      jobType: defaultOption,
    },
  });

  const { handleSubmit, getValues, reset, setValue } = methods;

  useEffect(() => {
    if (departments.length > 0) {
      const deptValue = getInitialOption(
        departmentOptions,
        searchParams.get("department")
      );
      setValue("department", deptValue);
    }
  }, [departments, departmentOptions, searchParams, setValue]);

  useEffect(() => {
    if (jobTypes.length > 0) {
      const typeValue = getInitialOption(
        jobTypeOptions,
        searchParams.get("jobType")
      );
      setValue("jobType", typeValue);
    }
  }, [jobTypes, jobTypeOptions, searchParams, setValue]);

  const getIsClearDisabled = () => {
    const { department, jobType } = getValues();

    return (
      department.id === ALL_OPTIONS_ID && jobType.id === ALL_OPTIONS_ID
    );
  };

  const setParams = (values: FormValues) => {
    const params = new URLSearchParams(window.location.search);

    const setParam = (key: keyof FormValues, paramName: string) => {
      const opt = values[key];
      const isAll = opt.id === ALL_OPTIONS_ID;

      if (isAll) {
        params.delete(paramName);
      } else {
        params.set(paramName, String(opt.value));
      }
    };

    setParam("department", "department");
    setParam("jobType", "jobType");

    const query = params.toString();
    const href = query ? `${pathname}?${query}` : pathname;

    router.replace(href, { scroll: false });
  };

  const onClear = () => {
    reset({
      department: departmentOptions[0],
      jobType: jobTypeOptions[0],
    });

    router.replace(pathname, { scroll: false });
  };

  const onSubmit = handleSubmit(setParams);

  return (
    <section>
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col 2xl:flex-row gap-x-4 gap-y-xl"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-xl">
            <DropdownInput
              id="department"
              options={departmentOptions}
              label="Department"
            />

            <DropdownInput
              id="jobType"
              options={jobTypeOptions}
              label="Type"
            />
          </div>

          <div className="self-end flex items-center">
            <Button
              variant="ghost"
              size="md"
              className="transition-all"
              disabled={getIsClearDisabled()}
              onClick={onClear}
            >
              Clear
            </Button>
            <Button size="md" type="submit">
              Search
            </Button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default Filter;
