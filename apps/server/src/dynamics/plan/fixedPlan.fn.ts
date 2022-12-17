import { IPlan } from "../../schemas/mode.ts";
import { plans } from "../../schemas/plan.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkFixedPlanDetails, FixedPlanDetails } from "./fixedPlan.type.ts";

type FixedPlanFn = (
  details: FixedPlanDetails,
  context: Context,
) => Promise<Partial<IPlan>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const fixedPlanFn: FixedPlanFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkFixedPlanDetails, { details });

  const foundPlans = await plans.find().toArray();

  // foundPlans.map(async plan => {
  //   plan.length
  // })

  return { message: "everything is fixed" };
};
