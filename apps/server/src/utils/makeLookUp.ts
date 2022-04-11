import { ld } from "https://deno.land/x/deno_lodash/mod.ts";
import { Bson } from "./deps.ts";

/**
 * @function
 * ThisFunction get the documents and the desired field, extract the IDs of desired field and make them unique
 * @param
 * foundedModels
 * documents is an array of documents that has been found
 * @param
 * field
 * field is the name of desired field of the document
 */
export const getUniqIds = (foundedModels: any[], field: string) => {
  const fieldIds = foundedModels.map(model => model[field]);
  const uniq = ld
    .uniqWith([].concat.apply([], fieldIds), ld.isEqual)
    .filter((id: any) => id);
  return uniq;
};

interface GetsFn {
  filter: Bson.Document;
  getObj: any;
  deps?: number;
  sort?: any;
  pagination?: { lastObjectId?: string; limit?: number; page?: number };
}

//makeLookUp(post[],getComment,comments)

/**
 * what does it do:
 * we have an array of objectIDs , from these array we get the documents of these objIDs */
export const makeLookUp = async <
  Doc extends { _id: Bson.ObjectID },
  SubDoc extends { _id: Bson.ObjectID },
>(
  documents: Doc[],
  getsFn: ({ filter, getObj, deps }: GetsFn) => Promise<Partial<SubDoc>[]>,
  field: keyof Doc,
  projection?: Partial<Record<keyof SubDoc, 0 | 1 | Record<string, any>>>,
  deps?: number,
) => {
  //convert field object to it`s object id
  const refinedDocument = documents.map(document => ({
    ...document,
    [field]: convertDocumentToObjectId(document[field]),
  }));
  //uniq ids for performance reasons
  const uniqIds = getUniqIds(refinedDocument, <string>field);
  //construct arguments of get fn
  const getsFnArgs: GetsFn = {
    filter: { _id: { $in: uniqIds } },
    getObj: projection,
    //set pagination in order to get all of documents of uniqIds
    pagination: {
      page: 1,
      limit: uniqIds.length,
    },
  };
  deps && (getsFnArgs.deps = deps);
  //found all of documents according to uniqIds
  const foundDocs = await getsFn(getsFnArgs);

  return refinedDocument.map(doc => {
    //non lookUpped field or original field
    const originalField = <Bson.ObjectID | Bson.ObjectID[]>(
      (<unknown>doc[field])
    );
    //checks original fields is exists ot not
    if (!originalField) {
      return doc;
    }
    //populated or lookUpped field
    const lookUppedField = isDocumentArray(originalField)
      ? foundDocs.filter((foundDoc: Partial<SubDoc>) =>
          originalField.find(
            idOfOrg =>
              foundDoc._id &&
              foundDoc._id.toHexString() === idOfOrg.toHexString(),
          )
            ? true
            : false,
        )
      : //if original field is one document we find one document
        foundDocs.find(
          (foundDoc: Partial<SubDoc>) =>
            foundDoc._id &&
            foundDoc._id.toHexString() === originalField.toHexString(),
        );
    //set new lookUppedField to document and return it
    return { ...doc, [field]: lookUppedField };
  });
};

/**
 * @function
 * convert a doc or array of docs to it's id
 * @param document
 */
const convertDocumentToObjectId = <T>(
  document: T | T[],
): Bson.ObjectID | Bson.ObjectID[] =>
  isDocumentArray(document)
    ? document.map((doc: any) => (doc instanceof Bson.ObjectID ? doc : doc._id))
    : document instanceof Bson.ObjectID
    ? document
    : (<any>document)._id;

const isDocumentArray = <T>(field: T | T[]): field is T[] =>
  Array.isArray(field);
