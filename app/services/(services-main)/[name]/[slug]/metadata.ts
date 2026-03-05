import { Metadata } from 'next';

export interface SubService {
  label: string;
  id: string;
}

export const servicesMetadata: Record<string, SubService[]> = {
  'metal-fabrication': [
    { label: 'Aluminium Fabrication', id: 'aluminium-fabrication' },
    { label: 'Carbon Steel Fabrication', id: 'carbon-steel-fabrication' },
    { label: 'Stainless Steel Fabrication', id: 'stainless-steel-fabrication' },
    { label: 'Structural Steel Fabrication', id: 'structural-steel-fabrication' },
  ],
  welding: [
    { label: 'Aluminium Welding', id: 'aluminium-welding' },
    { label: 'MIG Welding', id: 'mig-welding' },
    { label: 'Stainless Steel Welding', id: 'stainless-steel-welding' },
    { label: 'TIG Welding', id: 'tig-welding' },
  ],
  machining: [
    { label: '4-axis machining', id: '4-axis-machining' },
    { label: 'Aluminum Machining', id: 'aluminum-machining' },
    { label: 'CNC / Precision Machining', id: 'cnc-precision-machining' },
    { label: 'CNC Milling', id: 'cnc-milling' },
    { label: 'CNC Turning', id: 'cnc-turning' },
    { label: 'Full Service Machine shop', id: 'full-service-machine-shop' },
    { label: 'High Speed Machining', id: 'high-speed-machining' },
    { label: 'Prototype/Short Run Machining', id: 'prototype-short-run-machining' },
    { label: 'Stainless Steel Machining', id: 'stainless-steel-machining' },
  ],
};

export function getSubServiceMetadata(
  name: string,
  slug: string
): Metadata {
  const services = servicesMetadata[name];
  const service = services?.find(s => s.id === slug);

  if (!service) {
    return {
      title: 'Service',
      description: 'Metal fabrication services in Southern California.',
    };
  }

  return {
    title: service.label,
    description: `${service.label} services in Southern California.`,
    alternates: {
      canonical: `/services/${name}/${slug}`,
    },
    openGraph: {
      title: `${service.label} | Pen Manufacturing`,
      description: `${service.label} services in Southern California.`,
      url: `/services/${name}/${slug}`,
    },
  };
}
