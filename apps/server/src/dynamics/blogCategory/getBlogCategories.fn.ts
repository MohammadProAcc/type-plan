import { IBlogCategory } from "../../schemas/mode.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { getBlogCategories } from "./funcs/getBlogCategories.ts";
import {
  checkGetBlogCategoriesDetail,
  getBlogCategoriesDetails,
} from "./getBlogCategories.type.ts";

type GetBlogCategoriesFn = (
  details: getBlogCategoriesDetails,
) => Promise<Partial<IBlogCategory>[]>;

/**
 * @function
 * Represent create BlogPost(insert a new blogPost to DB)
 * @param details
 * @param context
 */
export const getBlogCategoriesFn: GetBlogCategoriesFn = async details => {
  checkValidation(checkGetBlogCategoriesDetail, { details });
  const {
    set: { name, enName, description, sort, pagination },
    get,
  } = details;
  const defaultSort: getBlogCategoriesDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  if (name) filter.name = { $regex: name };
  if (enName) filter.enName = { $regex: enName };
  if (description) filter.description = { $regex: description };

  return getBlogCategories({
    filter,
    getObj: get,
    sort: defaultSort,
    pagination: {
      limit: pagination?.limit,
      page: pagination?.page,
      lastObjectId: pagination?.lastObjectId,
    },
  });
};
