'use client';

import { aboutUsPages } from './consts';
import { useBreadcrumbs } from '../../contexts/BreadcrumbsContext';
import { useEffect } from 'react';

interface BreadcrumbsSetterProps {
  pageName: string;
}

export default function BreadcrumbsSetter({ pageName }: BreadcrumbsSetterProps) {
  const { setBreadcrumbs } = useBreadcrumbs();
  const page = aboutUsPages.find((p) => p.id === pageName);
  
  useEffect(() => {
    if (page) {
      setBreadcrumbs([
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about-us' },
        { label: page.label },
      ]);
    }
    return () => setBreadcrumbs(null);
  }, [page, setBreadcrumbs]);
  
  return null;
}