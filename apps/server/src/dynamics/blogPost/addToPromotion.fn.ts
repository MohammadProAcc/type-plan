import { addToPromotion } from "../../isdb/blog/blogFirstPage/actions/addToPromotion.ts";
import { blogPosts } from "../../schemas/mode.ts";
import { checkRoleFn } from "../../utils/mod.ts";
import { checkValidation } from "../../utils/mod.ts";
import { Bson } from "../../utils/deps.ts";
import { isAuthFn } from "../../utils/mod.ts";
import { notFoundError } from "../../utils/mod.ts";
import { emptyTokenError } from "../../utils/mod.ts";
import { Context } from "../utils/context.ts";
import {
  addToPromotionsDetails,
  checkAddToPromotions,
} from "./addToPromotion.type.ts";
import { PromotionsBlogPosts } from "../../isdb/blog/blogFirstPage/mod.ts";

type AddToPromotion = (
  details: addToPromotionsDetails,
  context: Context,
) => Promise<PromotionsBlogPosts[]>;

/**
 * Represent updateCategory (update category on db)
 * @function
 * @param details
 * @param context
 */
export const addToPromotionFn: AddToPromotion = async (details, context) => {
  // !context ? emptyTokenError() : null;

  // /**check user is authenticated */
  // const user = await isAuthFn(context.token!);

  // /**if user was authenticated,check the user role */
  // user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkAddToPromotions, { details });

  const {
    set: { _id },
  } = details;

  const foundNewBlogPost = await blogPosts.findOne({
    _id: new Bson.ObjectID(_id),
  });

  const promotionPost = {
    _id: foundNewBlogPost!._id.toHexString(),
    title: foundNewBlogPost!.title,
    summary: foundNewBlogPost!.summary,
    photo: foundNewBlogPost?{_id:foundNewBlogPost!.photo._id.toHexString(),filename:foundNewBlogPost.photo.filename,size:foundNewBlogPost.photo.size,type:foundNewBlogPost.photo.type}:undefined,
  } as PromotionsBlogPosts;

  return await addToPromotion(promotionPost);
};
