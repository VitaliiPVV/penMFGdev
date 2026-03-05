import { useEffect } from 'react';

const usePressEscape = (value: boolean, onValueChange: (value: boolean) => void) => {
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onValueChange(false);
      }
    }

    if (value) {
      document.addEventListener('keydown', handleEscape);

      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [onValueChange, value]);
};

export default usePressEscape;
