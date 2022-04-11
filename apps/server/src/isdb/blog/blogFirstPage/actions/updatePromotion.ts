import { firstPageSlice } from "../mod.ts";
import { PromotionsBlogPosts } from "../types.ts";

export const updatePromotion = async (promotion: PromotionsBlogPosts) => {
  const { getState, validate, setState } = firstPageSlice;
  const db = getState();

  const indexPromotion=db.promotionBlogPosts.findIndex(x=>x._id==promotion._id);
  db.promotionBlogPosts[indexPromotion]=promotion;

  await validate(db);
  setState(db);
  return db.promotionBlogPosts;
};

