import { countries, ICountry } from "../../schemas/country.ts";
import { IState, states } from "../../schemas/state.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  checkValidation,
  isAuthFn,
  notFoundError,
  throwError,
} from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { checkCreateState, ICreateStateDetails } from "./createState.type.ts";
import { getState } from "./sharedFunctions/getState.ts";

type CreateState = (
  details: ICreateStateDetails,
  context: Context,
) => Promise<Partial<IState>>;

/**
 * @function
 * Represent createIState (insert state to db)
 * @param details
 * @param context
 */
export const createStateFn: CreateState = async (details, context) => {
  //todo must be add authorization
  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/

  checkValidation(checkCreateState, { details });

  const {
    set: { name, enName, countryId, geometries },
    get,
  } = details;

  const addIState = async (
    name: string,
    enName: string,
    country: ICountry,
    geometries: [number, number][],
    get: any,
  ) => {
    const createdIState = await states.insertOne({
      createdAt: new Date(Date.now()),
      name: name,
      enName: enName,
      geometries: { type: "Polygon", coordinates: geometries },
      country: country,
    });

    const ob = new Bson.ObjectID(createdIState);

    await countries.updateOne(
      { _id: country?._id },
      {
        $addToSet: {
          states: {
            _id: ob,
            name: name,
            enName: enName,
            geometries: { type: "Polygon", coordinates: geometries },
          },
        },
      },
    );

    return get ? getState({ _id: ob, get }) : { _id: ob };
  };

  const country = await countries.findOne(
    { _id: new Bson.ObjectID(countryId) },
    { projection: { _id: 1, name: 1, enName: 1 } },
  );

  return country === undefined
    ? throwError("country Id not true")
    : addIState(name, enName, country, geometries, get);
};
