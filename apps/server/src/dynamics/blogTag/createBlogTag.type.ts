import { blogTagSelectable, RBlogTag } from "../../schemas/mode.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";

/**
 * this is a validator for create blogTag, using fastest validator
 * the result is a boolean
 * this validate the input Object,
 * has two parts {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          /**
           * The name of the blogTag
           * min length is 2 , max length is 255
           */
          name: { type: "string", min: 2, max: 255 },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: blogTagSelectable({
          blogPosts: 0,
        }),
      },
    },
  },
};
export const checkCreateBlogTag = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of creating blogTag
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface createTagDetails {
  set: { name: string };
  get: RBlogTag;
}
