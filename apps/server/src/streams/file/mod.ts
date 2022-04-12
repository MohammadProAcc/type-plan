import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "./../../utils/mod.ts";
import { downloadFileFn } from "./downloadFile.fn.ts";
import { uploadFileFn } from "./uploadFile.fn.ts";

const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: ["uploadFile", "downloadFile"],
  },
});

export type FileDoit = "uploadFile" | "downloadFile";

type FileFns = (doit: FileDoit, context: any, details: any) => any;

export const fileFns: FileFns = (doit, details, context) => {
  const checkDoit = check({ doit });
  return checkDoit === true
    ? {
        ["uploadFile"]: () => uploadFileFn(context, details),
        ["downloadFile"]: () => downloadFileFn(details),
      }[doit]()
    : throwError((checkDoit as ValidationError[])[0].message!);
};
