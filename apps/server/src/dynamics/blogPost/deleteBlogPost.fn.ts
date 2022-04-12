import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { notFoundError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { comments, blogPosts, IBlogPost } from "../../schemas/mode.ts";
import {
  checkDeleteBlogPost,
  DeleteBlogPostDetails,
} from "./deleteBlogPost.type.ts";
import { deleteBlogPostFromLatest } from "../../isdb/blog/blogFirstPage/mod.ts";
import { deleteBlogPostFromLatestStoreHomePage } from "../../isdb/mod.ts";

type DeleteBlogPost = (
  details: DeleteBlogPostDetails,
  context: Context,
) => Promise<Partial<IBlogPost>>;

/**
 * @function
 * Represent delete blogTag(delete the desired blogTag from DB)
 * @param details
 * @param context
 */
export const deleteBlogPost: DeleteBlogPost = async (details, context) => {
  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Editor"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteBlogPost, { details });

  const {
    set: { _id },
    get: {},
  } = details;

  const deletedBlogPost = await blogPosts.findOne({
    _id: new Bson.ObjectID(_id),
  });
  // step1: delete the comments of this blogPost
  // blogPostId
  await comments.deleteMany({
    blogPostId: deletedBlogPost!._id.toString(),
  });
  //step 2: delete the post itself
  await blogPosts.deleteOne({ _id: new Bson.ObjectID(_id) });

  await deleteBlogPostFromLatest(_id);

  await deleteBlogPostFromLatestStoreHomePage(_id);

  return deletedBlogPost!;
};
