import { RType } from "./../../schemas/utils/rType.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";
import { RUser, userSelectable } from "../../schemas/mode.ts";
import { fieldType } from "../../schemas/utils/fieldType.ts";

const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          phone: { type: "number" },
          code: { type: "string" },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: {
          user: {
            type: "object",
            props: userSelectable(2),
          },
          token: fieldType,
        },
      },
    },
  },
};

export const checkLogin = v.compile(schema);

export interface LoginDetails {
  set: { phone: string; code: string };
  get: {
    user?: RUser;
    token: RType;
  };
}
