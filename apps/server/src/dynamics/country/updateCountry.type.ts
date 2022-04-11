import FastestValidator from "https://esm.sh/fastest-validator@1";
import { countrySelectable, RCountry } from "../../schemas/mode.ts";
const v = new FastestValidator();

/**
 * this is validator for update country
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
           * id of country
           */
          _id: { type: "string", min: 24, max: 24, optional: true },
          /**
           * The name of the country in native language (Ex: ایران)
           * min length is 2 , max length is 255
           */
          name: { type: "string", min: 2, max: 255, optional: true },
          /**
           * The name of the country in English (Ex: iran)
           * min length is 2 , max length is 255
           */
          enName: { type: "string", min: 2, max: 255, optional: true },

          /**the country code */
          countryCode: { type: "array", item: "string", optional: true },
          /**
           * Polynomial of point country
           * The following  specifies a GeoJSON Polygon with an exterior ring and no interior rings (or holes). The first and last coordinates must match in order to close the polygon: [ [ [ 0 , 0 ] , [ 3 , 6 ] , [ 6 , 1 ] , [ 0 , 0  ] ] ]
}
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
export const checkUpdateCountry = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of country
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface IUpdateCountryDetails {
  set: {
    _id: string;
    name?: string;
    enName?: string;
    countryCode?: string[];
    geometries?: [number, number][];
  };
  get: RCountry;
}
