import { Color } from "#/lib/utils/typing/color";
import { Rem } from "#/lib/utils/typing/unit";
import { HTMLAttributes } from "react";

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  color?: Color;
  size?: Rem;
}