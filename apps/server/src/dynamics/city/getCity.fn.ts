import { Context } from "./../utils/context.ts";
import { checkValidation } from "../../utils/mod.ts";
import { checkGetCityDetails, getCityDetails } from "./getCity.type.ts";
import { ICity } from "../../schemas/mode.ts";
import { getCity } from "./sharedFunctions/getCity.ts";
import { Bson } from "../../utils/deps.ts";

type GetCityFn = (
  details: getCityDetails,
  context: Context,
) => Promise<Partial<ICity>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getCityFn: GetCityFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context!.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetCityDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return await getCity({ _id: obId, get });
};
