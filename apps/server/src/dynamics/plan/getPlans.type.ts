import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  planSelectable,
  PLANTYPE,
  PLATETYPE,
  POSITION,
  PuPlan,
  RPlan,
  UNITTYPE,
} from "../../schemas/mode.ts";

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
        planType: { type: "enum", values: ["Resindental", "Villa"] },
        units: { type: "number", min: 1, max: 1000 },
        floors: { type: "number", min: 1, max: 1000 },
        sleeps: { type: "number", min: 1, max: 1000 },
        bathroom: { type: "number", min: 1, max: 1000 },
        planCode: { type: "string", min: 6, max: 10 },
        unitType: {
          type: "enum",
          values: ["Solo", "Duplex", "Triplex"],
        },
        exposure: {
          type: "enum",
          values: ["Northern", "Southern", "Eastern", "Western"],
        },
        infrastructureArea: { type: "tuple", items: ["number", "number"] },
        lenght: { type: "tuple", items: ["number", "number"] },
        width: { type: "tuple", items: ["number", "number"] },
        passageWidth: { type: "number", min: 1, max: 1000 },
        plateType: { type: "enum", values: ["Registered", "Normal"] },
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
    planType: PLANTYPE;
    units: number;
    floors: number;
    sleeps: number;
    planCode: string;
    unitType: UNITTYPE;
    bathroom: number;
    exposure: POSITION;
    infrastructureArea: [number, number];
    lenght: [number, number];
    width: [number, number];
    passageWidth: number;
    plateType: PLATETYPE;
  };
  get: RPlan;
}
