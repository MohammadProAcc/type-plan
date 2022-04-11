import { checkValidation } from "../../utils/mod.ts";
import { comments, IComment, RComment } from "../../schemas/mode.ts";
import { checkGetBlogCommentRepliesDetails } from "./getCommentReplies.type.ts";

interface getCommenRepliestDetails {
  set: {
    _id: string;
  };
  get: RComment;
}

type GetCommentReplies = (
  details: getCommenRepliestDetails,
) => Promise<Partial<IComment[]>>;

/**
 * @function
 * this function is for getting the replies of a comment
 * @param details
 * @param context
 */
export const getCommentRepliesFn: GetCommentReplies = async details => {
  /** check whether the details(input) is right or not*/
  checkValidation(checkGetBlogCommentRepliesDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const foundedBlogComments = await comments
    .find(
      {
        parentId: _id,
      },
      { projection: get },
    )
    .toArray();
  return foundedBlogComments;
};
