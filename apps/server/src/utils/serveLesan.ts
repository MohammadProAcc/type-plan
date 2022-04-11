import {
  DynamicModels,
  parsBody,
  StaticModels,
  StreamsModels,
  Body,
} from "./mod.ts";

import { dynamicFns } from "./../dynamics/mod.ts";
import { staticFns } from "./../statics/mod.ts";
import { streamsFns } from "./../streams/mod.ts";

export const serveLesan = async (req: Request) => {
  const response = async () => {
    const {
      contents,
      wants: { model, doit },
      details,
      context,
    } = (await parsBody(req)) as Body;

    return {
      ["dynamic"]: () =>
        dynamicFns(model as DynamicModels, doit, details, context),
      ["static"]: () =>
        staticFns(model as StaticModels, doit, details, context),
      ["streams"]: () =>
        streamsFns(model as StreamsModels, doit, details, context),
    }[contents]();
  };
  // it's chunk persist just for re-implementing cors
  // respondWith(new Response({
  //   ...corsRespond,
  //   body: JSON.stringify({
  //     success: true,
  //     body: await response(),
  //   }),
  //   status: 200,
  // }));

    return new Response(JSON.stringify({ body: await response(), success: true }));
};
