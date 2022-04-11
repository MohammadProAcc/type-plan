import { CommentStatus, RComment } from "./../../schemas/comment.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";
import { blogCategorySelectable } from "../../schemas/blogCategory.ts";
const v = new FastestValidator();

/**
 * this is validator for update blogCategory
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
           * The Id of the commentStatus that is going to be updated
           * min length is 2 , max length i1s 255
           */
          _id: { type: "string", min: 2, max: 255, optional: true },
          /**
           * blogComment Status
           * is an enum with three values("accept,"pending","reject")
           */
          commentStatus: {
            type: "enum",
            values: ["ACCEPT", "PENDING", "REJECT"],
          },
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
export const checkUpdateComment = v.compile(schema);
/**
 * Represent Input details
 * this is input of updating BlogComment
 * object "get" for specify user what wants to return
 * object "set" for input value involve(commentStatus)
 * @interface
 */
export interface UpdateCommentDetails {
  set: {
    //this is the _id of the blogComment that we want to update
    _id: string;
    //this field is the field that can be modified on blogComment
    commentStatus: CommentStatus;
  };
  get: RComment;
}
