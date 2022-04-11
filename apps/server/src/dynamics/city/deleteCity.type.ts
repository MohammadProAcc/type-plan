import FastestValidator from "https://esm.sh/fastest-validator@1";
const v = new FastestValidator();

/**
 * this is validator for delete city
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
           * Id Of City
           */
          _id: { type: "string", min: 2, max: 255 },
        },
      },
    },
  },
};

export const checkDeleteCity = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of city
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface IDeleteCityDetails {
  set: {
    _id: string;
  };
}
