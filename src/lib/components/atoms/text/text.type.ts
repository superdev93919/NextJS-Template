import { HTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren & Omit<HTMLAttributes<HTMLParagraphElement>, "color"> & {
  type?: "p" | "h3" | "h2" | "h1";
  color?: "white" | "black" | "blue" | "primary" | "red";
  size?: "small" | "base" | "large" | "xl" | "2xl" | "3xl" | "4xl";
}