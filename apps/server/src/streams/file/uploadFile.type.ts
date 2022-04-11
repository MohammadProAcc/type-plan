import FastestValidator from "https://esm.sh/fastest-validator@1";
import { FileType } from "../utils/uploadFunction.ts";

const v = new FastestValidator();

const getFileValidationObject = (
  allowedType?: string[],
  maxSize: number = 1024,
) => ({
  type: "object",
  props: {
    filename: { type: "string" },
    type: allowedType
      ? { type: "enum", values: allowedType }
      : { type: "string" },
    content: {
      type: "any",
    },
    size: { type: "number", max: maxSize * 1024 },
  },
});
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          file: {
            ...getFileValidationObject(["image/jpeg"], 10 * 1024),
            optional: true,
          },
        },
      },
    },
  },
};

export const checkUploadFileDetails = v.compile(schema);

/**
 * Represent Input details
 * this is input of deleting BlogTag
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface uploadFileDetails {
  set: {
    file: FileType;
  };
}
