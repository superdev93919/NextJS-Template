import type { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import { LabelProps } from "./label.type";
import { clsx } from "clsx";

export function Label({ title, error, description, asterisk = false, className, children, ...props }: LabelProps): ReactElement {
  const Spacer = (): ReactElement => <span className="block mt-1" />;

  return (
    <label className={clsx("block", className)} {...props}>
      <Text>{title} {asterisk && <span className="text-red font-bold">*</span>}</Text>
      {description && <Text size="small">{description}</Text>}

      <Spacer />

      {children}

      {error && (
        <>
          <Spacer />

          <Text color="red" size="small">{error}</Text>
        </>
      )}
    </label>
  );
}