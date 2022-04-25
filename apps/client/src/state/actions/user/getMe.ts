import { typePlanApi } from "state";
import { GetMeDetails } from "./types";

export const getMe = async (details: GetMeDetails, token: string) => {
  const response = await typePlanApi.api({
    contents: "dynamic",
    wants: {
      model: "User",
      doit: "getMe"
    },
    details
  }, { token });
  return response;
}