import { serve } from "https://deno.land/std@0.128.0/http/server.ts";
import { addCors } from "./cors.ts";
import { serveLesan, serveStatic } from "./utils/mod.ts";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
  try {
    // for handling cors issue
    if (request.method === "OPTIONS") {
      return new Response(undefined, {
        headers: addCors(),
      });
      // return;
    }

    return request.method === "GET"
      ? await serveStatic(request)
      : await serveLesan(request);
  } catch (e) {
    return new Response(
      `Somthing has wrong =>> :: ${
        e.message ||
        "we do not know anything !!! sorry"
      }`,
      { status: 501, headers: addCors() },
    );
  }
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
