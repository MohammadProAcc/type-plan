import { firstPageSlice } from "../mod.ts";
import { BlogFirstPage, PromotionsBlogPosts } from "../types.ts";

export const addToPromotion = async (blogPost: PromotionsBlogPosts) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();
  //   TODO: check unique --- Done
  const getUniqPromotion = (arr: PromotionsBlogPosts[]) => [
    ...new Map(arr.map(item => [String(item["_id"]), item])).values(),
  ];

  const uniqPromotion = getUniqPromotion([blogPost, ...db.promotionBlogPosts]);

  if (uniqPromotion.length > 6) uniqPromotion.pop();

  const newDb: BlogFirstPage = {
    ...db,
    promotionBlogPosts: uniqPromotion,
  };

  await validate(newDb);
  setState(newDb);
  return newDb.promotionBlogPosts;
};
