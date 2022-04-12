import { firstPageSlice } from "../mod.ts";
import { BlogFirstPage, LatestBlogPosts } from "../types.ts";

export const addToLatest = async (blogPost: LatestBlogPosts) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();
  const latestArrLength = db.latestBlogPosts.length;
  let newDb: BlogFirstPage;

  /**if the latest post array exceed from 20, then remove the first item from array
   * then add the new post to the end of the array
   */

  if (latestArrLength < 20) {
    newDb = {
      ...db,
      latestBlogPosts: [blogPost, ...db.latestBlogPosts],
    };
  } else {
    db.latestBlogPosts.shift();
    newDb = {
      ...db,
      latestBlogPosts: [...db.latestBlogPosts, blogPost],
    };
  }
  // newDb.latestBlogPosts.reverse();
  await validate(newDb);
  await setState(newDb);
};
