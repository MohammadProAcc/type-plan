import { serve } from "https://deno.land/std@0.128.0/http/server.ts";
import { serveLesan, serveStatic } from "./utils/mod.ts";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
  try {
    return request.method === "GET"
      ? await serveStatic(request)
      : await serveLesan(request);
  } catch (e) {
    return new Response(
      `Somthing has wrong =>> :: ${e.message ||
        "we do not know anything !!! sorry"}`,
      { status: 501 },
    );
  }
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
