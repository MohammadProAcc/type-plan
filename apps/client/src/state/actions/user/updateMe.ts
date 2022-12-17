import { FQl_response_user_IUser, store, typePlanApi } from "state";
import { singleUserInitial } from ".";
import { UpdateUserDetails } from "./types";

export const updateUser = async (
  details: UpdateUserDetails,
  token: string,
  isMe: boolean = false,
) => {
  const str = store;

  str && isMe
    ? str.setState({
      me: { ...str.getState().me, loader: true },
    })
    : str.setState({
      user: { ...str.getState().user, loader: true },
    });

  try {
    const getData = await typePlanApi.api(
      {
        contents: "dynamic",
        wants: {
          model: "User",
          doit: "updateUser",
        },
        details,
      },
      { token },
    );
    const data = getData?.body as FQl_response_user_IUser;
    str && isMe
      ? str.setState({
        me: {
          ...str.getState().me,
          data: {
            ...str.getState().me.data,
            ...data,
          },
        },
      })
      : str.setState({
        user: {
          ...str.getState().user,
          data: {
            ...str.getState().user.data,
            ...data,
          },
        },
      });

    const returnData = isMe
      ? { ...singleUserInitial, ...data, loginStatus: "Login" }
      : singleUserInitial;

    return {
      data: returnData,
      error: null,
      loader: false,
    };
  } catch (error) {
    str && isMe
      ? str.setState({
        me: {
          ...str.getState().me,
          loader: false,
          error: error.message ? error.message : "we can not login",
        },
      })
      : str.setState({
        user: {
          ...str.getState().user,
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
