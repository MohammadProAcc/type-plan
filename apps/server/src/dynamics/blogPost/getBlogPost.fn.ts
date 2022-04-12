import { checkValidation } from "./../../utils/mod.ts";
import { Context } from "./../utils/context.ts";
import { IBlogPost } from "./../../schemas/blogPost.ts";
import { getBlogPost } from "./funcs/getBlogPost.ts";
import {
  checkGetBlogPostDetails,
  getBlogPostDetails,
} from "./getBlogPost.type.ts";
import { Bson } from "../../utils/deps.ts";

type GetBlogPostFn = (
  details: getBlogPostDetails,
  context: Context,
) => Promise<Partial<IBlogPost>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getBlogPostFn: GetBlogPostFn = async (details, context) => {
  /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetBlogPostDetails, { details });
  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getBlogPost({ _id: obId, get });
};
