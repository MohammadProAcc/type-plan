import { FunQLResponse } from "@hemedani/funreq"
import { FunQLRequest } from "state/declarations/request/schema"
import { Response } from "types"

// Get User
export type GetMeDetails = Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["getMe"]["details"]>
export type GetMeResponse = Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["getMe"]["details"]["get"]>
export type GetMe = (details: GetMeDetails) => Promise<FunQLResponse<Response<GetMeResponse>>>