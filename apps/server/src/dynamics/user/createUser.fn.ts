import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { IUser, Level, users } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { isAuthFn, throwError } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import {
  checkCreateUserDetails,
  createUserDetails,
} from "./createUser.type.ts";
import { getUser } from "./funcs/getUser.ts";

type CreateUserFn = (
  context: Context,
  details: createUserDetails,
) => Promise<Partial<IUser>>;

/**
 * @function
 * Represent get shoppingCart
 * @param details
 * @param context
 */
export const createUser: CreateUserFn = async (context, details) => {
  const detailsIsRight = checkCreateUserDetails({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);

  !context && throwError("your token is empty");
  const user = await isAuthFn(context.token!);

  !user &&
    throwError("the token is not right! so we didn't find you dear user");

  !user.level.includes(Level.Admin) &&
    throwError("You do not have enough's permitions to create user");

  const { get, set } = details;
  const newUser = await users.insertOne({
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    ...set,
    isActive: false,
  });

  const obId = new Bson.ObjectId(newUser);

  return getUser({ _id: obId, get });
};
