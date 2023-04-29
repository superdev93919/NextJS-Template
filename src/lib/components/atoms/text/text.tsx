import type { ReactElement } from "react";
import { clsx } from "clsx";
import { TextProps } from "./text.type";

export function Text({ children, type, color, size, className, ...props }: TextProps): ReactElement {
  const styles = clsx(className, {
    // Text color:
    "text-black": !color || color === "black",
    "text-white": color === "white",
    "text-blue": color === "blue",
    "text-primary": color === "primary",
    "text-red": color === "red",

    // Font size:
    "text-sm": size === "small",
    "text-base": !size || size === "base",
    "text-lg": size === "large",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl",
    "text-4xl": size === "4xl"
  });

  const Tag = type ?? "p";

  return <Tag className={styles} {...props}>{children}</Tag>;
}