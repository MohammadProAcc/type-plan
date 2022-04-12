import { Bson, Collection, Document } from "./deps.ts";
import { throwError } from "./mod.ts";
/**
 *
 * @param IDocument : the complete doc that is going to get pureDoc from it
 * @param _idArray : the array of objectIds that we want the pureDocs out of them
 * @param schema :the schema of the _idArray (the schema that _idArray belongs to it)
 * @param puProps : an array of strings, that consist of the  pure fields names
 * (the name of fields that we want to keep in pure Doc)
 * @returns
 */
export const getPureDoc = async <T>({
  IDocument,
  _idArray,
  schema,
  puProps,
}: {
  IDocument?: Document;
  _idArray?: string[];
  schema?: Collection<T>;
  puProps: string[];
}) => {
  IDocument && _idArray
    ? throwError(
        "getPureDoc Function:just pass a Document OR an array of objIds ",
      )
    : !IDocument && !_idArray
    ? throwError(
        "getPureDoc Function: pass a Document OR an array of objIds, both cant be null",
      )
    : null;
  _idArray && !schema
    ? throwError(
        "getPureDoc: when _idArray is given then the schema is nessesary",
      )
    : null;
  /**construct projection object from the puProps */
  var pure = {} as any;
  for (let i = 0; i < puProps.length; i++) {
    pure[puProps[i]] = 1;
  }

  /**extract pureDoc from a given Document */
  if (IDocument) {
    let pureDoc = {} as any;
    pureDoc._id = IDocument._id;
    for (let i = 0; i < puProps.length; i++) {
      pureDoc[puProps[i]] = IDocument[puProps[i]];
    }
    return pureDoc as Bson.Document;
  }

  /**fetch pure Docs of DB, from the array of object IDs */
  if (_idArray && schema) {
    let pureDocs;
    if (_idArray.length == 1) {
      pureDocs = await schema.findOne(
        { _id: new Bson.ObjectID(_idArray[0]) },
        { projection: pure },
      );
    } else {
      const objIdArray = _idArray.map(x => new Bson.ObjectID(x));

      pureDocs = await schema
        .find({ _id: { $in: objIdArray } }, { projection: pure })
        .toArray();
    }

    if (pureDocs) {
      return pureDocs;
    } else {
      throwError(
        "the document/id doesn't exist, so we cant find the Pure Document for you",
      );
    }
  }
};
