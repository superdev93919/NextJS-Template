import type { InputHTMLAttributes, ReactElement } from "react";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  icon?: ReactElement;

  size?: "small" | "base";
};