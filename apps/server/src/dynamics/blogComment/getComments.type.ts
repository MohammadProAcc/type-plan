import FastestValidator from "https://esm.sh/fastest-validator@1";
import {
  commentSelectable,
  CommentStatus,
  PuComment,
  RComment,
} from "../../schemas/comment.ts";
import { PaginationType } from "../../utils/mod.ts";
import { SortType } from "../../utils/mod.ts";
import { basePaginationValidationObject } from "../../utils/mod.ts";

const v = new FastestValidator();
export const schema = {
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          ...basePaginationValidationObject<PuComment>(
            "createdAt",
            "updateAt",
            "commentStatus",
            "content",
          ),
          content: { type: "string", optional: true },
          blogPostId: { type: "string" },
          commentStatus: {
            type: "enum",
            values: ["ACCEPT", "REJECT", "PENDING"],
            optional: true,
          },
        },
      },
      get: {
        type: "object",
        optional: true,
        props: commentSelectable(2),
      },
    },
  },
};
export const checkGetCommentsDetails = v.compile(schema);
export interface getBlogCommentsDetails {
  set: {
    email?: string;
    blogPostId?: string;
    commentStatus?: CommentStatus;
    sort?: SortType<PuComment>;
    pagination: PaginationType;
  };
  get: RComment;
}
