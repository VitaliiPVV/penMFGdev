'use client'

import useDisableBodyScroll from '@/hooks/useDisableBodyScroll'
import usePressEscape from '@/hooks/useEscOutsideModal'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, forwardRef, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
  modalClassName?: string
  containerClassName?: string
}

const Modal = forwardRef<HTMLDivElement, Props>(({
  isOpen,
  onClose,
  children,
  modalClassName,
  containerClassName
}, ref) => {
  const [isClient, setIsClient] = useState(false)
  const id = useId();

  useEffect(() => setIsClient(true), [])

  useDisableBodyScroll(isOpen);
  usePressEscape(isOpen, onClose);

  if (!isClient) return

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key={id}
          className={twMerge("px-4 md:px-11 fixed inset-0 bg-black/45 flex items-center justify-center z-100", containerClassName)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div ref={ref} className={modalClassName}>
            {children}
          </div>
        </motion.div>
      )}

    </AnimatePresence>,
    document.body
  );
});

Modal.displayName = 'Modal';

export default Modal;
