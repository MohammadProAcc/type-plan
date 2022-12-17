// import { typePlanApi } from "state";
// import { LoginRequestDetails } from "./types";
//
// export const loginRequest = async (details: LoginRequestDetails) => {
//   const response = await typePlanApi.api({
//     contents: "dynamic",
//     wants: {
//       model: "User",
//       doit: "loginRequest"
//     },
//     details
//   });
//   return response;
// }

import { FQl_response_user_IUser, store, typePlanApi } from "state";
import { LoginRequestDetails, singleUserInitial } from ".";

export const loginRequest = async (details: LoginRequestDetails) => {
  const str = store;

  str &&
    str.setState({
      me: { ...str.getState().me, loader: true },
    });
  try {
    const getData = await typePlanApi.api(
      {
        contents: "dynamic",
        wants: {
          model: "User",
          doit: "loginRequest",
        },
        details,
      },
    );
    const data = getData?.body as FQl_response_user_IUser;
    str &&
      str.setState({
        me: {
          ...str.getState().me,
          loader: false,
          data: {
            ...str.getState().me.data,
            ...data,
            loginStatus: "Request",
          },
        },
      });

    return {
      data: {
        ...singleUserInitial,
        ...data,
        loginStatus: "Request",
        token: "",
      },
      error: null,
      loader: false,
    };
  } catch (error) {
    str &&
      str.setState({
        me: {
          ...str.getState().me,
          loader: false,
          error: error.message ? error.message : "we can not login",
        },
      });

    return {
      data: { ...singleUserInitial, loginStatus: "exit", token: "" },
      error: error.message ? error.message : "we have a problem",
      loader: false,
    };
  }
};
