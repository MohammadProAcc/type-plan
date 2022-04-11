import { throwError } from "./../../utils/mod.ts";
import { manEmbedded } from "./../../utils/mod.ts";
import { getPureDoc } from "./../../utils/mod.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { comments, CommentStatus, IComment } from "./../../schemas/comment.ts";
import { Context } from "./../utils/context.ts";
import {
  checkCreateBlogComment,
  createCommentDetails,
} from "./createComment.type.ts";
import { getComment } from "./funcs/getComment.ts";
import { blogPosts } from "../../schemas/mode.ts";
import { Bson, ObjectId } from "../../utils/deps.ts";

const createComment = async (
  createdAt: Date,
  user: Bson.Document,
  content: string,
  blogPostId?: ObjectId,
  wareId?: ObjectId,
  parentId?: ObjectId,
) => {
  /**
   * step1: creating the new comment in db, with all the fields even if empty
   */

  let comment =
    blogPostId != undefined && wareId == undefined
      ? await comments.insertOne({
          createdAt: Date.now(),
          user,
          content,
          blogPostId,
          parentId,
          commentStatus: CommentStatus.PENDING,
        })
      : wareId != undefined && blogPostId == undefined
      ? await comments.insertOne({
          createdAt: new Date(Date.now()),
          user,
          content,
          wareId,
          parentId,
          commentStatus: CommentStatus.PENDING,
        })
      : throwError("blogPostId or wareId should be entered");
  // const createdBlogCommentID = await comments.insertOne({
  //   user,
  //   content,
  //   blogPostId,
  //   parentId,
  //   commentStatus: CommentStatus.PENDING,
  // });

  // const createdWareCommentID = await comments.insertOne({
  //   user,
  //   content,

  //   wareId,
  //   parentId,
  //   commentStatus: CommentStatus.PENDING,
  // });

  /**
   * step2: if the comment is replied to another comment, add the child commentId to the repliedCommentIds of the parent
   */

  parentId != undefined
    ? await comments.updateOne(
        { _id: new Bson.ObjectID(parentId) },
        {
          $addToSet: { repliedCommentIds: comment },
        },
      )
    : null;
  const ob = new Bson.ObjectID(comment);
  return { _id: ob };
};

type CreateComment = (
  details: createCommentDetails,
  context: Context,
) => Promise<Partial<IComment>>;

/**
 * @function
 * Represent createWareClass (insert wareClass to db)
 * @param details
 * @param context
 */
export const createCommentFn: CreateComment = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user
    ? await checkRoleFn(user, ["Admin", "Editor", "Normal", "Author"])
    : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkCreateBlogComment, { details });
  const {
    set: { content, blogPostId, wareId, parentId },
    get,
  } = details;

  /**get the pureUser(only fields that we want for comments)from user */
  const pureUser = await getPureDoc({
    IDocument: user!,
    puProps: ["name", "lastName", "email", "profilePicture"],
  });
  /**check if the rep;ied blog comment exists */
  if (parentId) {
    const check = await comments.findOne({
      _id: new Bson.ObjectID(parentId),
    });

    check ?? notFoundError("the replied blog Comment");
  }
  const createdAt = new Date(Date.now());
  const createdComment = await createComment(
    createdAt,
    pureUser!,
    content,
    blogPostId,
    wareId,
    parentId,
  );

  const pureComment = await getPureDoc({
    _idArray: [createdComment._id.toHexString()],
    schema: comments,
    puProps: ["content"],
  });

  /**if wareId is null/undefined, then add the comment to blogPost */
  wareId ??
    (await manEmbedded({
      array: [blogPostId!.toString()],
      schema: blogPosts,
      embeddedField: "comments",
      document: [pureComment!],
      limit: 50,
      headOrTail: "tail",
      sortBy: "email",
      sortOrder: "Ascending",
    }));

  /**if blogPostId is null/undefined then add the comment to wares*/
  // blogPostId ??
  //   (await manEmbedded({
  //     array: [wareId!.toString()],
  //     schema: wares,
  //     embeddedField: "comments",
  //     document: [pureComment!],
  //     limit: 50,
  //     headOrTail: "tail",
  //     sortBy: "email",
  //     sortOrder: "Ascending",
  //   }));

  const commentWithUser = {
    ...pureComment,
    user: pureUser,
  };
  //keep 50 direct child of the comment in the parent comment
  if (parentId) {
    await manEmbedded({
      array: [String(parentId!)],
      schema: comments,
      embeddedField: "repliedComments",
      document: [commentWithUser!],
      limit: 50,
      headOrTail: "tail",
      sortBy: "email",
      sortOrder: "Ascending",
    });
  }
  return Object.keys(get).length != 0
    ? getComment({ _id: createdComment!._id, get })
    : { _id: createdComment!._id };
};
