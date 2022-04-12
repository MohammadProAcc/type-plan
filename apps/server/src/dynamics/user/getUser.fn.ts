import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { Context } from "./../utils/context.ts";
import { IUser } from "../../schemas/mode.ts";
import { throwError } from "../../utils/mod.ts";
import { getUser } from "./funcs/getUser.ts";
import { checkGetUserDetails, getUserDetails } from "./getUser.type.ts";
import { Bson } from "../../utils/deps.ts";

type GetUserFn = (
  details: getUserDetails,
  context: Context,
) => Promise<Partial<IUser>>;

/**
 * @function
 * Represent get shoppingCart
 * @param details
 * @param context
 */
export const getUserFn: GetUserFn = async (details, context) => {
  //  context ? await isAuthFn(context.token) : throwError("your token is empty");
  // await isAdminFn(user);
  //TODO: take the token extract the userId and create the blogPost with that Uset Id
  const detailsIsRight = checkGetUserDetails({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getUser({ _id: obId, get });
};
