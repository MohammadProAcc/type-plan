import { FunQLRequest } from "state";
import {
  FQl_response_plan_IPlan,
  FQl_response_plan_PLANTYPE,
  FQl_response_plan_PLATETYPE,
  FQl_response_upload_PuFile,
  FQl_response_user_Gender,
  FQl_response_user_Level,
} from "../../declarations/response/schema";
import { Response } from "../../index";

export interface Plan {
  plan: Response<FQl_response_plan_IPlan>;
  plans: Response<FQl_response_plan_IPlan[]>;
}

export const singleFileInitial: FQl_response_upload_PuFile = {
  filename: "",
  type: "",
  size: 223,
  _id: "",
};

export const singlePlanInitial: FQl_response_plan_IPlan = {
  _id: "",
  creator: {
    name: "",
    lastName: "",
    phone: 989999999,
    gender: FQl_response_user_Gender.Male,
    postalCode: "",
    level: [FQl_response_user_Level.Normal],
    creditCardNumber: 999888777666,
    _id: "",
    profilePicture: singleFileInitial,
  },
  planType: FQl_response_plan_PLANTYPE.Resindental,
  units: 0,
  floors: 0,
  planCode: "",
  exposure: [],
  infrastructureArea: 0,
  length: 0,
  width: 0,
  passageWidth: 0,
  plateType: FQl_response_plan_PLATETYPE.Normal,
  photo: singleFileInitial,
  pdf: singleFileInitial,
  slider: [singleFileInitial],
};

export const planInitials: Plan = {
  plan: {
    error: null,
    data: singlePlanInitial,
    loader: false,
  },
  plans: {
    error: null,
    data: [],
    loader: false,
  },
};

// Get Plan
export type GetPlanDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "getPlan"
  ]["details"]
>;

export type GetPlanResponse = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "getPlan"
  ]["details"]["get"]
>;

// Get Plans

export type GetPlansDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "getPlans"
  ]["details"]
>;

export type GetPlansResponse = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "getPlans"
  ]["details"]["get"]
>;

// Delete Plann
export type DeletePlanDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "deletePlan"
  ]["details"]
>;
