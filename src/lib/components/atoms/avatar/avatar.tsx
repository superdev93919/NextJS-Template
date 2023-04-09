import type { ReactElement } from "react";
import { AvatarProps } from "./avatar.type";
import { clsx } from "clsx";

export function Avatar({ name, color, size = "2.5rem", className }: AvatarProps): ReactElement {
  return (
    <div
      className={clsx(
        "rounded-full",
        "flex items-center justify-center",
        { "bg-primary": !color },
        className
      )}
      style={{
        backgroundColor: color,
        height: size,
        width: size,
        minWidth: size
      }}
    >
      <p className="text-white" style={{ fontSize: `calc(${size} - ${size} / 2)` }}>{name.at(0)?.toUpperCase()}</p>
    </div>
  );
}