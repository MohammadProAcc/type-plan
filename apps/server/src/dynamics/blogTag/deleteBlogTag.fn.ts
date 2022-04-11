import { checkRoleFn } from "./../../utils/mod.ts";
import { blogPosts, blogTags, IBlogTag } from "../../schemas/mode.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import {
  checkDeleteBlogTagDetails,
  DeleteBlogTagDetails,
} from "./deleteBlogTag.type.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";

type DeleteBlogTag = (
  details: DeleteBlogTagDetails,
  context: Context,
) => Promise<Partial<IBlogTag>>;

/**
 * @function
 * Represent delete blogTag(delete the desired blogTag from DB)
 * @param details
 * @param context
 */
export const deleteBlogTag: DeleteBlogTag = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context!.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteBlogTagDetails, { details });

  const {
    set: { _id },
    get: {},
  } = details;

  const deletedTag = await blogTags.findOne({
    _id: new Bson.ObjectID(_id),
  });
  !deletedTag ? notFoundError("blogTag") : null;
  // step1: delete the tag from posts
  await blogPosts.updateMany(
    { "blogTags._id": deletedTag!._id },
    { $pull: { blogTags: { _id: deletedTag!._id } } },
  );

  //step 2: delete the tag itself
  await blogTags.deleteOne({ _id: new Bson.ObjectID(_id) });
  return deletedTag!;
};
