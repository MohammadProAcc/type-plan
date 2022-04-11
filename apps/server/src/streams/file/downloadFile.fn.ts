import { downloadFileDetails } from "./downloadFile.type.ts";

type DownloadFile = (details: downloadFileDetails) => any;

export const downloadFileFn: DownloadFile = async details => {
  const {
    set: { _id, fileType },
    get,
  } = details;
  /**just return the data of the downloaded file,
   */
  // return await getFile({
  //   _id: new Bson.ObjectId(_id),
  //   get,
  // });
  // files/60f9c682ab6bf0ad3cbf9272.jpg
  const rej = "";
  const a = await Deno.readFile(`files/${_id}.${fileType}`);
  console.group("a", "===============");
  console.log(a);
  console.groupEnd();
  return a;
};
