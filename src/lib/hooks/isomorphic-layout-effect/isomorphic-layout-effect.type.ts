import type { DependencyList, EffectCallback } from "react";

export type UseIsomorphicLayoutEffectOutput = (effect: EffectCallback, deps?: DependencyList | undefined) => void;