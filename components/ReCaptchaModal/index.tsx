"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Modal } from "../ui";
import { motion, AnimatePresence } from "framer-motion";

interface ReCaptchaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (token: string) => void;
}

const ReCaptchaModal = forwardRef<HTMLDivElement, ReCaptchaModalProps>(
  ({ isOpen, onClose, onVerify }, ref) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (isOpen && recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, [isOpen]);

  const handleChange = (token: string | null) => {
    if (token) {
      onVerify(token);
      onClose();
    }
  };

  const handleExpired = () => {
    recaptchaRef.current?.reset();
  };

  if (!siteKey) {
    console.error("ReCAPTCHA site key is not configured");
    return null;
  }

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={handleChange}
                onExpired={handleExpired}
                theme="light"
                size="normal"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    );
  }
);

ReCaptchaModal.displayName = "ReCaptchaModal";

export default ReCaptchaModal;
