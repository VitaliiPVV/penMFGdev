import { CirclePattern } from "@/components/ui";
import VideoCp from "./VideoCp";

const VideosSection = () => {
  return (
    <section className="bg-inverse-subtle py-16 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-x-mobile md:px-x-tablet 2xl:px-x-desktop relative z-2">
        <VideoCp />
      </div>

      <CirclePattern
        containerClassName="-top-[371px] -left-[371px]"
        boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
        innerCircleClassName="size-[327.72px]"
        middleCircleClassName="size-[532.2px]"
        outerCircleClassName="size-[742.28px]"
      />

      <CirclePattern
        containerClassName="-bottom-[371px] -right-[371px]"
        boxShadow="0 -6px 34px 0 rgba(56, 123, 194, 0.08) inset"
        innerCircleClassName="size-[327.72px]"
        middleCircleClassName="size-[532.2px]"
        outerCircleClassName="size-[742.28px]"
      />
    </section>
  );
};

export default VideosSection;
