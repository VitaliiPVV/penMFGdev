import React, { Fragment } from 'react'

const metrics: { stats: string, metric: string }[] = [
  {
    stats: '3.2 weeks',
    metric: 'Average Lead Time'
  },
  {
    stats: '10+',
    metric: 'Degreed Engineers On Staff'
  },
  {
    stats: '40+',
    metric: 'Years In Business'
  },
  {
    stats: '98.9%',
    metric: 'Quality Rating'
  },
  {
    stats: '$750 - $7M',
    metric: 'Order Range'
  },
];

const Metrics = () => {
  return (
    <section className="py-[32px] max-w-[1440px] mx-auto px-4 md:px-21 2xl:px-30">
      <ul className="flex flex-col md:flex-row md:flex-wrap 2xl:flex-nowrap 2xl:max-w-full justify-center items-center gap-8">
        {metrics.map(({ stats, metric }, i) => {
          const isLastIndex = i === metrics.length - 1;
          const isSecondIndex = i === 2

          return (
            <Fragment key={metric}>
              <li className="flex flex-col flex-1 items-center justify-center gap-y-2 text-center">
                <span className="text-2xl 2xl:text-[32px] font-bold leading-10 text-brand-primary whitespace-nowrap">{stats}</span>
                <span className="whitespace-nowrap 2xl:whitespace-normal text-lg/6 md:text-sm/[125%] 2xl:text-lg/6 font-medium text-neutral">{metric}</span>
              </li>

              {!isLastIndex && (
                <li className={`${isSecondIndex && 'md:hidden 2xl:block'} w-full h-px md:w-px md:h-24 bg-brand-elevated`} />
              )}

              {isSecondIndex && <div className="hidden md:block 2xl:hidden basis-full" />}
            </Fragment>
          );
        })}
      </ul>
    </section>
  );
}

export default Metrics;
