import { FunQLResponse } from "@hemedani/funreq";
import { typePlanApi } from "state";
import { FQl_response_loginRequest_LoginRequestReturn } from "state/declarations/response/schema";
import { FQl_dynamic_user_IUser } from "state/declarations/schema/schema";
import { SetState } from "zustand";
import { LoginDetailsPieces, LoginRequestDetailsPieces } from "./types";

export const userPiece = (set: SetState<any>) => ({
  user: {},
  users: [],
  token: "",
  setUser: (user: FQl_dynamic_user_IUser) =>
    set((state: any) => {
      state.user = user;
    }),
  setUsers: (users: FQl_dynamic_user_IUser[]) =>
    set((state: any) => {
      state.users = users;
    }),
  loginRequest: async (details: LoginRequestDetailsPieces) => {
    const response = await typePlanApi.api({
      contents: "dynamic",
      wants: {
        model: "User",
        doit: "loginRequest",
      },
      details,
    });
    return response;
  },
  login: async (details: LoginDetailsPieces) => {
    const response = await typePlanApi.api({
      contents: "dynamic",
      wants: {
        model: "User",
        doit: "login",
      },
      details,
    });
    return response;
  },
});
