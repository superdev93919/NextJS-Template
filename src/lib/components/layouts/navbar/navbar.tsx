"use client";

import type { ReactElement } from "react";
import { useMediaQuery } from "#/lib/hooks/media-query";
import { useBurgerStore } from "#/lib/stores/burger";
import { clsx } from "clsx";

export function Navbar(): ReactElement {
  const mediaQuery = useMediaQuery({ type: "max", width: "1023px" });
  const burgerState = useBurgerStore(burger => burger.open);

  // Loading:
  if (mediaQuery === "loading") return <></>;

  // Mobile:
  if (mediaQuery === "match") return (
    <nav className={clsx(
      "w-full bg-gray-2",
      "flex flex-col gap-3 justify-between",
      "transition-max-width duration-300",
      {
        "max-w-0": !burgerState,
        "max-w-full h-navbar-mobile py-5 px-4": burgerState
      }
    )}>
      <p>todo</p>
    </nav>
  );

  // Desktop:
  return (
    <nav className="bg-gray-2 h-screen w-72 flex flex-col justify-between py-5 px-4">
      <p>todo</p>
    </nav>
  );
}