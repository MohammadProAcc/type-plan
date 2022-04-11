import { IState } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  emptyTokenError,
  isAuthFn,
  throwError,
} from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { IGetStateDetails } from "./getState.type.ts";
import { getState } from "./sharedFunctions/getState.ts";

type GetStateFn = (
  details: IGetStateDetails,
  context: Context,
) => Promise<Partial<IState>>;

/**
 * @function
 * Represent getWareModel (get wareGroup to db)
 * @param details
 * @param context
 */
export const getStateFn: GetStateFn = async (details, context) => {
  /** check the user has token*/
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user
    ? await checkRoleFn(user, ["Admin", "Normal"])
    : throwError("the role of the user should be Normal or Admin!");

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getState({ _id: obId, get });
};
