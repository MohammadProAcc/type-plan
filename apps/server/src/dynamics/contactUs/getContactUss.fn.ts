import { IBlogTag } from "../../schemas/mode.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { Context } from "../utils/context.ts";
import {
  checkContactUssDetails,
  getContactUssDetails,
} from "./getContactUss.type.ts";
import { getContactUss } from "./sharedFunctions/getContactUss.ts";

type GetContactUssFn = (
  details: getContactUssDetails,
  context: Context,
) => Promise<Partial<IBlogTag>[]>;

/**
 * @function
 * Represent get blog tags(tags with desired names)
 * @param details
 * @param context
 */
export const getContactUssFn: GetContactUssFn = async (details, context) => {
  context ?? emptyTokenError();

  /**check user is authenticated */
  const user = await isAuthFn(context!.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkContactUssDetails, { details });

  const {
    set: { name, email, sort, pagination },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort: getContactUssDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  name && (filter.name = { $regex: name });
  email && (filter.email = { $regex: email });

  return getContactUss({
    filter,
    getObj: get,
    sort: defaultSort,
    pagination: {
      limit: pagination?.limit,
      page: pagination?.page,
      lastObjectId: pagination?.lastObjectId,
    },
  });
};
