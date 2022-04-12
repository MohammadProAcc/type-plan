import {
  BlogPostInp,
  blogPostSelectable,
  IBlogPost,
  IUser,
  PuRelBlogPost,
  PuRelUser,
  RBlogPost,
} from "./mode.ts";
import {
  Base,
  baseSelectableFields,
  fieldType,
  RBase,
  RType,
} from "./utils/mod.ts";
import { checkRelation, decreaseIterate } from "./utils/mod.ts";
import { Bson } from "../utils/deps.ts";
import db from "./db.ts";

/**an interface for uploaded files in db */
export interface PuFile extends Base {
  filename: string;
  type: string;
  size: number;
}
export interface RelFile {
  user?: Bson.ObjectID | IUser;
  blogPost?: Bson.ObjectID | IBlogPost;
}
export interface PuRelFile extends PuFile, RelFile {}

export interface EmFile {
  user?: Pick<PuRelUser, "_id" | "name" | "phone" | "lastName">;
  blogPost?: PuRelBlogPost;
}
export interface IFile extends PuFile, EmFile {}

export interface RPuFile extends RBase {
  filename?: RType;
  type?: RType;
  size?: RType;
}

export interface RFile extends RPuFile {
  blogPosts?: RBlogPost;
}

export type FileInp = {
  blogPost: number | BlogPostInp;
};
export const puFileSelectable = {
  ...baseSelectableFields(),
  filename: fieldType,
  type: fieldType,
  size: fieldType,
};

export const fileSelectable = (depth: number | FileInp = 2): any => {
  const numberDepth = (depth: number, pureObj: Record<string, any>) => {
    depth--;
    depth > -1 &&
      (pureObj = {
        ...pureObj,
        blogPost: {
          type: "object",
          optional: true,
          props: blogPostSelectable(depth),
        },
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<FileInp>(depth);

    checkRelation(depth, "blogPost") &&
      (pureObj = {
        ...pureObj,
        blogPost: {
          type: "object",
          optional: true,
          props: blogPostSelectable(depth.blogPost),
        },
      });
    return pureObj;
  };

  const completeObj = typeof depth === "number"
    ? numberDepth(depth, puFileSelectable)
    : objectDepth(depth, puFileSelectable);

  return completeObj;
};

/** @interface
 * main interface and the collection in mongoDB is based on this collection
 */
export const files = db.collection<IFile>("Files");
