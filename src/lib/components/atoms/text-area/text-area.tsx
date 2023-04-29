import type { TextAreaProps } from "./text-area.type";
import { forwardRef, ReactElement } from "react";
import { clsx } from "clsx";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ size = "base", className, ...props }, ref): ReactElement => {
  const textAreaStyles = clsx(
    "text-black text-base",
    "w-full bg-gray-3 rounded shadow",
    "outline-2 outline-primary-2",
    {
      "py-1 px-3": size === "small",
      "py-2 px-4": size === "base"
    },
    className
  );

  return <textarea ref={ref} className={textAreaStyles} {...props} />;
});

TextArea.displayName = "TextArea";