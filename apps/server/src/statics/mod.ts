import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { Context } from "../dynamics/mod.ts";
import { Doits, StaticModels, throwError } from "../utils/mod.ts";
import { BlogFirstPageDoit, blogFirstPageFns } from "./blogFirstPage/mod.ts";
import { StoreHomePageDoit, storeHomePageFns } from "./storeHomePage/mod.ts";

const v = new FastestValidator();
const check = v.compile({
  model: {
    type: "enum",
    values: ["BlogFirstPage", "StoreHomePage", "ShopPage"],
  },
});

export const staticFns = (
  model: StaticModels,
  doit: Doits,
  details: any,
  context: Context,
) => {
  const checkModel = check({ model });
  return checkModel === true
    ? {
      ["BlogFirstPage"]: () => blogFirstPageFns(doit as BlogFirstPageDoit),
      ["StoreHomePage"]: () =>
        storeHomePageFns(doit as StoreHomePageDoit, details, context),
    }[model]()
    : throwError((checkModel as ValidationError[])[0].message);
};

export * from "./blogFirstPage/mod.ts";
