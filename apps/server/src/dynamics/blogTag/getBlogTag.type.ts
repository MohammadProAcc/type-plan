import { blogTagSelectable, RBlogTag } from "../../schemas/blogTag.ts";
import { ObjectID } from "../../utils/deps.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";

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
        props: blogTagSelectable(2),
      },
    },
  },
};
export const checkGetBlogTagDetails = v.compile(schema);
export interface getBlogTagDetails {
  set: {
    _id: ObjectID;
  };
  get: RBlogTag;
}
