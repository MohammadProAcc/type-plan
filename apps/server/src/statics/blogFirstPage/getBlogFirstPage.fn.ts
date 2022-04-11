import { BlogFirstPage } from "./../../isdb/blog/blogFirstPage/types.ts";
import { firstPageSlice } from "../../isdb/blog/blogFirstPage/mod.ts";

type ReturnBlogFirstPage = () => BlogFirstPage;

export const getFirstPageFn: ReturnBlogFirstPage = () =>
  firstPageSlice.getState();
