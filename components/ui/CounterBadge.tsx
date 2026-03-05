import { twMerge } from 'tailwind-merge';

interface CounterBadgeProps {
  count: number;
  className?: string;
}

const CounterBadge = ({ count, className = '' }: CounterBadgeProps) => {
  return (
    <span
      className={twMerge(
        `w-6 h-6 bg-brand-subtle text-brand-primary rounded-full flex items-center justify-center text-xs font-bold`,
        className
      )}
    >
      {count}
    </span>
  );
};

export default CounterBadge;
