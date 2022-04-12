import FastestValidator from "https://esm.sh/fastest-validator@1";
import { citySelectable, RCity } from "../../schemas/mode.ts";
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
        props: citySelectable(1),
      },
    },
  },
};
export const checkGetCityDetails = v.compile(schema);
export interface getCityDetails {
  set: {
    _id: ObjectID;
  };
  get: RCity;
}
