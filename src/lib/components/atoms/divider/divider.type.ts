import { HTMLAttributes } from "react";

export type DividerProps = HTMLAttributes<HTMLSpanElement> & {
  text?: string;
  textPosition?: "top-left" | "middle";
}