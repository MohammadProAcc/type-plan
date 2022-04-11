import db from "./db.ts";
import {
  BlogPostInp,
  blogPostSelectable,
  IBlogPost,
  PuBlogPost,
  PuBlogTag,
  PuFile,
  puFileSelectable,
  PuRelBlogPost,
  RBlogPost,
  RPuFile,
} from "./mode.ts";
import { fieldType, RType,  Base, baseSelectableFields, RBase,  checkRelation, decreaseIterate   } from "./utils/mod.ts";
import { Bson } from "../utils/deps.ts";

/**
 *  @interface
 * PURE blogCategory: This is an interface for primitives types of blogCategory
 */
export interface PuBlogCategory extends Base {
  name: string;
  enName: string;
  icon?: PuFile;
  description?: string;
}

/**
 *  @interface
 * This is an interface for relations of the blogCategory
 */
export interface BlogCategoryRelations {
  blogPosts?: Bson.ObjectID[] | IBlogPost[];
}

export interface PuRelBlogCategory
  extends PuBlogCategory,
    BlogCategoryRelations {}
/**
 * @interface
 * Embedded BlogCategory: This is an interface for embedded fields in blogCategory collection
 * the fields that are outRelation and we keep certain number of them are also here
 * */
export interface EmBlogCategory {
  /**the last 50 post of each category, is kept here */
  blogPosts?: PuRelBlogPost[];
}

/**
 * @interface
 * inRelation BlogCategory: This is an interface for the relations of blogCategory that are kept in collection*/
export interface InBlogCategory {}

/**
 * @interface
 * OutRelation BlogCategory: This is an interface for those relations of blogCategory that are not kept inside blogCategory collection*/
export interface OutBlogCategory {
  blogPosts: IBlogPost[];
}

/**
 * @interface
 * Interface BlogCategory: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 * */
export interface IBlogCategory extends PuBlogCategory, EmBlogCategory {}

export interface RBlogCategory extends RBase {
  name?: RType;
  enName?: RType;
  icon?: RPuFile;
  description?: RType;
  blogPosts: RBlogPost;
}
export type BlogCategoryInp = {
  blogPost: number | BlogPostInp;
};

export const blogCategorySelectable = (
  depth: number | BlogCategoryInp = 2,
): any => {

  const returnObj = {
    ...baseSelectableFields(),
    name: fieldType,
    enName: fieldType,
    icon: {
      type: "object",
      optional: true,
      props: puFileSelectable,
    },
    description: fieldType,
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
    depth = decreaseIterate<BlogCategoryInp>(depth);

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

  const completeObj =
    typeof depth === "number"
      ? numberDepth(depth, returnObj)
      : objectDepth(depth, returnObj);

  return completeObj;
};

export const blogCategories = db.collection<IBlogCategory>("BlogCategories");
// blogCategories.createIndexes({
//   indexes: [{ key: { name: "text", enName: "text" }, name: "nameTextIndex" }],
// });
