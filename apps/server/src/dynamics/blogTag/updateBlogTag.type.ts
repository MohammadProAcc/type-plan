import { blogTagSelectable, RBlogTag } from "../../schemas/blogTag.ts";
import { ObjectID } from "../../utils/deps.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";

const v = new FastestValidator();

/**
 * this is validator for update blogTag
 * this validate the input object,
 * has a tow part {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value involves (name ,_id)
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
           * The Id of the blogTag that is going to be updated
           * min length is 2 , max length i1s 255
           */
          _id: { type: "objectID", ObjectID, optional: true },
          /**
           * name of blogTag
           * min length is 2 , max length i1s 255
           */
          name: { type: "string", min: 2, max: 255, optional: true },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: blogTagSelectable(2),
      },
    },
  },
};
export const checkUpdateBlogTagDetails = v.compile(schema);

/**
 * Represent Input details
 * this is input of updating BlogTag
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface UpdateBlogTagDetails {
  set: {
    _id: string;
    name?: string;
  };
  get: RBlogTag;
}
