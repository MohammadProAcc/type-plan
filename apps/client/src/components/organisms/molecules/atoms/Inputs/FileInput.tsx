import { FileInputLabel, InputFile } from "elements";
import React from "react";
import { FileInputStatus, Stylable } from "types";

interface FileInputProps extends Stylable {
  status: FileInputStatus;
  [key: string]: any;
}

export const FileInput: React.FC<FileInputProps> = ({
  children,
  Style,
  status,
  ...inputProps
}) => {
  return (
    <FileInputLabel
      status={status}
      Style={Style}
    >
      {children}
      <InputFile type="file" {...inputProps} />
    </FileInputLabel>
  );
};
