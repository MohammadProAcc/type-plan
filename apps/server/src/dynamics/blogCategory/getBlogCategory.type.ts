import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  blogCategorySelectable,
  RBlogCategory,
} from "../../schemas/blogCategory.ts";

const v = new FastestValidator();

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          _id: { type: "string" },
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

export const checkGetBLogCategoryDetails = v.compile(schema);

/**
 * Represent Input details
 * this is input of deleting BlogTag
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface getBlogCategoryDetails {
  set: {
    _id: string;
  };
  get: RBlogCategory;
}
