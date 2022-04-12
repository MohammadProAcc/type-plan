import FastestValidator from "https://esm.sh/fastest-validator@1";
import { contactUsSelectable, RContactUs } from "../../schemas/mode.ts";
const v = new FastestValidator();

/**
 * this is a validator for create city
 * it validates the input object,
 * has two parts: {set,get}
 * the "get" object is used to specify what the user wants to return
 * the "set" object is used to validate the input value
 */

export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          name: { type: "string" },
          email: { type: "email" },
          uploadedFiles: { type: "array", items: "string" },
          message: { type: "string" },
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

export const checkCreateContactUs = v.compile(schema);

/**
 * @interface
 * Represent Input details
 * this is input of city
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface ICreateContactUsDetails {
  set: {
    name: string;
    email: string;
    uploadedFiles: string[];
    message: string;
  };
  get: RContactUs;
}
