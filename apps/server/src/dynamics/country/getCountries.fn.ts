import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "./../../utils/mod.ts";
import { ICountry } from "../../schemas/mode.ts";
import { Context } from "../utils/context.ts";
import { getCountries } from "./sharedFunctions/getCountries.ts";
import {
  checkCountriesDetails,
  getCountriesDetails,
} from "./getCountries.type.ts";
import { Bson } from "../../utils/deps.ts";

type GetCountriesFn = (
  details: getCountriesDetails,
  context: Context,
) => Promise<Partial<ICountry>[]>;

/**
 * @function
 * Represent get blog tags(tags with desired names)
 * @param details
 * @param context
 */
export const getCountriesFn: GetCountriesFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  // /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  // /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkCountriesDetails, { details });

  const {
    set: { name, enName, sort, pagination },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort: getCountriesDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  if (name) filter.name = { $regex: name };
  if (enName) filter.enName = { $regex: enName };
  const foundCountries = getCountries({
    filter,
    getObj: get,
    sort: defaultSort,
    pagination: {
      limit: pagination?.limit,
      page: pagination?.page,
      lastObjectId: pagination?.lastObjectId,
    },
  });
  return foundCountries!;
};
