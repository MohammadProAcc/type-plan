import { IUser, PuUser, RUser, users } from "../../../schemas/user.ts";
import { Bson } from "../../../utils/deps.ts";
import {
  makePagination,
  makeProjections,
  PaginationInput,
} from "../../../utils/mod.ts";

type GetUsersInput = {
  filter: Bson.Document;
  getObj: RUser;
} & PaginationInput<PuUser>;

type GetUsers = ({
  filter,
  getObj,
  sort,
  pagination,
}: GetUsersInput) => Promise<Partial<IUser>[]>;

export const getUsers: GetUsers = async ({
  filter,
  getObj,
  sort,
  pagination,
}): Promise<Partial<IUser>[]> => {
  const projection = makeProjections(getObj, [], []);

  const returnDocuments = await makePagination<PuUser>({
    collection: users,
    query: filter,
    projection,
    sort,
    limit: pagination?.limit,
    lastObjectId: pagination?.lastObjectId,
    page: pagination?.page,
  });

  return returnDocuments;
};
