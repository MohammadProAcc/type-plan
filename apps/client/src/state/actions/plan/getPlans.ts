import { FQl_response_plan_IPlan, store, typePlanApi } from "state";
import { GetPlansDetails } from "./types";

export const getPlans = async (details: GetPlansDetails) => {
  const str = store;

  str &&
    str.setState({
      plans: { ...str.getState().plans, loader: true, error: null },
    });
  try {
    const getData = await typePlanApi.api({
      contents: "dynamic",
      wants: {
        model: "Plan",
        doit: "getPlans",
      },
      details,
    });
    const data = getData?.body as FQl_response_plan_IPlan[];
    str &&
      str.setState({
        plans: {
          data: [...str.getState().plans.data, ...data],
          loader: false,
          error: null,
        },
      });
    return {
      data,
      error: null,
      loader: false,
    };
  } catch (error) {
    str &&
      str.setState({
        plans: {
          ...str.getState().plans,
          loader: false,
          error: error.message ? error.message : "we have an issue",
        },
      });

    return {
      data: [],
      error: error.message ? error.message : "we have a problem",
      loader: false,
    };
  }
};
