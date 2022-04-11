import db from "../db.ts";
import { Base, baseSelectableFields } from "./utils/base.ts";
import { fieldType } from "./utils/fieldType.ts";
import { checkRelation, decreaseIterate } from "./utils/iterate.ts";
import { RType } from "./utils/rType.ts";
export interface PuContactUs extends Base {
  name: string;
  email: string;
  uploadedFiles: string[];
  message: string;
}

export interface EmContactUs {}
/**
 * @interface
 * inRelation contactUs: This is an interface for the relations of country that are kept in collection*/

export interface InContactUs {}

/**
 * @interface
 * OutRelation contactUs: This is an interface for those relations of country that are not kept inside country collection*/
export interface OutContactUs {}

export interface RContactUs {
  _id?: RType;
  name?: RType;
  email?: RType;
  uploadedFiles?: RType;
  message?: RType;
}
export type ContactUsInp = {};

export interface IContactUs extends EmContactUs, PuContactUs, Base {}

export const contactUsSelectable: any = (
  depth: number | ContactUsInp = 2,
): any => {
  const returnObj = {
    ...baseSelectableFields(),
    _id: fieldType,
    name: fieldType,
    email: fieldType,
    uploadedFiles: fieldType,
    message: fieldType,
  };
  const numberDepth = (depth: number, pureObj: Record<string, any>) => {
    depth--;
    depth > -1 &&
      (pureObj = {
        ...pureObj,
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<ContactUsInp>(depth);
    return pureObj;
  };

  const completeObj =
    typeof depth === "number"
      ? numberDepth(depth, returnObj)
      : objectDepth(depth, returnObj);

  return completeObj;
};

export const contactUs = db.collection<IContactUs>("ContactUs");
