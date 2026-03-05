import { Button, Heading } from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you're looking for doesn't exist. Return to Pen Manufacturing homepage for custom metal fabrication, CNC machining, and welding services in Southern California.",
  alternates: {
    canonical: "/not-found"
  },
  robots: {
    index: false,
    follow: true
  }
};

const NotFound = () => {
  return (
    <section className="h-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-y-6 pt-[213px] pb-[336px] md:pt-[263px] md:pb-[443px] 2xl:pt-[271px] 2xl:pb-[471px] px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      <div className="flex flex-col gap-y-3 text-center md:max-w-[502px] 2xl:max-w-full">
        <Heading as="h1" className="text-[48px]/[125%] md:text-[65px]/[125%] font-semibold text-neutral">
          Oops!
        </Heading>
        <Heading as="h2" className="text-lg/[125%] md:text-[32px]/[125%] font-medium text-muted">
          The page you&apos;re looking for can&apos;t be found
        </Heading>
      </div>

      <Link href="/" className="flex items-center justify-center w-full">
        <Button size="lg" className="w-full md:w-fit">
          Go to the Home page
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
