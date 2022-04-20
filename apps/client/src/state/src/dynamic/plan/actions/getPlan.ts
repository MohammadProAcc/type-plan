 
    import { FunQLRequest } from "../../../../declarations/request/schema";
    import { FQl_response_plan_IPlan } from "../../../../declarations/response/schema";
    import {
  typePlanApi,
  Response,
  singlePlanInitial,
  store,
} from "../../../../index";
    
          
    export type GetPlanDetails =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"]["getPlan"]["details"];

type  GetPlan = (
  {}: GetPlanDetails,
  token: string,
) => Promise<Response<FQl_response_plan_IPlan>>;
    
          
    
export const getPlan: GetPlan = async ({ set, get }, token = ""
  
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
            doit: "getPlan",
          },
          details: { set, get },
        },
        { token },
      );
      const data = getData?.body as FQl_response_plan_IPlan;
  
      str &&
        str.setState(({ plan, plans }) => {
            plan.data = data;
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
    
  