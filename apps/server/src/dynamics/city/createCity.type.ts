import FastestValidator from "https://esm.sh/fastest-validator@1";
import { citySelectable, RCity } from "../../schemas/mode.ts";
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
          /**
           * The name of the city in native language (Ex: تهران)
           * min length is 2 , max length is 255
           */
          name: { type: "string", min: 2, max: 255 },
          /**
           * The name of the city in English (Ex: Tehran)
           * min length is 2 , max length is 255
           */
          enName: { type: "string", min: 2, max: 255 },
          /**
           * The state id of this city.
           */
          stateId: { type: "string" },

          /**
           * Polynomial of point IStates
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
        props: citySelectable(2),
      },
    },
  },
};

export const checkCreateCity = v.compile(schema);

/**
 * @interface
 * Represent Input details
 * this is input of city
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface ICreateCityDetails {
  set: {
    name: string;
    enName: string;
    stateId: string;
    geometries: [number, number][];
  };
  get: RCity;
}
