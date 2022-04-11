import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "../../utils/mod.ts";
import { createCommentFn } from "./createComment.fn.ts";
import { deleteComment } from "./deleteComment.fn.ts";
import { getCommentFn } from "./getComment.fn.ts";
import { getCommentsFn } from "./getComments.fn.ts";
import { getCommentRepliesFn } from "./getCommentReplies.fn.ts";
import { updateCommentFn } from "./updateComment.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createComment",
      "updateComment",
      "deleteComment",
      "getCommentReplies",
      "getComments",
      "getComment",
    ],
  },
});

export type CommentDoit =
  | "createComment"
  | "updateComment"
  | "deleteComment"
  | "getCommentReplies"
  | "getComments"
  | "getComment";

type CommentFns = (doit: CommentDoit, details: any, context: any) => any;

export const commentFns: CommentFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
        ["createComment"]: async () => await createCommentFn(details, context),
        ["updateComment"]: async () => await updateCommentFn(details, context),
        ["deleteComment"]: async () => await deleteComment(details, context),
        ["getCommentReplies"]: async () => await getCommentRepliesFn(details),
        ["getComments"]: async () => await getCommentsFn(details),
        ["getComment"]: async () => await getCommentFn(details, context),
      }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
