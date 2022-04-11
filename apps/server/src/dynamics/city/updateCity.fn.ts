import {
  checkRoleFn,
  getPureDoc,
  isAuthFn,
  notFoundError,
} from "./../../utils/mod.ts";
import { cities, ICity, states, users, PuCity } from "../../schemas/mode.ts";
import { checkValidation } from "../../utils/mod.ts";
import { throwError } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkUpdateCity, IUpdateCityDetails } from "./updateCity.type.ts";
import { getCity } from "./sharedFunctions/getCity.ts";
import { Bson } from "../../utils/deps.ts";

export type UpdateCity = (
  details: IUpdateCityDetails,
  context: Context,
) => Promise<Partial<ICity>>;

/**
 * Represent updateCity (update city in db)
 * after validate detail,we check if any field do exist so it adds to object dynamically.
 * at the end update the object with `$set` so we just update field that get from input.
 *
 * @function
 * @param details - detail of request
 * @param context - context is optional
 */

export const updateCityFn: UpdateCity = async (details, context) => {
  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUpdateCity, { details });
  const {
    set: { _id, name, enName, geometries, stateId },
    get,
  } = details;

  const newState = stateId
    ? await states.findOne(
        { _id: new Bson.ObjectID(stateId) },
        { projection: { _id: 1, name: 1, enName: 1 } },
      )
    : null;

  const cityId = new Bson.ObjectID(_id);
  newState !== null || undefined
    ? await cities.updateOne(
        { _id: cityId },
        {
          $set: {
            name,
            enName,
            geometries,
            state: newState,
          },
        },
      )
    : await cities.updateOne(
        { _id: cityId },
        {
          $set: {
            name,
            enName,
            geometries,
          },
        },
      );
  const city = await cities.findOne({ _id: cityId });

  !city ? throwError("there is no city with this ID") : null;

  const pureCity = await getPureDoc({
    IDocument: city!,
    puProps: ["name", "enName", "geometries"],
  });

  //update city Field in user
  await users.updateMany(
    { "addresses.city._id": cityId },
    {
      $set: {
        "addresses.city": pureCity,
      },
    },
  );

  //   // //update city Field in store
  //   // await shops.updateMany(
  //   //   { "city._id": cityId },
  //   //   {
  //   //     $set: {
  //   //       city: pureCity,
  //   //     },
  //   //   },
  //   // );
  // }

  return get ? getCity({ _id: cityId, get }) : { _id: cityId };
};
