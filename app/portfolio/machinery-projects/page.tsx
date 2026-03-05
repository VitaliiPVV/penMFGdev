import { QuoteForm } from "@/components/containers";
import { Content } from "./components";

const MachineryProjects = () => {
  return (
    <main className="flex flex-col gap-y-4xl 2xl:gap-y-5xl max-w-[1440px] mx-auto py-4xl md:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <Content />
      <QuoteForm
        className="px-m md:px-5 2xl:px-8 2xl:bg-inverse-subtle"
        fileInputClassName="2xl:bg-white"
      />
    </main>
  );
};

export default MachineryProjects;
