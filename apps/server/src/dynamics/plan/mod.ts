import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "../../utils/mod.ts";
import { createPlanFn } from "./createPlan.fn.ts";
import { deletePlanFn } from "./delete.fn.ts";
import { getPlanFn } from "./getPlan.fn.ts";
import { getPlansFn } from "./getPlans.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createPlan",
      "getPlan",
      "getPlans",
      "deletePlan",
    ],
  },
});

export type PlanDoit =
  | "createPlan"
  | "getPlan"
  | "getPlans"
  | "deletePlan";

type planFns = (doit: PlanDoit, details: any, context: any) => any;

export const planFns: planFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
      ["createPlan"]: async () => await createPlanFn(details, context),
      ["getPlan"]: async () => await getPlanFn(details, context),
      ["getPlans"]: async () => await getPlansFn(details, context),
      ["deletePlan"]: async () => await deletePlanFn(details, context),
    }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
