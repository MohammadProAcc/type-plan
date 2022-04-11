import { PuBlogCategory } from "../../schemas/mode.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  IBlogPost,
  blogCategorySelectable,
  RBlogCategory,
} from "../../schemas/mode.ts";
import {
  basePaginationValidationObject,
  PaginationType,
  SortType,
} from "../../utils/mod.ts";
const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuBlogCategory>(
            "createdAt",
            "updateAt",
            "name",
          ),
          name: { type: "string", optional: true },
          enName: { type: "string", optional: true },
          description: { type: "string", optional: true },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: blogCategorySelectable(2),
      },
    },
  },
};

export const checkGetBlogCategoriesDetail = v.compile(schema);

/**
 * Represent Input details
 * this is input of deleting BlogTag
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface getBlogCategoriesDetails {
  set: {
    name?: string;
    enName?: string;
    description?: string;
    blogPosts: IBlogPost;
    sort?: SortType<PuBlogCategory>;
    pagination: PaginationType;
  };
  get: RBlogCategory;
}
