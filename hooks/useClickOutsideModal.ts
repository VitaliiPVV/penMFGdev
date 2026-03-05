import { useEffect, useState } from 'react';

const useClickOutsideModal = <T = boolean>(
  dropdownRef: React.RefObject<HTMLElement | null>, 
  initialState: T = false as T
) => {
  const [isOpen, setIsOpen] = useState<T>(initialState);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(initialState);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);

      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, dropdownRef, initialState]);

  return [ isOpen, setIsOpen ] as const;
};

export default useClickOutsideModal;
