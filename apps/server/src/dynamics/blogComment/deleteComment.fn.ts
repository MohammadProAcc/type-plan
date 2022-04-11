import { IComment } from "../../schemas/mode.ts";
import { Context } from "../utils/context.ts";
import { emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { bidirectionalDeleteBlogComment } from "./utils/bidirectionalDeleteBlogComment.ts";
import {
  checkDeleteComment,
  DeleteCommentDetails,
} from "./deleteComment.type.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";

type DeleteComment = (
  details: DeleteCommentDetails,
  context: Context,
) => Promise<Partial<IComment>>;

/**
 * @function
 * Represent delete blog Comment from DB)
 * @param details
 * @param context
 */
export const deleteComment: DeleteComment = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);
  // TODO: the normal user be able to delete his comment
  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteComment, { details });

  const {
    set: { _id },
    get: {},
  } = details;

  return await bidirectionalDeleteBlogComment(_id);
};
