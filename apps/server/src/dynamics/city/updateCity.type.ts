import FastestValidator from "https://esm.sh/fastest-validator@1";
import { RCity, citySelectable } from "../../schemas/mode.ts";
const v = new FastestValidator();

/**
 * this is validator for update city
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
           * id of city
           */
          _id: { type: "string", min: 24, max: 24 },
          /**
           * The name of the city in native language (Ex: تهران)
           * min length is 2 , max length is 255
           */
          name: { type: "string", min: 2, max: 255, optional: true },
          /**
           * The name of the city in English (Ex: Tehran)
           * min length is 2 , max length is 255
           */
          enName: { type: "string", min: 2, max: 255, optional: true },
          /**
           * The state id of this city.
           */
          stateId: { type: "string", min: 24, max: 24, optional: true },

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

export const checkUpdateCity = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of city
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface IUpdateCityDetails {
  set: {
    _id: string;
    name?: string;
    enName?: string;
    stateId?: string;
    geometries?: [number, number][];
  };
  get: RCity;
}
