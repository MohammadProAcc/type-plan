
  import { FQl_response_plan_IPlan } from "../../../declarations/response/schema";
  import {  Response } from "../../../index";
      
     export interface Plan {
        plan: Response<FQl_response_plan_IPlan>;
        plans: Response<FQl_response_plan_IPlan[]>;
      }
     
     export const singlePlanInitial:FQl_response_plan_IPlan ={

      };
      
     export const planInitials:Plan ={
    plan: {
        error: "",
        data: singlePlanInitial,
        loader: false,
      },
      plans: {
        error: "",
        data: [],
        loader: false,
      }};
      