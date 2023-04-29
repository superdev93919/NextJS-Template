import type { ReactElement } from "react";
import Image from "next/image";
import { IconProps } from "./icon.type";

export function Icon({ src, alt, size = 22, ...props }: IconProps): ReactElement {
  return <Image src={src} alt={alt} height={size} width={size} {...props} />;
}