import FastestValidator from "https://esm.sh/fastest-validator@1";
const v = new FastestValidator();

/**
 * this is validator for delete state
 * this validate the input object,
 * has a tow part {set}
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
           * Id Of IState
           */
          _id: { type: "string", min: 24, max: 24 },
        },
      },
    },
  },
};

export const checkDeleteIState = v.compile(schema);

/**
 * @interface
 * Represent Input details
 * this is input of state
 * object "set" for input value
 */
export interface IDeleteIStateDetails {
  set: {
    _id: string;
  };
}
