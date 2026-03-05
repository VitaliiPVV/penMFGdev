import { Metadata } from 'next';
import { getSubServiceMetadata, servicesMetadata } from './metadata';
import { ServiceSchema } from '@/components/StructuredData';

interface ServiceLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    name: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string, slug: string }>;
}): Promise<Metadata> {
  const { name, slug } = await params;
  return getSubServiceMetadata(name, slug);
}

export default async function ServiceLayout({
  children,
  params,
}: ServiceLayoutProps) {
  const { name, slug } = await params;
  const services = servicesMetadata[name];

  const activeService = services?.find(s => s.id === slug);

  if (!services || !activeService) {
    return <>{children}</>;
  }

  return (
    <>
      <ServiceSchema
        serviceName={activeService.label}
        description={`${activeService.label} services`}
        serviceUrl={`/services/${name}/${slug}`}
      />
      {children}
    </>
  );
}
