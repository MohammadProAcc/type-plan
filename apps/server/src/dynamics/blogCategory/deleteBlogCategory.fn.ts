import { blogPosts } from "../../schemas/mode.ts";
import { emptyTokenError, notFoundError, throwError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { blogCategories, IBlogCategory } from "./../../schemas/blogCategory.ts";
import {
  checkDeleteBlogCategory,
  DeleteCategoryDetails,
} from "./deleteBlogCategory.type.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";

const deleteBlogCategory = async (_id: string) => {
  const deletedBlogCategory = await blogCategories.findOne({
    _id: new Bson.ObjectID(_id),
  });
  // step1: delete the category and all POSTS of this category,
  await blogPosts.deleteMany({
    blogCategory: deletedBlogCategory,
  });
  //step 2: delete the blogCategory itself
  await blogCategories.deleteOne({ _id: new Bson.ObjectID(_id) });
  return deletedBlogCategory;
};

type DeleteBlogCategory = (
  details: DeleteCategoryDetails,
  context: Context,
) => Promise<Partial<IBlogCategory>>;

/**
 * @function
 * Represent delete blogTag(delete the desired blogTag from DB)
 * @param details
 * @param context
 */
export const deleteBlogCategoryFn: DeleteBlogCategory = async (
  details,
  context,
) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Editor"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/
  checkValidation(checkDeleteBlogCategory, { details });

  const {
    set: { _id },
    get: {},
  } = details;
  const deletedCategory = await deleteBlogCategory(_id);
  return deletedCategory!;
};
