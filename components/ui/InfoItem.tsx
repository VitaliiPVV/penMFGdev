import { CirclePattern } from '@/components/ui'
import React from 'react'

export interface InfoCardInterface {
  title: string
}

const InfoItem = ({ title }: InfoCardInterface) => {
  return (
    <div className="relative overflow-hidden py-[30px] px-6 bg-inverse-subtle rounded-2xl">
      <p className="text-lg leading-6 font-semibold">{title}</p>

      <CirclePattern
        containerClassName="-top-[56px] -right-[138px]"
        innerCircleClassName="size-[123.66px]"
        middleCircleClassName="size-[200px]"
        outerCircleClassName="size-[280px]"
        boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
      />
    </div>
  );
};

export default InfoItem;
