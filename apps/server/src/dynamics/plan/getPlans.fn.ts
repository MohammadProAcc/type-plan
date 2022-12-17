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
 * @param _context
 */
export const getPlansFn: GetPlansFn = async (details, _context) => {
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
      exposure,
      infrastructureArea,
      length,
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

  exposure &&
    (filter = {
      ...filter,
      exposure,
    });

  infrastructureArea &&
    infrastructureArea[0] &&
    infrastructureArea[0] > 1 &&
    (filter = {
      ...filter,
      infrastructureArea: {
        $gte: infrastructureArea[0],
      },
    });

  infrastructureArea &&
    infrastructureArea[1] &&
    infrastructureArea[1] > 1 &&
    (filter = {
      ...filter,
      infrastructureArea: {
        ...filter.infrastructureArea,
        $lte: infrastructureArea[1],
      },
    });

  length &&
    length[0] &&
    length[0] > 1 &&
    (filter = {
      ...filter,
      length: { $gte: length[0] },
    });

  length &&
    length[1] &&
    length[1] > 1 &&
    (filter = {
      ...filter,
      length: { ...filter.length, $lte: length[1] },
    });

  width &&
    width[0] &&
    width[0] > 1 &&
    (filter = {
      ...filter,
      width: { $gte: width[0] },
    });

  width &&
    width[1] &&
    width[1] > 1 &&
    (filter = {
      ...filter,
      width: { ...filter.width, $lte: width[1] },
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
