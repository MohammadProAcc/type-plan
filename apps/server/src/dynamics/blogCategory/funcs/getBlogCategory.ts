import { makeProjections } from "./../../../utils/mod.ts";
import { RBlogCategory } from "./../../../schemas/blogCategory.ts";
import {
  blogCategories,
  IBlogCategory,
} from "../../../schemas/blogCategory.ts";
import { throwError } from "../../../utils/mod.ts";
import { Bson } from "../../../utils/deps.ts";

type GetBlogCategoryInput = { _id: Bson.ObjectID; get: RBlogCategory };
type GetBlogCategory = ({
  _id,
  get,
}: GetBlogCategoryInput) => Promise<IBlogCategory | object>;

export const getBlogCategory: GetBlogCategory = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);

  const foundedBlogCategory = await blogCategories.findOne(
    { _id },
    { projection },
  );
  const doRelation = async (
    blogCategory: IBlogCategory,
    get: RBlogCategory,
  ) => {
    if (!get) {
      return { _id: blogCategory._id };
    }
    return blogCategory;
  };
  return foundedBlogCategory
    ? await doRelation(foundedBlogCategory, get)
    : throwError("can not find blogCategory");
};
