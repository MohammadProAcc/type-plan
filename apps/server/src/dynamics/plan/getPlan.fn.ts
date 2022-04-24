import { IPlan } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { getPlan } from "./funcs/getPlan.ts";
import { checkGetPlanDetails, GetPlanDetails } from "./getPlan.type.ts";

type GetPlanFn = (
  details: GetPlanDetails,
  context: Context,
) => Promise<Partial<IPlan>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getPlanFn: GetPlanFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetPlanDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return await getPlan({ _id: obId, get });
};
