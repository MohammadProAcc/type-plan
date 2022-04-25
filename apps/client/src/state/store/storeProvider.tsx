import { createContext, useContext } from "react";
import { InitialState } from "./store";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children, store }) => {
  return <StoreContext.Provider value={store}>{children}
  </StoreContext.Provider>;
};

export const useStore = (
  selector?: (state: InitialState) => Partial<InitialState>,
  eqFn?,
) => {
  const store = useContext(StoreContext);
  const values = store(selector, eqFn);

  return values as Partial<InitialState>;
};
