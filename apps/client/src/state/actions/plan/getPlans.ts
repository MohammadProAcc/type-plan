import { typePlanApi } from "state";
import { GetPlansDetails } from "./types";

export const getPlans = async (details: GetPlansDetails) => {
  const response = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "Plan",
      doit: "getPlans"
    },
    details
  });
  return response;
}