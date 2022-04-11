import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { IBlogCategory, RBlogCategory } from "./../../schemas/blogCategory.ts";
import { getBlogCategory } from "./funcs/getBlogCategory.ts";
import {
  checkGetBLogCategoryDetails,
  getBlogCategoryDetails,
} from "./getBlogCategory.type.ts";

type GetBlogCategoryFn = (
  details: getBlogCategoryDetails,
) => Promise<Partial<IBlogCategory>>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getBlogCategoryFn: GetBlogCategoryFn = async details => {
  checkValidation(checkGetBLogCategoryDetails, { details });
  const {
    set: { _id },
    get,
  } = details;

  const obId = new Bson.ObjectId(_id);

  return getBlogCategory({ _id: obId, get });
};
