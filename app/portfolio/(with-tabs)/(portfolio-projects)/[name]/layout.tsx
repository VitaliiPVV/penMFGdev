import { Metadata } from 'next';
import { getProjectMetadata } from './metadata';
import BreadcrumbsSetter from './BreadcrumbsSetter';

interface PortfolioProjectLayoutProps {
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  return getProjectMetadata(name);
}

export default async function PortfolioProjectLayout({
  children,
  params,
}: PortfolioProjectLayoutProps) {
  const { name } = await params;
  
  return (
    <>
      <BreadcrumbsSetter projectName={name} />
      {children}
    </>
  );
}
