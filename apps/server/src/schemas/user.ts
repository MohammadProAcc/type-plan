import db from "./db.ts";
import {
  citySelectable,
  countrySelectable,
  ICity,
  ICountry,
  IState,
  PuRelCity,
  PuRelCountry,
  PuRelState,
  PuFile,
  RCity,
  RCountry,
  RState,
  stateSelectable,
} from "./mode.ts";
import {
  Base,
  checkRelation,
  decreaseIterate,
  fieldType,
  Iterate,
  ObjectID,
  RType,
} from "./utils/mod.ts";

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum Level {
  /** The most powerful user role because it gives you access to everything.
   *  As the website owner, this should be your role
   * in addition this role is shop manager
   */
  Admin = "Admin",

  /** Assigned to new customers when they create an account on your website.
   *  This role is basically is:a normal blog subscriber,
   *  and: a customers that can edit their own account information and view past or current order */
  Normal = "Normal",

  /** This user is typically responsible for managing content.
   *  Editors can add, edit, publish, and delete any posts and media,
   *  including those written by other users. Editors can also moderate, edit, and delete comments,
   *  and add and edit categories and tags
   */
  Editor = "Editor",

  /** Typically responsible for tasks related to writing content.
   *  They can create, edit, and publish their own posts.
   * They can also delete their own posts (even when they’re already published),
   *  but cannot edit or delete posts written by other user */
  Author = "Author",

  // TODO: currently I don' know what is it going to do
  /**a ghost user*/
  Ghost = "Ghost",
}

export interface UserAddress {
  /**the id is a uuid special for each address */
  addressId: string;
  country: PuRelCountry;
  state: PuRelState;
  city: PuRelCity;
  addressTxt: string;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
}

/**
 *  @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface PuUser extends Base {
  name: string;
  lastName: string;
  phone: number;
  gender: Gender;
  birthDate?: Date;
  postalCode: string;
  level: Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  profilePicture: PuFile;
}

/**
 *  @interface
 * This is an interface for relations of the user
 */
export interface RelUser {
  country?: ObjectID | ICountry;
  state?: ObjectID | IState;
  city?: ObjectID | ICity;
}

export interface PuRelUser extends PuUser, RelUser {}

/**
 * @interface
 * Embedded BlogPost: This is an interface for embedded fields in blogPost collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface EmUser {
  addresses?: UserAddress[];
}

/**
 * @interface
 * inRelation BlogPost: This is an interface for the relations of blogPost that are kept in collection */
export interface InUser {
  country: ICountry;
  state: IState;
  city: ICity;
}

/**
 * @interface
 * OutRelation BlogPost: This is an interface for those relations of blogPost that are not kept inside blogPost collection */
export interface OutUser {
}

export interface IUser extends PuUser, EmUser {}

export interface RUser {
  _id: RType;
  name?: RType;
  lastName?: RType;
  phone?: RType;
  gender?: RType;
  birthDate?: RType;
  postalCode?: RType;
  addresses?: {
    country?: RCountry;
    state?: RState;
    city?: RCity;
    addressTxt?: RType;
  };
  level?: RType;
  email?: RType;
  creditCardNumber?: RType;
  isActive?: RType;
}

export type UserSelectInp = {
  country: number | Iterate;
  state: number | Iterate;
  city: number | Iterate;
};

export const userSelectable = (depth: number | UserSelectInp = 3) => {
  const returnObj = {
    _id: fieldType,
    name: fieldType,
    lastName: fieldType,
    phone: fieldType,
    gender: fieldType,
    birthDate: fieldType,
    postalCode: fieldType,
    level: fieldType,
    email: fieldType,
    isActive: fieldType,
    creditCardNumber: fieldType,
  };

  const numberDepth = (depth: number, pureObj: Record<string, any>) => {
    depth--;
    depth > -1 &&
      (pureObj = {
        ...pureObj,
        addresses: {
          optional: true,
          type: "object",
          props: {
            ...pureObj.addresses,
            country: {
              type: "object",
              optional: true,
              props: countrySelectable(depth),
            },
            state: {
              type: "object",
              optional: true,
              props: stateSelectable(depth),
            },
            city: {
              type: "object",
              optional: true,
              props: citySelectable(depth),
            },
            addressTxt: fieldType,
            addressId: fieldType,
          },
        },
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<UserSelectInp>(depth);

    checkRelation(depth, "country") &&
      (pureObj = {
        ...pureObj,
        addresses: {
          type: "object",
          ...pureObj.addresses,
          props: {
            ...pureObj.addresses.props,
            country: {
              type: "object",
              optional: true,
              props: countrySelectable(depth.country),
            },
            state: {
              type: "object",
              optional: true,
              props: stateSelectable(depth.state),
            },
            city: {
              type: "object",
              optional: true,
              props: citySelectable(depth.city),
            },
            addressTxt: fieldType,
          },
        },
      });

    checkRelation(depth, "state") &&
      (pureObj = {
        ...pureObj,
        address: {
          ...pureObj.address,
          props: {
            ...pureObj.address.props,
            state: {
              type: "object",
              optional: true,
              props: stateSelectable(depth.state),
            },
          },
        },
      });
    checkRelation(depth, "city") &&
      (pureObj = {
        ...pureObj,
        address: {
          ...pureObj.address,
          props: {
            ...pureObj.address.props,
            city: {
              type: "object",
              optional: true,
              props: stateSelectable(depth.city),
            },
          },
        },
      });

    return pureObj;
  };

  const completeObj = typeof depth === "number"
    ? numberDepth(depth, returnObj)
    : objectDepth(depth, returnObj);

  return completeObj;
};

export const user = db.collection<IUser>("User");
export const users = db.collection<IUser>("Users");
