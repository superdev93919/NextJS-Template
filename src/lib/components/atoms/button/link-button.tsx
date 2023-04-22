import { ReactElement } from "react";
import { LinkButtonProps } from "./button.type";
import { clsx } from "clsx";
import Link from "next/link";

export function LinkButton({ variant, size = "base", target = "_self", icon, children, className, ...props }: LinkButtonProps): ReactElement {
  const styles = clsx(
    "rounded shadow",
    "border-2 border-transparent",
    "flex items-center justify-center gap-2",
    {
      // Variant:
      "bg-primary text-white hover:brightness-125": variant === "primary",
      "bg-white text-black hover:border-gray-2": variant === "secondary",
      "bg-red-2 text-red hover:border-primary-2": variant === "danger",

      // Size:
      "py-1 px-3": size === "small",
      "py-2 px-5": size === "base" || size === "full-width",
      "w-full": size === "full-width"
    },
    className
  );

  return <Link className={styles} target={target} {...props}>{icon} {children}</Link>;
}