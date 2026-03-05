    'use client';
    
    import { createContext, useState } from 'react';

    export const TabContext = createContext({
      activeTabId: null as string | null,
      setActiveTabId: (id: string | null) => {},
    });

    export const TabProvider = ({ children }: { children: React.ReactNode}) => {
      const [activeTabId, setActiveTabId] = useState<string | null>(null);

      const contextValue = { activeTabId, setActiveTabId };

      return (
        <TabContext.Provider value={contextValue}>
          {children}
        </TabContext.Provider>
      );
    };