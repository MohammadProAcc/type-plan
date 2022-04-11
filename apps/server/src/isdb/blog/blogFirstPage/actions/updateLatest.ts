import { firstPageSlice } from "../mod.ts";
import { LatestBlogPosts } from "../types.ts";

export const updateLatest = async (blogPost: LatestBlogPosts) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();

  const indexBlogPost=db.latestBlogPosts.findIndex(x=>x._id==blogPost._id);
  db.latestBlogPosts[indexBlogPost]=blogPost;

  await validate(db);
  setState(db);
  return db.latestBlogPosts;
};


