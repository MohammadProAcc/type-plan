import { Bson } from "../../../utils/deps.ts";
import {
  makePagination,
  makeProjections,
  PaginationInput,
} from "../../../utils/mod.ts";
import {
  blogCategories,
  IBlogCategory,
  PuBlogCategory,
  RBlogCategory,
} from "../../../schemas/mode.ts";

type GetBlogCategoriesInput = {
  filter: Bson.Document;
  getObj: RBlogCategory;
} & PaginationInput<PuBlogCategory>;

type GetBlogCategories = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetBlogCategoriesInput) => Promise<Partial<IBlogCategory>[]>;

export const getBlogCategories: GetBlogCategories = async ({
  filter,
  getObj,
  sort,
  pagination,
}) => {
  const projection = makeProjections(getObj, [], []);
  const returnDocuments = await makePagination<PuBlogCategory>({
    collection: blogCategories,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });
  return returnDocuments;
};
