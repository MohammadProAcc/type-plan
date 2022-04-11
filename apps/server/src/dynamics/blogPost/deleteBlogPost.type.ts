import { blogPostSelectable, RBlogPost } from "../../schemas/mode.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";
import { ObjectID } from "../../utils/deps.ts";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          /**
           * The Id of the blogPost that is going to be deleted
           * min length is 2 , max length is 255
           */
          _id: { type: "objectID", ObjectID },
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
export const checkDeleteBlogPost = v.compile(schema);
/**
 * Represent Input details
 * this is input of deleting BlogPost
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface DeleteBlogPostDetails {
  set: {
    _id: string;
  };
  get: RBlogPost;
}
