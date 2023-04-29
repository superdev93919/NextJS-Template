import { LabelHTMLAttributes, PropsWithChildren } from "react";

export type LabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "title"> & PropsWithChildren & {
  title: string;
  description?: string;
  error?: string;

  asterisk?: boolean;
};