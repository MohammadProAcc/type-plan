import {
  FQl_dynamic_plan_PLANTYPE,
  FQl_dynamic_plan_PLATETYPE,
  FQl_dynamic_plan_POSITION,
} from "state/declarations/schema/schema";

export interface PlanFilters {
  planFilters: Filters;
}

export type Filters = {
  passageWidth: string;
  units: string;
  floors: string;
  infrastructureArea: [string, string];
  width: [string, string];
  length: [string, string];
  plateType?: FQl_dynamic_plan_PLATETYPE;
  planType?: FQl_dynamic_plan_PLANTYPE;
  exposure?: FQl_dynamic_plan_POSITION;
};

export const defaultFilters: Filters = {
  infrastructureArea: ["0", "0"],
  width: ["0", "0"],
  length: ["0", "0"],
  passageWidth: "0",
  units: "0",
  floors: "0",
  planType: null,
  plateType: null,
  exposure: null,
};

export const planFiltersInitial: PlanFilters = {
  planFilters: defaultFilters,
};
