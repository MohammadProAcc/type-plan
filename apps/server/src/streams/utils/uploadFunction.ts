import { ensureFile } from "https://deno.land/std@0.101.0/fs/mod.ts";
import { files, IUser } from "../../schemas/mode.ts";
import { ObjectID } from "../../utils/deps.ts";

/** for uploading an file 2 steps are necessary
 * step1.store the file meta data in db(the content of file doesn't keep in db)
 * step2.the file itself(name.format) keep in server
 */

/**
 * @interface:an  for defining the FileType */
export interface FileType {
  filename: string;
  type: string;
  size: number;
  content: Uint8Array;
}

/**
 * @function:upload the file
 */

export const uploadFile = async (file: FileType, user: IUser) => {
  /**step1: write the file meta data in db */
  const objectId = await saveFileInDB(file, user);

  /**step2: write the file itself in server */
  await writeFileInServer(objectId, file);

  /**return the uploaded file metaData from DB, only return the file metaData */
  return objectId;
};

/**
 * @function: a function to write File in DB
 * @argument: the file that is going to save in db
 * @returns: the objectId of the uploaded file is returned as string
 */
export const saveFileInDB = async (
  file: FileType,
  user: IUser,
): Promise<string> => {
  const _id = new ObjectID();
  const uploadedFile = await files.insertOne({
    _id,
    filename: `${_id}${file.filename!.slice(file.filename!.lastIndexOf("."))}`,
    type: file.type!,
    size: file.size!,
    user: {
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
    },
  });
  return uploadedFile.toString();
};

/**
 * @function: a to write file in server
 * @argument:the objectId of the file in db
 * @argument:the name of the file
 * @argument:the content of the file
 */
export const writeFileInServer = async (objectId: string, file: FileType) => {
  // const path = `files/${objectId}_${name}`;

  const path = `files/${objectId}${
    file.filename!.slice(
      file.filename.lastIndexOf("."),
    )
  }`;
  await ensureFile(path!);

  // const openStreamFile = await Deno.open(path, {
  //   create: true,
  //   write: true,
  // });
  // return await Deno.copy(data, openStreamFile);

  return await Deno.writeFile(path!, file.content, { create: true });
};
