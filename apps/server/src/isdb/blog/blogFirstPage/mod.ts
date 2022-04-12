import { create } from "https://deno.land/x/isdb@0.0.4/mod.ts";
import { BlogFirstPage } from "./types.ts";
import { firstPageInit, firstPageSchema } from "./schema.ts";

export const firstPageSlice = create<BlogFirstPage>(
  firstPageInit,
  firstPageSchema,
  "staticFiles/blogFirstPage.json",
);

export * from "./actions/mod.ts";
export * from "./schema.ts";
export * from "./types.ts";
