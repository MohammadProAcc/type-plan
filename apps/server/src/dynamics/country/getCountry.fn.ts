import { Context } from "./../utils/context.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { ICountry } from "../../schemas/mode.ts";
import { getCountry } from "./sharedFunctions/getCountry.ts";
import {
  checkGetCountryDetails,
  getCountryDetails,
} from "./getCountry.type.ts";
import { Bson } from "../../utils/deps.ts";

type GetCountryFn = (
  details: getCountryDetails,
  context: Context,
) => Promise<Partial<ICountry>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getCountryFn: GetCountryFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetCountryDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getCountry({ _id: obId, get });
};
