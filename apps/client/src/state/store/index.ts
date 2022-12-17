export interface Response<T> {
  error: string | null;
  data: T;
  loader: boolean;
}

export * from "./pieces";
export * from "./store";
export * from "./storeProvider";
