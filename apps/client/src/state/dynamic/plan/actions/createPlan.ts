 
    import { FunQLRequest } from "../../../declarations/request/schema";
    import { FQl_response_plan_IPlan } from "../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singlePlanInitial,
  store,
} from "../../../index";
    
          
    export type CreatePlanDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"]["createPlan"]["details"];

type  CreatePlan = (
  {}: CreatePlanDetails,
  token: string,
) => Promise<Response<FQl_response_plan_IPlan>>;
    
          
    
export const createPlan: CreatePlan = async ({ set, get }, token = ""
  
  ) => {
    const str = store;
  
    str &&
      str.setState(({ plan }) => {
        plan.loader = true;
      });
  
    try {
      const getData = await typePlanApi.api(
        {
          contents: "dynamic",
          wants: {
            model: "Plan",
            doit: "createPlan",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_plan_IPlan;
  
      str &&
        str.setState(({ plan, plans }) => {
            plans.data.unshift(data);
            plan.loader = false;
            plan.error = null;
        });
  
      return {
        data,
        error: null,
        loader: false,
      };
    } catch (error: any) {
      str &&
        str.setState(({ plan }) => {
            plan.loader = false;
            plan.error = error.message ? error.message : "we have an issue";
        });
  
      return {
        data:singlePlanInitial,
        error: error.message ? error.message : "we have a problem",
        loader: false,
      };
    }
  };
    
  