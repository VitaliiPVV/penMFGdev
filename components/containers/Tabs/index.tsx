'use client';

import { TabContext } from '@/app/portfolio/(with-tabs)/contexts/TabContext';
import { Heading } from '@/components/ui';
import { TabGroup } from '@/types/Tabs';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import TabsContainer from './TabsContainer';

interface TabsProps<T> {
  tabItems: (T & TabGroup)[];
  hrefPrefix?: string;
  tabListClassName?: string;
  children?: React.ReactNode;
  title?: string;
  listClassName?: string;
  titleClassName?: string;
}

const Tabs = <T,>({ tabItems, hrefPrefix = '', children, title, tabListClassName, titleClassName }: TabsProps<T>) => {
  const { activeTabId } = useContext(TabContext);

  return (
    <TabsContainer className="flex w-full flex-col 2xl:flex-row gap-6 2xl:gap-15 md:max-w-[897px] md:mx-auto 2xl:max-w-none 2xl:mx-0">
      <div className={twMerge('flex flex-col gap-y-xl 2xl:gap-y-2xl w-full 2xl:basis-[274px]', tabListClassName)}>
        {title && (
          <Heading as="h2" className={twMerge('text-2xl/8 2xl:text-[32px]/10 font-bold text-neutral', titleClassName)}>{title}</Heading>
        )}
        <TabList
          className="h-auto 2xl:h-fit overflow-x-auto"
          listProps={{ className: 'flex justify-between flex-row 2xl:flex-col gap-2 min-w-fit lg:min-w-auto' }}
        >
          {tabItems.map((tab) => (
            <Tab key={tab.id} hrefPrefix={hrefPrefix} isActive={activeTabId === tab.id} data={tab} />
          ))}
        </TabList>
      </div>
      <TabPanel
        className="flex-shrink-1 flex flex-col gap-6"
        id={`${activeTabId}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeTabId}-tab`}
      >
        {children}
      </TabPanel>
    </TabsContainer>
  );
};

export default Tabs;
