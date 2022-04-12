import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  blogCategorySelectable,
  RBlogCategory,
} from "../../schemas/blogCategory.ts";
import { PuFile } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";
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
           * The Id of the blogTag that is going to be updated
           * min length is 2 , max length i1s 255
           */
          _id: { type: "string", min: 2, max: 255, optional: true },
          /**
           * name of blogTag
           * min length is 2 , max length i1s 255
           */
          name: { type: "string", min: 2, max: 255, optional: true },
          /**
           * name of blogTag
           * min length is 2 , max length i1s 255
           */
          enName: { type: "string", min: 2, max: 255, optional: true },
          /**
           * name of blogTag
           * min length is 2 , max length i1s 255
           */
          icon: {
            type: "object",
            props: {
              _id: { type: "objectID", ObjectID },
              filename: { type: "string" },
              type: { type: "string" },
              size: { type: "number" },
            },
            // ...getFileValidationObject(["image/jpeg"], 10 * 1024),
            optional: true,
          },

          /**
           * name of blogTag
           * min length is 2 , max length i1s 255
           */
          description: { type: "string", min: 2, max: 255, optional: true },
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
export const checkUpdateBlogCategory = v.compile(schema);
/**
 * Represent Input details
 * this is input of updating BlogTag
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface UpdateBlogCategoryDetails {
  set: {
    //this is the _id of the blogCategory that we want to update
    _id: string;
    //these fields are the fields that can be modified on blogCategory
    name?: string;
    enName?: string;
    icon?: PuFile;
    description?: string;
  };
  get: RBlogCategory;
}
