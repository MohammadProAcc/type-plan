import {
  blogPosts,
  IBlogPost,
  PuBlogPost,
  RBlogPost,
} from "../../../schemas/mode.ts";
import { PaginationInput } from "../../../utils/mod.ts";
import { Bson } from "../../../utils/deps.ts";
import { makePagination } from "../../../utils/mod.ts";
import { makeProjections } from "../../../utils/mod.ts";

type GetBlogPostsInput = {
  filter: Bson.Document;
  getObj: RBlogPost;
} & PaginationInput<PuBlogPost>;

type GetBlogPosts = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetBlogPostsInput) => Promise<Partial<IBlogPost>[]>;

export const getBlogPosts: GetBlogPosts = async ({
  filter,
  getObj,
  sort,
  pagination,
}) => {
  const projection = makeProjections(getObj, [], []);

  const returnDocuments = await makePagination<PuBlogPost>({
    collection: blogPosts,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });

  return returnDocuments;
};
