import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { emptyTokenError, notFoundError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { blogCategories, IBlogCategory } from "./../../schemas/blogCategory.ts";
import { blogPosts } from "../../schemas/mode.ts";
import { getBlogCategory } from "./funcs/getBlogCategory.ts";
import {
  checkUpdateBlogCategory,
  UpdateBlogCategoryDetails,
} from "./updateBlogCategory.type.ts";

type UpdateBlogCategory = (
  details: UpdateBlogCategoryDetails,
  context: Context,
) => Promise<Partial<IBlogCategory>>;

/**
 * Represent updateCategory (update category on db)
 * @function
 * @param details
 * @param context
 */
export const updateBlogCategory: UpdateBlogCategory = async (
  details,
  context,
) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Editor"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUpdateBlogCategory, { details });

  const {
    set: { _id, name, enName, icon, description },
    get,
  } = details;

  await blogCategories.updateOne(
    { _id: new Bson.ObjectID(_id) },
    { $set: { name, enName, icon, description } },
  );

  const foundNewBlogCategory = await blogCategories.findOne({
    _id: new Bson.ObjectID(_id),
  });

  //2 update category in post collection where posts are refer to this category
  await blogPosts.updateMany(
    { "blogCategory._id": new Bson.ObjectID(_id) },
    { $set: { blogCategory: foundNewBlogCategory } },
  );

  return Object.keys(get).length != 0
    ? getBlogCategory({ _id: foundNewBlogCategory!._id, get })
    : { _id: foundNewBlogCategory!._id };
};
