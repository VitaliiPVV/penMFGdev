import { Metadata } from 'next';
import { getServiceMetadata, servicesMetadata } from './metadata';
import { ServiceSchema } from '@/components/StructuredData';

interface ServiceLayoutProps {
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  return getServiceMetadata(name);
}

export default async function ServiceLayout({
  children,
  params,
}: ServiceLayoutProps) {
  const { name } = await params;
  const serviceData = servicesMetadata[name];

  if (!serviceData) {
    return <>{children}</>;
  }

  return (
    <>
      <ServiceSchema
        serviceName={serviceData.title}
        description={serviceData.description}
        serviceUrl={`/services/${name}`}
      />
      {children}
    </>
  );
}

