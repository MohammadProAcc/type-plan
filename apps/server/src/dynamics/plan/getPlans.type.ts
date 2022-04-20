import FastestValidator from "https://esm.sh/fastest-validator@1";
import { planSelectable, PuPlan, RPlan } from "../../schemas/mode.ts";

import {
  basePaginationValidationObject,
  PaginationType,
} from "./../../utils/mod.ts";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuPlan>(
            "createdAt",
            "updateAt",
          ),
        },
      },
      get: {
        type: "object",
        optional: true,
        props: planSelectable(2),
      },
    },
  },
};
export const checkPlansDetails = v.compile(schema);

export interface GetPlansDetails {
  set: {
    pagination: PaginationType;
  };
  get: RPlan;
}
