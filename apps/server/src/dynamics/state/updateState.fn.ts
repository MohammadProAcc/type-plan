import { ValidationError } from "https://cdn.esm.sh/v45/fastest-validator@1.11.1/dist/index";
import {
  checkRoleFn,
  checkValidation,
  getPureDoc,
  isAuthFn,
  notFoundError,
} from "./../../utils/mod.ts";
import { IState, states } from "../../schemas/state.ts";
import { throwError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { getState } from "./sharedFunctions/getState.ts";
import { checkUpdateState, IUpdateStateDetails } from "./updateState.type.ts";
import { countries } from "../../schemas/country.ts";
import { cities } from "../../schemas/city.ts";
import { users } from "../../schemas/user.ts";
import { Bson } from "../../utils/deps.ts";

export type UpdateState = (
  details: IUpdateStateDetails,
  context: Context,
) => Promise<Partial<IState>>;

/**
 * Represent updateIState (update state in db)
 * after validate detail,we check if any field do exist so it adds to object dynamically.
 * at the end update the object with `$set` so we just update field that get from input.
 *
 * @function
 * @param details - detail of request
 * @param context - context is optional
 */
export const updateStateFn: UpdateState = async (details, context) => {
  //todo must be add authorization
  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUpdateState, { details });

  const detailsIsRight = checkUpdateState({ details }); //check input by validation
  detailsIsRight !== true &&
    throwError((detailsIsRight as ValidationError[])[0].message);
  const {
    set: { _id, name, enName, geometries, countryId },
    get,
  } = details;
  const stateId = new Bson.ObjectID(_id);

  //find state with Id
  const state = await states.findOne({
    _id: stateId,
  });

  ///check state is exist if not exist:throw Error else getPureIState
  state === undefined ? throwError("state not found") : null;

  const pureIState = await getPureDoc({
    IDocument: state,
    puProps: ["name", "enName"],
  });
  // may be after add error handling, below code is necessary for throw error

  const updatedIState: any = {}; // we declare an empty object then add a field one by one if the field is in input
  if (name) {
    updatedIState.name = name;
    pureIState!.name = name;
  }
  if (enName) {
    updatedIState.enName = enName;
    pureIState!.enName = enName;
  }
  if (geometries) {
    updatedIState.geometries = { type: "Polygon", coordinates: geometries };
    pureIState!.geometries = { type: "Polygon", coordinates: geometries };
  }
  //relations
  if (countryId) {
    updatedIState.country = await countries.findOne(
      { _id: new Bson.ObjectID(countryId) },
      { projection: { _id: 1, name: 1, enName: 1 } },
    );
    //delete state from list states of Prior Country
    await countries.updateOne(
      { _id: state!.country!._id },
      { $pull: { states: { _id: state?._id } } },
    );
    //add the state to new country

    await countries.updateOne(
      { _id: new Bson.ObjectID(countryId) },
      { $addToSet: { states: pureIState } },
    );
  }

  // update with `$set` operator in db
  const a = await states.updateOne({ _id: stateId }, { $set: updatedIState });

  //if these pure field change then update in other models
  if (name || enName || geometries) {
    //update state that save embedded in other schema

    await countries.updateOne(
      { "states._id": stateId },
      { $set: { "states.$": pureIState } },
    );
    //update state Field in city
    await cities.updateMany(
      { "state._id": stateId },
      {
        $set: {
          state: pureIState,
        },
      },
    );

    //update state Field in user
    await users.updateMany(
      { "addresses.state._id": stateId },
      {
        $set: {
          "addresses.state": pureIState,
        },
      },
    );

    //update state Field in store
    // await stores.updateMany(
    //   { "state._id": stateId },
    //   {
    //     $set: {
    //       state: pureIState,
    //     },
    //   },
    // );
  }
  return get ? getState({ _id: stateId, get }) : { _id: stateId };
};
