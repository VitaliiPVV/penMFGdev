import { Metadata } from 'next';

interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export const servicesMetadata: Record<string, ServiceMetadata> = {
  'certified-welding': {
    title: 'Certified Welding',
    description: 'AWS D1.1, D1.2, D1.6 certified welding in Orange County. 145 years combined experience in TIG, MIG, aluminum, stainless steel welding. 6 welding stations, up to 20,000 lbs capacity. Anaheim, CA.',
    keywords: [
      'AWS D1.1 certified welding',
      'AWS D1.2 aluminum welding',
      'AWS D1.6 stainless steel',
      'TIG welding Orange County',
      'MIG welding Anaheim',
      'certified welder California',
      'structural steel welding',
      'aluminum welding service',
      'stainless steel welding',
      'turnkey welding services',
      'welding shop Anaheim',
      '145 years welding experience',
    ],
  },
  'sheet-metal': {
    title: 'Sheet Metal',
    description: '8,000 sq ft sheet metal facility, 20+ skilled workers. Laser cutting, waterjet, stamping, hydroforming, bending brakes. Powder coating, plating. Aerospace, automotive, medical devices. Los Angeles area.',
    keywords: [
      'sheet metal fabrication',
      'laser cutting service',
      'waterjet cutting',
      'sheet metal stamping',
      'hydroforming',
      'bending brake service',
      'powder coating metal',
      'metal plating',
      'aerospace sheet metal',
      'automotive sheet metal',
      'medical device fabrication',
      'sheet metal Los Angeles',
      'precision metal forming',
      '8000 sq ft shop',
      'arc welding sheet metal',
    ],
  },
  'machining': {
    title: 'Machining',
    description: "Anaheim's leading machine shop since 1982. 4-axis CNC machining, high-speed milling, CNC turning. Tight tolerances, intricate parts. Aluminum, stainless steel, bronze, brass. Prototype to production. Orange County.",
    keywords: [
      '4-axis CNC machining',
      'high speed machining',
      'CNC turning',
      'CNC milling',
      'precision machine shop Anaheim',
      'tight tolerance machining',
      'aluminum machining',
      'stainless steel machining',
      'bronze machining',
      'brass machining',
      'prototype machining',
      'short run machining',
      'intricate machined parts',
      'turnkey machining services',
      'full service machine shop',
      'Orange County machining',
      'Los Angeles machine shop',
      'since 1982',
    ],
  },
  'finishing-assembling': {
    title: 'Finishing & Assembling',
    description: 'In-house metal finishing: passivation, bead blast, polish (#4, 2B, FG finishes), deburr, grinding. Sanitary-grade stainless steel finishing. Turnkey assembly services. Aerospace, medical, industrial. Anaheim, CA.',
    keywords: [
      'metal finishing services',
      'passivation in house',
      'passivate stainless steel',
      'bead blasting Anaheim',
      'metal polishing #4',
      '#4 finish stainless',
      '2B finish stainless',
      'FG finish polishing',
      'line grain finish',
      'deburring service',
      'metal assembly services',
      'surface grinding',
      'belt sanding metal',
      'jitterbug finishing',
      'disk sanding',
      'timesaver finishing',
      'sanitary grade finish',
      'aerospace surface finish',
      'medical device finishing',
      'turnkey assembly',
      'finishing Orange County',
      'in-house finishing',
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
      canonical: `/portfolio/services/${serviceName}`
    },
    openGraph: {
      title: `${service.title} | Pen Manufacturing`,
      description: service.description,
      url: `/portfolio/services/${serviceName}`
    },
  };
}
