import { isAuthFn } from "../../utils/mod.ts";
import { blogTags, IBlogTag } from "./../../schemas/blogTag.ts";
import { emptyTokenError } from "./../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { checkCreateBlogTag, createTagDetails } from "./createBlogTag.type.ts";
import { getBlogTag } from "./funcs/getBlogTag.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";

type CreateBlogTag = (
  details: createTagDetails,
  context: Context,
) => Promise<Partial<IBlogTag>>;

/**
 * @function
 * Represent create blogTag (insert tag to db)
 * @param details
 * @param context
 */
export const createBlogTag: CreateBlogTag = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkCreateBlogTag, { details });

  const {
    set: { name },
    get,
  } = details;

  const createdBlogTag = await blogTags.insertOne({
    createdAt: new Date(Date.now()),
    name,
    blogPosts: [],
  });
  const ob = new Bson.ObjectID(createdBlogTag);

  return Object.keys(get).length != 0
    ? getBlogTag({ _id: ob, get })
    : { _id: ob };
};
