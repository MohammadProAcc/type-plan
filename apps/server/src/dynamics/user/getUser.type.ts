import FastestValidator from "https://esm.sh/fastest-validator@1";
import { RUser, userSelectable } from "../../schemas/mode.ts";
const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          /**the id of the user */
          _id: { type: "string" },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(4),
      },
    },
  },
};
export const checkGetUserDetails = v.compile(schema);
export interface getUserDetails {
  set: {
    _id: string;
  };
  get: RUser;
}
