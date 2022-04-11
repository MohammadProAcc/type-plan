import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { StoreHomePage } from "../../isdb/storeHomePage/mod.ts";
import { throwError } from "../../utils/mod.ts";
import { addToSliderFn } from "./addToslider.fn.ts";
import { getStoreHomePageFn } from "./getStoreHomePage.fn.ts";
const v = new FastestValidator();

const check = v.compile({
  doit: {
    type: "enum",
    values: ["getStoreHomePage", "addToStoreHomePageSlider"],
  },
});

export type StoreHomePageDoit = "getStoreHomePage" | "addToStoreHomePageSlider";

type StoreHomePageFns = (
  doit: StoreHomePageDoit,
  details: any,
  context: any,
) => StoreHomePage;

export const storeHomePageFns: StoreHomePageFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
      ["getStoreHomePage"]: () => getStoreHomePageFn(),
      ["addToStoreHomePageSlider"]: () => addToSliderFn(details, context),
    }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};

export * from "./getStoreHomePage.fn.ts";
export * from "./getStoreHomePage.type.ts";
