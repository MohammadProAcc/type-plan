/**
 * @interface
 * PURE blogCategory: This is an interface for primitives types of blogCategory
 */
export interface FQl_dynamic_blogCategory_PuBlogCategory {
  name: string;
  enName: string;
  icon?: FQl_dynamic_upload_PuFile;
  description?: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/** an interface for uploaded files in db */
export interface FQl_dynamic_upload_PuFile {
  filename: string;
  type: string;
  size: number;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface FQl_dynamic_blogCategory_PuRelBlogCategory {
  name: string;
  enName: string;
  icon?: FQl_dynamic_upload_PuFile;
  description?: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  blogPosts?: string[] | FQl_dynamic_blogPost_IBlogPost[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_dynamic_blogPost_IBlogPost {
  title: string;
  summary: string;
  content: string;
  photo: FQl_dynamic_upload_PuFile;
  totalViews?: number;
  totalComments?: number;
  totalLikes?: number;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  /** user is partial because we don't need every user fields */
  author: FQl_dynamic_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_dynamic_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_dynamic_comment_PuComment[];
}

export interface FQl_dynamic_user_PuRelUser {
  name: string;
  lastName: string;
  phone: number;
  gender: FQl_dynamic_user_Gender;
  birthDate?: Date;
  postalCode: string;
  level: FQl_dynamic_user_Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  profilePicture: FQl_dynamic_upload_PuFile;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  country?: string | FQl_dynamic_country_ICountry;
  state?: string | FQl_dynamic_state_IState;
  city?: string | FQl_dynamic_city_ICity;
}

export enum FQl_dynamic_user_Gender {
  Male = "Male",
  Female = "Female",
}

export enum FQl_dynamic_user_Level {
  /**
   * The most powerful user role because it gives you access to everything.
   *  As the website owner, this should be your role
   * in addition this role is shop manager
   */
  Admin = "Admin",
  /**
   * Assigned to new customers when they create an account on your website.
   *  This role is basically is:a normal blog subscriber,
   *  and: a customers that can edit their own account information and view past or current order
   */
  Normal = "Normal",
  /**
   * This user is typically responsible for managing content.
   *  Editors can add, edit, publish, and delete any posts and media,
   *  including those written by other users. Editors can also moderate, edit, and delete comments,
   *  and add and edit categories and tags
   */
  Editor = "Editor",
  /**
   * Typically responsible for tasks related to writing content.
   *  They can create, edit, and publish their own posts.
   * They can also delete their own posts (even when they’re already published),
   *  but cannot edit or delete posts written by other user
   */
  Author = "Author",
  /** a ghost user */
  Ghost = "Ghost",
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_country_ICountry {
  states?: FQl_dynamic_state_PuRelState[];
  cities?: FQl_dynamic_city_PuRelCity[];
  name: string;
  enName: string;
  countryCode: string[];
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface FQl_dynamic_state_PuRelState {
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  cities?: string[] | FQl_dynamic_city_ICity[];
  country?: string | FQl_dynamic_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_city_ICity {
  state: FQl_dynamic_state_PuRelState;
  country: FQl_dynamic_country_PuRelCountry;
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface FQl_dynamic_country_PuRelCountry {
  name: string;
  enName: string;
  countryCode: string[];
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  states?: string[] | FQl_dynamic_state_IState[];
  cities?: string[] | FQl_dynamic_city_ICity[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_state_IState {
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  country?: FQl_dynamic_country_PuRelCountry;
  cities?: FQl_dynamic_city_PuRelCity[];
}

export interface FQl_dynamic_city_PuRelCity {
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  state?: string | FQl_dynamic_state_IState;
  country?: string | FQl_dynamic_country_ICountry;
}

/**
 * @interface
 * PURE blogTag: This is an interface for primitives types of blogTag
 */
export interface FQl_dynamic_blogTag_PuBlogTag {
  name: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_dynamic_user_PuUser {
  name: string;
  lastName: string;
  phone: number;
  gender: FQl_dynamic_user_Gender;
  birthDate?: Date;
  postalCode: string;
  level: FQl_dynamic_user_Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  profilePicture: FQl_dynamic_upload_PuFile;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * PURE blogComment: This is an interface for primitives types of blogComment
 */
export interface FQl_dynamic_comment_PuComment {
  _id: string;
  content: string;
  commentStatus: FQl_dynamic_comment_CommentStatus;
  createdAt?: Date;
  updateAt?: Date;
}

export enum FQl_dynamic_comment_CommentStatus {
  ACCEPT,
  PENDING,
  REJECT,
}

/**
 * @interface
 * Embedded BlogCategory: This is an interface for embedded fields in blogCategory collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_blogCategory_EmBlogCategory {
  /** the last 50 post of each category, is kept here */
  blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

export interface FQl_dynamic_blogPost_PuRelBlogPost {
  title: string;
  summary: string;
  content: string;
  photo: FQl_dynamic_upload_PuFile;
  totalViews?: number;
  totalComments?: number;
  totalLikes?: number;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  /**
   * * @field
   * the relation for user in the blogPost,
   * the objectId should be kept in here,
   * the return type should be from IUser schema
   */
  author: string | FQl_dynamic_user_IUser;
  /**
   * @field
   * the relation for blogCategory in the blogPost,
   * the objectId should be kept in here,
   * the return type should be from IBlogCategory schema
   */
  blogCategory: string | FQl_dynamic_blogCategory_IBlogCategory;
  /**
   * @field
   * the relation for blogTag in the blogPost,
   * the array of objectIds should be kept in here,
   * the return type should be from IBlogTag schema
   */
  blogTags?: string[] | FQl_dynamic_blogTag_IBlogTag[];
  /**
   * @field
   * the relation for likedUsers in the blogPost,
   * (just the 50 last users who liked the post is supposed to keep in here)
   * the array of objectIds should be kept in here,
   * the return type should be from IUser schema
   */
  likedUsers?: string[] | FQl_dynamic_user_IUser[];
  /**
   * @field
   * the relation for comments in the blogPost,
   * (just the 50 last comments of the post is supposed to keep in here)
   * the array of objectIds should be kept in here,
   * the return type should be from IUser schema
   */
  comments?: string[] | FQl_dynamic_comment_IComment[];
}

export interface FQl_dynamic_user_IUser {
  name: string;
  lastName: string;
  phone: number;
  gender: FQl_dynamic_user_Gender;
  birthDate?: Date;
  postalCode: string;
  level: FQl_dynamic_user_Level[];
  email?: string;
  isActive?: boolean;
  creditCardNumber: number;
  profilePicture: FQl_dynamic_upload_PuFile;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  addresses?: FQl_dynamic_user_UserAddress[];
}

export interface FQl_dynamic_user_UserAddress {
  /** the id is a uuid special for each address */
  addressId: string;
  country: FQl_dynamic_country_PuRelCountry;
  state: FQl_dynamic_state_PuRelState;
  city: FQl_dynamic_city_PuRelCity;
  addressTxt: string;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
}

/**
 * @interface
 * Interface BlogCategory: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_dynamic_blogCategory_IBlogCategory {
  name: string;
  enName: string;
  icon?: FQl_dynamic_upload_PuFile;
  description?: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  /** the last 50 post of each category, is kept here */
  blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_blogTag_IBlogTag {
  name: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogComment and EmbeddedBlogComment.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_dynamic_comment_IComment {
  repliedCommentIds?: string[];
  parentId?: string;
  blogPostId?: string;
  wareId?: string;
  _id: string;
  content: string;
  commentStatus: FQl_dynamic_comment_CommentStatus;
  createdAt?: Date;
  updateAt?: Date;
  user: FQl_dynamic_user_PuRelUser;
  /** the blogPost of the comment */
  blogPost?: FQl_dynamic_blogPost_PuRelBlogPost;
  repliedComments?: FQl_dynamic_comment_PuRelComment[];
}

export interface FQl_dynamic_comment_PuRelComment {
  _id: string;
  content: string;
  commentStatus: FQl_dynamic_comment_CommentStatus;
  createdAt?: Date;
  updateAt?: Date;
  user: string | FQl_dynamic_user_IUser;
  /** the comment may be belong to blogPost */
  blogPost?: string | FQl_dynamic_blogPost_IBlogPost;
  repliedComments?: string | FQl_dynamic_comment_IComment[];
}

/**
 * @interface
 * inRelation BlogCategory: This is an interface for the relations of blogCategory that are kept in collection
 */
export interface FQl_dynamic_blogCategory_InBlogCategory {
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_dynamic_blogPost_PuBlogPost {
  title: string;
  summary: string;
  content: string;
  photo: FQl_dynamic_upload_PuFile;
  totalViews?: number;
  totalComments?: number;
  totalLikes?: number;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * Embedded BlogPost: This is an interface for embedded fields in blogPost collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_blogPost_EmBlogPost {
  /** user is partial because we don't need every user fields */
  author: FQl_dynamic_user_PuRelUser;
  /**
   * @property
   *  the blogCategory of the post
   */
  blogCategory: FQl_dynamic_blogCategory_PuRelBlogCategory;
  /**
   * @field
   *  the blogTags of the post
   */
  blogTags?: FQl_dynamic_blogTag_PuBlogTag[];
  /**
   * @property
   *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
   */
  likedUsers?: FQl_dynamic_user_PuUser[];
  /**
   * @field
   *  just last 50 comments of the post,these 50 items are from outRelation interface
   */
  comments?: FQl_dynamic_comment_PuComment[];
}

/**
 * @interface
 * inRelation BlogPost: This is an interface for the relations of blogPost that are kept in collection
 */
export interface FQl_dynamic_blogPost_InBlogPost {
  author?: FQl_dynamic_user_IUser;
  blogCategory: FQl_dynamic_blogCategory_IBlogCategory;
  blogTags?: FQl_dynamic_blogTag_IBlogTag[];
}

export interface FQl_dynamic_blogTag_PuRelBlogTag {
  name: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  blogPosts?: string[] | FQl_dynamic_blogPost_IBlogPost[];
}

/**
 * @interface
 * Embedded BlogTag: This is an interface for embedded fields in blogTag collection
 */
export interface FQl_dynamic_blogTag_EmBlogTag {
  blogPosts?: FQl_dynamic_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * inRelation BlogTag: This is an interface for the relations of blogTag that are kept in collection
 */
export interface FQl_dynamic_blogTag_InBlogTag {
}

/**
 * @interface
 * PURE city: This is an interface for primitives types of city
 */
export interface FQl_dynamic_city_PuCity {
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * Embedded city: This is an interface for embedded fields in city collection
 */
export interface FQl_dynamic_city_EmCity {
  state: FQl_dynamic_state_PuRelState;
  country: FQl_dynamic_country_PuRelCountry;
}

/**
 * @interface
 * inRelation city: This is an interface for the relations of blogTag that are kept in collection the number of these inRel doc are less than 1000
 */
export interface FQl_dynamic_city_InCity {
  state: FQl_dynamic_state_IState;
  country: FQl_dynamic_country_ICountry;
}

/**
 * @interface
 * Embedded BlogComment: This is an interface for embedded fields in blogComment collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_comment_EmComment {
  user: FQl_dynamic_user_PuRelUser;
  /** the blogPost of the comment */
  blogPost?: FQl_dynamic_blogPost_PuRelBlogPost;
  repliedComments?: FQl_dynamic_comment_PuRelComment[];
}

/**
 * @interface
 * inRelation BlogComment: This is an interface for the relations of blogComment that are kept in collection
 */
export interface FQl_dynamic_comment_InComment {
  /** this field is a relation of blogComment with itself, we have to keep an array of blog comments objectIds, the number may exceed from 1000 objectId, but because we have to keep the references this should be inner relation */
  repliedCommentIds: FQl_dynamic_comment_IComment;
  blogPostId: FQl_dynamic_blogPost_IBlogPost;
}

export interface FQl_dynamic_contactUs_PuContactUs {
  name: string;
  email: string;
  uploadedFiles: string[];
  message: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface FQl_dynamic_contactUs_EmContactUs {
}

/**
 * @interface
 * inRelation contactUs: This is an interface for the relations of country that are kept in collection
 */
export interface FQl_dynamic_contactUs_InContactUs {
}

export interface FQl_dynamic_contactUs_IContactUs {
  name: string;
  email: string;
  uploadedFiles: string[];
  message: string;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * PURE country: This is an interface for primitives types of country
 */
export interface FQl_dynamic_country_PuCountry {
  name: string;
  enName: string;
  countryCode: string[];
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * Embedded country: This is an interface for embedded fields in country collection
 */
export interface FQl_dynamic_country_EmCountry {
  states?: FQl_dynamic_state_PuRelState[];
  cities?: FQl_dynamic_city_PuRelCity[];
}

/**
 * @interface
 * inRelation country: This is an interface for the relations of country that are kept in collection
 */
export interface FQl_dynamic_country_InCountry {
  state: FQl_dynamic_state_IState;
}

/**
 * @interface
 * PURE city: This is an interface for primitives types of city
 */
export interface FQl_dynamic_plan_PuPlan {
  planType: FQl_dynamic_plan_PLANTYPE;
  units: number;
  floors: number;
  sleeps: number;
  exposure: FQl_dynamic_plan_POSITION;
  infrastructureArea: number;
  length: number;
  width: number;
  passageWidth: number;
  plateType: FQl_dynamic_plan_PLATETYPE;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

export enum FQl_dynamic_plan_PLANTYPE {
  Resindental = "Resindental",
  Villa = "Villa",
}

export enum FQl_dynamic_plan_POSITION {
  Northern = "Northern",
  Southern = "Southern",
  Western = "Western",
  Eastern = "Eastern",
}

export enum FQl_dynamic_plan_PLATETYPE {
  Registered = "Registered",
  Normal = "Normal",
}

export interface FQl_dynamic_plan_PuRelPlan {
  planType: FQl_dynamic_plan_PLANTYPE;
  units: number;
  floors: number;
  sleeps: number;
  exposure: FQl_dynamic_plan_POSITION;
  infrastructureArea: number;
  length: number;
  width: number;
  passageWidth: number;
  plateType: FQl_dynamic_plan_PLATETYPE;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  state?: string | FQl_dynamic_state_IState;
  country?: string | FQl_dynamic_country_ICountry;
  city?: string | FQl_dynamic_city_ICity;
  creator?: string | FQl_dynamic_user_IUser;
}

/**
 * @interface
 * Embedded city: This is an interface for embedded fields in city collection
 */
export interface FQl_dynamic_plan_EmPlan {
  city: FQl_dynamic_city_PuRelCity;
  state: FQl_dynamic_state_PuRelState;
  country: FQl_dynamic_country_PuRelCountry;
  creator: FQl_dynamic_user_PuRelUser;
}

/**
 * @interface
 * inRelation city: This is an interface for the relations of blogTag that are kept in collection the number of these inRel doc are less than 1000
 */
export interface FQl_dynamic_plan_InPlan {
  city: FQl_dynamic_city_ICity;
  state: FQl_dynamic_state_IState;
  country: FQl_dynamic_country_ICountry;
  creator: FQl_dynamic_user_IUser;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_dynamic_plan_IPlan {
  city: FQl_dynamic_city_PuRelCity;
  state: FQl_dynamic_state_PuRelState;
  country: FQl_dynamic_country_PuRelCountry;
  creator: FQl_dynamic_user_PuRelUser;
  planType: FQl_dynamic_plan_PLANTYPE;
  units: number;
  floors: number;
  sleeps: number;
  exposure: FQl_dynamic_plan_POSITION;
  infrastructureArea: number;
  length: number;
  width: number;
  passageWidth: number;
  plateType: FQl_dynamic_plan_PLATETYPE;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * PURE state: This is an interface for primitives types of state
 */
export interface FQl_dynamic_state_PuState {
  name: string;
  enName: string;
  /**
   * save set of polygon of point of this city
   */
  geometries: {
    type: "Polygon";
    coordinates: [number, number][];
  };
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
}

/**
 * @interface
 * Embedded state: This is an interface for embedded fields in state collection
 */
export interface FQl_dynamic_state_EmState {
  country?: FQl_dynamic_country_PuRelCountry;
  cities?: FQl_dynamic_city_PuRelCity[];
}

/**
 * @interface
 * inRelation state: This is an interface for the relations of state that are kept in collection
 */
export interface FQl_dynamic_state_InState {
  country: FQl_dynamic_country_ICountry;
  cities: FQl_dynamic_city_ICity[];
}

export interface FQl_dynamic_upload_PuRelFile {
  filename: string;
  type: string;
  size: number;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  user?: string | FQl_dynamic_user_IUser;
  blogPost?: string | FQl_dynamic_blogPost_IBlogPost;
}

export interface FQl_dynamic_upload_EmFile {
  user?: Pick<
    FQl_dynamic_user_PuRelUser,
    "_id" | "name" | "phone" | "lastName"
  >;
  blogPost?: FQl_dynamic_blogPost_PuRelBlogPost;
}

export type Pick<T, K extends keyof T> = { [P in K]: T[P] };

export interface FQl_dynamic_upload_IFile {
  filename: string;
  type: string;
  size: number;
  _id: string;
  createdAt?: Date;
  updateAt?: Date;
  user?: Pick<
    FQl_dynamic_user_PuRelUser,
    "_id" | "name" | "phone" | "lastName"
  >;
  blogPost?: FQl_dynamic_blogPost_PuRelBlogPost;
}

/**
 * @interface
 * Embedded BlogPost: This is an interface for embedded fields in blogPost collection
 * the fields that are outRelation and we keep certain number of them are also here
 */
export interface FQl_dynamic_user_EmUser {
  addresses?: FQl_dynamic_user_UserAddress[];
}

/**
 * @interface
 * inRelation BlogPost: This is an interface for the relations of blogPost that are kept in collection
 */
export interface FQl_dynamic_user_InUser {
  country: FQl_dynamic_country_ICountry;
  state: FQl_dynamic_state_IState;
  city: FQl_dynamic_city_ICity;
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_static_types_BlogFirstPage {
  promotionBlogPosts: FQl_static_types_PromotionsBlogPosts[];
  latestBlogPosts: FQl_static_types_LatestBlogPosts[];
  popularBlogPosts: FQl_static_types_PopularBlogPosts[];
}

/**
 * @interface
 * an interface for blogPosts that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_static_types_PromotionsBlogPosts {
  _id: string;
  title: string;
  photo: { _id: string; filename: string; type: string; size: number };
  summary: string;
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in first page
 * there are only 20 of them for the getting rest of them query to database is needed
 */
export interface FQl_static_types_LatestBlogPosts {
  _id: string;
  title: string;
  photo?: {
    _id: string;
    filename: string;
    size: number;
    type: string;
  };
  summary: string;
  totalComments?: number;
  createdAt?: Date;
  blogCategory: {
    _id: string;
    name: string;
  };
  author?: {
    _id: string;
    name: string;
    profilePicture?: {
      _id: string;
      filename: string;
      type: string;
      size: number;
    };
  };
}

/**
 * @interface
 * an interface for favorite/most Visited blogPosts that are showed in first page
 * these posts are favorite/most Visited  Posts
 * there are only 15 of them
 */
export interface FQl_static_types_PopularBlogPosts {
  _id: string;
  title: string;
  photo: { _id: string; filename: string; type: string; size: number };
  totalLikes: number;
}
