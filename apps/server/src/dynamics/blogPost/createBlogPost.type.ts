import FastestValidator from "https://esm.sh/fastest-validator@1";
import { blogPostSelectable, PuFile, RBlogPost } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";

/**
 * this is a validator for create blogPost, using fastest validator
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
        strict: true,
        props: {
          /**
           * The title of the blogPost
           * min length is 2 , max length is 255
           */
          title: { type: "string", min: 2, max: 255 },

          /**
           * The summary of the blogPost
           * min length is 2 , max length is 255
           */
          summary: { type: "string", min: 2, max: 255 },

          /**
           * The content of the blogPost
           * min length is 2 , max length is 255
           */
          content: { type: "string", min: 2 },

          /**
           * The photoURL of the blogPost
           * min length is 2 , max length is 255
           */

          photo: {
            type: "object",
            props: {
              _id: { type: "objectID", ObjectID },
              filename: { type: "string" },
              type: { type: "string" },
              size: { type: "number" },
            },

            optional: true,
          },

          /**
           * The blogCategoryIDs of the blogPost
           * an array of IDs
           * (the items of the array are :the id of the blog categories)
           */

          blogCategoryID: { type: "string" },
          /**
           * The blogTagsIDS of the blogPost
           * an array of IDs(the items of the array are :the id of the blog Tags)
           */
          blogTagIDs: { type: "array", items: "string", optional: "true" },
        },
      },
      get: {
        type: "object",
        strict: true,
        optional: true,
        props: blogPostSelectable(2),
      },
    },
  },
};
export const checkCreateBlogPost = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of creating blogPost
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface createBlogPostDetails {
  set: {
    title: string;
    summary: string;
    content: string;
    photo: PuFile;
    blogCategoryID: string;
    blogTagIDs?: string[];
  };
  get: RBlogPost;
}
