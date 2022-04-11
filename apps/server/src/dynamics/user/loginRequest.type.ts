import FastestValidator from "https://esm.sh/fastest-validator@1";
import { fieldType } from "../../schemas/utils/fieldType.ts";
import { RType } from "../../schemas/utils/rType.ts";

const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          phone: { type: "number" },

          /**this is the code of country */
          countryCode: { type: "string" },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: {
          ok: fieldType,
          phone: fieldType,
          countryCode: fieldType,
        },
      },
    },
  },
};

export const checkLoginReq = v.compile(schema);

export interface SigningDetails {
  set: { phone: number; countryCode: string };
  get: {
    ok?: RType;
    phone: RType;
    countryCode: RType;
  };
}
