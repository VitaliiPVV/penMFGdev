import TabsLayout from '@/layouts/Tabs';
import { industries } from './[name]/constants';
import { IndustryGroup } from './[name]/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Featured Industries",
  description: "Explore the industries we serve including aerospace, defense, space, medical devices, semiconductor, and more. Custom metal fabrication solutions for specialized industries.",
  openGraph: {
    title: "Featured Industries | Pen Manufacturing",
    description: "Metal fabrication services for aerospace, medical, semiconductor, and other specialized industries.",
  },
};

const PAGE_LABEL = 'Industries';
const PAGE_HREF_PREFIX = '/portfolio/featured-industries';

interface FeaturedIndustriesLayoutProps {
  children: React.ReactNode;
}

export default async function FeaturedIndustriesLayout({ children }: FeaturedIndustriesLayoutProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Manufacturing Portfolio', href: '/portfolio' },
    { label: PAGE_LABEL },
  ];

  return (
    <TabsLayout<IndustryGroup>
      breadcrumbItems={breadcrumbItems}
      pageLabel={PAGE_LABEL}
      pageHrefPrefix={PAGE_HREF_PREFIX}
      tabItems={industries}
    >
      {children}
    </TabsLayout>
  );
}
