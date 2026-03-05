import TabsLayout from '@/layouts/Tabs';
import { projectsData } from './[name]/consts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio Projects",
  description: "Explore our portfolio of custom metal fabrication projects including Hyperloop test sleds, custom stainless steel fabrication, and precision machining.",
  openGraph: {
    title: "Portfolio Projects | Pen Manufacturing",
    description: "Custom metal fabrication projects and manufacturing solutions.",
  },
};

const PAGE_LABEL = 'Portfolio Projects';
const PAGE_HREF_PREFIX = '/portfolio/';

interface PortfolioProjectsLayoutProps {
  children: React.ReactNode;
}

export default async function PortfolioProjectsLayout({ children }: PortfolioProjectsLayoutProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: PAGE_LABEL },
  ];

  return (
    <>
      <TabsLayout
        breadcrumbItems={breadcrumbItems}
        pageLabel={PAGE_LABEL}
        pageHrefPrefix={PAGE_HREF_PREFIX}
        tabItems={projectsData}
      >
        <section className='flex flex-col gap-16'>
          {children}
        </section>
      </TabsLayout>
    </>
  );
}
