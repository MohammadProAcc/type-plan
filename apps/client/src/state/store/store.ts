import { useMemo } from "react";
import create, { SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { userPiece } from ".";
import { planPiece } from "./pieces";

let store;

const initialState = (set: SetState<any>) => ({
  ...userPiece(set),
  ...planPiece(set)
});

export type InitialState = ReturnType<typeof initialState>;

function initStore(preloadedState = initialState) {
  return create<InitialState>(devtools(
    (set, get) => ({
      ...initialState(set),
      ...preloadedState,
    })
  ), {
    name: "type-plan"
  });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useHydrate(initialState) {
  const state = typeof initialState === "string"
    ? JSON.parse(initialState)
    : initialState;
  const store = useMemo(() => initializeStore(state), [state]);
  return store;
}
