import { userSelectable, RUser } from "./../../schemas/user.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          /**the id of the order that is going to be deleted */
          userId: { type: "string" },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(1),
      },
    },
  },
};
export const checkDeleteUser = v.compile(schema);
export interface deleteUserDetails {
  set: {
    userId: string;
  };
  get: RUser;
}
