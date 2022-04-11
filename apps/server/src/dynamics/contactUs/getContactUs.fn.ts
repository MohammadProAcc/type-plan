import { Context } from "./../utils/context.ts";
import { IBlogPost, IContactUs } from "../../schemas/mode.ts";
import {
  checkGetContactUsDetails,
  getContactUsDetails,
} from "./getContactUs.type.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { getContactUs } from "./sharedFunctions/getContactUs.ts";

type GetContactUsFn = (
  details: getContactUsDetails,
  context: Context,
) => Promise<Partial<IContactUs>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getContactUsFn: GetContactUsFn = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context!.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetContactUsDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getContactUs({ _id: obId, get });
};
