import {
  comments,
  IComment,
  RComment,
  PuComment,
} from "../../../schemas/comment.ts";
import { Bson } from "../../../utils/deps.ts";
import {
  makePagination,
  makeProjections,
  PaginationInput,
} from "../../../utils/mod.ts";

type GetCommentsInput = {
  filter: Bson.Document;
  getObj: RComment;
  deps?: number;
} & PaginationInput<PuComment>;

type GetComments = ({
  filter,
  getObj,
  deps,
  sort,
  pagination,
}: GetCommentsInput) => Promise<Partial<IComment>[]>;

export const getComments: GetComments = async ({
  filter,
  getObj,
  deps,
  sort,
  pagination,
}) => {
  deps ? deps-- : (deps = 3);

  const projection = makeProjections(getObj, [], []);
  let returnDocuments = await makePagination<PuComment>({
    collection: comments,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });

  return returnDocuments;
};
