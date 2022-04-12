// import { serveFile } from "https://deno.land/std/http/file_server.ts";
import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { ContactUsDoit } from "./../dynamics/contactUs/mod.ts";
import { Context } from "../dynamics/utils/context.ts";
import { throwError } from "./mod.ts";

import {
  BlogCategoryDoit,
  BlogPostDoit,
  BlogTagDoit,
  CityDoit,
  CommentDoit,
  CountryDoit,
  StateDoit,
  UserDoit,
} from "../dynamics/mod.ts";
import { BlogFirstPageDoit } from "../statics/mod.ts";
const v = new FastestValidator();
const check = v.compile({
  contents: {
    type: "enum",
    values: ["static", "dynamic", "streams"],
  },
});

/**
 * @function
 * a function for decoding and shaping body of request
 * @param req
 */
const decodeBody = async (req: Request): Promise<Body> => {
  /**
   * @function
   * decode body of request when content type is application/json
   */
  const decodeJsonBody = async () =>
    req.body
      ? JSON.parse(await req.text()) as Body
      : throwError("Your request body is incorrect");

  /**
   * @function
   * decode all files and funql body when type of content type is multipart/form-data
   * @remarks it puts all of files in set of details of request body
   * @return parsed body with uploaded files
   * @example we recommend to use postman or other client lib fot handling boundary field and other fields
   */
  const decodeMultiPartBody = async () => {
    // finds boundary of form data
    // const boundary = contentType.match(/boundary=([^\s]+)/)?.[1];

    const getFileFormData: () => Promise<Body> = async () => {
      const fd = await req.formData();
      // for (const f of fd.entries()) {
      //   if (!(f[1] instanceof File)) {
      //     continue;
      //   }
      //   const fileData = new Uint8Array(await f[1].arrayBuffer());
      //   await Deno.writeFile("./files/" + f[1].name, fileData);
      // }
        const returnBody: (body:string) => Body = (body) => {
          const parsedBody = JSON.parse(body) as Body;
          parsedBody &&
            parsedBody.details &&
            parsedBody.details.set &&
            (parsedBody.details.set = {
              ...parsedBody.details.set,
              formData: fd,
            });
          return parsedBody;
        };

        const body = fd.get("lesan-body") ? fd.get("lesan-body") as string : "{}";

        return body
          ? returnBody(body) 
          : throwError("somthing wrong with your file") ;
    };

    return req.body
      ? await getFileFormData()
      : throwError("Your body is incorrect");
  };

  const contentType = req.headers.get("content-type") || "";
  return contentType.includes("application/json")
    ? await decodeJsonBody()
    : contentType.includes("multipart/form-data")
    ? await decodeMultiPartBody()
    : throwError("content type is not correct");
};
export type StreamsModels = "File";
export type StaticModels = "BlogFirstPage" | "StoreHomePage" ;

export type DynamicModels =
  | "User"
  | "BlogTag"
  | "BlogCategory"
  | "Comment"
  | "BlogPost"
  | "ContactUs";

export type Doits =
  | UserDoit
  | CountryDoit
  | CityDoit
  | StateDoit
  | BlogTagDoit
  | BlogCategoryDoit
  | CommentDoit
  | BlogPostDoit
  | BlogFirstPageDoit
  | ContactUsDoit

export interface Body {
  contents: "static" | "dynamic" | "streams";
  wants: {
    model: DynamicModels | StaticModels | StreamsModels;
    doit: Doits;
  };
  details: any;
  context: Context;
}

const checkBody = (body: Body) => {
  const isRight = check(body);
  return isRight === true ? isRight : throwError(
    `the error is here ${(isRight as ValidationError[])[0].message} but get ${
      (isRight as ValidationError[])[0].actual
    }`,
  );
};

const context: (req: Request) => Context = (req) => ({
  token: req.headers.get("token") || undefined,
});

export const parsBody = async (req: Request) => {
  const parsedBody = await decodeBody(req);
  const url = req.url.split("8080")[1];

  return req.method === "POST" && url === "/lesan" && checkBody(parsedBody)
    ? { ...parsedBody, context: context(req) }
    : throwError("you most send a post request to /funql url");
};
