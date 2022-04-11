import { getCountryFn } from "./getCountry.fn.ts";
import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { ICountry } from "../../schemas/mode.ts";
import { throwError } from "../../utils/mod.ts";
import { createCountryFn } from "./createCountry.fn.ts";
import { deleteCountryFn } from "./deleteCountry.fn.ts";
import { updateCountryFn } from "./updateCountry.fn.ts";
import { getCountriesFn } from "./getCountries.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createCountry",
      "updateCountry",
      "deleteCountry",
      "getCountry",
      "getCountries",
    ],
  },
});

export type CountryDoit =
  | "createCountry"
  | "updateCountry"
  | "deleteCountry"
  | "getCountry"
  | "getCountries";

type countryFns = (doit: CountryDoit, details: any, context: any) => any;

export const countryFns: countryFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
        ["createCountry"]: async () => await createCountryFn(details, context),
        ["updateCountry"]: async () => await updateCountryFn(details, context),
        ["deleteCountry"]: async () => await deleteCountryFn(details, context),
        ["getCountry"]: async () => await getCountryFn(details, context),
        ["getCountries"]: async () => await getCountriesFn(details, context),
      }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
