import FastestValidator from "https://esm.sh/fastest-validator@1";
import { fileSelectable, RFile } from "../../schemas/mode.ts";
const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          _id: {
            type: "string",
          },
          fileType: {
            type: "string",
          },
        },
      },
      get: { type: "object", props: fileSelectable(2), optional: true },
    },
  },
};

export const checkDownloadFileDetails = v.compile(schema);

/**
 * Represent Input details
 * this is input of deleting BlogTag
 * object "get" for specify user what wants to return
 * object "set" for input value involve(name)
 * @interface
 */
export interface downloadFileDetails {
  set: {
    _id: string;
    fileType: string;
  };
  get: RFile;
}
