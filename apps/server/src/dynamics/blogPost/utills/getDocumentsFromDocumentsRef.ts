//if id does not exist, does not throw error

import { Bson } from "../../../utils/deps.ts";

//all ids must be trust
export const getDocumentsFromDocumentRefs = async (
  ids: string[],
  model: any,
) => {
  const newIds = ids.map(id => new Bson.ObjectID(id));
  return await model.find({ _id: { $in: newIds } }).toArray();
};
