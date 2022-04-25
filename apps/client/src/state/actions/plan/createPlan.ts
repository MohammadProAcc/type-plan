import { typePlanApi } from "state";
import { FQl_dynamic_plan_IPlan } from "state/declarations/schema/schema";

export const createPlan = async (form: FQl_dynamic_plan_IPlan, token: string) => {
  const response = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "Plan",
      doit: "createPlan"
    },
    details: {
      set: form,
      get: {}
    }
  }, {
    token
  })
  return response;
}