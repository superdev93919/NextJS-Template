import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import { DividerProps } from "./divider.type";
import { clsx } from "clsx";

export function Divider({ text, textPosition = "middle", className, ...props }: DividerProps): ReactElement {
  const styles = clsx("block border-b-2 border-b-blue w-full", className);

  if (text) {
    if (textPosition === "top-left") return (
      <span className={styles} {...props}>
        <Text color="blue">{text}</Text>
      </span>
    );

    if (textPosition === "middle") return (
      <span className={clsx("flex items-center gap-3", className)}>
        <Divider />
        <Text color="blue">{text}</Text>
        <Divider />
      </span>
    );
  }

  return <span className={styles} {...props} />;
}