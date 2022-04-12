import {
  StoreHomePage,
  storeHomePageSlice,
} from "../../isdb/storeHomePage/mod.ts";

type ReturnStoreHomePage = () => StoreHomePage;
export const getStoreHomePageFn: ReturnStoreHomePage = () =>
  storeHomePageSlice.getState();
