import { Metadata } from 'next';

interface IndustryMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export const industriesMetadata: Record<string, IndustryMetadata> = {
  'aerospace-defence-space': {
    title: 'Aerospace, Defence & Space',
    description: 'ITAR-registered facility. AS9100 & ISO9001 certified. Aerospace tooling, ground support equipment, satellite components. Multi-axis machining, aluminum/stainless welding. Defense-related articles compliance. Anaheim, CA.',
    keywords: [
      'ITAR registered facility',
      'ITAR compliant manufacturer',
      'AS9100 certified aerospace',
      'aerospace tooling manufacturer',
      'ground support equipment',
      'satellite components',
      'spacecraft parts fabrication',
      'defense contractor ITAR',
      'multi-axis aerospace machining',
      'high speed aerospace machining',
      'aluminum aerospace welding',
      'TIG welding aerospace',
      'MIG welding defense',
      'structural steel aerospace',
      'aerospace fabrication California',
      'defense-related articles',
      'export control compliance',
      'national security manufacturing',
      'U.S. government contractor',
      'prototype aerospace parts',
    ],
  },
  'wastewater-sewage-treatment-disposal': {
    title: 'Wastewater & Sewage Treatment',
    description: '40+ years wastewater experience. Precision welding for SS valves, fittings, drainage units, sprockets. Clean-water engineering partner. Certified welders, 10-15 years minimum. 5-10% acceptance rate. Municipal & industrial.',
    keywords: [
      'wastewater treatment equipment',
      'stainless steel wastewater valves',
      'wastewater fittings fabrication',
      'drainage units manufacturing',
      'wastewater sprockets',
      'wastewater connectors',
      'water treatment rollers',
      'precision welding wastewater',
      'clean water engineering',
      'municipal wastewater systems',
      'sewage treatment components',
      'stainless steel treatment plant',
      'wastewater plastic parts',
      'certified welder wastewater',
      'TIG welding stainless steel',
      'MIG welding wastewater',
      'durability wastewater equipment',
      'treatment plant fabrication',
      '40 years wastewater experience',
      'industrial wastewater parts',
    ],
  },
  'transit-infrastructure': {
    title: 'Transit Infrastructure',
    description: '20+ years rail systems partner. Galley/restroom systems for trains, 400+ units on 3 continents. Light gauge SS railcar components. American Sheet Metal: LA/OC metro stations, bridge drainage, seismic reinforcement. Civil engineers.',
    keywords: [
      'train galley systems',
      'railcar restroom systems',
      'rail component fabrication',
      'light gauge stainless steel',
      'railcar interior manufacturing',
      'train HVAC systems',
      'rail liquid waste systems',
      'metro station construction',
      'transit infrastructure',
      'bridge drainage systems',
      'seismic reinforcements',
      'architectural metals transit',
      'American Sheet Metal',
      'Los Angeles metro',
      'Orange County transit',
      'civil engineering support',
      'BuildingConnected vendor',
      'train door fabrication',
      'railcar suspension parts',
      'global rail supplier',
    ],
  },
  'energy': {
    title: 'Energy & Renewables',
    description: '20+ years energy sector experience. Battery enclosures, EV charging infrastructure, power distribution assemblies. Ostromo, First Element Fuel, Solar Turbines partner. Energy storage & generation equipment.',
    keywords: [
      'energy storage systems',
      'EV charging infrastructure',
      'battery enclosures fabrication',
      'power distribution assemblies',
      'renewable energy equipment',
      'solar equipment manufacturing',
      'energy generation components',
      'EV charging housing',
      'renewables fabrication',
      'First Element Fuel supplier',
    ],
  },
  'electronics-data-centres': {
    title: 'Electronics & Data Centers',
    description: 'Custom electrical enclosures, IT housings, solar battery boxes, traffic control equipment. CAD-driven manufacturing. Laser/punch, stud-welding, PEM hardware. Ken Penrose 40+ years. Quick turnaround. Aviation, rail, data centers.',
    keywords: [
      'custom electrical enclosures',
      'IT enclosures fabrication',
      'solar battery enclosures',
      'traffic control equipment housing',
      'data center enclosures',
      'server rack enclosures',
      'cable management systems',
      'wire management enclosures',
      'electrical equipment housing',
      'aviation electronics enclosures',
      'rail electronics cabinets',
      'food beverage containers',
      'CAD driven manufacturing',
      'stud welding enclosures',
      'PEM hardware installation',
      'laser punch processing',
      'sheet metal electronics',
      'aluminum enclosures',
      'quick turnaround enclosures',
      'design for manufacturability',
    ],
  },
  'industrial': {
    title: 'Industrial Manufacturing',
    description: 'ASM precision engineering for industrial applications. Medical/emergency services, specialty plastics, scientific equipment. University partnerships, custom intricate projects. On-time delivery, competitive pricing. 9 industries: Scientific, Medical, Entertainment, Oceanographic, Printing, Refinery, Air Pollution, Plastics, Recreational.',
    keywords: [
      'ASM metal fabrication',
      'American Sheet Metal industrial',
      'medical device fabrication',
      'emergency services equipment',
      'specialty plastics equipment',
      'scientific equipment manufacturing',
      'university research equipment',
      'custom intricate projects',
      'medical equipment components',
      'emergency medical parts',
      'oceanographic equipment',
      'printing industry parts',
      'refinery equipment fabrication',
      'oil industry metal parts',
      'air pollution control equipment',
      'recreational equipment manufacturing',
      'entertainment industry metal',
      'precision engineering industrial',
      'on-time delivery fabrication',
      'competitive pricing machining',
    ],
  },
};

export function getIndustryMetadata(industryName: string): Metadata {
  const industry = industriesMetadata[industryName];

  if (!industry) {
    return {
      title: 'Industry',
      description: 'Custom metal fabrication for specialized industries.',
    };
  }

  return {
    title: industry.title,
    description: industry.description,
    keywords: industry.keywords,
    alternates: {
      canonical: `/portfolio/featured-industries/${industryName}`
    },
    openGraph: {
      title: `${industry.title} | Pen Manufacturing`,
      description: industry.description,
      url: `/portfolio/featured-industries/${industryName}`
    },
  };
}
