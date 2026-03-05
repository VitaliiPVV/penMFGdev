import TabsLayout from '@/layouts/Tabs';
import type { Metadata } from 'next';
import { aboutUsPages } from './[name]/consts';

export const metadata: Metadata = {
  title: "About Us",
  description: "Comprehensive metal fabrication services including certified welding, precision CNC machining, custom metal fabrication, aluminum and stainless steel fabrication.",
  openGraph: {
    title: "About Us | Pen Manufacturing",
    description: "Complete metal fabrication services: welding, CNC machining, custom fabrication.",
  },
};

const PAGE_LABEL = 'About Us';
const PAGE_HREF_PREFIX = '/about-us/';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default async function ServicesLayout({ children }: ServicesLayoutProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: PAGE_LABEL },
  ];

  return (
    <TabsLayout
      breadcrumbItems={breadcrumbItems}
      pageLabel={PAGE_LABEL}
      pageHrefPrefix={PAGE_HREF_PREFIX}
      tabItems={aboutUsPages}
    >
      {children}
    </TabsLayout>
  );
}
