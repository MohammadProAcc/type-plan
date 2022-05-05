import axios from "axios";
import Cookies from "js-cookie";
import { serverPath } from "./uploadFile";

export const uploadPdf = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "funql-body",
    JSON.stringify({
      contents: "streams",
      wants: {
        model: "File",
        doit: "uploadPdf",
      },
      details: {
        set: {},
        get: {
          name: 1,
        },
      },
    }),
  );
  try {
    const { data } = await axios.post(
      serverPath,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: Cookies.get(process.env.TOKEN),
        },
      },
    );
    return data.body;
  } catch (err) {
    return err;
  }
};
