// import { IBlogPost } from "../../../schemas/mod.ts";
import { PuFile } from "./../../../schemas/upload.ts";
import { Bson, ObjectId } from "../../../utils/deps.ts";

/**
 * @interface
 * an interface for favorite/most Visited blogPosts that are showed in first page
 * these posts are favorite/most Visited  Posts
 * there are only 15 of them
 */
export interface PopularBlogPosts {
  _id: string;
  title: string;
  photo: { _id: string; filename: string; type: string; size: number };
  totalLikes: number;
}

// export type PopularBlogPosts = Pick<IBlogPost, "_id" | "title" | "photo" | "totalLikes">;

/**
 * @interface
 * an interface for blogPosts that are showed in first page
 * these posts are promotion Posts
 * there are only 4 of them
 */
export interface PromotionsBlogPosts {
  _id: string;
  title: string;
  photo: { _id: string; filename: string; type: string; size: number };
  summary: string;
}

// export type PromotionsBlogPosts = Pick<IBlogPost, "_id" | "title" | "photo" | "summary">;
/**
 * @interface
 * an interface for latest blogPosts that are showed in first page
 * there are only 20 of them for the getting rest of them query to database is needed
 */
export interface LatestBlogPosts {
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

// export type LatestBlogPosts =
//     & Pick<
//         IBlogPost,
//         "_id" | "title" | "photo" | "summary" | "totalComments" | "createdAt"
//     >
//     & {
//         blogCategory: {
//             _id: ObjectId;
//             name: string;
//         };
//         author: {
//             _id: ObjectId;
//             name: string;
//             profilePicture: PuFile;
//         };
//     };

/**
 * @interface
 * an interface for the first page
 */
export interface BlogFirstPage {
  promotionBlogPosts: PromotionsBlogPosts[];
  latestBlogPosts: LatestBlogPosts[];
  popularBlogPosts: PopularBlogPosts[];
}
