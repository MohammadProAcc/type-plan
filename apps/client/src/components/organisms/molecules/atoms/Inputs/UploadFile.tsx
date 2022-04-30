import React, { useState } from "react";
import { uploadFile, uploadPdf } from "state";
import { FQl_dynamic_upload_IFile } from "state/declarations/schema/schema";
import { FileInputStatus, Stylable } from "types";
import { FileInput } from "./FileInput";

interface UploadFileProps extends Stylable {
  callback: (file: FQl_dynamic_upload_IFile) => void;
  type: "file" | "pdf";
}

export const UploadFile: React.FC<UploadFileProps> = (
  { callback, type, Style },
) => {
  const [status, setStatus] = useState<FileInputStatus>("");

  const upload = async (file) => {
    setStatus("loading");

    if (type === "file") {
      try {
        callback(await uploadFile(file));
        setStatus("succeed");
      } catch (err) {
        setStatus("failed");
      }
    } else {
      try {
        callback(await uploadPdf(file));
        setStatus("succeed");
      } catch (err) {
        setStatus("failed");
      }
    }
  };

  return (
    <FileInput
      status={status}
      Style={Style}
      onChange={(e) => upload(e.target.files[0])}
    />
  );
};
