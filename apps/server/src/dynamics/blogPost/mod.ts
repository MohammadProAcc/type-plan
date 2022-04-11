import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "../../utils/mod.ts";
import { createBlogPost } from "./createBlogPost.fn.ts";
import { deleteBlogPost } from "./deleteBlogPost.fn.ts";
import { getBlogPostFn } from "./getBlogPost.fn.ts";
import { getBlogPostsFn } from "./getBlogPosts.fn.ts";
import { switchBlogPostLike } from "./switchBlogPostLike.fn.ts";
import { updateBlogPost } from "./updateBlogPost.fn.ts";
import { addToPromotionFn } from "./addToPromotion.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createBlogPost",
      "updateBlogPost",
      "deleteBlogPost",
      "getBlogPost",
      "getBlogPosts",
      "switchBlogPostLike",
      "addToPromotions",
    ],
  },
});

export type BlogPostDoit =
  | "createBlogPost"
  | "updateBlogPost"
  | "deleteBlogPost"
  | "getBlogPost"
  | "getBlogPosts"
  | "switchBlogPostLike"
  | "addToPromotions";

type BlogPostFns = (doit: BlogPostDoit, details: any, context: any) => any;

export const blogPostFns: BlogPostFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
        ["createBlogPost"]: async () => await createBlogPost(details, context),
        ["updateBlogPost"]: async () => await updateBlogPost(details, context),
        ["deleteBlogPost"]: async () => await deleteBlogPost(details, context),
        ["getBlogPost"]: async () => await getBlogPostFn(details, context),
        ["getBlogPosts"]: async () => await getBlogPostsFn(details),
        ["switchBlogPostLike"]: async () =>
          await switchBlogPostLike(details, context),
        ["addToPromotions"]: async () =>
          await addToPromotionFn(details, context),
      }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
