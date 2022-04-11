import FastestValidator from "https://esm.sh/fastest-validator@1";
const v = new FastestValidator();

/**
 * this is validator for delete country
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
           * Id Of Country
           */
          _id: { type: "string", min: 2, max: 255 },
        },
      },
    },
  },
};

export const checkDeleteCountry = v.compile(schema);
/**
 * @interface
 * Represent Input details
 * this is input of country
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface IDeleteCountryDetails {
  set: {
    _id: string;
  };
}
