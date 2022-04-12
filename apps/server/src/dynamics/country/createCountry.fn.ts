import { countries, ICountry } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { Context } from "../mod.ts";
import {
  checkCreateCountry,
  ICreateCountryDetails,
} from "./createCountry.type.ts";
import { getCountry } from "./sharedFunctions/getCountry.ts";

type CreateCountryFn = (
  details: ICreateCountryDetails,
  context: Context,
) => Promise<Partial<ICountry>>;

/**
 * @function
 * Represent createCountry (insert country to db)
 * @param details
 * @param context
 */
export const createCountryFn: CreateCountryFn = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/
  checkValidation(checkCreateCountry, { details });
  const {
    set: { name, enName, geometries, countryCode },
    get,
  } = details;
  //TODO: check the uniqueNess of country info
  const createCountry = await countries.insertOne({
    name: name,
    enName: enName,
    countryCode,
    geometries: geometries
      ? { type: "Polygon", coordinates: geometries }
      : undefined,
  });

  return getCountry({ _id: new Bson.ObjectID(createCountry), get });
};
