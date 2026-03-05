import { ArrowUpIcon, BuildingApartmentIcon, DistanceIcon } from '@/components/icons'
import { Heading } from '@/components/ui'
import React from 'react'

export enum Department {
  Office = 'Office (HR/VA/GM/Finance)',
  Production = 'Production',
  Maintenance = 'Quality and Maintenance',
  Sales = 'Sales/Biz Dev/Mktng',
  Supply = 'Supply',
}

export interface JobCardInterface {
  id: number
  name: string
  jobType: string
  location: string
  department: string
  href: string
}

export const JobCard: React.FC<JobCardInterface> = ({
  name,
  jobType,
  location,
  department,
  href
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-x-6 p-6 rounded-3xl bg-inverse-subtle hover:bg-brand-elevated transition-all">
      <div className="flex flex-col w-full gap-y-3">
        <div className="flex justify-between w-full">
          <Heading as="h3" className="text-lg/6 font-semibold text-neutral truncate">{name}</Heading>
          <ArrowUpIcon className="md:hidden size-6 text-brand-primary shrink-0" />
        </div>

        <div className="flex flex-col md:flex-row gap-y-1 gap-x-5 text-sm/[125%] font-medium text-muted">
          <div className="flex items-center gap-x-1">
            <DistanceIcon className="size-6" />
            <span>{location || jobType}</span>
          </div>

          <div className="flex items-center gap-x-1">
            <BuildingApartmentIcon className="size-6" />
            <span>{department}</span>
          </div>
        </div>
      </div>

      <ArrowUpIcon className="hidden md:block size-8 text-brand-primary" />
    </a>
  )
}
