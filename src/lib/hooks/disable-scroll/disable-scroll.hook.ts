import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "#/lib/hooks/isomorphic-layout-effect";
import type { UseDisableScrollOutput } from "./disable-scroll.type";

export function useDisableScroll(elementId: string, disableState = false): UseDisableScrollOutput {
  const [locked, setLocked] = useState<boolean>(disableState);

  // Do the side effect before render:
  useIsomorphicLayoutEffect(() => {
    if (!locked) return;

    // Save initial body style:
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll:
    document.body.style.overflow = "hidden";

    // Get the scrollBar width:
    const root = document.getElementById(elementId);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow:
    if (scrollBarWidth) document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) document.body.style.paddingRight = originalPaddingRight;
    };
  }, [locked]);

  // Update disable state if changes:
  useEffect(() => {
    if (locked !== disableState) setLocked(disableState);
  }, [disableState]);

  // Return the state and the setter:
  return [locked, setLocked];
}