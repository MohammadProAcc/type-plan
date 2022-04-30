import axios from "axios";
import Cookies from "js-cookie";
import { FQl_dynamic_upload_IFile } from "state/declarations/schema/schema";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("funql-body", JSON.stringify({
    contents: "streams",
    wants: {
      model: "File",
      doit: "uploadFile"
    },
    details: {
      set: {},
      get: {
        name: 1
      }
    }
  }));
  try {
    const { data } = await axios.post(
      "http://127.0.0.1:8080/funql",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: Cookies.get(process.env.TOKEN)
        }
      });
    return data.body as FQl_dynamic_upload_IFile;
  } catch (err) {
    return err;
  }
}