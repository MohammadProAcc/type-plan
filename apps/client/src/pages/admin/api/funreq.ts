import { funreq } from "@hemedani/funreq"
import { FunQLRequest, FunQLResponseWithDetails } from "state";

export const typePlanApi = funreq<FunQLRequest, FunQLResponseWithDetails>();

typePlanApi.setup({
  url: "http://127.0.0.1:8080/funql"
})