import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "../../utils/mod.ts";
import { createContactUsFn } from "./createContactUs.fn.ts";
import { deleteContactUs } from "./deleteContactUs.fn.ts";
import { getContactUsFn } from "./getContactUs.fn.ts";
import { getContactUssFn } from "./getContactUss.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createContactUs",
      "deleteContactUs",
      "getContactUs",
      "getContactUss",
    ],
  },
});

export type ContactUsDoit =
  | "createContactUs"
  | "deleteContactUs"
  | "getContactUs"
  | "getContactUss";

type ContactUsFns = (doit: ContactUsDoit, details: any, context: any) => any;

export const contactUsFns: ContactUsFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
        ["createContactUs"]: async () =>
          await createContactUsFn(details, context),
        ["deleteContactUs"]: async () =>
          await deleteContactUs(details, context),
        ["getContactUs"]: async () => await getContactUsFn(details, context),
        ["getContactUss"]: async () => await getContactUssFn(details, context),
      }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
