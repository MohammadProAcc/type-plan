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
          _id: { type: "objectID", ObjectID },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: {
          msg: { type: "string" },
        },
      },
    },
  },
};

export const checkDeleteDetails = v.compile(schema);
export interface GetDeleteDetails {
  set: {
    _id: ObjectID;
  };
  get: { msg: 0 | 1 };
}
