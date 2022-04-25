import { useEffect, useRef, EffectCallback, DependencyList } from "react";

type useNonInitialEffectReturn = void | (() => void | undefined);

export const useNonInitialEffect = (
  effect: EffectCallback,
  deps?: DependencyList
): useNonInitialEffectReturn => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns: useNonInitialEffectReturn = () => {
      /* Empty Return fallback */
    };

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === "function") {
      return effectReturns;
    }
  }, deps);
};
