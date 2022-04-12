import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  blogPostSelectable,
  PuBlogPost,
  RBlogPost,
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
          ...basePaginationValidationObject<PuBlogPost>(
            "createdAt",
            "updateAt",
            "title",
            "content",
          ),

          title: { type: "string", optional: true },
          content: { type: "string", optional: true },
          blogCategory: { type: "string", optional: true },
          blogTags: { type: "array", items: "string", optional: true },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: blogPostSelectable(2),
      },
    },
  },
};
export const checkBlogPostsDetails = v.compile(schema);
export interface getBlogPostsDetails {
  set: {
    title?: string;
    content?: string;
    blogCategory?: string;
    blogTags?: string[];
    sort?: SortType<PuBlogPost>;
    pagination: PaginationType;
  };
  get: RBlogPost;
}
