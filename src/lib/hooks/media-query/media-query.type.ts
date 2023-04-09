import { Pixel } from "#/lib/utils/typing/unit";

export type UseMediaQueryProps = {
  type: "max" | "min";
  width: Pixel;
}

export type UseMediaQueryOutput = "match" | "unmatch" | "loading";