import db from "./db.ts";
import {
  citySelectable,
  CountryInp,
  countrySelectable,
  ICity,
  ICountry,
  PuRelCity,
  PuRelCountry,
  RCity,
  RCountry,
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
 * PURE state: This is an interface for primitives types of state */
export interface PuState extends Base {
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

export interface RelState {
  cities?: ObjectID[] | ICity[];

  country?: ObjectID | ICountry;
}

export interface PuRelState extends PuState, RelState {}
/**
 * @interface
 * Embedded state: This is an interface for embedded fields in state collection */
export interface EmState {
  country?: PuRelCountry;
  cities?: PuRelCity[];
}

/**
 * @interface
 * inRelation state: This is an interface for the relations of state that are kept in collection */
export interface InState {
  country: ICountry;
  cities: ICity[];
}

/**
 * @interface
 * OutRelation state: This is an interface for those relations of blogTag that are not kept inside blogTag collection */
export interface OutState {
  // there is no outRelation
}

/** @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface IState extends PuState, EmState {}

export interface RState {
  _id?: 0 | 1;
  name?: 0 | 1;
  enName?: 0 | 1;
  country?: RCountry;
  cities?: RCity;
}

export type StateInp = {
  cities: number | StateInp;
  country: number | CountryInp;
};

export const stateSelectable: any = (depth: number | StateInp = 2): any => {
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
        country: {
          type: "object",
          optional: true,
          props: countrySelectable(depth),
        },

        cities: {
          type: "object",
          optional: true,
          props: citySelectable(depth),
        },
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<StateInp>(depth);

    checkRelation(depth, "cities") &&
      (pureObj = {
        ...pureObj,
        cities: {
          type: "object",
          optional: true,
          props: citySelectable(depth.cities),
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

export const state = db.collection<IState>("State");
export const states = db.collection<IState>("States");