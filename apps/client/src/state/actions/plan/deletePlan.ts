// import { typePlanApi } from "state";
// import { DeletePlanDetails } from "./types";
//
// export const getPlan = async (details: DeletePlanDetails) => {
//   const response = await typePlanApi.api({
//     contents: "dynamic",
//     wants: {
//       model: "Plan",
//       doit: "deletePlan",
//     },
//     details,
//   });
//   return response;
// };

import { typePlanApi } from "state";
import { FunQLRequest } from "../../declarations/request/schema";
import { Response, store } from "../../store";
import { singlePlanInitial } from ".";

export type DeletePlanDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "deletePlan"
  ]["details"]
>;
export type DeletePlanResponse = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["Plan"]["doits"][
    "deletePlan"
  ]["details"]["get"]
>;

type DeletePlan = (
  details: DeletePlanDetails,
  token?: string,
) => Promise<
  Response<
    { _id: string; msg: string }
  >
>;

export const deletePlan: DeletePlan = async (details, token = "") => {
  const str = store;

  str &&
    str.setState({
      plan: { loader: true, error: null, data: singlePlanInitial },
    });
  try {
    const getData = await typePlanApi.api(
      {
        contents: "dynamic",
        wants: {
          model: "Plan",
          doit: "deletePlan",
        },
        details,
      },
      { token },
    );
    const data = getData?.body as DeletePlanResponse;

    str && data.msg &&
      str.setState({
        plans: {
          ...str.getState().plans,
          data: [
            ...str.getState().plans.data.filter(val =>
              val._id !== details.set._id
            ),
          ],
        },
        plan: { ...str.getState().plan, loader: false, error: null },
      });

    return {
      data: { _id: details.set._id, msg: "ssdfsdf" },
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
      data: { _id: "sdf", msg: "sdf" },
      error: error.message ? error.message : "we have a problem",
      loader: false,
    };
  }
};
