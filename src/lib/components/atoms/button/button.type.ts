import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";

type BaseButtonProps = {
  variant: "primary" | "secondary" | "danger";
  size?: "small" | "base" | "full-width";
  icon?: ReactElement;
}

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export type LinkButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "href"> & PropsWithChildren & {
  href: string;
  target?: "_blank" | "_self";
}