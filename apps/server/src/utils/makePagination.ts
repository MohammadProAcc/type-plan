import { Bson, Collection } from "./deps.ts";
import { throwError } from "./mod.ts";

/**
 *make pagination
 * @param collection an  instance of collection
 * @param query
 * @param projection
 * @param paginationInput
 */
export const makePagination = async <T extends { _id: Bson.ObjectID }>({
  collection,
  query,
  projection,
  sort,
  limit,
  lastObjectId,
  page,
}: {
  collection: Collection<T>;
  query: Bson.Document;
  //TODO adds type safety to embedded object
  projection: Partial<Record<keyof T, 0 | 1 | Record<string, any>>>;
  sort?: Partial<Record<keyof T, -1 | 1 | Record<string, any>>>;
  // sort: SortType<T>,
  limit?: number;
  lastObjectId?: string;
  page?: number;
}): Promise<Partial<T>[]> => {
  //checks values and specifies default value

  if (!lastObjectId && !page) return throwError("pagination not given ");
  //page for server should start from 0
  //page for client should start from 1
  //if page === -1 means we not have page number from client
  page = page ? page - 1 : -1;
  limit = limit ? limit : 10;
  return sort
    ? page > -1
      ? await collection
          .find({ ...query }, { projection })
          .sort(sort)
          .skip(page * limit)
          .limit(limit)
          .toArray()
      : sort._id === -1 //not page  //ascending
      ? await collection
          .find(
            { _id: { $lt: new Bson.ObjectID(lastObjectId) }, ...query },
            { projection },
          )
          .limit(limit)
          .toArray()
      : await collection
          .find(
            { _id: { $gt: new Bson.ObjectID(lastObjectId) }, ...query },
            { projection },
          )
          .limit(limit)
          .toArray()
    : //not sort
    page > -1
    ? await collection
        .find({ ...query }, { projection })
        .skip(page * limit)
        .limit(limit)
        .toArray()
    : await collection
        .find(
          { _id: { $gt: new Bson.ObjectID(lastObjectId) }, ...query },
          { projection },
        )
        .limit(limit)
        .toArray();
};
