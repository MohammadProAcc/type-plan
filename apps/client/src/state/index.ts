// import { funreq } from "@hemedani/funreq";
// import { FunQLRequest } from "./declarations/request/schema";
// import { FunQLResponseWithDetails } from "./declarations/response/schema";

// export const typePlanApi = funreq<FunQLRequest, FunQLResponseWithDetails>();

// const url = typeof window === "undefined"
//   ? "http://127.0.0.1:8080/funql"
//   : "/typeplanapi";

// export const apiSetting = { url };
// typePlanApi.setup(apiSetting);

// export interface Response<T> {
//   error: string | null;
//   data: T;
//   loader: boolean;
// }

// export type PartialDeep<T> = {
//   [P in keyof T]?: PartialDeep<T[P]>;
// };

// export * from "./actions";
// export * from "./declarations/request/schema";
// export * from "./declarations/response/schema";
// export * from "./persistStores";
// export * from "./store";

import { funreq } from "@hemedani/funreq"

const api = funreq();

api.setup({
  
})