import { cities, countries, ICountry, states } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { getCountry } from "./sharedFunctions/getCountry.ts";
import {
  checkUpdateCountry,
  IUpdateCountryDetails,
} from "./updateCountry.type.ts";
export type UpdateCountry = (
  details: IUpdateCountryDetails,
  context: Context,
) => Promise<Partial<ICountry>>;

/**
 * Represent update (update country in db)
 * after validate detail,we check if any field do exist so it adds to object dynamically.
 * at the end update the object with `$set` so we just update field that get from input.
 *
 * @function
 * @param details - detail of request
 * @param context - context is optional
 */

export const updateCountryFn: UpdateCountry = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  checkValidation(checkUpdateCountry, { details });

  const {
    set: { _id, name, enName, countryCode, geometries },
    get,
  } = details;
  const countryId = new Bson.ObjectID(_id);

  const updatedCountry: any = {}; // we declare an empty object then add a field one by one if the field is in input
  const updatedPureCountry: any = {}; //we declare an empty object then add a field one by one if the field is in input  this use for update country that saved embedded in other document
  // interface IFilter {
  //   [key: string]: string;
  // }
  if (name) {
    updatedCountry.name = name;
    updatedPureCountry["country.name"] = name;
  }
  if (enName) {
    updatedCountry.enName = enName;
    // let filter: IFilter = {};
    // filter["country.enName"] = enName;
    updatedPureCountry["country.enName"] = enName;
  }
  if (countryCode) {
    updatedCountry.countryCode = countryCode;
    // let filter: IFilter = {};
    // filter["country.enName"] = enName;
    updatedPureCountry["country.countryCode"] = countryCode;
  }
  if (geometries) {
    updatedCountry.geometries = { type: "Polygon", coordinates: geometries };
    updatedPureCountry["country.geometries"] = {
      type: "Polygon",
      coordinates: geometries,
    };
  }

  // update with `$set` operator in db
  await countries.updateOne({ _id: countryId }, { $set: updatedCountry });

  await states.updateMany(
    { "country._id": countryId },
    { $set: updatedPureCountry },
  );

  await cities.updateMany(
    { "country._id": countryId },
    { $set: updatedPureCountry },
  );
  return get ? getCountry({ _id: countryId, get }) : { _id: countryId };
};
