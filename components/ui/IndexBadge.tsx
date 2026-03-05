import { twMerge } from 'tailwind-merge';

interface IndexBadgeProps {
  index: string;
  className?: string;
}

const IndexBadge = ({ index, className = '' }: IndexBadgeProps) => {
  const formattedIndex = index.slice(0, 2);

  return (
    <span
      className={twMerge(
        `w-11 h-11 aspect-square text-brand-primary rounded-full flex items-center justify-center text-lg leading-6 font-semibold`,
        className
      )}
    >
      {formattedIndex}
    </span>
  );
};

export default IndexBadge;
