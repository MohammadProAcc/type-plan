import FastestValidator from "https://esm.sh/fastest-validator@1";
import { PuState, RState, stateSelectable } from "../../schemas/mode.ts";
import {
  basePaginationValidationObject,
  PaginationType,
  SortType,
} from "../../utils/mod.ts";

const v = new FastestValidator();

/**
 * this is validator for get IState
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
          ...basePaginationValidationObject<PuState>("name", "enName"),
          _id: { type: "string", min: 24, max: 24, optional: true },
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
          countryId: { type: "string", min: 24, max: 24, optional: true },
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

export const checkGetState = v.compile(schema);

/**
 * @interface
 * Represent Input details
 * this is input of state
 * object "get" for specify user what wants to return
 * object "set" for input value
 */
export interface IGetStateDetails {
  set: {
    _id?: string;
    name?: string;
    enName?: string;
    countryId?: string;
    sort?: SortType<PuState>;
    pagination: PaginationType;
  };
  get: RState;
}
