import { readableStreamFromReader } from "https://deno.land/std@0.128.0/streams/mod.ts";
import { throwError } from "./throwErr.ts";
// import { addCors } from "../../cors.ts";

export const serveStatic = async (request: Request) => {
  const url = request.url.split("/");
  const pathname = url[url.length - 1];

  const path = `${Deno.cwd()}/files/${pathname}`;

  const stats = await Deno.lstat(path);
  const streamFile = async () => {
    const file = await Deno.open(path, { read: true });
    const r = readableStreamFromReader(file);
    return new Response(r);
    // file.close();
  };

  return stats && stats.isFile
    ? await streamFile()
    : throwError("file dos not exist");
};
