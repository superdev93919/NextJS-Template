import { AnchorHTMLAttributes, ReactElement } from "react";

export type NavbarItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactElement;
  label: string;
  href: string;
}

export type NavbarUserProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    nbMember: number;
}