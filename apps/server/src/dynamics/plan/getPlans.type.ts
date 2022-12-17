import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  planSelectable,
  PLANTYPE,
  PLATETYPE,
  POSITION,
  PuPlan,
  RPlan,
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
          planType: {
            type: "enum",
            values: ["Resindental", "Commercial", "Mixed"],
            optional: true,
          },
          units: { type: "number", min: 1, max: 1000, optional: true },
          floors: { type: "number", min: 1, max: 1000, optional: true },
          sleeps: { type: "number", min: 1, max: 1000, optional: true },
          bathroom: { type: "number", min: 1, max: 1000, optional: true },
          planCode: { type: "string", min: 6, max: 10, optional: true },
          unitType: {
            type: "enum",
            values: ["Solo", "Duplex", "Triplex"],
            optional: true,
          },
          exposure: {
            type: "enum",
            values: ["Northern", "Southern", "Eastern", "Western"],
            optional: true,
          },
          infrastructureArea: {
            type: "tuple",
            items: ["number", "number"],
            optional: true,
          },
          length: {
            type: "tuple",
            items: ["number", "number"],
            optional: true,
          },
          width: { type: "tuple", items: ["number", "number"], optional: true },
          passageWidth: { type: "number", min: 1, max: 1000, optional: true },
          plateType: {
            type: "enum",
            values: ["Registered", "Normal"],
            optional: true,
          },
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
    planType: PLANTYPE;
    units: number;
    floors: number;
    planCode: string;
    exposure: POSITION;
    infrastructureArea: [number, number];
    length: [number, number];
    width: [number, number];
    passageWidth: number;
    plateType: PLATETYPE;
  };
  get: RPlan;
}
