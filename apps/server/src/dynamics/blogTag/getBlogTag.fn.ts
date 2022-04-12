import { Context } from "./../utils/context.ts";
import { IBlogPost, IBlogTag } from "../../schemas/mode.ts";
import { getBlogTag } from "./funcs/getBlogTag.ts";
import {
  checkGetBlogTagDetails,
  getBlogTagDetails,
} from "./getBlogTag.type.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";

type GetBlogTagFn = (
  details: getBlogTagDetails,
  context: Context,
) => Promise<Partial<IBlogTag>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getBlogTagFn: GetBlogTagFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context!.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkGetBlogTagDetails, { details });

  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getBlogTag({ _id: obId, get });
};
