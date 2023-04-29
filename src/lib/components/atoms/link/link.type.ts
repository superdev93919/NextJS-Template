import type { LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export type LinkProps = NextLinkProps & PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>;