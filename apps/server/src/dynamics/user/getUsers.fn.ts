import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import { Context } from "./../utils/context.ts";
import { getUsers } from "./funcs/getUsers.ts";
import { throwError } from "./../../utils/mod.ts";
import { IUser, Level, RUser } from "./../../schemas/user.ts";
import { checkUsersDetails, getUsersDetails } from "./getUsers.type.ts";
import { Bson } from "../../utils/deps.ts";

type GetUsersFn = (
  details: getUsersDetails,
  context: Context,
) => Promise<Partial<IUser>[]>;

/**
 * @function
 * this function searches the users and return those with (name,level,lastName)
 * @param details
 * @param context
 */
export const getUsersFn: GetUsersFn = async (details, context) => {
  //  context ? await isAuthFn(context.token) : throwError("your token is empty");
  // await isAdminFn(user);

  const detailsIsRight = checkUsersDetails({ details });
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: { name, lastName, level, sort, pagination },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort: getUsersDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  if (name) filter.name = { $regex: name };
  if (lastName) filter.lastName = { $regex: lastName };
  if (lastName) filter.level = { $regex: level };
  return getUsers({
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
