import TabsLayout from '@/layouts/Tabs';
import { services } from './[name]/constants';
import { ServiceGroup } from './[name]/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive metal fabrication services including certified welding, precision CNC machining, custom metal fabrication, aluminum and stainless steel fabrication.",
  openGraph: {
    title: "Services | Pen Manufacturing",
    description: "Complete metal fabrication services: welding, CNC machining, custom fabrication.",
  },
};

const PAGE_LABEL = 'Services';
const PAGE_HREF_PREFIX = '/portfolio/services';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default async function ServicesLayout({ children }: ServicesLayoutProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Manufacturing Portfolio', href: '/portfolio' },
    { label: PAGE_LABEL },
  ];

  return (
    <TabsLayout<ServiceGroup>
      breadcrumbItems={breadcrumbItems}
      pageLabel={PAGE_LABEL}
      pageHrefPrefix={PAGE_HREF_PREFIX}
      tabItems={services}
    >
      {children}
    </TabsLayout>
  );
}
