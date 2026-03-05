import { Fragment } from "react";
import { metrics } from "../constants";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const Metrics: React.FC<Props> = ({ className }) => {
  return (
    <ul
      className={twMerge(
        "grid grid-cols-1 gap-y-8 justify-items-center md:flex md:flex-wrap 2xl:grid-cols-2 md:gap-12 2xl:gap-x-12 2xl:gap-y-9 md:px-[57px] 2xl:px-0 md:max-w-[680px] 2xl:justify-items-center",
        className
      )}
    >
      {metrics.map(({ stats, metric, className }) => (
        <Fragment key={metric}>
          <li
            className={twMerge(
              "w-fit flex flex-col flex-1 items-center gap-y-2 2xl:gap-y-4 text-white",
              className
            )}
          >
            <span className="text-2xl md:text-2 2xl:text-[32px] font-bold leading-10 whitespace-nowrap">
              {stats}
            </span>
            <span className="text-center whitespace-nowrap 2xl:whitespace-normal 2xl:w-[200px] text-lg/6 md:text-sm/[125%] 2xl:text-lg/6 font-medium">
              {metric}
            </span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default Metrics;
