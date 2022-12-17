import {
  FQl_response_plan_IPlan,
  singlePlanInitial,
  store,
  typePlanApi,
} from "state";
import { FQl_dynamic_plan_IPlan } from "state/declarations/schema/schema";

export const createPlan = async (
  form: FQl_dynamic_plan_IPlan,
  token: string,
) => {
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
        doit: "createPlan",
      },
      details: {
        set: form,
        get: {},
      },
    }, {
      token,
    });
    const data = getData?.body as FQl_response_plan_IPlan;
    str &&
      str.setState({
        plans: {
          ...str.getState().plans,
          data: [
            data,
            ...str.getState().plans.data,
          ],
        },
        plan: { ...str.getState().plan, loader: false, error: null },
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
