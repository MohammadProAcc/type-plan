import { FQl_response_user_IUser, store, typePlanApi } from "state";
import { singleUserInitial } from ".";
import { GetMeDetails } from "./types";

export const getMe = async (details: GetMeDetails, token: string) => {
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
          doit: "getMe",
        },
        details,
      },
      { token },
    );
    const data = getData?.body as FQl_response_user_IUser;
    str &&
      str.setState({
        me: {
          ...str.getState().me,
          data: {
            ...str.getState().me.data,
            ...data,
            loginStatus: "Login",
          },
        },
      });
    return {
      data: { ...singleUserInitial, ...data, loginStatus: "Login" },
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
      data: { ...singleUserInitial, loginStatus: "exit" },
      error: error.message ? error.message : "we have a problem",
      loader: false,
    };
  }
};
