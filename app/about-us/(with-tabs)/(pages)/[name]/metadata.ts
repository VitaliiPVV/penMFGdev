import { Metadata } from 'next';
import { aboutUsPages } from './consts';

export function getProjectMetadata(pageName: string): Metadata {
  const page = aboutUsPages.find((p) => p.id === pageName);
  
  if (!page) {
    return {
      title: 'About Us | Pen Manufacturing',
      description: 'Custom metal fabrication project portfolio.',
    };
  }

  return {
    title: `${page.label} | Pen Manufacturing`,
    description: `Custom metal fabrication project: ${page.label}`,
    openGraph: {
      title: `${page.label} | Pen Manufacturing`,
      description: `Custom metal fabrication project: ${page.label}`,
    },
  };
}