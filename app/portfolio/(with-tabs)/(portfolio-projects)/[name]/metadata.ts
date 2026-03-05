import { Metadata } from 'next';
import { projectsData } from './consts';

export function getProjectMetadata(projectName: string): Metadata {
  const project = projectsData.find((p) => p.id === projectName);
  
  if (!project) {
    return {
      title: 'Portfolio Project | Pen Manufacturing',
      description: 'Custom metal fabrication project portfolio.',
    };
  }

  return {
    title: `${project.label} | Pen Manufacturing`,
    description: `Custom metal fabrication project: ${project.label}`,
    openGraph: {
      title: `${project.label} | Pen Manufacturing`,
      description: `Custom metal fabrication project: ${project.label}`,
    },
  };
}
