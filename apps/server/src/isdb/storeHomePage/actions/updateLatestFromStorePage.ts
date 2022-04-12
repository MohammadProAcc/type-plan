import {
  storeHomePageSlice,
  StoreLatestBlogPosts,
} from "../mod.ts";


export const updateLatestFromStorePage = async (blogPost: StoreLatestBlogPosts) => {
  const { getState, validate, setState } = storeHomePageSlice;
  const db = getState();

  const indexBlogPost=db.storeLatestBlogPosts.findIndex(x=>x._id==blogPost._id);
  db.storeLatestBlogPosts[indexBlogPost]=blogPost;

  await validate(db);
  setState(db);
  return db.storeLatestBlogPosts;
};



