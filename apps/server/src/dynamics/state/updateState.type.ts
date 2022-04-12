import FastestValidator from "https://esm.sh/fastest-validator@1";
import { RState, stateSelectable } from "../../schemas/mode.ts";
const v = new FastestValidator();

/**
 * this is validator for update IState
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
           * id of state
           */
          _id: { type: "string", min: 24, max: 24 },
          /**
           * The name of the state in native language (Ex: تهران)
           * min length is 2 , max length is 255
           */
          name: { type: "string", min: 2, max: 255, optional: true },
          /**
           * The name of the state in English (Ex: Tehran)
           * min length is 2 , max length is 255
           */
          enName: { type: "string", min: 2, max: 255, optional: true },

          /**
           * Id of Country
           */
          countryId: { type: "string", optional: true, min: 24, max: 24 },

          /**
           * polynomial of point IStates
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
        props: stateSelectable(2),
      },
    },
  },
};

export const checkUpdateState = v.compile(schema);

/**
 * @interface
 * Represent Input details
 * this is input of state
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface IUpdateStateDetails {
  set: {
    _id: string;
    name?: string;
    enName?: string;
    countryId?: string;
    geometries?: [number, number][];
  };
  get: RState;
}
