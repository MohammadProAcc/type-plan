import { CommentStatus } from "../../../schemas/comment.ts";
import { blogPosts } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
/**
 * change totalComments in Post collection)
 * @function
 * @param postId
 * @param previousCommentStatus
 * @param newCommentStatus
 * @param isCommentDeleted
 */
export const changeTotalCommentsForPost = async (
  postId: any, // it should be object id but it does not work
  previousCommentStatus?: CommentStatus,
  newCommentStatus?: CommentStatus,
  isCommentDeleted?: boolean,
) => {
  const postObjId = new Bson.ObjectID(postId);
  previousCommentStatus === CommentStatus.ACCEPT && isCommentDeleted
    ? await blogPosts.updateOne(
      { _id: postObjId },
      { $inc: { totalComments: -1 } },
    )
    : (previousCommentStatus === CommentStatus.PENDING ||
        previousCommentStatus == CommentStatus.REJECT) &&
        newCommentStatus === CommentStatus.ACCEPT
    ? await blogPosts.updateOne(
      { _id: postObjId },
      { $inc: { totalComments: 1 } },
    )
    : previousCommentStatus === CommentStatus.ACCEPT &&
        (newCommentStatus === CommentStatus.PENDING ||
          newCommentStatus === CommentStatus.REJECT)
    ? await blogPosts.updateOne(
      { _id: postObjId },
      { $inc: { totalComments: -1 } },
    )
    : null;
};
