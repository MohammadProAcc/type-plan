import { typePlanApi } from "state";
import { LoginDetails } from "./types";

export const login = async (details: LoginDetails) => {
  const response = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "User",
      doit: "login"
    },
    details
  });
  return response;
}