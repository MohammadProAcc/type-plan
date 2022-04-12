import {
  basePaginationValidationObject,
  PaginationType,
  SortType,
} from "./../../utils/mod.ts";
import {
  contactUsSelectable,
  PuContactUs,
  RContactUs,
} from "../../schemas/mode.ts";
import FastestValidator from "https://esm.sh/fastest-validator@1";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuContactUs>(
            "createdAt",
            "updateAt",
            "message",
            "name",
            "email",
          ),

          name: { type: "string", optional: true },
          email: { type: "string", optional: true },
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
export const checkContactUssDetails = v.compile(schema);

export interface getContactUssDetails {
  set: {
    name?: string;
    email?: string;
    sort?: SortType<PuContactUs>;
    pagination: PaginationType;
  };
  get: RContactUs;
}
