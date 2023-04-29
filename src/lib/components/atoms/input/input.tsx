"use client";

import type { InputProps } from "./input.type";
import { type ReactElement, useState, forwardRef } from "react";
import { clsx } from "clsx";

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { icon, size = "base", className, onFocus, onBlur, ...props }, ref
): ReactElement => {
  const [isFocused, setIsFocused] = useState(false);

  // Styles:
  const containerStyles = clsx(
    "text-black text-lg",
    "bg-gray-3 rounded shadow",
    "border-2",
    "flex items-center gap-3",
    {
      // Focus:
      "border-primary-2": isFocused,
      "border-transparent": !isFocused,

      // Size:
      "py-1 px-3": size === "small",
      "py-2 px-4": size === "base"
    },
    className
  );

  // Render:
  return (
    <div className={containerStyles}>
      {icon}

      <input
        ref={ref}
        className="bg-gray-3 outline-none w-full h-6 text-base"
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";