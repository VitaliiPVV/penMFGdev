export type HeaderLink = {
  title: string;
  href: string;
  isIcon?: boolean;
  subLinks?: {
    title: string;
    href: string
  }[];
};
