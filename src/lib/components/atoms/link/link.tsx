import { ReactElement } from "react";
import { LinkProps } from "./link.type";
import { clsx } from "clsx";
import NextLink from "next/link";

export function Link({ children, className, ...props }: LinkProps): ReactElement {
  return <NextLink className={clsx("text-primary hover:underline", className)} {...props}>{children}</NextLink>;
}