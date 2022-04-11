import FastestValidator from "https://esm.sh/fastest-validator@1";
import { commentSelectable, RComment } from "../../schemas/mode.ts";
import { ObjectId, ObjectID } from "../../utils/deps.ts";
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
        props: commentSelectable(1),
      },
    },
  },
};
export const checkGetCommentDetails = v.compile(schema);
export interface getCommentDetails {
  set: {
    _id: ObjectId;
  };
  get: RComment;
}
