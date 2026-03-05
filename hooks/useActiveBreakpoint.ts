import { useEffect, useState } from 'react';

const useActiveBreakpoint = () => {
  const [activeBreakpoint, setActiveBreakpoint] = useState<string>('default');

  useEffect(() => {
    const updateBreakpoint = () => {
      if (typeof window === 'undefined') {
        setActiveBreakpoint('default');

        return;
      }

      if (window.matchMedia('(min-width: 1440px)').matches) {
        setActiveBreakpoint('2xl');
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setActiveBreakpoint('md');
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setActiveBreakpoint('sm');
      } else if (window.matchMedia('(min-width: 375px)').matches) {
        setActiveBreakpoint('xs');
      } else {
        setActiveBreakpoint('default');
      }
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return activeBreakpoint;
};

export default useActiveBreakpoint;
