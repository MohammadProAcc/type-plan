import { checkGetMeDetails, getMeDetails } from "./getMe.type.ts";
import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { Context } from "./../utils/context.ts";
import { IUser } from "../../schemas/mode.ts";
import { isAuthFn, throwError } from "../../utils/mod.ts";
import { getUser } from "./funcs/getUser.ts";
import { checkGetUserDetails } from "./getUser.type.ts";
import { Bson } from "../../utils/deps.ts";

type GetMeFn = (
  context: Context,
  details: getMeDetails,
) => Promise<Partial<IUser>>;

/**
 * @function
 * Represent get shoppingCart
 * @param details
 * @param context
 */
export const getMeFn: GetMeFn = async (context, details) => {
  !context ? throwError("your token is empty") : null;
  const user = await isAuthFn(context.token!);

  user ?? throwError("the token is not right! so we didn't find you dear user");

  const detailsIsRight = checkGetMeDetails({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const { get, set } = details;

  const obId = new Bson.ObjectId(user._id);

  return getUser({ _id: obId, get });
};
