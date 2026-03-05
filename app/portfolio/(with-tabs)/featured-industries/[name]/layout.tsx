import { Metadata } from 'next';
import { getIndustryMetadata } from './metadata';

interface IndustryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  return getIndustryMetadata(name);
}

export default async function IndustryLayout({
  children,
}: IndustryLayoutProps) {
  return <>{children}</>;
}
