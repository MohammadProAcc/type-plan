import { checkRoleFn } from "./../../utils/mod.ts";
import { isAuthFn } from "./../../utils/mod.ts";
import { changeTotalCommentsForPost } from "./utils/changeTotalBlogCommentsForPost.ts";
import { emptyTokenError, notFoundError } from "./../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { comments, CommentStatus, IComment } from "./../../schemas/comment.ts";
import { getComment } from "./funcs/getComment.ts";
import { checkValidation } from "../../utils/mod.ts";
import {
  checkUpdateComment,
  UpdateCommentDetails,
} from "./updateComment.type.ts";
import { Bson } from "../../utils/deps.ts";

type UpdateBlogComment = (
  details: UpdateCommentDetails,
  context: Context,
) => Promise<Partial<IComment>>;

/**
 * Represent updateCommentFn (update blogComment status on db)
 * @function
 * @param details
 * @param context
 */
export const updateCommentFn: UpdateBlogComment = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUpdateComment, { details });

  const {
    set: { _id, commentStatus: newcommentStatus },
    get,
  } = details;
  /**I just changed the newStatus of comment from string to number, to make my function work */
  let newStatusStrToNum: number = 0;
  newcommentStatus === CommentStatus.ACCEPT
    ? (newStatusStrToNum = 0)
    : newcommentStatus === CommentStatus.PENDING
    ? (newStatusStrToNum = 1)
    : newcommentStatus === CommentStatus.REJECT
    ? (newStatusStrToNum = 2)
    : null;

  const blogComment = await comments!.findOne({
    _id: new Bson.ObjectID(_id),
  });

  // change totalComment in BlogPost collection

  await changeTotalCommentsForPost(
    blogComment!.blogPostId,
    blogComment!.commentStatus, //previous comment status
    newStatusStrToNum, //new blog status
  );

  await comments.updateOne(
    { _id: new Bson.ObjectID(_id) },
    {
      $set: { commentStatus: newStatusStrToNum },
    },
  );

  const updatedBlogComment = await comments!.findOne({
    _id: new Bson.ObjectID(_id),
  });
  return Object.keys(get).length != 0
    ? getComment({ _id: updatedBlogComment!._id, get })
    : { _id: updatedBlogComment!._id };
};
