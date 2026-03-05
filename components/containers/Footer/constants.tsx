import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons";
import { SOCIAL_MEDIA_URLS } from "@/constants";
import { ReactNode } from "react";

export const linkSections: {
  title: string;
  links: { name: string; href: string }[];
}[] = [
  {
    title: "About PEN Manufacturing",
    links: [
      {
        name: "About Us",
        href: "about-us",
      },
      {
        name: "Quality",
        href: "about-us/quality",
      },
      {
        name: "Portfolio",
        href: "portfolio",
      },
      {
        name: "Industries",
        href: "industries",
      },
      {
        name: "Contact us",
        href: "about-us/contact-us",
      },
      {
        name: "Blog",
        href: "blog",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Welding",
        href: "portfolio/services/certified-welding",
      },
      {
        name: "Sheet Metal",
        href: "portfolio/services/sheet-metal",
      },
      {
        name: "Machining",
        href: "portfolio/services/machining",
      },
      {
        name: "Metal Fabrication",
        href: "portfolio/services/metal-fabrication",
      },
      {
        name: "Finishing",
        href: "portfolio/services/finishing-assembling",
      },
    ],
  },
  {
    title: "Materials",
    links: [
      {
        name: "Aluminium",
        href: "materials/aluminium",
      },
      {
        name: "Stainless Steel",
        href: "materials/stainless-steel",
      },
      {
        name: "Steel",
        href: "materials/steel",
      },
      {
        name: "Brass",
        href: "materials/brass",
      },
      {
        name: "Bronze",
        href: "materials/bronze",
      },
      {
        name: "Plastics",
        href: "materials/plastics",
      },
    ],
  },
  {
    title: "Careers",
    links: [
      {
        name: "Work Culture",
        href: "work-culture",
      },
      {
        name: "Jobs",
        href: "jobs",
      },
    ],
  },
];

export const socialMediaLinks: { href: string; icon: ReactNode }[] = [
  {
    href: SOCIAL_MEDIA_URLS.linkedin,
    icon: <LinkedinIcon className="size-8" />,
  },
  {
    href: SOCIAL_MEDIA_URLS.youtube,
    icon: <YoutubeIcon className="size-8" />,
  },
  {
    href: SOCIAL_MEDIA_URLS.facebook,
    icon: <FacebookIcon className="size-8" />,
  },
  {
    href: SOCIAL_MEDIA_URLS.instagram,
    icon: <InstagramIcon className="size-[26px]" />,
  },
];