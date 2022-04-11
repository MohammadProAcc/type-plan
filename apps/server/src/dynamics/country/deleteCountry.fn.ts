import {
  checkDeleteCountry,
  IDeleteCountryDetails,
} from "./deleteCountry.type.ts";
import { countries, ICountry, states } from "../../schemas/mode.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
  throwError,
} from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { Bson } from "../../utils/deps.ts";

type DeleteCountry = (
  details: IDeleteCountryDetails,
  context: Context,
) => Promise<Partial<ICountry>>;

/**
 * @function
 * Represent deleteCountry (delete country from db)
 * @param details
 * @param context
 */
export const deleteCountryFn: DeleteCountry = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteCountry, { details });

  const {
    set: { _id },
  } = details;

  /**
   * in this function first check this country that we want delete it
   * then delete country
   * @param id - id of country
   */
  const deleteCountry = async (id: string) => {
    //check this country exist in state
    const nIStatesUsed = await states.count({
      "country._id": new Bson.ObjectID(id),
    });
    nIStatesUsed > 0
      ? throwError("you can not delete because used in states")
      : null;

    //delete country
    await countries.deleteOne({ _id: new Bson.ObjectID(id) });
  };

  //check country exist
  const deletedCountry = await countries.findOne({
    _id: new Bson.ObjectID(_id),
  });
  deletedCountry === undefined
    ? throwError("the Id of the country is not valid")
    : await deleteCountry(_id);

  return { _id: new Bson.ObjectID(_id) };
};
