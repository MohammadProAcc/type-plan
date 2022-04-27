import { FunQLResponse } from "@hemedani/funreq"
import { FunQLRequest } from "state/declarations/request/schema"
import { Response } from "types"

// Get Me
export type GetMeDetails = Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["getMe"]["details"]>
export type GetMeResponse = Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["getMe"]["details"]["get"]>
export type GetMe = (details: GetMeDetails) => Promise<FunQLResponse<Response<GetMeResponse>>>

// Login Request
export type LoginRequestDetails = Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["loginRequest"]["details"]>
export type LoginRequestResponse = FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["loginRequest"]["details"]["get"]
export type LoginRequest = (details: LoginRequestDetails) => Promise<FunQLResponse<Response<LoginRequestResponse>>>

// Login
export type LoginDetails = Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["login"]["details"]>
export type LoginResponse = FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["login"]["details"]["get"]
export type Login = (details: LoginRequestDetails) => Promise<FunQLResponse<Response<LoginRequestResponse>>>