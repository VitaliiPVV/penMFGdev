"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { ChevronDownIcon } from "../../icons";
import { Button, Dropdown } from "../../ui";
import { BurgerMenu } from "./BurgerMenu";
import { PHONE_NUMBERS } from "@/constants";
import { headerLinks } from "./consts";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const isNavigationHidden = segments[segments.length - 1] === "landing";

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getIsPathSelected = (path: string) => {
    return segments[segments.length - 1] === path;
  };

  const handleMouseEnter = (href: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(href);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <header className="z-100 fixed top-0 left-0 right-0 h-[65px] 2xl:h-[79px] px-4 md:px-11 2xl:px-30 bg-white border-b border-eleveted">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-3">
        <Link
          href="/"
          className={isNavigationHidden ? "pointer-events-none" : ""}
        >
          <figure>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={154}
              height={55}
              className="hidden 2xl:block"
            />

            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={114}
              height={41}
              className="2xl:hidden"
            />

            <figcaption className="sr-only">Pen Manufacturing Logo</figcaption>
          </figure>
        </Link>

        <div className="flex gap-6 items-center">
          {isNavigationHidden ? (
            <div className="flex flex-col gap-y-2 pl-[30px] text-sm/[125%] font-medium text-neutral">
              <span>Toll free: {PHONE_NUMBERS.tollFree}</span>
            </div>
          ) : (
            <>
              <nav>
                <ul className="hidden 2xl:flex items-center gap-6">
                  {headerLinks.map(({ title, href, isIcon, subLinks }) => {
                    const dropdownOptions = subLinks
                      ? subLinks.map((subLink, index) => ({
                          id: index,
                          value: subLink.href,
                          name: subLink.title,
                        }))
                      : [];

                    const dropdownRef = { current: null };

                    return (
                      <li
                        key={href}
                        className="relative group text-sm"
                        onMouseEnter={() => handleMouseEnter(href)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {subLinks ? (
                          <Dropdown
                            ref={dropdownRef}
                            isOpened={openDropdown === href}
                            options={dropdownOptions}
                            onOptionSelect={(option) => {
                              router.push(`/${option.value}`);
                              setOpenDropdown(null);
                            }}
                            showCheckIcon={false}
                            dropdownClassName="top-full mt-2 w-auto min-w-[190px] border-form-light-gray shadow-lg before:content-[''] before:absolute before:w-full before:h-2 before:-top-2 before:left-0"
                            optionClassName="whitespace-nowrap"
                          >
                            <span
                              className={`text-neutral flex items-center gap-x-2 transition-all cursor-pointer ${
                                getIsPathSelected(href) ? "font-bold" : "font-medium"
                              }`}
                              onClick={() => router.push(`/${href}`)}
                            >
                              {title}
                              {isIcon && (
                                <ChevronDownIcon className="w-[11px] h-[6px] transition-all group-hover:rotate-180" />
                              )}
                            </span>
                          </Dropdown>
                        ) : (
                          <Link
                            href={`/${href}`}
                            className={`text-neutral flex items-center gap-x-2 transition-all hover:text-neutral-strong ${
                              getIsPathSelected(href)
                                ? "font-bold pointer-events-none"
                                : "font-medium"
                            }`}
                          >
                            {title}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <Link href="/quote" className="hidden 2xl:block">
                <Button>Get A Quote</Button>
              </Link>

              <BurgerMenu links={headerLinks} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
