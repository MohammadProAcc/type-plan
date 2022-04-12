import { IBlogTag } from "../../schemas/mode.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { Context } from "../utils/context.ts";
import { getBlogTags } from "./funcs/getBlogTags.ts";
import {
  checkBlogTagsDetails,
  getBlogTagsDetails,
} from "./getBlogTags.type.ts";

type GetBlogTagsFn = (
  details: getBlogTagsDetails,
  context: Context,
) => Promise<Partial<IBlogTag>[]>;

/**
 * @function
 * Represent get blog tags(tags with desired names)
 * @param details
 * @param context
 */
export const getBlogTagsFn: GetBlogTagsFn = async (details, context) => {
  // !context ? emptyTokenError() : null;

  /**check user is authenticated */
  // const user = await isAuthFn(context!.token!);

  /** check whether the details(input) is right or not*/
  checkValidation(checkBlogTagsDetails, { details });

  const {
    set: { name, sort, pagination },
    get,
  } = details;

  /**the default sort is createdAt descending */
  const defaultSort: getBlogTagsDetails["set"]["sort"] = sort
    ? sort
    : { createdAt: -1 };

  let filter: Bson.Document = {};

  if (name) filter.name = { $regex: name };

  return getBlogTags({
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
