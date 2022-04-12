import { decode, Payload } from "https://deno.land/x/djwt@v2.3/mod.ts";
import { IUser, PuUser, users } from "../schemas/user.ts";
import { Bson } from "./deps.ts";
import { throwError } from "./mod.ts";
/**
 *the token is checked (the userId is extracted) and check 
whether the user exist or not
 * @param token the token in the context
 * @returns foundUser
 */
export const isAuthFn = async (token: string): Promise<IUser> => {
  const findAdminUser = async (): Promise<IUser> => {
    const adminUser = await users.findOne({ level: "Admin" });
    return adminUser ? adminUser : throwError("can not find any user");
  };
  const findUserFromToken = async (token: string): Promise<IUser> => {
    token == undefined ? throwError("there is no token in header") : null;
    const userId = await getTokenDetails(token);

    const foundUser = await users.findOne({ _id: new Bson.ObjectId(userId) });
    return foundUser ? foundUser : throwError("can not find any user");
  };

  const a =
    Deno.args.includes("--admin") &&
    (await findAdminUser()) &&
    token == undefined
      ? await findAdminUser()
      : await findUserFromToken(token);

  return a;
};

export const getTokenDetails = async (jwt: string) => {
  const [header, payload, signature] = decode(jwt);

  // return payload.usersId as string;
  return (payload as Payload).usersId;
};
