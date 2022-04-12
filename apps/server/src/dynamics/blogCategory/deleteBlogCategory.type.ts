import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  blogCategorySelectable,
  RBlogCategory,
} from "../../schemas/blogCategory.ts";

/**
 * this is validator for Delete BlogCategory
 * this validate the input object,
 * has a tow part {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value involves (_id )
 */

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    strict: "true",
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
        props: blogCategorySelectable(1),
      },
    },
  },
};
export const checkDeleteBlogCategory = v.compile(schema);
/**
 * Represent Input details
 * this is input of deleting BlogCategory
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface DeleteCategoryDetails {
  set: {
    _id: string;
  };
  get: RBlogCategory;
}
