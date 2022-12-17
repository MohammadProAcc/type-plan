import {
  FQl_response_plan_IPlan,
  singlePlanInitial,
  store,
  typePlanApi,
} from "state";
import { GetPlanDetails } from "./types";

export const getPlan = async (details: GetPlanDetails) => {
  const str = store;

  str &&
    str.setState({
      plan: { loader: true, error: null, data: singlePlanInitial },
    });
  try {
    const getData = await typePlanApi.api({
      contents: "dynamic",
      wants: {
        model: "Plan",
        doit: "getPlan",
      },
      details,
    });
    const data = getData?.body as FQl_response_plan_IPlan;
    str &&
      str.setState({
        plan: { data, loader: false, error: null },
      });
    return {
      data,
      error: null,
      loader: false,
    };
  } catch (error) {
    str &&
      str.setState({
        plan: {
          loader: false,
          error: error.message ? error.message : "we have an issue",
          data: singlePlanInitial,
        },
      });

    return {
      data: singlePlanInitial,
      error: error.message ? error.message : "we have a problem",
      loader: false,
    };
  }
};
