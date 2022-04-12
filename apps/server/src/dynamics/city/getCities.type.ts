import FastestValidator from "https://esm.sh/fastest-validator@1";
import { ICity, RCity, citySelectable, PuCity } from "../../schemas/mode.ts";
import { ObjectId, ObjectID } from "../../utils/deps.ts";

import {
  basePaginationValidationObject,
  PaginationType,
  SortType,
} from "./../../utils/mod.ts";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuCity>(
            "createdAt",
            "updateAt",
            "name",
          ),

          name: { type: "string", optional: true },
          stateId: { type: "objectID", ObjectID, optional: true },
          countryId: { type: "objectID", ObjectID, optional: true },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: citySelectable(2),
      },
    },
  },
};
export const checkCitiesDetails = v.compile(schema);

export interface getCitiesDetails {
  set: {
    name?: string;
    stateId?: ObjectId;
    countryId?: ObjectId;
    blogPost: ICity;
    sort?: SortType<PuCity>;
    pagination: PaginationType;
  };
  get: RCity;
}
