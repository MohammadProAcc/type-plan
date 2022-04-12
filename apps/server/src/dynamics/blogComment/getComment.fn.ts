import { Context } from "./../utils/context.ts";
import { getComment } from "./funcs/getComment.ts";
import {
  checkGetCommentDetails,
  getCommentDetails,
} from "./getComment.type.ts";
import { checkValidation } from "../../utils/mod.ts";
import { IComment } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";

type GetCommentFn = (
  details: getCommentDetails,
  context: Context,
) => Promise<Partial<IComment>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getCommentFn: GetCommentFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context!.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetCommentDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getComment({ _id: obId, get });
};
