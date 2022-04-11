import db from "./db.ts";
import {
  BlogCategoryInp,
  blogCategorySelectable,
  BlogTagInp,
  blogTagSelectable,
  CommentInp,
  commentSelectable,
  IBlogCategory,
  IBlogTag,
  IComment,
  IUser,
  PuBlogTag,
  PuComment,
  PuFile,
  puFileSelectable,
  PuRelBlogCategory,
  PuRelUser,
  PuUser,
  RBlogCategory,
  RBlogTag,
  RComment,
  RPuFile,
  RUser,
  userSelectable,
  UserSelectInp,
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
 *  @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface PuBlogPost extends Base {
  title: string;
  summary: string;
  content: string;
  photo: PuFile;
  totalViews?: number;
  totalComments?: number;
  totalLikes?: number; //the total number of likes fo the post
}

/**
 *  @interface
 * This is an interface for relations of the blogPost
 */
export interface RelBlogPost {
  /**
   * * @field
   * the relation for user in the blogPost,
   * the objectId should be kept in here,
   * the return type should be from IUser schema */
  author: Bson.ObjectID | IUser;

  /**
   * @field
   * the relation for blogCategory in the blogPost,
   * the objectId should be kept in here,
   * the return type should be from IBlogCategory schema */

  blogCategory: Bson.ObjectID | IBlogCategory;

  /**
   * @field
   * the relation for blogTag in the blogPost,
   * the array of objectIds should be kept in here,
   * the return type should be from IBlogTag schema */

  blogTags?: Bson.ObjectID[] | IBlogTag[];

  /**
   * @field
   * the relation for likedUsers in the blogPost,
   * (just the 50 last users who liked the post is supposed to keep in here)
   * the array of objectIds should be kept in here,
   * the return type should be from IUser schema */

  likedUsers?: Bson.ObjectID[] | IUser[];

  /**
   * @field
   * the relation for comments in the blogPost,
   * (just the 50 last comments of the post is supposed to keep in here)
   * the array of objectIds should be kept in here,
   * the return type should be from IUser schema */
  comments?: Bson.ObjectID[] | IComment[];
}

export interface PuRelBlogPost extends PuBlogPost, RelBlogPost {}

/**
 * @interface
 * Embedded BlogPost: This is an interface for embedded fields in blogPost collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface EmBlogPost {
  /**user is partial because we don't need every user fields*/
  author: PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: PuRelBlogCategory;

  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: PuUser[];

  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: PuComment[];
}

/**
 * @interface
 * inRelation BlogPost: This is an interface for the relations of blogPost that are kept in collection */
export interface InBlogPost {
  author?: IUser; //TODO:user is not optional
  blogCategory: IBlogCategory;
  blogTags?: IBlogTag[];
}

/**
 * @interface
 * OutRelation BlogPost: This is an interface for those relations of blogPost that are not kept inside blogPost collection */
export interface OutBlogPost {
  likedUsers?: IUser[];
  comments?: IComment[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface IBlogPost extends PuBlogPost, EmBlogPost {
  // if an array of objectIds is needed should be kept here
}
/**
 * ReturnBLogPost:represent the fields that can be returned in "get" part
 * @interface
 */
export interface RBlogPost extends RBase {
  title?: RType;
  summary?: RType;
  content?: RType;
  photo?: RPuFile;
  author?: RUser;
  blogTags?: RBlogTag;
  likeUsers?: RUser;
  blogCategory?: RBlogCategory;
  totalLikes?: RType;
  totalViews?: RType;
  comments?: RComment;
  totalComments?: RType;
}

export type BlogPostInp = {
  author: number | UserSelectInp;
  comments: number | CommentInp;
  likedUsers: number | UserSelectInp;
  blogTags: number | BlogTagInp;
  blogCategory: number | BlogCategoryInp;
};

/**
 * @function
 * blogPostSelectable: return the fields of the schema and its relations that can be select from blogPost schema
 * @param depth
 */
export const blogPostSelectable = (depth: number | BlogPostInp = 2): any => {
  const returnObj = {
    ...baseSelectableFields(),
    title: fieldType,
    summary: fieldType,
    content: fieldType,
    photo: {
      type: "object",
      optional: true,
      props: puFileSelectable,
    },
    totalLikes: fieldType,
    totalViews: fieldType,
    totalComments: fieldType,
  };

  const numberDepth = (depth: number, pureObj: Record<string, any>) => {
    depth--;
    depth > -1 &&
      (pureObj = {
        ...pureObj,
        author: {
          type: "object",
          optional: true,
          props: userSelectable(depth),
        },

        comments: {
          type: "object",
          optional: true,
          props: commentSelectable(depth),
        },

        likedUsers: {
          type: "object",
          optional: true,
          props: userSelectable(depth),
        },

        blogTags: {
          type: "object",
          optional: true,
          props: blogTagSelectable(depth),
        },

        blogCategory: {
          type: "object",
          optional: true,
          props: blogCategorySelectable(depth),
        },
      });

    return pureObj;
  };

  const objectDepth = (depth: any, pureObj: Record<string, any>) => {
    depth = decreaseIterate<BlogPostInp>(depth);

    checkRelation(depth, "author") &&
      (pureObj = {
        ...pureObj,
        author: {
          type: "object",
          optional: true,
          props: userSelectable(depth.author),
        },
      });

    checkRelation(depth, "likeUsers") &&
      (pureObj = {
        ...pureObj,
        likedUsers: {
          type: "object",
          optional: true,
          props: userSelectable(depth.likedUsers),
        },
      });

    checkRelation(depth, "blogTags") &&
      (pureObj = {
        ...pureObj,
        blogTags: {
          type: "object",
          optional: true,
          props: blogTagSelectable(depth.blogTags),
        },
      });

    checkRelation(depth, "blogCategory") &&
      (pureObj = {
        ...pureObj,
        blogCategory: {
          type: "object",
          optional: true,
          props: blogCategorySelectable(depth.blogCategory),
        },
      });

    checkRelation(depth, "comments") &&
      (pureObj = {
        ...pureObj,
        comments: {
          type: "object",
          optional: true,
          props: commentSelectable(depth.comments),
        },
      });

    return pureObj;
  };

  const completeObj = typeof depth === "number"
    ? numberDepth(depth, returnObj)
    : objectDepth(depth, returnObj);

  return completeObj;
};

export const blogPosts = db.collection<IBlogPost>("BlogPosts");
// blogPosts.createIndexes({
//   indexes: [{ key: { title: "text", content: "text" }, name: "Index" }]
// });
