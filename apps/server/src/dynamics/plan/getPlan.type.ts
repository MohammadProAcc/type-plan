import FastestValidator from "https://esm.sh/fastest-validator@1";
import { planSelectable, RPlan } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";
const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          _id: { type: "objectID", ObjectID },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: planSelectable(1),
      },
    },
  },
};
export const checkGetPlanDetails = v.compile(schema);
export interface GetPlanDetails {
  set: {
    _id: ObjectID;
  };
  get: RPlan;
}
