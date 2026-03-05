import { CirclePattern } from '@/components/ui'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InfoCardInterface {
  title: string
  icon: ReactNode
  children: ReactNode
  className?: string
  index?: number
}

export const InfoCard: React.FC<InfoCardInterface> = ({
  title,
  icon,
  children,
  className,
  index
}) => {
  const isThird = index === 2

  return (
    <div
      className={twMerge(
        "relative overflow-hidden h-[201px] md:h-full flex flex-col gap-y-sm p-xl rounded-3xl bg-inverse-subtle",
        className
      )}
    >
      <div className='flex items-center gap-x-1'>
        {icon}
        <span className="text-base/6 font-semibold text-brand-primary">{title}</span>
      </div>

      {children}

      <CirclePattern
        containerClassName={twMerge("top-3 -right-56 md:-right-60 2xl:-right-47", isThird && 'md:right-30')}
        innerCircleClassName="size-[165.305px]"
        middleCircleClassName="size-[268.444px]"
        outerCircleClassName="size-[374.409px]"
        boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
      />
    </div>
  )
}