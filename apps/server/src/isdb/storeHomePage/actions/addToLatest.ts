import {
  StoreHomePage,
  storeHomePageSlice,
  StoreLatestBlogPosts,
} from "../mod.ts";

export const addLatestPostsToStoreFirstPage = async (
  blogPost: StoreLatestBlogPosts,
) => {
  const { getState, validate, setState } = storeHomePageSlice;
  const db = getState();
  const latestArrLength = db.storeLatestBlogPosts.length;
  let newDb: StoreHomePage;
  /**if the latest post array exceed from 20, then remove the first item from array
   * then add the new post to the end of the array
   */
  if (latestArrLength < 3) {
    newDb = {
      ...db,
      storeLatestBlogPosts: [blogPost, ...db.storeLatestBlogPosts],
    };
  } else { 
     db.storeLatestBlogPosts.shift();
    newDb = {
      ...db,
      storeLatestBlogPosts: [...db.storeLatestBlogPosts, blogPost],
    };
  }
  // newDb.storeLatestBlogPosts.reverse();
  await validate(newDb);
  await setState(newDb);
};
