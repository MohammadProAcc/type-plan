import { create } from "https://deno.land/x/isdb@0.0.4/mod.ts";
import { storeHomePageInit, storeHomePageSchema } from "./schema.ts";
import { StoreHomePage } from "./types.ts";

export * from "./actions/mod.ts";
export * from "./schema.ts";
export * from "./types.ts";

export const storeHomePageSlice = create<StoreHomePage>(
  storeHomePageInit,
  storeHomePageSchema,
  "staticFiles/storeHomePage.json",
);
