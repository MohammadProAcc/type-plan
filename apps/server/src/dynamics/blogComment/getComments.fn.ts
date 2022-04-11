import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { IComment } from "./../../schemas/comment.ts";
import { getComments } from "./funcs/getComments.ts";
import {
  checkGetCommentsDetails,
  getBlogCommentsDetails,
} from "./getComments.type.ts";

type GetCommentsFn = (
  details: getBlogCommentsDetails,
) => Promise<Partial<IComment>[]>;

/**
 * @function
 * getting comments
 * @param details
 * @param context
 */
export const getCommentsFn: GetCommentsFn = async details => {
  /** check whether the details(input) is right or not*/
  checkValidation(checkGetCommentsDetails, { details });

  const {
    set: { email, blogPostId, commentStatus, sort, pagination },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort: getBlogCommentsDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  filter.blogPostId = { $regex: blogPostId };

  if (email)
    filter = {
      ...filter,
      "user.email": { $regex: email },
    };

  if (commentStatus) {
    filter.commentStatus = { $regex: commentStatus };
  }

  return getComments({
    filter,
    getObj: get,
    sort: defaultSort,
    pagination: {
      limit: pagination?.limit,
      page: pagination?.page,
      lastObjectId: pagination?.lastObjectId,
    },
  });
};
