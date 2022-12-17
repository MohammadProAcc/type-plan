import cookies from "js-cookie";
import { FQl_response_login_LoginReturn, store, typePlanApi } from "state";
import { LoginDetails, singleUserInitial } from ".";

export const login = async (details: LoginDetails) => {
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
          doit: "login",
        },
        details,
      },
    );
    const data = getData?.body as FQl_response_login_LoginReturn;
    str &&
      str.setState({
        me: {
          ...str.getState().me,
          loader: false,
          data: {
            ...str.getState().me.data,
            ...data.user,
            token: data.token,
            loginStatus: "Login",
          },
        },
      });
    cookies.set(process.env.TOKEN, data.token);
    return {
      data: {
        ...singleUserInitial,
        ...data.user,
        loginStatus: "Login",
        token: data.token,
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
      data: { ...singleUserInitial, loginStatus: "Request", token: "" },
      error: error.message ? error.message : "we have a problem",
      loader: false,
    };
  }
};
