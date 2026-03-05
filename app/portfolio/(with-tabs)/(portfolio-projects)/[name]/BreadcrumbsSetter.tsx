'use client';

import { projectsData } from './consts';
import { useBreadcrumbs } from '../../contexts/BreadcrumbsContext';
import { useEffect } from 'react';

interface BreadcrumbsSetterProps {
  projectName: string;
}

export default function BreadcrumbsSetter({ projectName }: BreadcrumbsSetterProps) {
  const { setBreadcrumbs } = useBreadcrumbs();
  const project = projectsData.find((p) => p.id === projectName);
  
  useEffect(() => {
    if (project) {
      setBreadcrumbs([
        { label: 'Home', href: '/' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: project.label },
      ]);
    }
    return () => setBreadcrumbs(null);
  }, [project, setBreadcrumbs]);
  
  return null;
}
