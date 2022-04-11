import { firstPageSlice } from "../mod.ts";
import { PopularBlogPosts } from "../types.ts";

export const updatePopular = async (popular: PopularBlogPosts) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();

  const indexPopular=db.popularBlogPosts.findIndex(x=>x._id==popular._id);
  db.popularBlogPosts[indexPopular]=popular;

  await validate(db);
  setState(db);
  return db.popularBlogPosts;
};


