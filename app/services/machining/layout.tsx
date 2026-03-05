import React from 'react';

interface FullServiceLayoutProps {
  children: React.ReactNode;
}

export default function FullServiceLayout({ children }: FullServiceLayoutProps) {
  return (
    <div className="flex flex-col gap-y-4xl 2xl:gap-y-5xl max-w-[1440px] mx-auto py-4xl md:py-5xl px-x-mobile md:px-x-tablet 2xl:px-x-desktop">
      {children}
    </div>
  );
}
