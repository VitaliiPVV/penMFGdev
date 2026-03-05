import { ArrowUpIcon } from '@/components/icons';
import { CirclePattern } from '@/components/ui';
import { RemoteMediaData } from '@/types';
import { getRemoteMediaData } from '@/lib';
import Link from 'next/link';
import React from 'react';

export interface StandardsCardInterface {
  label: string;
  data: RemoteMediaData;
}

const StandardsCard: React.FC<StandardsCardInterface> = ({ label, data }) => {
  const { url } = getRemoteMediaData(data);

  return (
    <div className="rounded-2xl bg-inverse-subtle">
      <Link
        href={url ?? ''}
        className="relative overflow-hidden flex items-center justify-between h-21 w-full px-6 py-4 text-neutral"
      >
        <span className="text-lg/6 font-semibold">{label}</span>

        <ArrowUpIcon className="size-6" />

        <CirclePattern
          containerClassName="-top-14 -right-20 md:-right-23 2xl:-right-35"
          boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
          innerCircleClassName="size-[123.664px]"
          middleCircleClassName="size-[200.822px]"
          outerCircleClassName="size-[280.094px]"
        />
      </Link>
    </div>
  );
};

export default StandardsCard;
