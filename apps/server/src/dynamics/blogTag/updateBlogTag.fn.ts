import { blogPosts, blogTags, IBlogTag } from "../../schemas/mode.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import { emptyTokenError, notFoundError } from "./../../utils/mod.ts";
import { getBlogTag } from "./funcs/getBlogTag.ts";
import {
  checkUpdateBlogTagDetails,
  UpdateBlogTagDetails,
} from "./updateBlogTag.type.ts";

type UpdateBlogTag = (
  details: UpdateBlogTagDetails,
  context?: Context,
) => Promise<Partial<IBlogTag>>;

/**
 * Represent updateTag (update Tag on db)
 * in update , there is no relation in blogTag
 * @function
 * @param details
 * @param context
 */
export const updateBlogTag: UpdateBlogTag = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context!.token!);

  /**if user was authenticated,check the user role */
  user
    ? await checkRoleFn(user, ["Admin", "Editor"])
    : notFoundError("BlogTag");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUpdateBlogTagDetails, { details });

  const {
    set: { _id, name },
    get,
  } = details;

  /**update the tag itself in tags collection */
  await blogTags.updateOne({ _id: new Bson.ObjectID(_id) }, { $set: { name } });
  const updatedBlogTag = await blogTags.findOne({
    _id: new Bson.ObjectID(_id),
  });
  /**update the tag that are embedded in posts collection  */
  await blogPosts.updateMany(
    { "blogTags._id": new Bson.ObjectID(_id) },
    { $set: { "blogTags.$": updatedBlogTag } },
  );
  return Object.keys(get).length != 0
    ? getBlogTag({ _id: new Bson.ObjectID(_id), get })
    : { _id: new Bson.ObjectID(_id) };
};
