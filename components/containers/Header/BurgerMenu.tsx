"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerMenuIcon, CloseIcon } from "../../icons";
import Link from "next/link";
import { Button } from "../../ui";
import { HeaderLink } from "./types";

type Props = {
  links: HeaderLink[];
};

export const BurgerMenu: React.FC<Props> = ({ links }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const close = () => setIsOpened(false);
  const toggle = () => setIsOpened((v) => !v);

  useEffect(() => {
    if (!isOpened) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [isOpened]);

  useEffect(() => {
    if (!isOpened) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpened]);

  return (
    <div className="2xl:hidden">
      <div className="flex items-center gap-x-2">
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/quote" onClick={close}>
                <Button>Get A Quote</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          aria-label={isOpened ? "Close menu" : "Open menu"}
          aria-expanded={isOpened}
          aria-controls="burger-drawer"
          onClick={toggle}
          className="text-neutral"
        >
          <AnimatePresence mode="wait">
            {isOpened ? (
              <motion.div
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CloseIcon className="size-8" />
              </motion.div>
            ) : (
              <motion.div
                key="burger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BurgerMenuIcon className="size-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpened && (
          <motion.aside
            id="burger-drawer"
            role="dialog"
            aria-modal="true"
            className="fixed left-0 right-0 bottom-0 top-16 z-40 p-4 md:p-11 py-5 overflow-y-auto bg-white "
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <nav className="flex h-full flex-col">
              <motion.ul
                className="flex flex-1 flex-col gap-y-5"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.05,
                    },
                  },
                  hidden: {
                    transition: {
                      staggerChildren: 0.03,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {links.map(({ href, title, subLinks }) => (
                  <motion.li
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  >
                    <Link
                      href={`/${href}`}
                      onClick={close}
                      className={`font-medium text-neutral ${
                        subLinks?.length ? "pointer-events-none" : ""
                      }`}
                    >
                      {title}
                    </Link>

                    {subLinks && (
                      <motion.ul
                        className="flex flex-col gap-y-6 pt-5"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.04,
                              delayChildren: 0.05,
                            },
                          },
                        }}
                      >
                        {subLinks.map((sublink) => (
                          <motion.li
                            key={sublink.href}
                            variants={{
                              hidden: { opacity: 0, x: -15 },
                              visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 36 }}
                          >
                            <Link
                              href={`/${sublink.href}`}
                              onClick={close}
                              className="font-medium text-muted"
                            >
                              {sublink.title}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}

                    <motion.div
                      className="w-full h-px mt-5 bg-eleveted"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 36 }}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
