import { ObjectID } from "../../utils/deps.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";
import { contactUsSelectable, RContactUs } from "../../schemas/mode.ts";

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
        props: contactUsSelectable(2),
      },
    },
  },
};
export const checkGetContactUsDetails = v.compile(schema);
export interface getContactUsDetails {
  set: {
    _id: ObjectID;
  };
  get: RContactUs;
}
