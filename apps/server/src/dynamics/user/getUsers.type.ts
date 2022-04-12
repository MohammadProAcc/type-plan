import FastestValidator from "https://esm.sh/fastest-validator@1";
import { PuUser, RUser, userSelectable } from "../../schemas/mode.ts";
import {
  basePaginationValidationObject,
  PaginationType,
  SortType,
} from "../../utils/basePagination.ts";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuUser>(
            "createdAt",
            "updateAt",
            "name",
            "lastName",
            "birthDate",
            "email",
            "phone",
          ),
          name: { type: "string", optional: true },
          lastName: { type: "string", optional: true },
          level: {
            type: "enum",
            values: ["Admin", "Normal", "Editor", "Author", "Ghost"],
            optional: true,
          },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(2),
      },
    },
  },
};
export const checkUsersDetails = v.compile(schema);

export interface getUsersDetails {
  set: {
    name?: string;
    lastName?: string;
    level?: string;
    sort?: SortType<PuUser>;
    pagination: PaginationType;
  };
  get: RUser;
}
