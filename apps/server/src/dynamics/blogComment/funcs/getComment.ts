import { makeLookUp } from "./../../../utils/makeLookUp.ts";
import { throwError } from "./../../../utils/mod.ts";
import { makeProjections } from "./../../../utils/mod.ts";
import { IComment, comments, RComment } from "./../../../schemas/comment.ts";
import { Bson } from "../../../utils/deps.ts";
import { getUsers } from "../../user/funcs/getUsers.ts";

type GetCommentInput = { _id: Bson.ObjectID; get: RComment };
type GetComment = ({ _id, get }: GetCommentInput) => Promise<IComment | object>;

export const getComment: GetComment = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  const foundBlogComment = await comments.findOne({ _id }, { projection });

  const doRelation = async (blogComment: IComment, get: RComment) => {
    if (!get) {
      return { _id: foundBlogComment!._id };
    }
    // TODO: when using this if the user turns to undefined
    // if (get.user) {
    //   const newComment = (
    //     await makeLookUp([blogComment], getUsers, "user", get.user, 1)
    //   )[0];
    //   console.group("newComment", "===============");
    //   console.log(newComment);
    //   console.groupEnd();
    //   return newComment;
    // }
    return blogComment;
  };
  return foundBlogComment
    ? await doRelation(foundBlogComment, get)
    : throwError("can not find blogComment");
};
