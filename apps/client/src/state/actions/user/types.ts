import { FunQLResponse } from "@hemedani/funreq";
import { FQl_response_user_Gender, FQl_response_user_IUser } from "state";
import { FunQLRequest } from "state/declarations/request/schema";
import { Response } from "../../index";
import { singleFileInitial } from "..";

// Get Me
export type GetMeDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "getMe"
  ]["details"]
>;
export type UpdateUserDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "updateUser"
  ]["details"]
>;
export type GetMeResponse = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "getMe"
  ]["details"]["get"]
>;
export type GetMe = (
  details: GetMeDetails,
) => Promise<FunQLResponse<Response<GetMeResponse>>>;

// Login Request
export type LoginRequestDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "loginRequest"
  ]["details"]
>;
export type LoginRequestResponse =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "loginRequest"
  ]["details"]["get"];
export type LoginRequest = (
  details: LoginRequestDetails,
) => Promise<FunQLResponse<Response<LoginRequestResponse>>>;

// Login
export type LoginDetails = Required<
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "login"
  ]["details"]
>;
export type LoginResponse =
  FunQLRequest["schema"]["contents"]["dynamic"]["models"]["User"]["doits"][
    "login"
  ]["details"]["get"];
export type Login = (
  details: LoginRequestDetails,
) => Promise<FunQLResponse<Response<LoginRequestResponse>>>;

export interface Me extends FQl_response_user_IUser {
  loginStatus: "Login" | "Request" | "exit";
  token: string;
}

export interface User {
  me: Response<Me>;
  user: Response<FQl_response_user_IUser>;
  users: Response<FQl_response_user_IUser[]>;
}

export const singleUserInitial: FQl_response_user_IUser = {
  name: "",
  lastName: "",
  phone: 989111111111,
  gender: "Male" as FQl_response_user_Gender.Male,
  postalCode: "",
  level: [],
  isActive: false,
  creditCardNumber: 0,
  profilePicture: singleFileInitial,
  _id: "",
};

export const userInitials: User = {
  me: {
    data: { ...singleUserInitial, loginStatus: "exit", token: "" },
    loader: false,
    error: null,
  },
  user: {
    data: singleUserInitial,
    error: null,
    loader: false,
  },
  users: {
    data: [],
    error: null,
    loader: false,
  },
};
