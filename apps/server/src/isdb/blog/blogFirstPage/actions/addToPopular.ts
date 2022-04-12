import { firstPageSlice } from "../mod.ts";
import { BlogFirstPage, PopularBlogPosts } from "../types.ts";

export const addToPopular = async (blogPost: PopularBlogPosts) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();
  const newDb: BlogFirstPage = {
    ...db,
    popularBlogPosts: [...db.popularBlogPosts, blogPost],
  };
  await validate(newDb);
  setState(newDb);
  return newDb.popularBlogPosts;
};
