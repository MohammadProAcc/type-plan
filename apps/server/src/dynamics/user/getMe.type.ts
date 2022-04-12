import FastestValidator from "https://esm.sh/fastest-validator@1";
import { RUser, userSelectable } from "../../schemas/mode.ts";
const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        optional: true,
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(2),
      },
    },
  },
};
export const checkGetMeDetails = v.compile(schema);
export interface getMeDetails {
  set: object;
  get: RUser;
}
