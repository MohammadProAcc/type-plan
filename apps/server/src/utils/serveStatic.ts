import { throwError } from "./throwErr.ts";
import { readableStreamFromReader } from "https://deno.land/std@0.128.0/streams/mod.ts";
// import { addCors } from "../../cors.ts";

export const serveStatic = async (request: Request) => {
  const path = `${Deno.cwd()}/files${request.url.split("8080")[1]}`;
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
