import { ReactElement } from "react";

export type NavbarItem = {
  icon: ReactElement;
  label: string;
  href: string;
  external?: boolean;
}