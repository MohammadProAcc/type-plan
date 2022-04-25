export interface FunQLResponseWithDetails {
 schema: { contents: { dynamic: { models: { User: { doits: { loginRequest: { details: { response: FQl_response_loginRequest_LoginRequestReturn } }, login: { details: { response: FQl_response_login_LoginReturn } }, insertProfileInfo: { details: { response: Partial<FQl_response_user_IUser> } }, getUser: { details: { response: Partial<FQl_response_user_IUser> } }, getUsers: { details: { response: Partial<FQl_response_user_IUser>[] } }, updateUser: { details: { response: Partial<FQl_response_user_IUser> } }, updateUserRole: { details: { response: Partial<FQl_response_user_IUser> } }, getMe: { details: { response: Partial<FQl_response_user_IUser> } }, createUser: { details: { response: Partial<FQl_response_user_IUser> } }, addUserAddress: { details: { response: Partial<FQl_response_user_IUser> } }, updateUserAddress: { details: { response: Partial<FQl_response_user_IUser> } } } }, Country: { doits: { createCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, updateCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, deleteCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, getCountry: { details: { response: Partial<FQl_response_country_ICountry> } }, getCountries: { details: { response: Partial<FQl_response_country_ICountry>[] } } } }, City: { doits: { createCity: { details: { response: Partial<FQl_response_city_ICity> } }, updateCity: { details: { response: Partial<FQl_response_city_ICity> } }, deleteCity: { details: { response: Partial<FQl_response_city_ICity> } }, getCity: { details: { response: Partial<FQl_response_city_ICity> } }, getCities: { details: { response: Partial<FQl_response_city_ICity>[] } } } }, State: { doits: { updateState: { details: { response: Partial<FQl_response_state_IState> } }, deleteState: { details: { response: Partial<FQl_response_state_IState> } }, createState: { details: { response: Partial<FQl_response_state_IState> } }, getState: { details: { response: Partial<FQl_response_state_IState> } }, getStates: { details: { response: Partial<FQl_response_state_IState>[] } } } }, BlogTag: { doits: { createBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, updateBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, deleteBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, getBlogTag: { details: { response: Partial<FQl_response_blogTag_IBlogTag> } }, getBlogTags: { details: { response: Partial<FQl_response_blogTag_IBlogTag>[] } } } }, BlogCategory: { doits: { createBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, updateBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, deleteBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, getBlogCategory: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory> } }, getBlogCategories: { details: { response: Partial<FQl_response_blogCategory_IBlogCategory>[] } } } }, Comment: { doits: { createComment: { details: { response: Partial<FQl_response_comment_IComment> } }, updateComment: { details: { response: Partial<FQl_response_comment_IComment> } }, deleteComment: { details: { response: Partial<FQl_response_comment_IComment> } }, getCommentReplies: { details: { response: Partial<FQl_response_comment_IComment[]> } }, getComments: { details: { response: Partial<FQl_response_comment_IComment>[] } }, getComment: { details: { response: Partial<FQl_response_comment_IComment> } } } }, BlogPost: { doits: { createBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, updateBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, deleteBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, getBlogPost: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, getBlogPosts: { details: { response: Partial<FQl_response_blogPost_IBlogPost>[] } }, switchBlogPostLike: { details: { response: Partial<FQl_response_blogPost_IBlogPost> } }, addToPromotions: { details: { response: FQl_response_types_PromotionsBlogPosts[] } } } }, ContactUs: { doits: { createContactUs: { details: { response: Partial<FQl_response_contactUs_IContactUs> } }, deleteContactUs: { details: { response: Partial<FQl_response_contactUs_IContactUs> } }, getContactUs: { details: { response: Partial<FQl_response_contactUs_IContactUs> } }, getContactUss: { details: { response: Partial<FQl_response_blogTag_IBlogTag>[] } } } }, Plan: { doits: { createPlan: { details: { response: Partial<FQl_response_country_ICountry> } }, getPlan: { details: { response: Partial<FQl_response_plan_IPlan> } }, getPlans: { details: { response: Partial<FQl_response_plan_IPlan>[] } } } } } }, static: { models: { BlogFirstPage: { doits: { getBlogFirstPage: { details: { response: FQl_response_types_BlogFirstPage } } } }, StoreHomePage: { doits: { getStoreHomePage: { details: { response: FQl_response_types_StoreHomePage } }, addToStoreHomePageSlider: { details: { response: any } } } } } }, streams: { models: { File: { doits: { uploadFile: { details: { response: Partial<FQl_response_upload_IFile> } }, downloadFile: { details: { response: any } } } } } } } };
}

export interface FunQLResponseWithoutDetails {
 schema: { contents: { dynamic: { models: { User: { doits: { loginRequest: FQl_response_loginRequest_LoginRequestReturn, login: FQl_response_login_LoginReturn, insertProfileInfo: Partial<FQl_response_user_IUser>, getUser: Partial<FQl_response_user_IUser>, getUsers: Partial<FQl_response_user_IUser>[], updateUser: Partial<FQl_response_user_IUser>, updateUserRole: Partial<FQl_response_user_IUser>, getMe: Partial<FQl_response_user_IUser>, createUser: Partial<FQl_response_user_IUser>, addUserAddress: Partial<FQl_response_user_IUser>, updateUserAddress: Partial<FQl_response_user_IUser> } }, Country: { doits: { createCountry: Partial<FQl_response_country_ICountry>, updateCountry: Partial<FQl_response_country_ICountry>, deleteCountry: Partial<FQl_response_country_ICountry>, getCountry: Partial<FQl_response_country_ICountry>, getCountries: Partial<FQl_response_country_ICountry>[] } }, City: { doits: { createCity: Partial<FQl_response_city_ICity>, updateCity: Partial<FQl_response_city_ICity>, deleteCity: Partial<FQl_response_city_ICity>, getCity: Partial<FQl_response_city_ICity>, getCities: Partial<FQl_response_city_ICity>[] } }, State: { doits: { updateState: Partial<FQl_response_state_IState>, deleteState: Partial<FQl_response_state_IState>, createState: Partial<FQl_response_state_IState>, getState: Partial<FQl_response_state_IState>, getStates: Partial<FQl_response_state_IState>[] } }, BlogTag: { doits: { createBlogTag: Partial<FQl_response_blogTag_IBlogTag>, updateBlogTag: Partial<FQl_response_blogTag_IBlogTag>, deleteBlogTag: Partial<FQl_response_blogTag_IBlogTag>, getBlogTag: Partial<FQl_response_blogTag_IBlogTag>, getBlogTags: Partial<FQl_response_blogTag_IBlogTag>[] } }, BlogCategory: { doits: { createBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, updateBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, deleteBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, getBlogCategory: Partial<FQl_response_blogCategory_IBlogCategory>, getBlogCategories: Partial<FQl_response_blogCategory_IBlogCategory>[] } }, Comment: { doits: { createComment: Partial<FQl_response_comment_IComment>, updateComment: Partial<FQl_response_comment_IComment>, deleteComment: Partial<FQl_response_comment_IComment>, getCommentReplies: Partial<FQl_response_comment_IComment[]>, getComments: Partial<FQl_response_comment_IComment>[], getComment: Partial<FQl_response_comment_IComment> } }, BlogPost: { doits: { createBlogPost: Partial<FQl_response_blogPost_IBlogPost>, updateBlogPost: Partial<FQl_response_blogPost_IBlogPost>, deleteBlogPost: Partial<FQl_response_blogPost_IBlogPost>, getBlogPost: Partial<FQl_response_blogPost_IBlogPost>, getBlogPosts: Partial<FQl_response_blogPost_IBlogPost>[], switchBlogPostLike: Partial<FQl_response_blogPost_IBlogPost>, addToPromotions: FQl_response_types_PromotionsBlogPosts[] } }, ContactUs: { doits: { createContactUs: Partial<FQl_response_contactUs_IContactUs>, deleteContactUs: Partial<FQl_response_contactUs_IContactUs>, getContactUs: Partial<FQl_response_contactUs_IContactUs>, getContactUss: Partial<FQl_response_blogTag_IBlogTag>[] } }, Plan: { doits: { createPlan: Partial<FQl_response_country_ICountry>, getPlan: Partial<FQl_response_plan_IPlan>, getPlans: Partial<FQl_response_plan_IPlan>[] } } } }, static: { models: { BlogFirstPage: { doits: { getBlogFirstPage: FQl_response_types_BlogFirstPage } }, StoreHomePage: { doits: { getStoreHomePage: FQl_response_types_StoreHomePage, addToStoreHomePageSlider: any } } } }, streams: { models: { File: { doits: { uploadFile: Partial<FQl_response_upload_IFile>, downloadFile: any } } } } } };
}

export interface FQl_response_loginRequest_LoginRequestReturn {
 ok?: boolean;
 phone?: number;
 countryCode?: string;
}

export interface FQl_response_login_LoginReturn {
 user?: FQl_response_user_IUser;
 token?: string;
}

export interface FQl_response_user_IUser {
 name: string;
 lastName: string;
 phone: number;
 gender: FQl_response_user_Gender;
 birthDate?: Date;
 postalCode: string;
 level: FQl_response_user_Level[];
 email?: string;
 isActive?: boolean;
 creditCardNumber: number;
 profilePicture: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 addresses?: FQl_response_user_UserAddress[];
}

export enum FQl_response_user_Gender {
 Male = "Male",
 Female = "Female"
}

export enum FQl_response_user_Level {
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
 Ghost = "Ghost"
}

/** an interface for uploaded files in db */
export interface FQl_response_upload_PuFile {
 filename: string;
 type: string;
 size: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export interface FQl_response_user_UserAddress {
 /** the id is a uuid special for each address */
 addressId: string;
 country: FQl_response_country_PuRelCountry;
 state: FQl_response_state_PuRelState;
 city: FQl_response_city_PuRelCity;
 addressTxt: string;
 location: {
  type: "Point";
  coordinates: [number, number];
 };
}

export interface FQl_response_country_PuRelCountry {
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
 states?: string[] | FQl_response_state_IState[];
 cities?: string[] | FQl_response_city_ICity[];
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_state_IState {
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
 country?: FQl_response_country_PuRelCountry;
 cities?: FQl_response_city_PuRelCity[];
}

export interface FQl_response_city_PuRelCity {
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
 state?: string | FQl_response_state_IState;
 country?: string | FQl_response_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_country_ICountry {
 states?: FQl_response_state_PuRelState[];
 cities?: FQl_response_city_PuRelCity[];
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

export interface FQl_response_state_PuRelState {
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
 cities?: string[] | FQl_response_city_ICity[];
 country?: string | FQl_response_country_ICountry;
}

/**
 * @interface
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_city_ICity {
 state: FQl_response_state_PuRelState;
 country: FQl_response_country_PuRelCountry;
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
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_blogTag_IBlogTag {
 name: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 blogPosts?: FQl_response_blogPost_PuRelBlogPost[];
}

export interface FQl_response_blogPost_PuRelBlogPost {
 title: string;
 summary: string;
 content: string;
 photo: FQl_response_upload_PuFile;
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
 author: string | FQl_response_user_IUser;
 /**
  * @field
  * the relation for blogCategory in the blogPost,
  * the objectId should be kept in here,
  * the return type should be from IBlogCategory schema
  */
 blogCategory: string | FQl_response_blogCategory_IBlogCategory;
 /**
  * @field
  * the relation for blogTag in the blogPost,
  * the array of objectIds should be kept in here,
  * the return type should be from IBlogTag schema
  */
 blogTags?: string[] | FQl_response_blogTag_IBlogTag[];
 /**
  * @field
  * the relation for likedUsers in the blogPost,
  * (just the 50 last users who liked the post is supposed to keep in here)
  * the array of objectIds should be kept in here,
  * the return type should be from IUser schema
  */
 likedUsers?: string[] | FQl_response_user_IUser[];
 /**
  * @field
  * the relation for comments in the blogPost,
  * (just the 50 last comments of the post is supposed to keep in here)
  * the array of objectIds should be kept in here,
  * the return type should be from IUser schema
  */
 comments?: string[] | FQl_response_comment_IComment[];
}

/**
 * @interface
 * Interface BlogCategory: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_blogCategory_IBlogCategory {
 name: string;
 enName: string;
 icon?: FQl_response_upload_PuFile;
 description?: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** the last 50 post of each category, is kept here */
 blogPosts?: FQl_response_blogPost_PuRelBlogPost[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogComment and EmbeddedBlogComment.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_comment_IComment {
 repliedCommentIds?: string[];
 parentId?: string;
 blogPostId?: string;
 wareId?: string;
 _id: string;
 content: string;
 commentStatus: FQl_response_comment_CommentStatus;
 createdAt?: Date;
 updateAt?: Date;
 user: FQl_response_user_PuRelUser;
 /** the blogPost of the comment */
 blogPost?: FQl_response_blogPost_PuRelBlogPost;
 repliedComments?: FQl_response_comment_PuRelComment[];
}

export enum FQl_response_comment_CommentStatus {
 ACCEPT,
 PENDING,
 REJECT
}

export interface FQl_response_user_PuRelUser {
 name: string;
 lastName: string;
 phone: number;
 gender: FQl_response_user_Gender;
 birthDate?: Date;
 postalCode: string;
 level: FQl_response_user_Level[];
 email?: string;
 isActive?: boolean;
 creditCardNumber: number;
 profilePicture: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 country?: string | FQl_response_country_ICountry;
 state?: string | FQl_response_state_IState;
 city?: string | FQl_response_city_ICity;
}

export interface FQl_response_comment_PuRelComment {
 _id: string;
 content: string;
 commentStatus: FQl_response_comment_CommentStatus;
 createdAt?: Date;
 updateAt?: Date;
 user: string | FQl_response_user_IUser;
 /** the comment may be belong to blogPost */
 blogPost?: string | FQl_response_blogPost_IBlogPost;
 repliedComments?: string | FQl_response_comment_IComment[];
}

/**
 * @interface
 * Interface BlogPost: This is the main interface for blogPost that is extended form PureBlogPosts and EmbeddedBlogPost.
 * it is consist of :primitive fields + Embedded Fields
 */
export interface FQl_response_blogPost_IBlogPost {
 title: string;
 summary: string;
 content: string;
 photo: FQl_response_upload_PuFile;
 totalViews?: number;
 totalComments?: number;
 totalLikes?: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 /** user is partial because we don't need every user fields */
 author: FQl_response_user_PuRelUser;
 /**
  * @property
  *  the blogCategory of the post
  */
 blogCategory: FQl_response_blogCategory_PuRelBlogCategory;
 /**
  * @field
  *  the blogTags of the post
  */
 blogTags?: FQl_response_blogTag_PuBlogTag[];
 /**
  * @property
  *  just last 50 items of users who liked the post,these 50 items are from outRelation interface
  */
 likedUsers?: FQl_response_user_PuUser[];
 /**
  * @field
  *  just last 50 comments of the post,these 50 items are from outRelation interface
  */
 comments?: FQl_response_comment_PuComment[];
}

export interface FQl_response_blogCategory_PuRelBlogCategory {
 name: string;
 enName: string;
 icon?: FQl_response_upload_PuFile;
 description?: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 blogPosts?: string[] | FQl_response_blogPost_IBlogPost[];
}

/**
 * @interface
 * PURE blogTag: This is an interface for primitives types of blogTag
 */
export interface FQl_response_blogTag_PuBlogTag {
 name: string;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

/**
 * @interface
 * PURE blogPost: This is an interface for primitives types of blogPost
 */
export interface FQl_response_user_PuUser {
 name: string;
 lastName: string;
 phone: number;
 gender: FQl_response_user_Gender;
 birthDate?: Date;
 postalCode: string;
 level: FQl_response_user_Level[];
 email?: string;
 isActive?: boolean;
 creditCardNumber: number;
 profilePicture: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

/**
 * @interface
 * PURE blogComment: This is an interface for primitives types of blogComment
 */
export interface FQl_response_comment_PuComment {
 _id: string;
 content: string;
 commentStatus: FQl_response_comment_CommentStatus;
 createdAt?: Date;
 updateAt?: Date;
}

/**
 * @interface
 * an interface for blogPosts that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface FQl_response_types_PromotionsBlogPosts {
 _id: string;
 title: string;
 photo: { _id: string; filename: string; type: string; size: number };
 summary: string;
}

export interface FQl_response_contactUs_IContactUs {
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
 * this is the main interface and the collection in mongoDB is based on this collection
 */
export interface FQl_response_plan_IPlan {
 city: FQl_response_city_PuRelCity;
 state: FQl_response_state_PuRelState;
 country: FQl_response_country_PuRelCountry;
 creator: FQl_response_user_PuRelUser;
 planType: FQl_response_plan_PLANTYPE;
 units: number;
 floors: number;
 sleeps: number;
 exposure: FQl_response_plan_POSITION;
 infrastructureArea: [number, number];
 lenght: [number, number];
 width: [number, number];
 passageWidth: number;
 plateType: FQl_response_plan_PLATETYPE;
 photo: FQl_response_upload_PuFile;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
}

export enum FQl_response_plan_PLANTYPE {
 Resindental = "Resindental",
 Villa = "Villa"
}

export enum FQl_response_plan_POSITION {
 Northern = "Northern",
 Southern = "Southern",
 Western = "Western",
 Eastern = "Eastern"
}

export enum FQl_response_plan_PLATETYPE {
 Registered = "Registered",
 Normal = "Normal"
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_BlogFirstPage {
 promotionBlogPosts: FQl_response_types_PromotionsBlogPosts[];
 latestBlogPosts: FQl_response_types_LatestBlogPosts[];
 popularBlogPosts: FQl_response_types_PopularBlogPosts[];
}

/**
 * @interface
 * an interface for latest blogPosts that are showed in first page
 * there are only 20 of them for the getting rest of them query to database is needed
 */
export interface FQl_response_types_LatestBlogPosts {
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
export interface FQl_response_types_PopularBlogPosts {
 _id: string;
 title: string;
 photo: { _id: string; filename: string; type: string; size: number };
 totalLikes: number;
}

/**
 * @interface
 * an interface for the first page
 */
export interface FQl_response_types_StoreHomePage {
 storeLatestBlogPosts: FQl_response_types_StoreLatestBlogPosts[];
 storeSlider: FQl_response_types_StoreSlider[];
}

/**
 * @interface
 * an interface for wares that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
/**
 * @interface
 * an interface for latest blogPosts that are showed in store first page
 * there are only 3 of them for the getting rest of them query to database is needed
 */
export interface FQl_response_types_StoreLatestBlogPosts {
 _id: string;
 photo: {
  _id: string;
  type: string;
  filename: string;
  size: number;
 };
 title: string;
 summary: string;
 createdAt?: Date;
}

/**
 * @interface
 *  the pictures and the titles of them that are shown in slider
 */
export interface FQl_response_types_StoreSlider {
 photo: string;
 title: string;
 subTitle: string;
 url: string;
 type: string;
}

export interface FQl_response_upload_IFile {
 filename: string;
 type: string;
 size: number;
 _id: string;
 createdAt?: Date;
 updateAt?: Date;
 user?: FQl_response_lib_Pick<FQl_response_user_PuRelUser, "_id" | "name" | "phone" | "lastName">;
 blogPost?: FQl_response_blogPost_PuRelBlogPost;
}

export type Pick<T, K extends keyof T> = { [P in K]: T[P]; };
