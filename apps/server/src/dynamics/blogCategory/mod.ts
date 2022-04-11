import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "../../utils/mod.ts";
import { createBlogCategoryFn } from "./createBlogCategory.fn.ts";
import { deleteBlogCategoryFn } from "./deleteBlogCategory.fn.ts";
import { getBlogCategoriesFn } from "./getBlogCategories.fn.ts";
import { getBlogCategoryFn } from "./getBlogCategory.fn.ts";
import { updateBlogCategory } from "./updateBlogCategory.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createBlogCategory",
      "updateBlogCategory",
      "deleteBlogCategory",
      "getBlogCategory",
      "getBlogCategories",
    ],
  },
});

export type BlogCategoryDoit =
  | "createBlogCategory"
  | "updateBlogCategory"
  | "deleteBlogCategory"
  | "getBlogCategory"
  | "getBlogCategories";

type BlogCategoryFns = (
  doit: BlogCategoryDoit,
  details: any,
  context: any,
) => any;

export const blogCategoryFns: BlogCategoryFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
        ["createBlogCategory"]: async () =>
          await createBlogCategoryFn(details, context),
        ["updateBlogCategory"]: async () =>
          await updateBlogCategory(details, context),
        ["deleteBlogCategory"]: async () =>
          await deleteBlogCategoryFn(details, context),
        ["getBlogCategory"]: async () => await getBlogCategoryFn(details),
        ["getBlogCategories"]: async () => await getBlogCategoriesFn(details),
      }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
