import { CityInp, ICity, PuRelCity, RCity } from "./city.ts";
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
  IUser,
  PuRelUser,
  RUser,
  userSelectable,
  UserSelectInp,
} from "./user.ts";
import {
  Base,
  baseSelectableFields,
  checkRelation,
  decreaseIterate,
  fieldType,
  ObjectID,
} from "./utils/mod.ts";

// This is thype of Land for example in Persian word -- Khane Maskoni ya villaei --
export enum PLANTYPE {
  Resindental = "Resindental",
  Villa = "Villa",
}

// This is position of Land for example in Persian word -- Khane Shomali ya jonobi --
export enum POSITION {
  Northern = "Northern",
  Southern = "Southern",
  Western = "Western",
  Eastern = "Eastern",
}

// This is type of plate for example in Persian word -- Pelak Sabti ya aadi --
export enum PLATETYPE {
  Registered = "Registered", // this for Sabti
  Normal = "Normal", // this for aadi
}

/**
 * @interface
 * PURE city: This is an interface for primitives types of city */
export interface PuPlan extends Base {
  planType: PLANTYPE;
  units: number;
  floors: number;
  sleeps: number;
  exposure: POSITION;
  infrastructureArea: [number, number];
  lenght: [number, number];
  width: [number, number];
  passageWidth: number;
  plateType: PLATETYPE;
  /**
   * save set of polygon of point of this plan
   */
  // geometries: {
  //   type: "Polygon";
  //   coordinates: [number, number][];
  // };
}

export interface RelPlan {
  state?: ObjectID | IState;
  country?: ObjectID | ICountry;
  city?: ObjectID | ICity;
  creator?: ObjectID | IUser;
}

export interface PuRelPlan extends PuPlan, RelPlan {}

/**
 * @interface
 * Embedded city: This is an interface for embedded fields in city collection */

export interface EmPlan {
  city: PuRelCity;
  state: PuRelState;
  country: PuRelCountry;
  creator: PuRelUser;
}

/**
 * @interface
 * inRelation city: This is an interface for the relations of blogTag that are kept in collection the number of these inRel doc are less than 1000 */
export interface InPlan {
  city: ICity;
  state: IState;
  country: ICountry;
  creator: IUser;
}

/**
 * @interface
 * OutRelation city: This is an interface for those relations of city that are not kept inside city collection */
export interface OutPlan {}

/** @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface IPlan extends EmPlan, PuPlan {}

export interface RPlan {
  _id?: 0 | 1;
  planType?: 0 | 1;
  units?: 0 | 1;
  floors?: 0 | 1;
  sleeps?: 0 | 1;
  exposure?: 0 | 1;
  infrastructureArea?: 0 | 1;
  lenght?: 0 | 1;
  width?: 0 | 1;
  passageWidth?: 0 | 1;
  plateType?: 0 | 1;
  state?: RState;
  country?: RCountry;
  city?: RCity;
  creator?: RUser;
}

export type PlanInp = {
  state: number | StateInp;
  country: number | CountryInp;
  city: number | CityInp;
  creator: number | UserSelectInp;
};

export const planSelectable: any = (depth: number | PlanInp = 2): any => {
  const returnObj = {
    ...baseSelectableFields(),
    _id: fieldType,
    planType: fieldType,
    units: fieldType,
    floors: fieldType,
    sleeps: fieldType,
    exposure: fieldType,
    infrastructureArea: fieldType,
    lenght: fieldType,
    width: fieldType,
    passageWidth: fieldType,
    plateType: fieldType,
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

        creator: {
          type: "object",
          optional: true,
          props: userSelectable(depth),
        },
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<PlanInp>(depth);

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

    checkRelation(depth, "creator") &&
      (pureObj = {
        ...pureObj,
        creator: {
          type: "object",
          optional: true,
          props: userSelectable(depth.creator),
        },
      });
    return pureObj;
  };

  const completeObj = typeof depth === "number"
    ? numberDepth(depth, returnObj)
    : objectDepth(depth, returnObj);

  return completeObj;
};

export const plan = db.collection<IPlan>("Plan");

