'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { BreadcrumbItem } from '@/components/ui/Breadcrumbs';

interface BreadcrumbsContextType {
  breadcrumbs: BreadcrumbItem[] | null;
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[] | null) => void;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
  breadcrumbs: null,
  setBreadcrumbs: () => {},
});

export const BreadcrumbsProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[] | null>(null);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);
