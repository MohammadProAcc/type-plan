import { FunQLRequest } from "state";

// Get Plan
export type GetPlanDetails =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"]["getPlan"]["details"]>;

export type GetPlanResponse =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"]["getPlan"]["details"]["get"]>;

// Get Plans

export type GetPlansDetails =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"]["getPlans"]["details"]>;

export type GetPlansResponse =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"]["getPlans"]["details"]["get"]>;