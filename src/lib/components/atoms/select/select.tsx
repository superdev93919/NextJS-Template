import { forwardRef, ReactElement } from "react";
import { SelectProps } from "./select.type";
import { clsx } from "clsx";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ title, options, className, ...props }, ref): ReactElement => {
  return (
    <select ref={ref} required className={clsx("bg-gray-3 rounded shadow py-1 text-black outline-primary-2", className)} {...props}>
      {title && <option disabled selected hidden>{title}</option>}

      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-gray-3">{option.label}</option>
      ))}
    </select>
  );
});

Select.displayName = "Select";