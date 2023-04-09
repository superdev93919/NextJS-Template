/* eslint-disable @typescript-eslint/no-explicit-any */

import type { StaticImageData } from "next/image";

declare module "*.css" {
  const content: Record<string, string>;

  export default content;
}

declare module "*.png" {
  const content: StaticImageData;

  export default content;
}

declare module "*.svg" {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  const content: any;

  export default content;
}