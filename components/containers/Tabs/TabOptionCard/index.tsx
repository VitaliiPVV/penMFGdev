import { IndexBadge } from '@/components/ui';
import { TabPanelOption } from '@/types/Tabs';

interface TabOptionCardProps {
  data: TabPanelOption;
}

export const TabOptionCard = ({ data }: TabOptionCardProps) => {
  return (
    <div className="flex items-center justify-start gap-6 rounded-3xl bg-inverse-subtle p-6">
      <IndexBadge index={data.id} className="bg-background" />
      <div className="flex flex-col flex-shrink-1 flex-grow-1 min-w-0 line-clamp-2">
        <span className={`w-full text-lg font-semibold text-neutral`}>
          {data.label}
        </span>
        {data.details ? (
          <span className="text-sm font-semibold leading-5.5 text-muted">{data.details}</span>
        ) : null}
      </div>
    </div>
  );
};
