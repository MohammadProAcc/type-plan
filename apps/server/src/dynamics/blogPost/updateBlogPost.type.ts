import FastestValidator from "https://esm.sh/fastest-validator@1";
import { blogPostSelectable, PuFile, RBlogPost } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";
const v = new FastestValidator();

/**
 * this is validator for update blogPost
 * this validate the input object,
 * has a tow part {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value involves (_id,name,enName, icon, description )
 */
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        strict: true,
        props: {
          /**
           * The Id of the blogPost that is going to be updated
           * min length is 2 , max length is 255
           */
          _id: { type: "string", min: 2, max: 255, optional: true },

          /**
           * The title of the blogPost that is going to be updated
           * the field is optional
           * min length is 2 , max length i1s 255
           */
          title: { type: "string", min: 2, max: 255, optional: true },

          /**
           * The summary of the blogPost that is going to be updated
           * the field is optional
           * min length is 2 , max length i1s 255
           */
          summary: { type: "string", min: 2, max: 255, optional: true },

          /**
           * The content of the blogPost that is going to be updated
           * the field is optional
           * min length is 2 , max length i1s 255
           */
          content: { type: "string", min: 2, max: 255, optional: true },

          /**
           * The photo of the blogPost that is going to be updated
           * the field is optional
           * min length is 2 , max length i1s 255
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
           * The array of blogCategoryIDs of the desired blogPost that is going to be updated
           * the field is optional
           */
          blogCategoryID: { type: "string", optional: true },

          /**
           * The array of blogTagIDs of the desired blogPost that is going to be updated
           * the field is optional
           */
          blogTagIDs: { type: "array", items: "string", optional: true },
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
export const checkUpdateBlogPost = v.compile(schema);
/**
 * Represent Input details
 * this is input of updating BlogPost
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface UpdateBlogPostDetails {
  set: {
    //this is the _id of the blogCategory that we want to update
    _id: string;
    //these fields are the fields that can be modified on blogPost
    title?: string;
    summary?: string;
    content?: string;
    photo?: PuFile;
    blogCategoryID?: string;
    blogTagIDs?: string[];
  };
  get: RBlogPost;
}
