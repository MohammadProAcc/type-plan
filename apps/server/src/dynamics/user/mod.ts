import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { IUser } from "../../schemas/user.ts";
import { throwError } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { addUserAddressFn } from "./addUserAddress.fn.ts";
import { createGhostUser } from "./createGhostUser.fn.ts";
import { createUser } from "./createUser.fn.ts";
import { getMeFn } from "./getMe.fn.ts";
import { getUserFn } from "./getUser.fn.ts";
import { getUsersFn } from "./getUsers.fn.ts";
import { insertProfileInfoFn } from "./insertProfileInfo.fn.ts";
import { login, LoginReturn } from "./login.fn.ts";
import { loginRequest, LoginRequestReturn } from "./loginRequest.fn.ts";
import { updateUserFn } from "./updateUser.fn.ts";
import { updateUserAddressFn } from "./updateUserAddress.fn.ts";
import { updateUserRoleFn } from "./updateUserRole.fn.ts";

//TODO: uncomment
const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "loginRequest",
      "login",
      "insertProfileInfo",
      "getUser",
      "getUsers",
      "updateUser",
      "updateUserRole",
      // "createGhostUser",
      "getMe",
      "createUser",
      "addUserAddress",
      "updateUserAddress",
    ],
  },
});

export type UserDoit =
  | "loginRequest"
  | "login"
  | "insertProfileInfo"
  | "getUser"
  | "getUsers"
  | "updateUser"
  | "updateUserRole"
  // | "createGhostUser"
  | "getMe"
  | "createUser"
  | "addUserAddress";

type UsrFns = (
  doit: UserDoit,
  details: any,
  context: Context,
) =>
  | Promise<Partial<IUser | LoginRequestReturn | LoginReturn>>
  | Promise<Partial<IUser>[]>;

export const usrFns: UsrFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
      ["loginRequest"]: async () => await loginRequest(details),
      ["login"]: async () => await login(details),
      ["insertProfileInfo"]: async () =>
        await insertProfileInfoFn(details, context),
      ["getUser"]: async () => await getUserFn(details, context),
      ["getUsers"]: async () => await getUsersFn(details, context),
      ["updateUser"]: async () => await updateUserFn(details, context),
      ["updateUserRole"]: async () => await updateUserRoleFn(details, context),
      // ["createGhostUser"]: async () => await createGhostUser(),
      ["getMe"]: async () => await getMeFn(context, details),
      ["createUser"]: async () => await createUser(context, details),
      ["addUserAddress"]: async () => addUserAddressFn(details, context),
      ["updateUserAddress"]: async () => updateUserAddressFn(details, context),
    }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
