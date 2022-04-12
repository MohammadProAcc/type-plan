import { IBlogPost} from "../../schemas/mode.ts";

/**
 * @interface
 * an interface for wareTypes that are showed in first page
 * there the number of them should be dynamics
 */
export interface WareTypes {
  _id: string;
  name: string;
  icon?: {
    _id: string;
    filename: string;
    type: string;
    size: number;
  };
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
export interface StoreLatestBlogPosts
  extends Pick<IBlogPost, "title" | "summary" | "createdAt"> {
  _id: string;
  photo: {
    _id: string;
    type: string;
    filename: string;
    size: number;
  };
}

/**
 * @interface
 the pictures and the titles of them that are shown in slider
 */

export interface StoreSlider {
  photo: string;
  title: string;
  subTitle: string;
  url: string;
  type: string;
}
/**
 * @interface
 * an interface for the first page
 */
export interface StoreHomePage {
  storeLatestBlogPosts: StoreLatestBlogPosts[];
  storeSlider: StoreSlider[];
}
