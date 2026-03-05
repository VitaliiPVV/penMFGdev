"use client";

import { usePathname } from "next/navigation";
import TabsLayout from '@/layouts/Tabs';
import { services } from './[name]/constants';
import { servicesPages } from "./[name]/[slug]/constants";
import { servicesMetadata } from "./[name]/[slug]/metadata";

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  let breadcrumbItems = null;
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const serviceSlug = parts[1];
  const PAGE_LABEL = services.find((s) => s.id === serviceSlug)?.label ?? 'Services';
  const PAGE_SERVICE_LABEL = servicesPages.find((s) => s.id === parts[parts.length - 1])?.label ?? 'Services';

  if (parts.length > 2) {
      breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: PAGE_LABEL, href: `/services/${serviceSlug}` },
        { label: PAGE_SERVICE_LABEL },
      ];
  } else {
    breadcrumbItems = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: PAGE_LABEL },
    ];
  }

  return (
    <TabsLayout
      breadcrumbItems={breadcrumbItems}
      pageLabel={parts.length > 2 ? PAGE_SERVICE_LABEL : PAGE_LABEL}
      pageHrefPrefix={parts.length > 2 ? `/services/${serviceSlug}` : "/services"}
      tabItems={parts.length > 2 ? servicesMetadata[serviceSlug] : services}
    >
      {children}
    </TabsLayout>
  );
}

