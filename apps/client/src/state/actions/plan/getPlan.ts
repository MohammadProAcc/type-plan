import { typePlanApi } from "state";
import { GetPlanDetails } from "./types";

export const getPlan = async (details: GetPlanDetails) => {
  const response = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "Plan",
      doit: "getPlan"
    },
    details
  });
  return response;
}