import db from "./db.ts";
import {
  BlogPostInp,
  blogPostSelectable,
  IBlogPost,
  PuRelBlogPost,
  RBlogPost,
} from "./mode.ts";
import {
  Base,
  baseSelectableFields,
  checkRelation,
  decreaseIterate,
  fieldType,
  Iterate,
  RBase,
  RType,
} from "./utils/mod.ts";
import { Bson } from "../utils/deps.ts";

/**
 * @interface
 * PURE blogTag: This is an interface for primitives types of blogTag */
export interface PuBlogTag extends Base {
  name: string;
}

/**
 *  @interface
 * This is an interface for relations of the blogTag
 */
export interface RelBlogTag {
  blogPosts?: Bson.ObjectID[] | IBlogPost[];
}

export interface PuRelBlogTag extends PuBlogTag, RelBlogTag {}
/**
 * @interface
 * Embedded BlogTag: This is an interface for embedded fields in blogTag collection */
export interface EmBlogTag {
  blogPosts?: PuRelBlogPost[];
}

/**
 * @interface
 * inRelation BlogTag: This is an interface for the relations of blogTag that are kept in collection */
export interface InBlogTag {
  // there is nothing  in relation
}

/**
 * @interface
 * OutRelation BlogTag: This is an interface for those relations of blogTag that are not kept inside blogTag collection */
export interface OutBlogTag {
  blogPost: IBlogPost[];
}

/** @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface IBlogTag extends PuBlogTag, EmBlogTag, Base {}

/**
 *  ReturnBLogPost:represent the fields that can be returned in "get" part
 * @interface
 */
export interface RBlogTag extends RBase {
  name: RType;
  blogPosts: RBlogPost;
}

export type BlogTagInp = {
  blogPosts: number | BlogPostInp;
};

/**
 * @function
 * blogTagSelectable: return the fields of the schema and its relations that can be select from blogTag schema
 * @param depth
 */
export const blogTagSelectable = (depth: number | BlogTagInp = 2): any => {
  const returnObj = {
    ...baseSelectableFields(),
    name: fieldType,
  };
  const numberDepth = (depth: number, pureObj: Record<string, any>) => {
    depth--;
    depth > -1 &&
      (pureObj = {
        ...pureObj,
        blogPosts: {
          type: "object",
          optional: true,
          props: blogPostSelectable(depth),
        },
      });
    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<BlogTagInp>(depth);
    checkRelation(depth, "blogPosts") &&
      (pureObj = {
        ...pureObj,
        blogPosts: {
          type: "object",
          optional: true,
          props: blogPostSelectable(depth.blogPosts),
        },
      });

    return pureObj;
  };

  const completeObj = typeof depth === "number"
    ? numberDepth(depth, returnObj)
    : objectDepth(depth, returnObj);

  return completeObj;
};

export const blogTags = db.collection<IBlogTag>("BlogTags");

// blogTags.createIndexes({
//   indexes: [{ key: { name: "text" }, name: "tagNameTextIndex" }],
// });
