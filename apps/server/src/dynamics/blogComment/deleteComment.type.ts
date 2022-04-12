import FastestValidator from "https://esm.sh/fastest-validator@1";
import { commentSelectable, RComment } from "../../schemas/comment.ts";

/**
 * this is validator for Delete BlogComment
 * this validate the input object,
 * has a tow part {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value involves (_id )
 */

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
        props: commentSelectable(1),
      },
    },
  },
};
export const checkDeleteComment = v.compile(schema);
/**
 * Represent Input details
 * this is input of deleting BlogPost
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface DeleteCommentDetails {
  set: {
    _id: string;
  };
  get: RComment;
}
