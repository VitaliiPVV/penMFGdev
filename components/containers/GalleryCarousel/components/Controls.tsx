import { CarouselButton } from '@/components/ui';
import { twMerge } from 'tailwind-merge';

interface ControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollNext: () => void;
  scrollPrev: () => void;
  hasCounter: boolean;
  currentNumber: number;
  size: number;
  direction?: 'normal' | 'opposite';
  buttonVariant?: 'default' | 'ghost';
}

const Controls = ({
  scrollNext,
  scrollPrev,
  hasCounter,
  currentNumber,
  size,
  direction = 'normal',
  buttonVariant = 'default',
  className,
}: ControlsProps) => {
  return (
    <div
      className={twMerge(
        `flex justify-between gap-6 items-center ${direction === 'opposite' ? 'flex-row-reverse' : ''}`,
        className
      )}
    >
      <div className="flex gap-x-3">
        <CarouselButton
          onClick={scrollPrev}
          className="embla__prev"
          arrowDirection="left"
          variant={buttonVariant}
          aria-label="Carousel prev button"
        />
        <CarouselButton
          onClick={scrollNext}
          className="embla__next"
          arrowDirection="right"
          variant={buttonVariant}
          aria-label="Carousel next button"
        />
      </div>

      {hasCounter && (
        <span className="text-sm/[125%] font-medium text-neutral">
          Photo {currentNumber} of {size}
        </span>
      )}
    </div>
  );
};

export default Controls;
