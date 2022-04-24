

  import createContext, { UseContextStore } from "zustand/context";
  import { devtools } from "zustand/middleware";
import { useLayoutEffect } from "react";
import create, { UseBoundStore } from "zustand";  
    import {User
 ,userInitials,Country
 ,countryInitials,City
 ,cityInitials,State
 ,stateInitials,BlogTag
 ,blogTagInitials,BlogCategory
 ,blogCategoryInitials,Comment
 ,commentInitials,BlogPost
 ,blogPostInitials,ContactUs
 ,contactUsInitials,Plan
 ,planInitials } from "../index";
       

    export interface InitialState extends User
,Country
,City
,State
,BlogTag
,BlogCategory
,Comment
,BlogPost
,ContactUs
,Plan
{}
    export let store: UseBoundStore<InitialState> | undefined;

    const zustandContext = createContext<InitialState>();
    export const Provider = zustandContext.Provider;
    export const useStore: UseContextStore<InitialState> = zustandContext.useStore;
  

  export const initializeStore = (preloadedState = {}) =>
  create<InitialState>(
      devtools(
          () => (
              {
                ...userInitials
,...countryInitials
,...cityInitials
,...stateInitials
,...blogTagInitials
,...blogCategoryInitials
,...commentInitials
,...blogPostInitials
,...contactUsInitials
,...planInitials

              }
          ),
      ),
  );
  

    export function useCreateStore(initialState: InitialState) {
    // For SSR & SSG, always use a new store.
    if (typeof window === "undefined") {
        return () => initializeStore(initialState);
    }

    // For CSR, always re-use same store.
    store = store ?? initializeStore(initialState);
    // And if initialState changes, then merge states in the next render cycle.
    //
    // eslint complaining "React Hooks must be called in the exact same order in every component render"
    // is ignorable as this code runs in same order in a given environment
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
        if (initialState && store) {
            store.setState({
                ...store.getState(),
                ...initialState,
            });
        }
    }, [initialState]);

    return () => store;
}

       

