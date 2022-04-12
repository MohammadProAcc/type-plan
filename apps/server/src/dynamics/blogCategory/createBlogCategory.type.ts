import { FileType } from "./../../streams/utils/uploadFunction.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  blogCategorySelectable,
  RBlogCategory,
} from "../../schemas/blogCategory.ts";
import { ObjectID } from "../../utils/deps.ts";
import { PuFile } from "../../schemas/mode.ts"
;

/**
 * this is a validator for create blogCategory, using fastest validator
 * the result is a boolean
 * this validate the input Object,
 * has two parts {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */
// const getFileValidationObject = (
//   allowedType?: string[],
//   maxSize: number = 1024,
// ) => ({
//   type: "object",
//   props: {
//     filename: { type: "string" },
//     type: allowedType
//       ? { type: "enum", values: allowedType }
//       : { type: "string" },
//     content: {
//       type: "any",
//     },
//     size: { type: "number", max: maxSize * 1024 },
//   },
// });


const v = new FastestValidator();




export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        strict: true,
        props: {
          name: { type: "string" },
          enName: { type: "string" },
          icon: {
            type: "object",
            props: {
              _id: { type: "objectID", ObjectID },
              filename: { type: "string" },
              type: { type: "string" },
              size: { type: "number" },
              // },
            },
            // ...getFileValidationObject(["image/jpeg"], 10 * 1024),
            optional: true,
          },
          description: { type: "string" },
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
export const checkCreateBlogCategory = v.compile(schema);



export interface createBlogCategoryDetails {
  set: {
    name: string;
    enName: string;
    /*icon: FileType*/
    icon: PuFile;
    description: string;
  };
  get: RBlogCategory;
}
