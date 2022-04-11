import { files, IFile, RFile } from "../../../schemas/mode.ts";
import { Bson } from "../../../utils/deps.ts";
import { throwError } from "../../../utils/mod.ts";
import { makeProjections } from "./../../../utils/mod.ts";

type GetFileInput = { _id: Bson.ObjectID; get: RFile };
type GetFile = ({ _id, get }: GetFileInput) => Promise<Partial<IFile>>;
export const getFile: GetFile = async ({ _id, get }) => {
  const projection = makeProjections(get, [], []);
  const foundedFile = await files.findOne({ _id }, { projection });
  const doRelation = async (file: IFile, get: RFile) => {
    return file;
  };

  return foundedFile
    ? await doRelation(foundedFile, get)
    : throwError("can not find file");
};
//
