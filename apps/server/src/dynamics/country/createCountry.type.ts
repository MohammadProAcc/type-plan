import FastestValidator from "https://esm.sh/fastest-validator@1";
import { countrySelectable, RCountry } from "../../schemas/mode.ts";
const v = new FastestValidator();

/**
 * this is validator for create country
 * this validate the input object,
 * has a tow part {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          /**
           * The name of the country in native language (Ex: ایران)
           * min length is 2 , max length is 255
           */
          name: { type: "string", min: 2, max: 255 },
          /**
           * The name of the country in English (Ex: iran)
           * min length is 2 , max length is 255
           */
          enName: { type: "string", min: 2, max: 255 },
          countryCode: { type: "array", items: { type: "string" } },
          /**
           * Polynomial of point country
           */
          geometries: {
            type: "array",
            item: "[number,number]",
            optional: true,
          },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: countrySelectable(2),
      },
    },
  },
};

export const checkCreateCountry = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of country
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface ICreateCountryDetails {
  set: {
    name: string;
    enName: string;
    countryCode: string[];
    geometries: [number, number][];
  };
  get: RCountry;
}
