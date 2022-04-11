import FastestValidator from "https://esm.sh/fastest-validator@1";
import { userSelectable, RUser } from "../../schemas/mode.ts";
/**
 * this is a validator for create user, using fastest validator
 * the result is a boolean
 * this validate the input Object,
 * has two parts {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        strict: true,
        props: {
          name: { type: "string" },
          lastName: { type: "string" },
          gender: { type: "enum", values: ["MALE", "FEMALE"] },
          birthDate: {
            type: "date",
            default: () => new Date(),
            optional: true,
            convert: true,
          },
          postalCode: { type: "string", optional: true },
          email: { type: "email" },
          creditCardNumber: {
            type: "number",
            optional: true,
            length: 16,
          },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: userSelectable(1),
      },
    },
  },
};
export const checkInsertProfileInfo = v.compile(schema);
export interface InsertProfileInfoDetails {
  set: {
    name: string;
    lastName: string;
    gender: string;
    birthDate: Date;
    postalCode: string;
    email: string;
    creditCardNumber: string;
  };
  get: RUser;
}
