import { IPlan } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import { checkValidation } from "./../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { getPlans } from "./funcs/getPlans.ts";
import { checkPlansDetails, GetPlansDetails } from "./getPlans.type.ts";

type GetPlansFn = (
  details: GetPlansDetails,
  context: Context,
) => Promise<Partial<IPlan>[]>;

/**
 * @function
 * Represent get blog tags(tags with desired names)
 * @param details
 * @param context
 */
export const getPlansFn: GetPlansFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  // /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  // /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkPlansDetails, { details });

  const {
    set: {
      pagination,
      planCode,
      planType,
      units,
      floors,
      sleeps,
      unitType,
      bathroom,
      exposure,
      infrastructureArea,
      lenght,
      width,
      passageWidth,
      plateType,
    },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort = { createdAt: -1 };

  let filter: Bson.Document = {};
  planCode &&
    (filter = {
      ...filter,
      planCode,
    });

  planType &&
    (filter = {
      ...filter,
      planType,
    });

  units &&
    (filter = {
      ...filter,
      units,
    });

  floors &&
    (filter = {
      ...filter,
      floors,
    });

  sleeps &&
    (filter = {
      ...filter,
      sleeps,
    });

  unitType &&
    (filter = {
      ...filter,
      unitType,
    });

  bathroom &&
    (filter = {
      ...filter,
      bathroom,
    });

  exposure &&
    (filter = {
      ...filter,
      exposure,
    });

  infrastructureArea &&
    (filter = {
      ...filter,
      infrastructureArea,
    });

  lenght &&
    (filter = {
      ...filter,
      lenght,
    });

  width &&
    (filter = {
      ...filter,
      width,
    });

  passageWidth &&
    (filter = {
      ...filter,
      passageWidth,
    });

  plateType &&
    (filter = {
      ...filter,
      plateType,
    });
  const foundPlans = await getPlans({
    filter,
    getObj: get,
    pagination: {
      limit: pagination?.limit,
      page: pagination?.page,
      lastObjectId: pagination?.lastObjectId,
    },
  });
  return foundPlans!;
};
