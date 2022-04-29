import { FunQLRequest, Response } from "state";

// >>>>>>>> Login Request
export type LoginRequestDetailsPieces = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "loginRequest"
  ]["details"]
>;

export type LoginRequestResponsePieces = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "loginRequest"
  ]["details"]["get"]
>;

export type LoginRequestPieces = (
  details: LoginRequestDetailsPieces,
) => Promise<Response<LoginRequestResponsePieces>>;

// >>>>>>>> Login
export type LoginDetailsPieces = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "login"
  ]["details"]
>;

export type LoginResponsePieces = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "login"
  ]["details"]["get"]
>;

export type LoginPieces = (
  details: LoginDetailsPieces,
) => Promise<Response<LoginResponsePieces>>;
