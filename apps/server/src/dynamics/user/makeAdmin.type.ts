import FastestValidator from "https://esm.sh/fastest-validator@1";
import { Gender, RUser, userSelectable } from "../../schemas/user.ts";

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
          name: { type: "string" },
          lastName: { type: "string" },
          gender: { type: "enum", values: ["Male", "Female"] },
        },
      },
      get: {
        type: "object",
        strict: true,
        optional: true,
        props: userSelectable(2),
      },
    },
  },
};

export const checkAdminReq = v.compile(schema);

export interface MakeAdminDetails {
  set: {
    phone: number;
    countryCode: string;
    name: string;
    lastName: string;
    gender: Gender;
    birthDate?: Date;
  };
  get: RUser;
}
