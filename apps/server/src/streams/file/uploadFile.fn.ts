import { Context } from "../../dynamics/utils/mod.ts";
import { IFile } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  checkValidation,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { uploadFile } from "../utils/uploadFunction.ts";
import { getFile } from "./sharedFunctions/getFile.ts";
import {
  checkUploadFileDetails,
  uploadFileDetails,
} from "./uploadFile.type.ts";

type UploadFile = (
  context: Context,
  details: uploadFileDetails,
) => Promise<Partial<IFile>>;

export const uploadFileFn: UploadFile = async (context, details) => {
  /**
   * 0.check the token and auth
   * 1.get the file from details
   * 2.call upload function
   * 3.return the id of the uploaded functions
   */
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin"]) : notFoundError("User");

  /** check whether the details(input) is right or not*/
  checkValidation(checkUploadFileDetails, { details });

  const {
    set: { file },
  } = details;
  /**upload the file  */
  const uploadedFile = await uploadFile(file, user);
  /** just return the data of the uploaded file,
   * the Get part is fix, and we do not get it from user
   */
  return await getFile({
    _id: new Bson.ObjectId(uploadedFile),
    get: { _id: 1, filename: 1, size: 1, type: 1 },
  });
};
