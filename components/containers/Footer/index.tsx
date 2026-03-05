"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPinIcon, PhoneIcon } from "../../icons";
import { Heading } from "../../ui";
import { linkSections } from "./constants";
import { PHONE_NUMBERS } from "@/constants";
import { ContactInfo, FooterBase } from "./components";

const Footer = () => {
  const pathname = usePathname();
  const isNavigationHidden = pathname.startsWith("/landing");

  return (
    <footer className="text-inverse-subtle">
      <div className="bg-inverse-subtle">
        <div className="max-w-[1440px] mx-auto flex flex-col 2xl:flex-row justify-between gap-y-8 py-9 md:py-12 2xl:p-10 px-4 md:px-11 2xl:px-30 rounded-t-[24px] text-neutral">
          <div className="flex flex-col 2xl:mr-[92px] 2xl:min-w-[258px]">
            <Link
              href="/"
              className={`mb-6 ${
                isNavigationHidden ? "pointer-events-none" : ""
              }`}
            >
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={258}
                height={92}
                className="hidden 2xl:block"
              />
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={180}
                height={64}
                className="2xl:hidden"
              />
            </Link>

            {!isNavigationHidden && (
              <ContactInfo className="hidden 2xl:flex" />
            )}
          </div>

          {isNavigationHidden ? (
            <div className="flex flex-col items-center md:flex-row gap-y-4 md:gap-x-[101px] 2xl:gap-x-5xl">
              <div className="flex gap-x-2 w-[250px]">
                <MapPinIcon className="size-6 text-brand-primary shrink-0" />
                <p className="font-medium leading-6">
                  1808 & 1802 N American St Anaheim, California 92801
                </p>
              </div>

              <div className="flex gap-x-2">
                <PhoneIcon className="size-6 text-brand-primary" />
                <p className="flex flex-col max-w-[215px] font-medium leading-6">
                  <span>Toll free: {PHONE_NUMBERS.tollFree}</span>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row w-full flex-wrap 2xl:gap-0 2xl:justify-between md:gap-y-8">
                {linkSections.map(({ title, links }, i) => {
                  const isFirst = i === 0;

                  return (
                    <div
                      key={title}
                      className="flex flex-col 2xl:gap-y-5 2xl:gap-y-6 sm:w-full md:w-1/2 2xl:w-auto"
                    >
                      <Heading
                        as="h2"
                        className="whitespace-nowrap text-lg leading-6 font-bold text-muted py-5 2xl:py-0"
                      >
                        {title}
                      </Heading>

                      <ul
                        className={`flex flex-col flex-wrap w-fit ${
                          isFirst && "md:flex-wrap md:max-h-[180px] 2xl:max-h-[160px]"
                        } gap-y-5 gap-x-8 md:gap-x-10 md:max-h-[120] ${!isFirst && "2xl:max-h-fit"}`}
                      >
                        {links.map(({ href, name }) => (
                          <li key={href} className="md:max-w-[146px] w-max">
                            <Link
                              href={`/${href}`}
                              className="leading-[125%] w-max font-medium text-neutral hover:text-neutral-strong transition-all"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="md:hidden mt-5 w-full h-px bg-eleveted " />
                    </div>
                  );
                })}
              </div>

              <ContactInfo className="grid 2xl:hidden" />
            </>
          )}
        </div>
      </div>

      <FooterBase />
    </footer>
  );
};

export default Footer;
