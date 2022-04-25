import { FunQLRequest, Response } from "state";

// >>>>>>>> Login Request
export type LoginRequestDetails =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["loginRequest"]["details"]>;

export type LoginRequestResponse =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["loginRequest"]["details"]["get"]>;

export type LoginRequest = (
  details: LoginRequestDetails,
) => Promise<Response<LoginRequestResponse>>;

// >>>>>>>> Login
export type LoginDetails =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["login"]["details"]>;

export type LoginResponse =
  Required<FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"]["login"]["details"]["get"]>;

export type Login = (
  details: LoginDetails,
) => Promise<Response<LoginResponse>>;