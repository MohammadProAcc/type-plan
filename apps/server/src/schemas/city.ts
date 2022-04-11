import db from "./db.ts";
import {
  CountryInp,
  countrySelectable,
  ICountry,
  IState,
  PuRelCountry,
  PuRelState,
  RCountry,
  RState,
  StateInp,
  stateSelectable,
} from "./mode.ts";
import {
  Base,
  baseSelectableFields,
  checkRelation,
  decreaseIterate,
  fieldType,
  ObjectID,
} from "./utils/mod.ts";

/**
 * @interface
 * PURE city: This is an interface for primitives types of city */
export interface PuCity extends Base {
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
}

export interface RelCity {
  state?: ObjectID | IState;
  country?: ObjectID | ICountry;
}

export interface PuRelCity extends PuCity, RelCity {}

/**
 * @interface
 * Embedded city: This is an interface for embedded fields in city collection */

export interface EmCity {
  state: PuRelState;
  country: PuRelCountry;
}

/**
 * @interface
 * inRelation city: This is an interface for the relations of blogTag that are kept in collection the number of these inRel doc are less than 1000 */
export interface InCity {
  state: IState;
  country: ICountry;
}

/**
 * @interface
 * OutRelation city: This is an interface for those relations of city that are not kept inside city collection */
export interface OutCity {}

/** @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface ICity extends EmCity, PuCity, Base {}

export interface RCity {
  _id?: 0 | 1;
  name?: 0 | 1;
  enName?: 0 | 1;
  state?: RState;
  country?: RCountry;
}
export type CityInp = {
  state: number | StateInp;
  country: number | CountryInp;
};

export const citySelectable: any = (depth: number | CityInp = 2): any => {
  const returnObj = {
    ...baseSelectableFields(),
    _id: fieldType,
    name: fieldType,
    enName: fieldType,
  };
  const numberDepth = (depth: number, pureObj: Record<string, any>) => {
    depth--;
    depth > -1 &&
      (pureObj = {
        ...pureObj,
        state: {
          type: "object",
          optional: true,
          props: stateSelectable(depth),
        },

        country: {
          type: "object",
          optional: true,
          props: countrySelectable(depth),
        },
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<CityInp>(depth);

    checkRelation(depth, "state") &&
      (pureObj = {
        ...pureObj,
        state: {
          type: "object",
          optional: true,
          props: stateSelectable(depth.state),
        },
      });

    checkRelation(depth, "country") &&
      (pureObj = {
        ...pureObj,
        country: {
          type: "object",
          optional: true,
          props: countrySelectable(depth.country),
        },
      });
    return pureObj;
  };

  const completeObj = typeof depth === "number"
    ? numberDepth(depth, returnObj)
    : objectDepth(depth, returnObj);

  return completeObj;
};

export const city = db.collection<ICity>("city");
export const cities = db.collection<ICity>("Cities");``

