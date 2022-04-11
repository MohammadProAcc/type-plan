import { throwError } from "./../../../utils/mod.ts";
import { changeTotalCommentsForPost } from "./changeTotalBlogCommentsForPost.ts";

import { comments } from "../../../schemas/comment.ts";
import { blogPosts } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";

export const bidirectionalDeleteBlogComment = async (_id: any) => {
  // bidirectional delete comment
  // steps:
  // 1 remove comment ref from blogPost/ware collection into field  blog comments ref
  // 2 delete replier comments
  // 3 remove comment ref from replied comment
  // 4 delete comment from comment collection
  // 5 decrement total comment in blog post collection

  const deletedBlogComment = await comments.findOne({
    _id: new Bson.ObjectID(_id),
  });

  if (deletedBlogComment) {
    // step 1
    deletedBlogComment.blogPostId
      ? await blogPosts.updateOne(
        { _id: new Bson.ObjectID(deletedBlogComment!.blogPostId) },
        { $pull: { comments: { _id: deletedBlogComment!._id } } },
      )
      : throwError("the comment has no blogPostId or WareId");

    // step 2
    deletedBlogComment.repliedComments
      ? await Promise.all(
        deletedBlogComment.repliedComments.map(
          async (replierBlogComment: any) => {
            await bidirectionalDeleteBlogComment(replierBlogComment._id);
          },
        ),
      )
      : null;

    // step 3

    deletedBlogComment.parentId
      ? await comments.updateOne(
        { "repliedComments._id": new Bson.ObjectID(deletedBlogComment._id) },
        {
          $pull: {
            // $pull: { results: { score: 8 , item: "B" } }
            repliedComments: {
              _id: new Bson.ObjectID(deletedBlogComment._id),
            },
          },
        },
      )
      : null;

    // step 4

    await comments.deleteOne({ _id: new Bson.ObjectID(_id) });
    // step 5

    await changeTotalCommentsForPost(
      deletedBlogComment!.blogPostId,
      deletedBlogComment.commentStatus,
      undefined,
      true,
    );

    return deletedBlogComment;
  } else {
    throw new Error();
  }
};
