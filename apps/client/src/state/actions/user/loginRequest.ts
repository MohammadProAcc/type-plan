import { typePlanApi } from "state";
import { LoginRequestDetails } from "./types";

export const loginRequest = async (details: LoginRequestDetails) => {
  const response = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "User",
      doit: "loginRequest"
    },
    details
  });
  return response;
}