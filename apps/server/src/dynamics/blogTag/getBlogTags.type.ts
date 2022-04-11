import {
  basePaginationValidationObject,
  PaginationType,
  SortType,
} from "./../../utils/mod.ts";
import {
  blogTagSelectable,
  PuBlogTag,
  RBlogTag,
} from "../../schemas/blogTag.ts";
import { IBlogPost } from "../../schemas/mode.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuBlogTag>(
            "createdAt",
            "updateAt",
            "name",
          ),

          name: { type: "string", optional: true },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: blogTagSelectable({
          blogPosts: {
            author: 2,
            comments: 1,
            likedUsers: 1,
            blogTags: 0,
            blogCategory: 1,
          },
        }),
      },
    },
  },
};
export const checkBlogTagsDetails = v.compile(schema);

export interface getBlogTagsDetails {
  set: {
    name?: string;
    blogPost: IBlogPost;
    sort?: SortType<PuBlogTag>;
    pagination: PaginationType;
  };
  get: RBlogTag;
}
