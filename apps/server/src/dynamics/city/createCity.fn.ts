import { ICountry, PuRelCountry } from "../../schemas/mode.ts";
import { ICity, cities, states, IState } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  checkValidation,
  isAuthFn,
  notFoundError,
  throwError,
} from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkCreateCity, ICreateCityDetails } from "./createCity.type.ts";
import { getCity } from "./sharedFunctions/getCity.ts";
/**type of CreateCity function  */
type CreateCity = (
  details: ICreateCityDetails,
  context: Context,
) => Promise<Partial<ICity>>;

/**
 * @function
 * Represent createCity (insert wareType to db)
 * @param details
 * @param context
 */
export const createCityFn: CreateCity = async (details, context) => {
  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/

  checkValidation(checkCreateCity, { details });

  const addCity = async (
    country: PuRelCountry,
    state: IState,
    name: string,
    enName: string,
    get: any,
    geometries: [number, number][],
  ) => {
    const createdCity = await cities.insertOne({
      createdAt: new Date(Date.now()),
      name: name,
      enName: enName,
      state: {
        _id: state._id,
        name: state.name,
        enName: state.enName,
        updatedAt: state.updateAt,
      },
      country,
      geometries: { type: "Polygon", coordinates: geometries },
    });

    const ob = new Bson.ObjectID(createdCity);

    await states.updateOne(
      { _id: state?._id },
      {
        $addToSet: {
          cities: {
            _id: ob,
            name: name,
            enName: enName,
            geometries: { type: "Polygon", coordinates: geometries },
          },
        },
      },
    );

    return get ? getCity({ _id: ob, get }) : { _id: ob };
  };

  const {
    set: { name, enName, stateId, geometries },
    get,
  } = details;

  const state = await states.findOne({
    _id: new Bson.ObjectID(stateId),
  });
  const country = state!.country;

  return state === undefined
    ? throwError("state Id doesn't exist")
    : addCity(country!, state, name, enName, get, geometries);
};
