import type { ImageProps, StaticImageData } from "next/image";

export type IconProps = ImageProps & {
  src: StaticImageData | string;
  alt: string;

  size?: number;
};