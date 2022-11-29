import { enums, InRelation, number, string, union } from "../deps.ts";
import { tarhApp } from "../mod.ts";

// This is thype of Land for example in Persian word -- Khane Maskoni ya villaei --
const planType = enums(["Resindental", "Villa"]);

// This is position of Land for example in Persian word -- Khane Shomali ya jonobi --
const position = enums(["Northern", "Southern", "Western", "Eastern"]);

// This is type of plate for example in Persian word -- Pelak Sabti ya aadi --
const plateType = enums(["Registered", "Normal"]);

export const purePlan = {
  planType: planType,
  units: number(),
  floors: number(),
  bathroom: number(),
  sleeps: number(),
  planCode: string(),
  exposure: position,
  infrastructureArea: union([number(), number()]),
  length: union([number(), number()]),
  width: union([number(), number()]),
  passageWidth: number(),
  plateType: plateType,
  desription: string(),
  /**
   * save set of polygon of point of this plan
   */
  // geometries: {
  //   type: "Polygon";
  //   coordinates: [number, number][];
  // };
};

export const outrelPlan = {};
export const inrelPlan: Record<string, InRelation> = {
  creator: { schemaName: "user", type: "one" },
};

export const createPlan = () =>
  tarhApp.odm.setModel("plan", purePlan, inrelPlan, outrelPlan);
