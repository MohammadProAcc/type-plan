import { checkValidation } from "./../../utils/mod.ts";
import { ICity } from "../../schemas/mode.ts";
import { Context } from "../utils/context.ts";
import { getCitiesDetails, checkCitiesDetails } from "./getCities.type.ts";
import { getCities } from "./sharedFunctions/getCities.ts";
import { Bson } from "../../utils/deps.ts";
type GetCitiesFn = (
  details: getCitiesDetails,
  context: Context,
) => Promise<Partial<ICity>[]>;

/**
 * @function
 * Represent get blog tags(tags with desired names)
 * @param details
 * @param context
 */
export const getCitiesFn: GetCitiesFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context!.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkCitiesDetails, { details });

  const {
    set: { name, sort, pagination, countryId, stateId },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort: getCitiesDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  if (name) filter.name = { $regex: name };
  countryId &&
    (filter = {
      ...filter,
      "country._id": { $eq: new Bson.ObjectID(countryId) },
    });

  stateId &&
    (filter = {
      ...filter,
      "state._id": { $eq: new Bson.ObjectID(stateId) },
    });

  const foundCities = await getCities({
    filter,
    getObj: get,
    sort: defaultSort,
    pagination: {
      limit: pagination?.limit,
      page: pagination?.page,
      lastObjectId: pagination?.lastObjectId,
    },
  });
  return foundCities!;
};
