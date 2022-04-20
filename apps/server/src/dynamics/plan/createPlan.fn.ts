import {
  cities,
  countries,
  ICountry,
  plans,
  states,
} from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { Context } from "../mod.ts";
import { checkCreatePlan, ICreatePlanDetails } from "./createPlan.type.ts";
import { getPlan } from "./funcs/mod.ts";

type CreatePlanFn = (
  details: ICreatePlanDetails,
  context: Context,
) => Promise<Partial<ICountry>>;

/**
 * @function
 * Represent createCountry (insert country to db)
 * @param details
 * @param context
 */
export const createPlanFn: CreatePlanFn = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/

  const foundedCountry = await countries.findOne();
  const foundedState = await states.findOne();
  const foundedcity = await cities.findOne();
  checkValidation(checkCreatePlan, { details });
  const {
    set,
    get,
  } = details;
  // TODO: check the uniqueNess of country info
  const createdPlan = await plans.insertOne({
    ...set,
    country: foundedCountry,
    state: foundedState,
    city: foundedcity,
    creator: user,
  });

  return getPlan({ _id: new Bson.ObjectID(createdPlan), get });
};
