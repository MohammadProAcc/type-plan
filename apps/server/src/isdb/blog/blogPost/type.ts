import { IBlogPost, PuBlogTag, PuComment } from "../../../schemas/mode.ts";
/**
 * @interface
 * an interface for
 * these posts
 * there
 */
export interface BlogPost
  extends Pick<IBlogPost, "_id" | "title" | "photo" | "summary" | "content"> {
  author: string;
  blogCategory: string;
  comments?: PuComment[];
  blogTags?: PuBlogTag[];
}
