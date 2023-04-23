import type { ReactElement } from "react";
import { CardProps } from "./card.type";
import { clsx } from "clsx";

export function Card({ children, className, ...props }: CardProps): ReactElement {
  return (
    <div className={clsx("bg-white py-4 px-5 shadow rounded", className)} {...props}>
      {children}
    </div>
  );
}