import { SelectHTMLAttributes } from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  title?: string;

  options: SelectOption[];
}

export type SelectOption = {
  label: string;
  value: string;
}