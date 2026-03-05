import { Metadata } from 'next';

interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export const servicesMetadata: Record<string, ServiceMetadata> = {
  'metal-fabrication': {
    title: 'Metal Fabrication',
    description: 'Custom metal fabrication services in Southern California including structural, sheet, and precision fabrication.',
    keywords: [
      'metal fabrication',
      'custom metal fabrication',
      'structural fabrication',
      'sheet metal fabrication',
      'precision metal fabrication',
      'Anaheim metal fabrication',
      'Orange County fabrication',
    ],
  },
  welding: {
    title: 'Welding',
    description: 'Certified welding services including TIG, MIG, and structural welding for stainless steel, aluminum, and more.',
    keywords: [
      'welding services',
      'TIG welding',
      'MIG welding',
      'certified welding',
      'stainless steel welding',
      'aluminum welding',
    ],
  },
  'sheet-metal': {
    title: 'Sheet Metal',
    description: 'Sheet metal fabrication with laser cutting, punching, forming, and finishing services.',
    keywords: [
      'sheet metal',
      'laser cutting',
      'metal punching',
      'metal forming',
      'sheet metal fabrication',
    ],
  },
  machining: {
    title: 'Machining',
    description: 'Precision CNC machining, milling, and turning for complex parts and tight tolerances.',
    keywords: [
      'CNC machining',
      'precision machining',
      'CNC milling',
      'CNC turning',
      'machine shop',
    ],
  },
  finishing: {
    title: 'Finishing',
    description: 'Metal finishing services including deburring, grinding, bead blasting, and polishing.',
    keywords: [
      'metal finishing',
      'deburring',
      'grinding',
      'bead blasting',
      'metal polishing',
    ],
  },
};

export function getServiceMetadata(serviceName: string): Metadata {
  const service = servicesMetadata[serviceName];

  if (!service) {
    return {
      title: 'Service',
      description: 'Metal fabrication services in Southern California.',
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${serviceName}`,
    },
    openGraph: {
      title: `${service.title} | Pen Manufacturing`,
      description: service.description,
      url: `/services/${serviceName}`,
    },
  };
}

